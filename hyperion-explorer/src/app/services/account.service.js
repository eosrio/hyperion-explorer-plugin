"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const core_1 = require("@angular/core");
const environment_1 = require("../../environments/environment");
const hyperion_stream_client_1 = __importDefault(require("@eosrio/hyperion-stream-client"));
const table_1 = require("@angular/material/table");
let AccountService = class AccountService {
    constructor(httpClient, pagService) {
        this.httpClient = httpClient;
        this.pagService = pagService;
        this.account = {
            cpu_limit: {
                used: 1,
                max: 1
            },
            net_limit: {
                used: 1,
                max: 1
            }
        };
        this.actions = [];
        this.tokens = [];
        this.streamClientStatus = false;
        this.pendingSet = new Set();
        this.loaded = false;
        this.streamClientLoaded = false;
        this.getServerUrl();
        this.getAccountUrl = environment_1.environment.hyperionApiUrl + '/v2/state/get_account?account=';
        this.getActionsUrl = environment_1.environment.hyperionApiUrl + '/v2/history/get_actions?account=';
        this.getCreatorUrl = environment_1.environment.hyperionApiUrl + '/v2/history/get_creator?account=';
        this.getTxUrl = environment_1.environment.hyperionApiUrl + '/v2/history/get_transaction?id=';
        this.getBlockUrl = environment_1.environment.hyperionApiUrl + '/v1/trace_api/get_block';
        this.getKeyUrl = environment_1.environment.hyperionApiUrl + '/v2/state/get_key_accounts?public_key=';
        this.tableDataSource = new table_1.MatTableDataSource([]);
        // this.initStreamClient().catch(console.log);
    }
    async monitorLib() {
        console.log('Starting LIB monitoring...');
        if (!this.verificationLoop) {
            this.verificationLoop = setInterval(async () => {
                await this.updateLib();
            }, 21 * 12 * 500);
        }
        if (!this.predictionLoop) {
            this.predictionLoop = setInterval(() => {
                this.libNum += 12;
                if (this.pendingSet.size > 0) {
                    this.pendingSet.forEach(async (value) => {
                        if (value < this.libNum) {
                            console.log(`Block cleared ${value} < ${this.libNum}`);
                            this.pendingSet.delete(value);
                        }
                    });
                }
                else {
                    console.log('No more pending actions, clearing loops');
                    this.clearLoops();
                }
            }, 12 * 500);
        }
    }
    async checkIrreversibility() {
        this.libNum = await this.checkLib();
        if (this.libNum) {
            let counter = 0;
            for (const action of this.actions) {
                if (action.block_num <= this.libNum) {
                    action.irreversible = true;
                }
                else {
                    counter++;
                    this.pendingSet.add(action.block_num);
                }
            }
            if (counter > 0) {
                console.log('Pending actions: ' + counter);
                this.monitorLib().catch(console.log);
            }
        }
    }
    getServerUrl() {
        let server;
        if (environment_1.environment.production) {
            server = window.location.origin;
        }
        else {
            server = environment_1.environment.hyperionApiUrl;
        }
        this.server = server;
    }
    async updateLib() {
        this.libNum = await this.checkLib();
    }
    async checkLib() {
        try {
            const info = await this.httpClient.get(this.server + '/v1/chain/get_info').toPromise();
            if (info) {
                return info.last_irreversible_block_num;
            }
            else {
                return null;
            }
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async initStreamClient() {
        try {
            const health = await this.httpClient.get(this.server + '/v2/health').toPromise();
            if (health.features.streaming.enable) {
                this.streamClient = new hyperion_stream_client_1.default(this.server, { async: true });
                this.streamClientLoaded = true;
                this.streamClient.onConnect = () => {
                    this.streamClientStatus = this.streamClient.online;
                };
                this.streamClient.onLIB = (data) => {
                    this.libNum = data.block_num;
                };
                this.streamClient.onData = async (data, ack) => {
                    if (data.type === 'action') {
                        this.actions.unshift(data.content);
                        if (this.actions.length > 20) {
                            this.actions.pop();
                        }
                        this.tableDataSource.data = this.actions;
                    }
                    ack();
                };
            }
            else {
                console.log('Streaming disabled!');
                this.streamClientLoaded = false;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    setupRequests() {
        // find latest block
        let maxBlock = 0;
        for (const action of this.actions) {
            if (action.block_num > maxBlock) {
                maxBlock = action.block_num;
            }
        }
        console.log(maxBlock);
        // setup request
        this.streamClient.onConnect = () => {
            this.streamClient.streamActions({
                account: this.account.account_name,
                action: '*',
                contract: '*',
                filters: [],
                read_until: 0,
                start_from: maxBlock + 1
            }).catch(console.log);
            this.streamClientStatus = this.streamClient.online;
        };
    }
    async loadAccountData(accountName) {
        this.loaded = false;
        try {
            this.jsonData = await this.httpClient.get(this.getAccountUrl + accountName).toPromise();
            if (this.jsonData.account) {
                this.account = this.jsonData.account;
            }
            if (this.jsonData.tokens) {
                this.tokens = this.jsonData.tokens;
            }
            if (this.jsonData.actions) {
                this.actions = this.jsonData.actions;
                this.checkIrreversibility().catch(console.log);
                this.tableDataSource.data = this.actions;
            }
            if (this.jsonData.total_actions) {
                this.pagService.totalItems = this.jsonData.total_actions;
            }
            this.loaded = true;
            return true;
        }
        catch (error) {
            console.log(error);
            this.jsonData = null;
            this.loaded = true;
            return false;
        }
    }
    async loadMoreActions(accountName) {
        const firstAction = this.actions[this.actions.length - 1];
        const maxGs = (firstAction.global_sequence - 1);
        try {
            const q = this.getActionsUrl + accountName + '&global_sequence=0-' + maxGs + '&limit=50';
            const results = await this.httpClient.get(q).toPromise();
            if (results.actions && results.actions.length > 0) {
                this.actions.push(...results.actions);
                this.tableDataSource.data = this.actions;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async loadTxData(txId) {
        this.loaded = false;
        try {
            const data = await this.httpClient.get(this.getTxUrl + txId).toPromise();
            this.loaded = true;
            return data;
        }
        catch (error) {
            console.log(error);
            this.loaded = true;
            return null;
        }
    }
    async loadBlockData(blockNum) {
        this.loaded = false;
        try {
            const data = await this.httpClient.post(this.getBlockUrl, {
                block_num: blockNum
            }).toPromise();
            this.loaded = true;
            return data;
        }
        catch (error) {
            console.log(error);
            this.loaded = true;
            return null;
        }
    }
    async loadPubKey(key) {
        this.loaded = false;
        try {
            const data = await this.httpClient.get(this.getKeyUrl + key + '&details=true').toPromise();
            this.loaded = true;
            return data;
        }
        catch (error) {
            console.log(error);
            this.loaded = true;
            return null;
        }
    }
    async getCreator(accountName) {
        try {
            return await this.httpClient.get(this.getCreatorUrl + accountName).toPromise();
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    toggleStreaming() {
        if (this.streamClientStatus) {
            this.streamClient.disconnect();
            this.streamClientStatus = false;
            this.checkIrreversibility().catch(console.log);
        }
        else {
            this.tableDataSource.paginator.firstPage();
            this.clearLoops();
            this.setupRequests();
            this.streamClient.connect(() => {
                console.log('hyperion streaming client connected!');
            });
        }
    }
    clearLoops() {
        if (this.predictionLoop) {
            clearInterval(this.predictionLoop);
        }
        if (this.verificationLoop) {
            clearInterval(this.verificationLoop);
        }
    }
    disconnectStream() {
        if (this.streamClient && this.streamClientStatus) {
            this.streamClient.disconnect();
            this.streamClient.online = false;
            this.streamClientStatus = false;
        }
    }
};
AccountService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map
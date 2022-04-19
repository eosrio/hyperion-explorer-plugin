import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { default as HyperionStreamClient } from '@eosrio/hyperion-stream-client';
import { MatTableDataSource } from '@angular/material/table';
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
        this.getAccountUrl = environment.hyperionApiUrl + '/v2/state/get_account?account=';
        this.getActionsUrl = environment.hyperionApiUrl + '/v2/history/get_actions?account=';
        this.getCreatorUrl = environment.hyperionApiUrl + '/v2/history/get_creator?account=';
        this.getTxUrl = environment.hyperionApiUrl + '/v2/history/get_transaction?id=';
        this.getBlockUrl = environment.hyperionApiUrl + '/v1/trace_api/get_block';
        this.getKeyUrl = environment.hyperionApiUrl + '/v2/state/get_key_accounts?public_key=';
        this.tableDataSource = new MatTableDataSource([]);
        // this.initStreamClient().catch(console.log);
    }
    monitorLib() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Starting LIB monitoring...');
            if (!this.verificationLoop) {
                this.verificationLoop = setInterval(() => __awaiter(this, void 0, void 0, function* () {
                    yield this.updateLib();
                }), 21 * 12 * 500);
            }
            if (!this.predictionLoop) {
                this.predictionLoop = setInterval(() => {
                    this.libNum += 12;
                    if (this.pendingSet.size > 0) {
                        this.pendingSet.forEach((value) => __awaiter(this, void 0, void 0, function* () {
                            if (value < this.libNum) {
                                console.log(`Block cleared ${value} < ${this.libNum}`);
                                this.pendingSet.delete(value);
                            }
                        }));
                    }
                    else {
                        console.log('No more pending actions, clearing loops');
                        this.clearLoops();
                    }
                }, 12 * 500);
            }
        });
    }
    checkIrreversibility() {
        return __awaiter(this, void 0, void 0, function* () {
            this.libNum = yield this.checkLib();
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
        });
    }
    getServerUrl() {
        let server;
        if (environment.production) {
            server = window.location.origin;
        }
        else {
            server = environment.hyperionApiUrl;
        }
        this.server = server;
    }
    updateLib() {
        return __awaiter(this, void 0, void 0, function* () {
            this.libNum = yield this.checkLib();
        });
    }
    checkLib() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const info = yield this.httpClient.get(this.server + '/v1/chain/get_info').toPromise();
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
        });
    }
    initStreamClient() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const health = yield this.httpClient.get(this.server + '/v2/health').toPromise();
                if (health.features.streaming.enable) {
                    this.streamClient = new HyperionStreamClient(this.server, { async: true });
                    this.streamClientLoaded = true;
                    this.streamClient.onConnect = () => {
                        this.streamClientStatus = this.streamClient.online;
                    };
                    this.streamClient.onLIB = (data) => {
                        this.libNum = data.block_num;
                    };
                    this.streamClient.onData = (data, ack) => __awaiter(this, void 0, void 0, function* () {
                        if (data.type === 'action') {
                            this.actions.unshift(data.content);
                            if (this.actions.length > 20) {
                                this.actions.pop();
                            }
                            this.tableDataSource.data = this.actions;
                        }
                        ack();
                    });
                }
                else {
                    console.log('Streaming disabled!');
                    this.streamClientLoaded = false;
                }
            }
            catch (e) {
                console.log(e);
            }
        });
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
    loadAccountData(accountName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loaded = false;
            try {
                this.jsonData = (yield this.httpClient.get(this.getAccountUrl + accountName).toPromise());
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
        });
    }
    loadMoreActions(accountName) {
        return __awaiter(this, void 0, void 0, function* () {
            const firstAction = this.actions[this.actions.length - 1];
            const maxGs = (firstAction.global_sequence - 1);
            try {
                const q = this.getActionsUrl + accountName + '&global_sequence=0-' + maxGs + '&limit=50';
                const results = yield this.httpClient.get(q).toPromise();
                if (results.actions && results.actions.length > 0) {
                    this.actions.push(...results.actions);
                    this.tableDataSource.data = this.actions;
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    loadTxData(txId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loaded = false;
            try {
                const data = yield this.httpClient.get(this.getTxUrl + txId).toPromise();
                this.loaded = true;
                return data;
            }
            catch (error) {
                console.log(error);
                this.loaded = true;
                return null;
            }
        });
    }
    loadBlockData(blockNum) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loaded = false;
            try {
                const data = yield this.httpClient.post(this.getBlockUrl, {
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
        });
    }
    loadPubKey(key) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loaded = false;
            try {
                const data = yield this.httpClient.get(this.getKeyUrl + key + '&details=true').toPromise();
                this.loaded = true;
                return data;
            }
            catch (error) {
                console.log(error);
                this.loaded = true;
                return null;
            }
        });
    }
    getCreator(accountName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.httpClient.get(this.getCreatorUrl + accountName).toPromise();
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
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
    Injectable({
        providedIn: 'root'
    })
], AccountService);
export { AccountService };
//# sourceMappingURL=account.service.js.map
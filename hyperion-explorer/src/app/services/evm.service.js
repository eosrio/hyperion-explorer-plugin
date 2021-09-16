"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvmService = void 0;
const core_1 = require("@angular/core");
const environment_1 = require("../../environments/environment");
const table_1 = require("@angular/material/table");
const REVERT_FUNCTION_SELECTOR = '0x08c379a0';
const REVERT_PANIC_SELECTOR = '0x4e487b71';
let EvmService = class EvmService {
    constructor(http, pagService) {
        this.http = http;
        this.pagService = pagService;
        this.loaded = true;
        this.jsonRpcApi = environment_1.environment.eosioNodeUrl + '/evm';
        this.streamClientStatus = false;
        this.libNum = 0;
        this.streamClientLoaded = true;
        this.transactions = [];
        this.getServerUrl();
        this.addressTransactions = new table_1.MatTableDataSource([]);
        this.blockTransactions = new table_1.MatTableDataSource([]);
    }
    async callRpcMethod(method, params) {
        try {
            const response = await this.http.post(this.jsonRpcApi, {
                jsonrpc: '2.0',
                id: Date.now(),
                method,
                params
            }).toPromise();
            return response.result;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async getBalance(address) {
        const getBalResult = await this.callRpcMethod('eth_getBalanceHuman', [address]);
        if (getBalResult) {
            return Number(getBalResult);
        }
        else {
            return 0;
        }
    }
    async getTransactionReceipt(hash) {
        return await this.callRpcMethod('eth_getTransactionReceipt', [hash.toLowerCase()]);
    }
    async getTransactionByHash(hash) {
        return await this.callRpcMethod('eth_getTransactionByHash', [hash.toLowerCase()]);
    }
    async getBlockByNumber(blockNumber, full) {
        return await this.callRpcMethod('eth_getBlockByNumber', [blockNumber.toLowerCase(), full]);
    }
    async getBlockByHash(hash, full) {
        return await this.callRpcMethod('eth_getBlockByHash', [hash.toLowerCase(), full]);
    }
    async traceTransaction(hash) {
        return await this.callRpcMethod('trace_transaction', [hash.toLowerCase()]);
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
    toggleStreaming() {
        this.streamClientStatus = !this.streamClientStatus;
    }
    async loadTransactions(address) {
        const resp = await this.http.get(this.server + '/evm_explorer/get_transactions?address=' + address).toPromise();
        this.processTransactions(resp.transactions);
        if (resp.total) {
            this.pagService.totalItems = resp.total;
        }
    }
    async loadBlock(blockNumber) {
        const blockData = await this.getBlockByNumber('0x' + Number(blockNumber).toString(16), true);
        blockData.transactions.forEach((trx) => {
            trx.val_formatted = `${(parseInt(trx.value, 16) / 1000000000000000000).toFixed(4)} TLOS`;
        });
        this.blockTransactions.data = blockData.transactions;
    }
    async loadMoreTransactions(address) {
        console.log(address);
    }
    processTransactions(transactions) {
        this.transactions = [];
        this.transactions = transactions;
        for (const trx of this.transactions) {
            trx.evm_block = trx.block;
            trx.evm_hash = trx.hash;
            trx.val_formatted = `${parseInt(trx.value_d).toFixed(4)} TLOS`;
        }
        this.addressTransactions.data = this.transactions;
    }
    getErrorFromOutput(output) {
        if (!output)
            return '';
        if (output.startsWith(REVERT_FUNCTION_SELECTOR)) {
            return this.parseRevertReason(output);
        }
        if (output.startsWith(REVERT_PANIC_SELECTOR)) {
            return this.parsePanicReason(output);
        }
        return '';
    }
    parseRevertReason(revertOutput) {
        if (!revertOutput || revertOutput.length < 138) {
            return '';
        }
        let reason = '';
        let trimmedOutput = revertOutput.substr(138);
        for (let i = 0; i < trimmedOutput.length; i += 2) {
            reason += String.fromCharCode(parseInt(trimmedOutput.substr(i, 2), 16));
        }
        return reason;
    }
    parsePanicReason(revertOutput) {
        let trimmedOutput = revertOutput.slice(-2);
        let reason;
        switch (trimmedOutput) {
            case "01":
                reason = "If you call assert with an argument that evaluates to false.";
                break;
            case "11":
                reason = "If an arithmetic operation results in underflow or overflow outside of an unchecked { ... } block.";
                break;
            case "12":
                reason = "If you divide or modulo by zero (e.g. 5 / 0 or 23 % 0).";
                break;
            case "21":
                reason = "If you convert a value that is too big or negative into an enum type.";
                break;
            case "31":
                reason = "If you call .pop() on an empty array.";
                break;
            case "32":
                reason = "If you access an array, bytesN or an array slice at an out-of-bounds or negative index (i.e. x[i] where i >= x.length or i < 0).";
                break;
            case "41":
                reason = "If you allocate too much memory or create an array that is too large.";
                break;
            case "51":
                reason = "If you call a zero-initialized variable of internal function type.";
                break;
            default:
                reason = "Default panic message";
        }
        return reason;
    }
};
EvmService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], EvmService);
exports.EvmService = EvmService;
//# sourceMappingURL=evm.service.js.map
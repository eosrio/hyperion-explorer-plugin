"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvmTransactionComponent = void 0;
const core_1 = require("@angular/core");
const faExchangeAlt_1 = require("@fortawesome/free-solid-svg-icons/faExchangeAlt");
const faSadTear_1 = require("@fortawesome/free-solid-svg-icons/faSadTear");
const faCircle_1 = require("@fortawesome/free-solid-svg-icons/faCircle");
const faHourglassStart_1 = require("@fortawesome/free-solid-svg-icons/faHourglassStart");
const faLock_1 = require("@fortawesome/free-solid-svg-icons/faLock");
let EvmTransactionComponent = class EvmTransactionComponent {
    constructor(activatedRoute, accountService, evm) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.evm = evm;
        this.faSadTear = faSadTear_1.faSadTear;
        this.faExchange = faExchangeAlt_1.faExchangeAlt;
        this.faCircle = faCircle_1.faCircle;
        this.faLock = faLock_1.faLock;
        this.faHourglass = faHourglassStart_1.faHourglassStart;
        this.txHash = '';
        this.txData = {
            hash: '0xaef244314c42bdc2d62bfaa82880049dafa958ae4e4ce8a0ae8b94598ff1549a',
            block_num: 0,
            block: 0,
            timestamp: '',
            from: '',
            to: '',
            value: 0,
            gas_price: '',
            gas_used: '',
            nonce: 0,
            input_data: '',
            logs: [],
            errors: '',
            status: '',
            trace: []
        };
        this.subs = [];
    }
    ngOnInit() {
        this.subs.push(this.activatedRoute.params.subscribe(async (routeParams) => {
            this.txHash = routeParams.hash;
            const [hash, receipt, trace] = await Promise.all([this.evm.getTransactionByHash(this.txHash), this.evm.getTransactionReceipt(this.txHash), this.evm.traceTransaction(this.txHash)]);
            const txData = Object.assign(hash, receipt, { trace });
            console.log({ txData });
            this.txData.block = parseInt(txData.blockNumber, 16);
            this.txData.from = txData.from;
            this.txData.timestamp = txData.timestamp || Date.now();
            this.txData.to = txData.to;
            this.txData.value = parseInt(txData.value, 16);
            this.txData.val_formatted = `${(this.txData.value / 1000000000000000000).toFixed(4)} TLOS`;
            this.txData.nonce = parseInt(txData.nonce, 16);
            this.txData.gas_price = parseInt(txData.gasPrice, 16);
            this.txData.gas_used = parseInt(txData.gasUsed, 16);
            this.txData.gas = parseInt(txData.gas, 16);
            this.txData.input_data = txData.input;
            this.txData.logs = txData.logs;
            this.txData.error = this.evm.getErrorFromOutput(txData.output);
            this.txData.status = txData.status;
            this.txData.output = txData.output;
            this.txData.trace = txData.trace;
            await this.accountService.checkIrreversibility();
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(s => s.unsubscribe());
    }
    formatDate(date) {
        return new Date(date).toLocaleString();
    }
};
EvmTransactionComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-evm-transaction',
        templateUrl: './evm-transaction.component.html',
        styleUrls: ['./evm-transaction.component.css']
    })
], EvmTransactionComponent);
exports.EvmTransactionComponent = EvmTransactionComponent;
//# sourceMappingURL=evm-transaction.component.js.map
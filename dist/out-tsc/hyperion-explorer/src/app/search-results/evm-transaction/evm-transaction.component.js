import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons/faExchangeAlt';
import { faSadTear } from '@fortawesome/free-solid-svg-icons/faSadTear';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons/faHourglassStart';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
let EvmTransactionComponent = class EvmTransactionComponent {
    constructor(activatedRoute, accountService, evm) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.evm = evm;
        this.faSadTear = faSadTear;
        this.faExchange = faExchangeAlt;
        this.faCircle = faCircle;
        this.faLock = faLock;
        this.faHourglass = faHourglassStart;
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
        this.subs.push(this.activatedRoute.params.subscribe((routeParams) => __awaiter(this, void 0, void 0, function* () {
            this.txHash = routeParams.hash;
            const [hash, receipt, trace] = yield Promise.all([this.evm.getTransactionByHash(this.txHash), this.evm.getTransactionReceipt(this.txHash), this.evm.traceTransaction(this.txHash)]);
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
            yield this.accountService.checkIrreversibility();
        })));
    }
    ngOnDestroy() {
        this.subs.forEach(s => s.unsubscribe());
    }
    formatDate(date) {
        return new Date(date).toLocaleString();
    }
};
EvmTransactionComponent = __decorate([
    Component({
        selector: 'app-evm-transaction',
        templateUrl: './evm-transaction.component.html',
        styleUrls: ['./evm-transaction.component.css']
    })
], EvmTransactionComponent);
export { EvmTransactionComponent };
//# sourceMappingURL=evm-transaction.component.js.map
import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons/faExchangeAlt';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons/faHourglassStart';
import { faHistory } from '@fortawesome/free-solid-svg-icons/faHistory';
import { faSadTear } from '@fortawesome/free-solid-svg-icons/faSadTear';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
let TransactionComponent = class TransactionComponent {
    constructor(activatedRoute, accountService, chainData, title) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.chainData = chainData;
        this.title = title;
        this.columnsToDisplay = ['contract', 'action', 'data', 'auth'];
        this.tx = {
            actions: null
        };
        this.faCircle = faCircle;
        this.faExchange = faExchangeAlt;
        this.faLock = faLock;
        this.faHourglass = faHourglassStart;
        this.faHistory = faHistory;
        this.faSadTear = faSadTear;
        this.faSpinner = faSpinner;
        this.countdownTimer = 0;
    }
    objectKeyCount(obj) {
        try {
            return Object.keys(obj).length;
        }
        catch (e) {
            return 0;
        }
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((routeParams) => __awaiter(this, void 0, void 0, function* () {
            this.txID = routeParams.transaction_id;
            this.tx = yield this.accountService.loadTxData(routeParams.transaction_id);
            if (!this.chainData.chainInfoData.chain_name) {
                this.title.setTitle(`TX ${routeParams.transaction_id.slice(0, 8)} • Hyperion Explorer`);
            }
            else {
                this.title.setTitle(`TX ${routeParams.transaction_id.slice(0, 8)} • ${this.chainData.chainInfoData.chain_name} Hyperion Explorer`);
            }
            this.accountService.libNum = this.tx.lib;
            if (this.tx.actions[0].block_num > this.tx.lib) {
                yield this.reloadCountdownTimer();
                this.countdownLoop = setInterval(() => __awaiter(this, void 0, void 0, function* () {
                    this.countdownTimer--;
                    if (this.countdownTimer <= 0) {
                        yield this.reloadCountdownTimer();
                        if (this.accountService.libNum > this.tx.actions[0].block_num) {
                            clearInterval(this.countdownLoop);
                        }
                    }
                }), 1000);
            }
        }));
    }
    ngOnDestroy() {
        if (this.countdownLoop) {
            clearInterval(this.countdownLoop);
        }
    }
    formatDate(date) {
        return new Date(date).toLocaleString();
    }
    stringifyObject(subitem) {
        return JSON.stringify(subitem, null, 2);
    }
    reloadCountdownTimer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.accountService.updateLib();
            this.countdownTimer = Math.ceil((this.tx.actions[0].block_num - this.accountService.libNum) / 2);
        });
    }
};
TransactionComponent = __decorate([
    Component({
        selector: 'app-transaction',
        templateUrl: './transaction.component.html',
        styleUrls: ['./transaction.component.css']
    })
], TransactionComponent);
export { TransactionComponent };
//# sourceMappingURL=transaction.component.js.map
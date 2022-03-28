import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faHistory } from '@fortawesome/free-solid-svg-icons/faHistory';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
let EvmAddressComponent = class EvmAddressComponent {
    constructor(activatedRoute, accountService, evm) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.evm = evm;
        this.address = '';
        this.faUserCircle = faUserCircle;
        this.nativeBalance = 0;
        this.faCircle = faCircle;
        this.faHistory = faHistory;
        this.faClock = faClock;
        this.columnsToDisplay = [
            'hash',
            'block',
            'fromAddr',
            'toAddr',
            'nativeValue'
        ];
        this.subs = [];
    }
    ngOnInit() {
        this.subs.push(this.activatedRoute.params.subscribe((routeParams) => __awaiter(this, void 0, void 0, function* () {
            this.address = routeParams.address;
            this.nativeBalance = yield this.evm.getBalance(this.address);
            yield this.evm.loadTransactions(this.address);
            yield this.accountService.checkIrreversibility();
        })));
    }
    ngOnDestroy() {
        this.subs.forEach(s => s.unsubscribe());
    }
    formatDate(date) {
        return new Date(date).toLocaleString();
    }
    changePage(event) {
        // disable streaming if enabled
        if (this.evm.streamClientStatus) {
            this.evm.toggleStreaming();
        }
        const maxPages = Math.floor(event.length / event.pageSize);
        console.log(event);
        console.log(`${event.pageIndex} / ${maxPages}`);
        try {
            if (event.pageIndex === maxPages - 1) {
                this.evm.loadMoreTransactions(this.address).catch(console.log);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
};
EvmAddressComponent = __decorate([
    Component({
        selector: 'app-evm-address',
        templateUrl: './evm-address.component.html',
        styleUrls: ['./evm-address.component.css']
    })
], EvmAddressComponent);
export { EvmAddressComponent };
//# sourceMappingURL=evm-address.component.js.map
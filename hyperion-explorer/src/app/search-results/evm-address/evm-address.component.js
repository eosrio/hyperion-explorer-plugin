"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvmAddressComponent = void 0;
const core_1 = require("@angular/core");
const faCircle_1 = require("@fortawesome/free-solid-svg-icons/faCircle");
const faHistory_1 = require("@fortawesome/free-solid-svg-icons/faHistory");
const faUserCircle_1 = require("@fortawesome/free-solid-svg-icons/faUserCircle");
const faClock_1 = require("@fortawesome/free-solid-svg-icons/faClock");
let EvmAddressComponent = class EvmAddressComponent {
    constructor(activatedRoute, accountService, evm) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.evm = evm;
        this.address = '';
        this.faUserCircle = faUserCircle_1.faUserCircle;
        this.nativeBalance = 0;
        this.faCircle = faCircle_1.faCircle;
        this.faHistory = faHistory_1.faHistory;
        this.faClock = faClock_1.faClock;
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
        this.subs.push(this.activatedRoute.params.subscribe(async (routeParams) => {
            this.address = routeParams.address;
            this.nativeBalance = await this.evm.getBalance(this.address);
            await this.evm.loadTransactions(this.address);
            await this.accountService.checkIrreversibility();
        }));
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
    (0, core_1.Component)({
        selector: 'app-evm-address',
        templateUrl: './evm-address.component.html',
        styleUrls: ['./evm-address.component.css']
    })
], EvmAddressComponent);
exports.EvmAddressComponent = EvmAddressComponent;
//# sourceMappingURL=evm-address.component.js.map
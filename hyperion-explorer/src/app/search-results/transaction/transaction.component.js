"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionComponent = void 0;
const core_1 = require("@angular/core");
const faExchangeAlt_1 = require("@fortawesome/free-solid-svg-icons/faExchangeAlt");
const faCircle_1 = require("@fortawesome/free-solid-svg-icons/faCircle");
const faLock_1 = require("@fortawesome/free-solid-svg-icons/faLock");
const faHourglassStart_1 = require("@fortawesome/free-solid-svg-icons/faHourglassStart");
const faHistory_1 = require("@fortawesome/free-solid-svg-icons/faHistory");
const faSadTear_1 = require("@fortawesome/free-solid-svg-icons/faSadTear");
const faSpinner_1 = require("@fortawesome/free-solid-svg-icons/faSpinner");
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
        this.faCircle = faCircle_1.faCircle;
        this.faExchange = faExchangeAlt_1.faExchangeAlt;
        this.faLock = faLock_1.faLock;
        this.faHourglass = faHourglassStart_1.faHourglassStart;
        this.faHistory = faHistory_1.faHistory;
        this.faSadTear = faSadTear_1.faSadTear;
        this.faSpinner = faSpinner_1.faSpinner;
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
        this.activatedRoute.params.subscribe(async (routeParams) => {
            this.txID = routeParams.transaction_id;
            this.tx = await this.accountService.loadTxData(routeParams.transaction_id);
            if (!this.chainData.chainInfoData.chain_name) {
                this.title.setTitle(`TX ${routeParams.transaction_id.slice(0, 8)} • Hyperion Explorer`);
            }
            else {
                this.title.setTitle(`TX ${routeParams.transaction_id.slice(0, 8)} • ${this.chainData.chainInfoData.chain_name} Hyperion Explorer`);
            }
            this.accountService.libNum = this.tx.lib;
            if (this.tx.actions[0].block_num > this.tx.lib) {
                await this.reloadCountdownTimer();
                this.countdownLoop = setInterval(async () => {
                    this.countdownTimer--;
                    if (this.countdownTimer <= 0) {
                        await this.reloadCountdownTimer();
                        if (this.accountService.libNum > this.tx.actions[0].block_num) {
                            clearInterval(this.countdownLoop);
                        }
                    }
                }, 1000);
            }
        });
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
    async reloadCountdownTimer() {
        await this.accountService.updateLib();
        this.countdownTimer = Math.ceil((this.tx.actions[0].block_num - this.accountService.libNum) / 2);
    }
};
TransactionComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-transaction',
        templateUrl: './transaction.component.html',
        styleUrls: ['./transaction.component.css']
    })
], TransactionComponent);
exports.TransactionComponent = TransactionComponent;
//# sourceMappingURL=transaction.component.js.map
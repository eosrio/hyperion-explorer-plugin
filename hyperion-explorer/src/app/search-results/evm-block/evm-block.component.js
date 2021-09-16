"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvmBlockComponent = void 0;
const core_1 = require("@angular/core");
const faCube_1 = require("@fortawesome/free-solid-svg-icons/faCube");
const faHourglassStart_1 = require("@fortawesome/free-solid-svg-icons/faHourglassStart");
const faCircle_1 = require("@fortawesome/free-solid-svg-icons/faCircle");
const faLock_1 = require("@fortawesome/free-solid-svg-icons/faLock");
const faHistory_1 = require("@fortawesome/free-solid-svg-icons/faHistory");
const faSadTear_1 = require("@fortawesome/free-solid-svg-icons/faSadTear");
let EvmBlockComponent = class EvmBlockComponent {
    constructor(activatedRoute, accountService, evm) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.evm = evm;
        this.faCircle = faCircle_1.faCircle;
        this.faBlock = faCube_1.faCube;
        this.faLock = faLock_1.faLock;
        this.faHourglass = faHourglassStart_1.faHourglassStart;
        this.faHistory = faHistory_1.faHistory;
        this.faSadTear = faSadTear_1.faSadTear;
        this.txData = {
            hash: '0xaef244314c42bdc2d62bfaa82880049dafa958ae4e4ce8a0ae8b94598ff1549a',
            block_num: 23232,
            block: 23229,
            '@timestamp': Date.now(),
            from: '0x5fe25eec20614b9a9109c1a31a9959b467e0df85',
            to: '0x292f04a44506c2fd49bac032e1ca148c35a478c8',
            value: '',
            fee: '',
            gas_price: '',
            gas_limit: '',
            gas_used: '',
            nonce: 0,
            input_data: '',
        };
        this.blockData = {
            block: 292823,
            block_hash: '0x25472228743439862758372832',
            transactions: [this.txData, this.txData]
        };
        this.blockNumber = '';
        this.columnsToDisplay = [
            'hash',
            'fromAddr',
            'toAddr',
            'nativeValue'
        ];
        this.subs = [];
    }
    ngOnInit() {
        this.subs.push(this.activatedRoute.params.subscribe(async (routeParams) => {
            this.blockNumber = routeParams.block_num;
            await this.evm.loadBlock(this.blockNumber);
            await this.accountService.checkIrreversibility();
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(s => s.unsubscribe());
    }
};
EvmBlockComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-evm-block',
        templateUrl: './evm-block.component.html',
        styleUrls: ['./evm-block.component.css']
    })
], EvmBlockComponent);
exports.EvmBlockComponent = EvmBlockComponent;
//# sourceMappingURL=evm-block.component.js.map
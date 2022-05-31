"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.EvmBlockComponent = void 0;
var core_1 = require("@angular/core");
var faCube_1 = require("@fortawesome/free-solid-svg-icons/faCube");
var faHourglassStart_1 = require("@fortawesome/free-solid-svg-icons/faHourglassStart");
var faCircle_1 = require("@fortawesome/free-solid-svg-icons/faCircle");
var faLock_1 = require("@fortawesome/free-solid-svg-icons/faLock");
var faHistory_1 = require("@fortawesome/free-solid-svg-icons/faHistory");
var faSadTear_1 = require("@fortawesome/free-solid-svg-icons/faSadTear");
var EvmBlockComponent = /** @class */ (function () {
    function EvmBlockComponent(activatedRoute, accountService, evm) {
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
            input_data: ''
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
    EvmBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.activatedRoute.params.subscribe(function (routeParams) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.blockNumber = routeParams.block_num;
                        return [4 /*yield*/, this.evm.loadBlock(this.blockNumber)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.accountService.checkIrreversibility()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }));
    };
    EvmBlockComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (s) { return s.unsubscribe(); });
    };
    EvmBlockComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-evm-block',
            templateUrl: './evm-block.component.html',
            styleUrls: ['./evm-block.component.css']
        })
    ], EvmBlockComponent);
    return EvmBlockComponent;
}());
exports.EvmBlockComponent = EvmBlockComponent;

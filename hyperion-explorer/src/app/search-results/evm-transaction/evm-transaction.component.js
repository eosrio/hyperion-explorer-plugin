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
exports.EvmTransactionComponent = void 0;
var core_1 = require("@angular/core");
var faExchangeAlt_1 = require("@fortawesome/free-solid-svg-icons/faExchangeAlt");
var faSadTear_1 = require("@fortawesome/free-solid-svg-icons/faSadTear");
var faCircle_1 = require("@fortawesome/free-solid-svg-icons/faCircle");
var faHourglassStart_1 = require("@fortawesome/free-solid-svg-icons/faHourglassStart");
var faLock_1 = require("@fortawesome/free-solid-svg-icons/faLock");
var EvmTransactionComponent = /** @class */ (function () {
    function EvmTransactionComponent(activatedRoute, accountService, evm) {
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
    EvmTransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.activatedRoute.params.subscribe(function (routeParams) { return __awaiter(_this, void 0, void 0, function () {
            var _a, hash, receipt, trace, txData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.txHash = routeParams.hash;
                        return [4 /*yield*/, Promise.all([this.evm.getTransactionByHash(this.txHash), this.evm.getTransactionReceipt(this.txHash), this.evm.traceTransaction(this.txHash)])];
                    case 1:
                        _a = _b.sent(), hash = _a[0], receipt = _a[1], trace = _a[2];
                        txData = Object.assign(hash, receipt, { trace: trace });
                        console.log({ txData: txData });
                        this.txData.block = parseInt(txData.blockNumber, 16);
                        this.txData.from = txData.from;
                        this.txData.timestamp = txData.timestamp || Date.now();
                        this.txData.to = txData.to;
                        this.txData.value = parseInt(txData.value, 16);
                        this.txData.val_formatted = "".concat((this.txData.value / 1000000000000000000).toFixed(4), " TLOS");
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
                        return [4 /*yield*/, this.accountService.checkIrreversibility()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); }));
    };
    EvmTransactionComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (s) { return s.unsubscribe(); });
    };
    EvmTransactionComponent.prototype.formatDate = function (date) {
        return new Date(date).toLocaleString();
    };
    EvmTransactionComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-evm-transaction',
            templateUrl: './evm-transaction.component.html',
            styleUrls: ['./evm-transaction.component.css']
        })
    ], EvmTransactionComponent);
    return EvmTransactionComponent;
}());
exports.EvmTransactionComponent = EvmTransactionComponent;

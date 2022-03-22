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
exports.TransactionComponent = void 0;
var core_1 = require("@angular/core");
var faExchangeAlt_1 = require("@fortawesome/free-solid-svg-icons/faExchangeAlt");
var faCircle_1 = require("@fortawesome/free-solid-svg-icons/faCircle");
var faLock_1 = require("@fortawesome/free-solid-svg-icons/faLock");
var faHourglassStart_1 = require("@fortawesome/free-solid-svg-icons/faHourglassStart");
var faHistory_1 = require("@fortawesome/free-solid-svg-icons/faHistory");
var faSadTear_1 = require("@fortawesome/free-solid-svg-icons/faSadTear");
var faSpinner_1 = require("@fortawesome/free-solid-svg-icons/faSpinner");
var TransactionComponent = /** @class */ (function () {
    function TransactionComponent(activatedRoute, accountService, chainData, title) {
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
    TransactionComponent.prototype.objectKeyCount = function (obj) {
        try {
            return Object.keys(obj).length;
        }
        catch (e) {
            return 0;
        }
    };
    TransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (routeParams) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.txID = routeParams.transaction_id;
                        _a = this;
                        return [4 /*yield*/, this.accountService.loadTxData(routeParams.transaction_id)];
                    case 1:
                        _a.tx = _b.sent();
                        if (!this.chainData.chainInfoData.chain_name) {
                            this.title.setTitle("TX ".concat(routeParams.transaction_id.slice(0, 8), " \u2022 Hyperion Explorer"));
                        }
                        else {
                            this.title.setTitle("TX ".concat(routeParams.transaction_id.slice(0, 8), " \u2022 ").concat(this.chainData.chainInfoData.chain_name, " Hyperion Explorer"));
                        }
                        this.accountService.libNum = this.tx.lib;
                        if (!(this.tx.actions[0].block_num > this.tx.lib)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.reloadCountdownTimer()];
                    case 2:
                        _b.sent();
                        this.countdownLoop = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.countdownTimer--;
                                        if (!(this.countdownTimer <= 0)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.reloadCountdownTimer()];
                                    case 1:
                                        _a.sent();
                                        if (this.accountService.libNum > this.tx.actions[0].block_num) {
                                            clearInterval(this.countdownLoop);
                                        }
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); }, 1000);
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    TransactionComponent.prototype.ngOnDestroy = function () {
        if (this.countdownLoop) {
            clearInterval(this.countdownLoop);
        }
    };
    TransactionComponent.prototype.formatDate = function (date) {
        return new Date(date).toLocaleString();
    };
    TransactionComponent.prototype.stringifyObject = function (subitem) {
        return JSON.stringify(subitem, null, 2);
    };
    TransactionComponent.prototype.reloadCountdownTimer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.accountService.updateLib()];
                    case 1:
                        _a.sent();
                        this.countdownTimer = Math.ceil((this.tx.actions[0].block_num - this.accountService.libNum) / 2);
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-transaction',
            templateUrl: './transaction.component.html',
            styleUrls: ['./transaction.component.css']
        })
    ], TransactionComponent);
    return TransactionComponent;
}());
exports.TransactionComponent = TransactionComponent;

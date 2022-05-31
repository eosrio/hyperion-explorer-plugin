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
exports.EvmAddressComponent = void 0;
var core_1 = require("@angular/core");
var faCircle_1 = require("@fortawesome/free-solid-svg-icons/faCircle");
var faHistory_1 = require("@fortawesome/free-solid-svg-icons/faHistory");
var faUserCircle_1 = require("@fortawesome/free-solid-svg-icons/faUserCircle");
var faClock_1 = require("@fortawesome/free-solid-svg-icons/faClock");
var EvmAddressComponent = /** @class */ (function () {
    function EvmAddressComponent(activatedRoute, accountService, evm) {
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
    EvmAddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.activatedRoute.params.subscribe(function (routeParams) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.address = routeParams.address;
                        _a = this;
                        return [4 /*yield*/, this.evm.getBalance(this.address)];
                    case 1:
                        _a.nativeBalance = _b.sent();
                        return [4 /*yield*/, this.evm.loadTransactions(this.address)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.accountService.checkIrreversibility()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); }));
    };
    EvmAddressComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (s) { return s.unsubscribe(); });
    };
    EvmAddressComponent.prototype.formatDate = function (date) {
        return new Date(date).toLocaleString();
    };
    EvmAddressComponent.prototype.changePage = function (event) {
        // disable streaming if enabled
        if (this.evm.streamClientStatus) {
            this.evm.toggleStreaming();
        }
        var maxPages = Math.floor(event.length / event.pageSize);
        console.log(event);
        console.log("".concat(event.pageIndex, " / ").concat(maxPages));
        try {
            if (event.pageIndex === maxPages - 1) {
                this.evm.loadMoreTransactions(this.address)["catch"](console.log);
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    EvmAddressComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-evm-address',
            templateUrl: './evm-address.component.html',
            styleUrls: ['./evm-address.component.css']
        })
    ], EvmAddressComponent);
    return EvmAddressComponent;
}());
exports.EvmAddressComponent = EvmAddressComponent;

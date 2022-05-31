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
exports.BlockComponent = void 0;
var core_1 = require("@angular/core");
var faCircle_1 = require("@fortawesome/free-solid-svg-icons/faCircle");
var faCube_1 = require("@fortawesome/free-solid-svg-icons/faCube");
var faHourglassStart_1 = require("@fortawesome/free-solid-svg-icons/faHourglassStart");
var faLock_1 = require("@fortawesome/free-solid-svg-icons/faLock");
var faHistory_1 = require("@fortawesome/free-solid-svg-icons/faHistory");
var animations_1 = require("@angular/animations");
var faSpinner_1 = require("@fortawesome/free-solid-svg-icons/faSpinner");
var faSadTear_1 = require("@fortawesome/free-solid-svg-icons/faSadTear");
var faChevronRight_1 = require("@fortawesome/free-solid-svg-icons/faChevronRight");
var faChevronDown_1 = require("@fortawesome/free-solid-svg-icons/faChevronDown");
var BlockComponent = /** @class */ (function () {
    function BlockComponent(activatedRoute, accountService, chainData, title) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.chainData = chainData;
        this.title = title;
        this.columnsToDisplay = ['icon', 'id', 'root', 'action'];
        this.columnsInside = ['action', 'data', 'auth'];
        this.faCircle = faCircle_1.faCircle;
        this.faBlock = faCube_1.faCube;
        this.faLock = faLock_1.faLock;
        this.faHourglass = faHourglassStart_1.faHourglassStart;
        this.faHistory = faHistory_1.faHistory;
        this.faChevronRight = faChevronRight_1.faChevronRight;
        this.faChevronDown = faChevronDown_1.faChevronDown;
        this.faSadTear = faSadTear_1.faSadTear;
        this.faSpinner = faSpinner_1.faSpinner;
        this.block = {
            transactions: [],
            status: '',
            number: 0
        };
        this.countdownTimer = 0;
    }
    BlockComponent.prototype.objectKeyCount = function (obj) {
        try {
            return Object.keys(obj).length;
        }
        catch (e) {
            return 0;
        }
    };
    BlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (routeParams) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.blockNum = routeParams.block_num;
                        _a = this;
                        return [4 /*yield*/, this.accountService.loadBlockData(routeParams.block_num)];
                    case 1:
                        _a.block = _b.sent();
                        if (!this.chainData.chainInfoData.chain_name) {
                            this.title.setTitle("#".concat(routeParams.block_num, " \u2022 Hyperion Explorer"));
                        }
                        else {
                            this.title.setTitle("#".concat(routeParams.block_num, " \u2022 ").concat(this.chainData.chainInfoData.chain_name, " Hyperion Explorer"));
                        }
                        if (!(this.block && this.block.status === 'pending')) return [3 /*break*/, 3];
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
                                        if (this.accountService.libNum > this.block.number) {
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
    BlockComponent.prototype.reloadCountdownTimer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.accountService.updateLib()];
                    case 1:
                        _a.sent();
                        this.countdownTimer = Math.ceil((this.block.number - this.accountService.libNum) / 2);
                        return [2 /*return*/];
                }
            });
        });
    };
    BlockComponent.prototype.ngOnDestroy = function () {
        if (this.countdownLoop) {
            clearInterval(this.countdownLoop);
        }
    };
    BlockComponent.prototype.formatDate = function (date) {
        return new Date(date).toLocaleString();
    };
    BlockComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-block',
            templateUrl: './block.component.html',
            styleUrls: ['./block.component.css'],
            animations: [
                (0, animations_1.trigger)('detailExpand', [
                    (0, animations_1.state)('collapsed', (0, animations_1.style)({ height: '0px', minHeight: '0' })),
                    (0, animations_1.state)('expanded', (0, animations_1.style)({ height: '*' })),
                    (0, animations_1.transition)('expanded <=> collapsed', (0, animations_1.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ]
        })
    ], BlockComponent);
    return BlockComponent;
}());
exports.BlockComponent = BlockComponent;

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.AccountComponent = void 0;
var core_1 = require("@angular/core");
var sort_1 = require("@angular/material/sort");
var faClock_1 = require("@fortawesome/free-solid-svg-icons/faClock");
var faUserCircle_1 = require("@fortawesome/free-solid-svg-icons/faUserCircle");
var faCircle_1 = require("@fortawesome/free-solid-svg-icons/faCircle");
var faStar_1 = require("@fortawesome/free-solid-svg-icons/faStar");
var faLink_1 = require("@fortawesome/free-solid-svg-icons/faLink");
var faHistory_1 = require("@fortawesome/free-solid-svg-icons/faHistory");
var tree_1 = require("@angular/cdk/tree");
var tree_2 = require("@angular/material/tree");
var faChevronRight_1 = require("@fortawesome/free-solid-svg-icons/faChevronRight");
var faChevronDown_1 = require("@fortawesome/free-solid-svg-icons/faChevronDown");
var faKey_1 = require("@fortawesome/free-solid-svg-icons/faKey");
var faUser_1 = require("@fortawesome/free-solid-svg-icons/faUser");
var faSadTear_1 = require("@fortawesome/free-solid-svg-icons/faSadTear");
var paginator_1 = require("@angular/material/paginator");
var faVoteYea_1 = require("@fortawesome/free-solid-svg-icons/faVoteYea");
var faQuestionCircle_1 = require("@fortawesome/free-regular-svg-icons/faQuestionCircle");
var launch_darkly_service_1 = require("src/app/services/launch-darkly/launch-darkly.service");
var featureFlags_1 = require("src/app/services/launch-darkly/featureFlags");
var AccountComponent = /** @class */ (function () {
    function AccountComponent(activatedRoute, accountService, chainData, title) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.chainData = chainData;
        this.title = title;
        // FontAwesome Icons
        this.faClock = faClock_1.faClock;
        this.faUserCircle = faUserCircle_1.faUserCircle;
        this.faCircle = faCircle_1.faCircle;
        this.faStar = faStar_1.faStar;
        this.faLink = faLink_1.faLink;
        this.faHistory = faHistory_1.faHistory;
        this.faChevronRight = faChevronRight_1.faChevronRight;
        this.faChevronDown = faChevronDown_1.faChevronDown;
        this.faSadTear = faSadTear_1.faSadTear;
        this.faKey = faKey_1.faKey;
        this.faUser = faUser_1.faUser;
        this.faVote = faVoteYea_1.faVoteYea;
        this.faQuestionCircle = faQuestionCircle_1.faQuestionCircle;
        this.columnsToDisplay = ['trx_id', 'action', 'data', 'block_num'];
        this.detailedView = true;
        this.systemPrecision = 4;
        this.systemSymbol = '';
        this.creationData = {
            creator: undefined,
            timestamp: undefined
        };
        this.systemTokenContract = 'eosio.token';
        this.hasChild = function (_, node) { return node.expandable; };
        this.treeControl = new tree_1.FlatTreeControl(function (node) { return node.level; }, function (node) { return node.expandable; });
        this.treeFlattener = new tree_2.MatTreeFlattener(this.transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.children; });
        this.featureFlagClient = new launch_darkly_service_1.LaunchDarklyService;
        this.dataSource = new tree_2.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    }
    AccountComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy');
        this.accountService.disconnectStream();
    };
    AccountComponent.prototype.transformer = function (node, level) {
        return __assign({ expandable: !!node.children && node.children.length > 0, perm_name: node.perm_name, level: level }, node);
    };
    AccountComponent.prototype.objectKeyCount = function (obj) {
        try {
            return Object.keys(obj).length;
        }
        catch (e) {
            return 0;
        }
    };
    AccountComponent.prototype.ngOnInit = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, _c, _d, _e;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _b = this;
                        return [4 /*yield*/, this.featureFlagClient.variation(featureFlags_1.FeatureFlagName.IsQueryingTokenValueEnabled)];
                    case 1:
                        _b.isQueryingTokenValueEnabled = _f.sent();
                        _c = this;
                        _e = (_d = JSON).parse;
                        return [4 /*yield*/, this.featureFlagClient.variation(featureFlags_1.FeatureFlagName.VoiceSystemAccounts)];
                    case 2:
                        _c.systemAccounts = _e.apply(_d, [(_a = (_f.sent())) !== null && _a !== void 0 ? _a : '[]']);
                        this.activatedRoute.params.subscribe(function (routeParams) { return __awaiter(_this, void 0, void 0, function () {
                            var customCoreToken, parts, coreBalance, _a;
                            var _this = this;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (this.accountService.streamClientStatus) {
                                            this.accountService.disconnectStream();
                                        }
                                        this.accountName = routeParams.account_name;
                                        return [4 /*yield*/, this.accountService.loadAccountData(routeParams.account_name)];
                                    case 1:
                                        if (!_b.sent()) return [3 /*break*/, 3];
                                        if (!this.chainData.chainInfoData.chain_name) {
                                            this.title.setTitle("".concat(this.accountName, " \u2022 Hyperion Explorer"));
                                        }
                                        else {
                                            this.title.setTitle("".concat(this.accountName, " \u2022 ").concat(this.chainData.chainInfoData.chain_name, " Hyperion Explorer"));
                                        }
                                        customCoreToken = this.chainData.chainInfoData.custom_core_token;
                                        if (customCoreToken && customCoreToken !== '') {
                                            parts = this.chainData.chainInfoData.custom_core_token.split('::');
                                            this.systemSymbol = parts[1];
                                            this.systemTokenContract = parts[0];
                                            coreBalance = this.accountService.jsonData.tokens.find(function (v) {
                                                return v.symbol === _this.systemSymbol && v.contract === _this.systemTokenContract;
                                            });
                                            if (coreBalance) {
                                                this.accountService.account.core_liquid_balance = coreBalance.amount + ' ' + this.systemSymbol;
                                            }
                                        }
                                        else {
                                            this.systemSymbol = this.getSymbol(this.accountService.account.core_liquid_balance);
                                        }
                                        this.systemPrecision = this.getPrecision(this.accountService.account.core_liquid_balance);
                                        if (this.systemSymbol === null) {
                                            try {
                                                this.systemSymbol = this.getSymbol(this.accountService.account.total_resources.cpu_weight);
                                                if (this.systemSymbol === null) {
                                                    this.systemSymbol = 'SYS';
                                                }
                                            }
                                            catch (e) {
                                                this.systemSymbol = 'SYS';
                                            }
                                        }
                                        this.processPermissions();
                                        setTimeout(function () {
                                            _this.accountService.tableDataSource.sort = _this.sort;
                                            _this.accountService.tableDataSource.paginator = _this.paginator;
                                        }, 500);
                                        _a = this;
                                        return [4 /*yield*/, this.accountService.getCreator(routeParams.account_name)];
                                    case 2:
                                        _a.creationData = _b.sent();
                                        _b.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountComponent.prototype.getPrecision = function (asset) {
        if (asset) {
            try {
                return asset.split(' ')[0].split('.')[1].length;
            }
            catch (e) {
                return 4;
            }
        }
        else {
            return 4;
        }
    };
    AccountComponent.prototype.getSymbol = function (asset) {
        if (asset) {
            try {
                return asset.split(' ')[1];
            }
            catch (e) {
                return null;
            }
        }
        else {
            return null;
        }
    };
    AccountComponent.prototype.liquidBalance = function () {
        if (this.accountService.account.core_liquid_balance) {
            return parseFloat(this.accountService.account.core_liquid_balance.split(' ')[0]);
        }
        return 0;
    };
    AccountComponent.prototype.myCpuBalance = function () {
        if (this.accountService.account.self_delegated_bandwidth) {
            return parseFloat(this.accountService.account.self_delegated_bandwidth.cpu_weight.split(' ')[0]);
        }
        return 0;
    };
    AccountComponent.prototype.myNetBalance = function () {
        if (this.accountService.account.self_delegated_bandwidth) {
            return parseFloat(this.accountService.account.self_delegated_bandwidth.net_weight.split(' ')[0]);
        }
        return 0;
    };
    AccountComponent.prototype.cpuBalance = function () {
        if (this.accountService.account.total_resources) {
            return parseFloat(this.accountService.account.total_resources.cpu_weight.split(' ')[0]);
        }
        return 0;
    };
    AccountComponent.prototype.netBalance = function () {
        if (this.accountService.account.total_resources) {
            return parseFloat(this.accountService.account.total_resources.net_weight.split(' ')[0]);
        }
        return 0;
    };
    AccountComponent.prototype.totalBalance = function () {
        var liquid = this.liquidBalance();
        var cpu = this.myCpuBalance();
        var net = this.myNetBalance();
        return liquid + cpu + net;
    };
    AccountComponent.prototype.stakedBalance = function () {
        var cpu = this.myCpuBalance();
        var net = this.myNetBalance();
        return cpu + net;
    };
    AccountComponent.prototype.cpuByOthers = function () {
        var cpu = this.cpuBalance();
        var mycpu = this.myCpuBalance();
        return cpu - mycpu;
    };
    AccountComponent.prototype.netByOthers = function () {
        var net = this.netBalance();
        var mynet = this.myNetBalance();
        return net - mynet;
    };
    AccountComponent.prototype.stakedbyOthers = function () {
        var cpu = this.cpuBalance();
        var net = this.netBalance();
        var mycpu = this.myCpuBalance();
        var mynet = this.myNetBalance();
        return (cpu + net) - (mycpu + mynet);
    };
    AccountComponent.prototype.refundBalance = function () {
        var cpuRefund = 0;
        var netRefund = 0;
        if (this.accountService.account.refund_request) {
            cpuRefund = parseFloat(this.accountService.account.refund_request.cpu_amount.split(' ')[0]);
            netRefund = parseFloat(this.accountService.account.refund_request.net_amount.split(' ')[0]);
        }
        return cpuRefund + netRefund;
    };
    AccountComponent.prototype.formatDate = function (date) {
        return new Date(date).toLocaleString();
    };
    AccountComponent.prototype.getChildren = function (arr, parent) {
        var _this = this;
        return arr.filter(function (value) { return value.parent === parent; }).map(function (value) {
            var children = _this.getChildren(arr, value.perm_name);
            if (children.length > 0) {
                value.children = children;
            }
            return value;
        });
    };
    AccountComponent.prototype.processPermissions = function () {
        if (this.accountService.account) {
            var permissions = this.accountService.account.permissions;
            if (permissions) {
                try {
                    this.dataSource.data = this.getChildren(permissions, '');
                    this.treeControl.expand(this.treeControl.dataNodes[0]);
                    this.treeControl.expand(this.treeControl.dataNodes[1]);
                }
                catch (e) {
                    console.log(e);
                    this.dataSource.data = [];
                }
            }
        }
    };
    AccountComponent.prototype.isArray = function (value) {
        return value !== null && typeof value === 'object' && value.length > 0;
    };
    AccountComponent.prototype.getType = function (subitem) {
        return typeof subitem;
    };
    AccountComponent.prototype.stringifyObject = function (subitem) {
        return JSON.stringify(subitem, null, 2);
    };
    AccountComponent.prototype.convertBytes = function (bytes) {
        if (bytes > (Math.pow(1024, 3))) {
            return (bytes / (Math.pow(1024, 3))).toFixed(2) + ' GB';
        }
        if (bytes > (Math.pow(1024, 2))) {
            return (bytes / (Math.pow(1024, 2))).toFixed(2) + ' MB';
        }
        if (bytes > 1024) {
            return (bytes / (1024)).toFixed(2) + ' KB';
        }
        return bytes + ' bytes';
    };
    AccountComponent.prototype.convertMicroS = function (micros) {
        var int = 0;
        var remainder = 0;
        var calcSec = Math.pow(1000, 2);
        var calcMin = calcSec * 60;
        var calcHour = calcMin * 60;
        if (micros > calcHour) {
            int = Math.floor(micros / calcHour);
            remainder = micros % calcHour;
            return int + 'h ' + Math.round(remainder / calcMin) + 'min';
        }
        if (micros > calcMin) {
            int = Math.floor(micros / calcMin);
            remainder = micros % calcMin;
            return int + 'min ' + Math.round(remainder / calcSec) + 's';
        }
        if (micros > calcSec) {
            return (micros / calcSec).toFixed(2) + 's';
        }
        if (micros > 1000) {
            return (micros / (1000)).toFixed(2) + 'ms';
        }
        return micros + 'µs';
    };
    AccountComponent.prototype.changePage = function (event) {
        // disable streaming if enabled
        if (this.accountService.streamClientStatus) {
            this.accountService.toggleStreaming();
        }
        var maxPages = Math.floor(event.length / event.pageSize);
        console.log(event);
        console.log("".concat(event.pageIndex, " / ").concat(maxPages));
        try {
            if (event.pageIndex === maxPages - 1) {
                this.accountService.loadMoreActions(this.accountName)["catch"](console.log);
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    __decorate([
        (0, core_1.ViewChild)(sort_1.MatSort, { static: false })
    ], AccountComponent.prototype, "sort");
    __decorate([
        (0, core_1.ViewChild)(paginator_1.MatPaginator, { static: false })
    ], AccountComponent.prototype, "paginator");
    AccountComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-account',
            templateUrl: './account.component.html',
            styleUrls: ['./account.component.css']
        })
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;

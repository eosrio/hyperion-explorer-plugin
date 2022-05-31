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
exports.SearchService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var launch_darkly_service_1 = require("src/app/services/launch-darkly/launch-darkly.service");
var featureFlags_1 = require("src/app/services/launch-darkly/featureFlags");
var SearchService = /** @class */ (function () {
    function SearchService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.searchAccountUrl = environment_1.environment.eosioNodeUrl + '/v1/chain/get_table_by_scope';
        this.featureFlagClient = new launch_darkly_service_1.LaunchDarklyService();
    }
    SearchService.prototype.filterAccountNames = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var sValue_1, requestBody, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if ((value && value.length > 12) || !value) {
                            return [2 /*return*/, []];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        sValue_1 = value.toLowerCase();
                        requestBody = {
                            code: environment_1.environment.systemContract,
                            table: environment_1.environment.userResourcesTable,
                            lower_bound: sValue_1,
                            limit: 5
                        };
                        return [4 /*yield*/, this.httpClient.post(this.searchAccountUrl, requestBody).toPromise()];
                    case 2:
                        response = _a.sent();
                        if (response.rows) {
                            return [2 /*return*/, response.rows.filter(function (tableData) {
                                    return tableData.scope.startsWith(sValue_1);
                                }).map(function (tableData) {
                                    return tableData.scope;
                                })];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, []];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SearchService.prototype.submitSearch = function (searchText, filteredAccounts) {
        return __awaiter(this, void 0, void 0, function () {
            var sValue, _a, blockNum, route;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sValue = searchText.toLowerCase();
                        _a = this;
                        return [4 /*yield*/, this.featureFlagClient.variation(featureFlags_1.FeatureFlagName.IsQueryingByBlockNumberEnabled)];
                    case 1:
                        _a.isQueryingByBlockNumberEnabled =
                            _b.sent();
                        if (!(filteredAccounts.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.router.navigate(['/account', sValue])];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, true];
                    case 3:
                        if (!(sValue.length === 64)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.router.navigate(['/transaction', sValue])];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, true];
                    case 5:
                        if (!(sValue.length > 0 && sValue.length <= 12 && isNaN(sValue))) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.router.navigate(['/account', sValue])];
                    case 6:
                        _b.sent();
                        return [2 /*return*/, true];
                    case 7:
                        if (!(searchText.startsWith('PUB_K1_') || searchText.startsWith('EOS'))) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.router.navigate(['/key', searchText])];
                    case 8:
                        _b.sent();
                        return [2 /*return*/, true];
                    case 9:
                        if (!this.isQueryingByBlockNumberEnabled) return [3 /*break*/, 11];
                        blockNum = searchText.replace(/[,.]/g, '');
                        if (!(parseInt(blockNum, 10) > 0)) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.router.navigate(['/block', blockNum])];
                    case 10:
                        _b.sent();
                        return [2 /*return*/, true];
                    case 11:
                        if (!(!isNaN(sValue) && sValue.length === 15)) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.router.navigate(['/assetid', sValue])];
                    case 12:
                        _b.sent();
                        return [2 /*return*/, true];
                    case 13:
                        if (!searchText.startsWith('0x')) return [3 /*break*/, 15];
                        route = void 0;
                        switch (searchText.length) {
                            case 42: {
                                route = '/evm/address';
                                break;
                            }
                            case 66: {
                                route = '/evm/transaction';
                                break;
                            }
                            default: {
                                if (searchText.length < 16) {
                                    // probably a block number in hex
                                    route = '/evm/block';
                                }
                                else {
                                    console.log('Ox prefixed string with length:', searchText.length);
                                }
                            }
                        }
                        if (!route) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.router.navigate([route, searchText])];
                    case 14:
                        _b.sent();
                        return [2 /*return*/, true];
                    case 15:
                        console.log('NO PATTERN MATCHED!');
                        return [2 /*return*/, false];
                }
            });
        });
    };
    SearchService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;

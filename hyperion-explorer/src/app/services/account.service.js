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
exports.AccountService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var hyperion_stream_client_1 = require("@eosrio/hyperion-stream-client");
var table_1 = require("@angular/material/table");
var AccountService = /** @class */ (function () {
    function AccountService(httpClient, pagService) {
        this.httpClient = httpClient;
        this.pagService = pagService;
        this.account = {
            cpu_limit: {
                used: 1,
                max: 1
            },
            net_limit: {
                used: 1,
                max: 1
            }
        };
        this.actions = [];
        this.tokens = [];
        this.streamClientStatus = false;
        this.pendingSet = new Set();
        this.loaded = false;
        this.streamClientLoaded = false;
        this.getServerUrl();
        this.getAccountUrl = environment_1.environment.hyperionApiUrl + '/v2/state/get_account?account=';
        this.getActionsUrl = environment_1.environment.hyperionApiUrl + '/v2/history/get_actions?account=';
        this.getCreatorUrl = environment_1.environment.hyperionApiUrl + '/v2/history/get_creator?account=';
        this.getTxUrl = environment_1.environment.hyperionApiUrl + '/v2/history/get_transaction?id=';
        this.getBlockUrl = environment_1.environment.hyperionApiUrl + '/v1/trace_api/get_block';
        this.getKeyUrl = environment_1.environment.hyperionApiUrl + '/v2/state/get_key_accounts?public_key=';
        this.tableDataSource = new table_1.MatTableDataSource([]);
        // this.initStreamClient().catch(console.log);
    }
    AccountService.prototype.monitorLib = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('Starting LIB monitoring...');
                if (!this.verificationLoop) {
                    this.verificationLoop = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.updateLib()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 21 * 12 * 500);
                }
                if (!this.predictionLoop) {
                    this.predictionLoop = setInterval(function () {
                        _this.libNum += 12;
                        if (_this.pendingSet.size > 0) {
                            _this.pendingSet.forEach(function (value) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    if (value < this.libNum) {
                                        console.log("Block cleared ".concat(value, " < ").concat(this.libNum));
                                        this.pendingSet["delete"](value);
                                    }
                                    return [2 /*return*/];
                                });
                            }); });
                        }
                        else {
                            console.log('No more pending actions, clearing loops');
                            _this.clearLoops();
                        }
                    }, 12 * 500);
                }
                return [2 /*return*/];
            });
        });
    };
    AccountService.prototype.checkIrreversibility = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, counter, _i, _b, action;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.checkLib()];
                    case 1:
                        _a.libNum = _c.sent();
                        if (this.libNum) {
                            counter = 0;
                            for (_i = 0, _b = this.actions; _i < _b.length; _i++) {
                                action = _b[_i];
                                if (action.block_num <= this.libNum) {
                                    action.irreversible = true;
                                }
                                else {
                                    counter++;
                                    this.pendingSet.add(action.block_num);
                                }
                            }
                            if (counter > 0) {
                                console.log('Pending actions: ' + counter);
                                this.monitorLib()["catch"](console.log);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountService.prototype.getServerUrl = function () {
        var server;
        if (environment_1.environment.production) {
            server = window.location.origin;
        }
        else {
            server = environment_1.environment.hyperionApiUrl;
        }
        this.server = server;
    };
    AccountService.prototype.updateLib = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.checkLib()];
                    case 1:
                        _a.libNum = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountService.prototype.checkLib = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.httpClient.get(this.server + '/v1/chain/get_info').toPromise()];
                    case 1:
                        info = _a.sent();
                        if (info) {
                            return [2 /*return*/, info.last_irreversible_block_num];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccountService.prototype.initStreamClient = function () {
        return __awaiter(this, void 0, void 0, function () {
            var health, e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.httpClient.get(this.server + '/v2/health').toPromise()];
                    case 1:
                        health = _a.sent();
                        if (health.features.streaming.enable) {
                            this.streamClient = new hyperion_stream_client_1["default"](this.server, { async: true });
                            this.streamClientLoaded = true;
                            this.streamClient.onConnect = function () {
                                _this.streamClientStatus = _this.streamClient.online;
                            };
                            this.streamClient.onLIB = function (data) {
                                _this.libNum = data.block_num;
                            };
                            this.streamClient.onData = function (data, ack) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    if (data.type === 'action') {
                                        this.actions.unshift(data.content);
                                        if (this.actions.length > 20) {
                                            this.actions.pop();
                                        }
                                        this.tableDataSource.data = this.actions;
                                    }
                                    ack();
                                    return [2 /*return*/];
                                });
                            }); };
                        }
                        else {
                            console.log('Streaming disabled!');
                            this.streamClientLoaded = false;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.log(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccountService.prototype.setupRequests = function () {
        var _this = this;
        // find latest block
        var maxBlock = 0;
        for (var _i = 0, _a = this.actions; _i < _a.length; _i++) {
            var action = _a[_i];
            if (action.block_num > maxBlock) {
                maxBlock = action.block_num;
            }
        }
        console.log(maxBlock);
        // setup request
        this.streamClient.onConnect = function () {
            _this.streamClient.streamActions({
                account: _this.account.account_name,
                action: '*',
                contract: '*',
                filters: [],
                read_until: 0,
                start_from: maxBlock + 1
            })["catch"](console.log);
            _this.streamClientStatus = _this.streamClient.online;
        };
    };
    AccountService.prototype.loadAccountData = function (accountName) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loaded = false;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.httpClient.get(this.getAccountUrl + accountName).toPromise()];
                    case 2:
                        _a.jsonData = (_b.sent());
                        if (this.jsonData.account) {
                            this.account = this.jsonData.account;
                        }
                        if (this.jsonData.tokens) {
                            this.tokens = this.jsonData.tokens;
                        }
                        if (this.jsonData.actions) {
                            this.actions = this.jsonData.actions;
                            this.checkIrreversibility()["catch"](console.log);
                            this.tableDataSource.data = this.actions;
                        }
                        if (this.jsonData.total_actions) {
                            this.pagService.totalItems = this.jsonData.total_actions;
                        }
                        this.loaded = true;
                        return [2 /*return*/, true];
                    case 3:
                        error_1 = _b.sent();
                        console.log(error_1);
                        this.jsonData = null;
                        this.loaded = true;
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AccountService.prototype.loadMoreActions = function (accountName) {
        return __awaiter(this, void 0, void 0, function () {
            var firstAction, maxGs, q, results, e_3;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        firstAction = this.actions[this.actions.length - 1];
                        maxGs = (firstAction.global_sequence - 1);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        q = this.getActionsUrl + accountName + '&global_sequence=0-' + maxGs + '&limit=50';
                        return [4 /*yield*/, this.httpClient.get(q).toPromise()];
                    case 2:
                        results = _b.sent();
                        if (results.actions && results.actions.length > 0) {
                            (_a = this.actions).push.apply(_a, results.actions);
                            this.tableDataSource.data = this.actions;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _b.sent();
                        console.log(e_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AccountService.prototype.loadTxData = function (txId) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loaded = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.get(this.getTxUrl + txId).toPromise()];
                    case 2:
                        data = _a.sent();
                        this.loaded = true;
                        return [2 /*return*/, data];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        this.loaded = true;
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AccountService.prototype.loadBlockData = function (blockNum) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loaded = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.post(this.getBlockUrl, {
                                block_num: blockNum
                            }).toPromise()];
                    case 2:
                        data = _a.sent();
                        this.loaded = true;
                        return [2 /*return*/, data];
                    case 3:
                        error_3 = _a.sent();
                        console.log(error_3);
                        this.loaded = true;
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AccountService.prototype.loadPubKey = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loaded = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.get(this.getKeyUrl + key + '&details=true').toPromise()];
                    case 2:
                        data = _a.sent();
                        this.loaded = true;
                        return [2 /*return*/, data];
                    case 3:
                        error_4 = _a.sent();
                        console.log(error_4);
                        this.loaded = true;
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AccountService.prototype.getCreator = function (accountName) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.httpClient.get(this.getCreatorUrl + accountName).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccountService.prototype.toggleStreaming = function () {
        if (this.streamClientStatus) {
            this.streamClient.disconnect();
            this.streamClientStatus = false;
            this.checkIrreversibility()["catch"](console.log);
        }
        else {
            this.tableDataSource.paginator.firstPage();
            this.clearLoops();
            this.setupRequests();
            this.streamClient.connect(function () {
                console.log('hyperion streaming client connected!');
            });
        }
    };
    AccountService.prototype.clearLoops = function () {
        if (this.predictionLoop) {
            clearInterval(this.predictionLoop);
        }
        if (this.verificationLoop) {
            clearInterval(this.verificationLoop);
        }
    };
    AccountService.prototype.disconnectStream = function () {
        if (this.streamClient && this.streamClientStatus) {
            this.streamClient.disconnect();
            this.streamClient.online = false;
            this.streamClientStatus = false;
        }
    };
    AccountService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;

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
exports.EvmService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var table_1 = require("@angular/material/table");
var REVERT_FUNCTION_SELECTOR = '0x08c379a0';
var REVERT_PANIC_SELECTOR = '0x4e487b71';
var EvmService = /** @class */ (function () {
    function EvmService(http, pagService) {
        this.http = http;
        this.pagService = pagService;
        this.loaded = true;
        this.jsonRpcApi = environment_1.environment.eosioNodeUrl + '/evm';
        this.streamClientStatus = false;
        this.libNum = 0;
        this.streamClientLoaded = true;
        this.transactions = [];
        this.getServerUrl();
        this.addressTransactions = new table_1.MatTableDataSource([]);
        this.blockTransactions = new table_1.MatTableDataSource([]);
    }
    EvmService.prototype.callRpcMethod = function (method, params) {
        return __awaiter(this, void 0, void 0, function () {
            var response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(this.jsonRpcApi, {
                                jsonrpc: '2.0',
                                id: Date.now(),
                                method: method,
                                params: params
                            }).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EvmService.prototype.getBalance = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var getBalResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callRpcMethod('eth_getBalanceHuman', [address])];
                    case 1:
                        getBalResult = _a.sent();
                        if (getBalResult) {
                            return [2 /*return*/, Number(getBalResult)];
                        }
                        else {
                            return [2 /*return*/, 0];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EvmService.prototype.getTransactionReceipt = function (hash) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callRpcMethod('eth_getTransactionReceipt', [hash.toLowerCase()])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EvmService.prototype.getTransactionByHash = function (hash) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callRpcMethod('eth_getTransactionByHash', [hash.toLowerCase()])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EvmService.prototype.getBlockByNumber = function (blockNumber, full) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callRpcMethod('eth_getBlockByNumber', [blockNumber.toLowerCase(), full])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EvmService.prototype.getBlockByHash = function (hash, full) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callRpcMethod('eth_getBlockByHash', [hash.toLowerCase(), full])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EvmService.prototype.traceTransaction = function (hash) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callRpcMethod('trace_transaction', [hash.toLowerCase()])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EvmService.prototype.getServerUrl = function () {
        var server;
        if (environment_1.environment.production) {
            server = window.location.origin;
        }
        else {
            server = environment_1.environment.hyperionApiUrl;
        }
        this.server = server;
    };
    EvmService.prototype.toggleStreaming = function () {
        this.streamClientStatus = !this.streamClientStatus;
    };
    EvmService.prototype.loadTransactions = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.server + '/evm_explorer/get_transactions?address=' + address).toPromise()];
                    case 1:
                        resp = _a.sent();
                        this.processTransactions(resp.transactions);
                        if (resp.total) {
                            this.pagService.totalItems = resp.total;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EvmService.prototype.loadBlock = function (blockNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var blockData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBlockByNumber('0x' + Number(blockNumber).toString(16), true)];
                    case 1:
                        blockData = _a.sent();
                        blockData.transactions.forEach(function (trx) {
                            trx.val_formatted = "".concat((parseInt(trx.value, 16) / 1000000000000000000).toFixed(4), " TLOS");
                        });
                        this.blockTransactions.data = blockData.transactions;
                        return [2 /*return*/];
                }
            });
        });
    };
    EvmService.prototype.loadMoreTransactions = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(address);
                return [2 /*return*/];
            });
        });
    };
    EvmService.prototype.processTransactions = function (transactions) {
        this.transactions = [];
        this.transactions = transactions;
        for (var _i = 0, _a = this.transactions; _i < _a.length; _i++) {
            var trx = _a[_i];
            trx.evm_block = trx.block;
            trx.evm_hash = trx.hash;
            trx.val_formatted = "".concat(parseInt(trx.value_d).toFixed(4), " TLOS");
        }
        this.addressTransactions.data = this.transactions;
    };
    EvmService.prototype.getErrorFromOutput = function (output) {
        if (!output)
            return '';
        if (output.startsWith(REVERT_FUNCTION_SELECTOR)) {
            return this.parseRevertReason(output);
        }
        if (output.startsWith(REVERT_PANIC_SELECTOR)) {
            return this.parsePanicReason(output);
        }
        return '';
    };
    EvmService.prototype.parseRevertReason = function (revertOutput) {
        if (!revertOutput || revertOutput.length < 138) {
            return '';
        }
        var reason = '';
        var trimmedOutput = revertOutput.substr(138);
        for (var i = 0; i < trimmedOutput.length; i += 2) {
            reason += String.fromCharCode(parseInt(trimmedOutput.substr(i, 2), 16));
        }
        return reason;
    };
    EvmService.prototype.parsePanicReason = function (revertOutput) {
        var trimmedOutput = revertOutput.slice(-2);
        var reason;
        switch (trimmedOutput) {
            case "01":
                reason = "If you call assert with an argument that evaluates to false.";
                break;
            case "11":
                reason = "If an arithmetic operation results in underflow or overflow outside of an unchecked { ... } block.";
                break;
            case "12":
                reason = "If you divide or modulo by zero (e.g. 5 / 0 or 23 % 0).";
                break;
            case "21":
                reason = "If you convert a value that is too big or negative into an enum type.";
                break;
            case "31":
                reason = "If you call .pop() on an empty array.";
                break;
            case "32":
                reason = "If you access an array, bytesN or an array slice at an out-of-bounds or negative index (i.e. x[i] where i >= x.length or i < 0).";
                break;
            case "41":
                reason = "If you allocate too much memory or create an array that is too large.";
                break;
            case "51":
                reason = "If you call a zero-initialized variable of internal function type.";
                break;
            default:
                reason = "Default panic message";
        }
        return reason;
    };
    EvmService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], EvmService);
    return EvmService;
}());
exports.EvmService = EvmService;

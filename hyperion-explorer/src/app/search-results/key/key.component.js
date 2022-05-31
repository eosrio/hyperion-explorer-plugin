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
exports.KeyComponent = void 0;
var core_1 = require("@angular/core");
var faSpinner_1 = require("@fortawesome/free-solid-svg-icons/faSpinner");
var faSadTear_1 = require("@fortawesome/free-solid-svg-icons/faSadTear");
var faKey_1 = require("@fortawesome/free-solid-svg-icons/faKey");
var faCircle_1 = require("@fortawesome/free-solid-svg-icons/faCircle");
var KeyComponent = /** @class */ (function () {
    function KeyComponent(activatedRoute, accountService, chainData, title) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.chainData = chainData;
        this.title = title;
        this.key = {
            account_names: null,
            permissions: null
        };
        this.faCircle = faCircle_1.faCircle;
        this.faKey = faKey_1.faKey;
        this.faSadTear = faSadTear_1.faSadTear;
        this.faSpinner = faSpinner_1.faSpinner;
    }
    KeyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (routeParams) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.pubKey = routeParams.key;
                        _a = this;
                        return [4 /*yield*/, this.accountService.loadPubKey(routeParams.key)];
                    case 1:
                        _a.key = (_b.sent());
                        if (!this.chainData.chainInfoData.chain_name) {
                            this.title.setTitle("\uD83D\uDD11 ".concat(routeParams.key.slice(0, 12), " \u2022 Hyperion Explorer"));
                        }
                        else {
                            this.title.setTitle("\uD83D\uDD11 ".concat(routeParams.key.slice(0, 12), " \u2022 ").concat(this.chainData.chainInfoData.chain_name, " Hyperion Explorer"));
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    KeyComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-key',
            templateUrl: './key.component.html',
            styleUrls: ['./key.component.css']
        })
    ], KeyComponent);
    return KeyComponent;
}());
exports.KeyComponent = KeyComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyComponent = void 0;
const core_1 = require("@angular/core");
const faSpinner_1 = require("@fortawesome/free-solid-svg-icons/faSpinner");
const faSadTear_1 = require("@fortawesome/free-solid-svg-icons/faSadTear");
const faKey_1 = require("@fortawesome/free-solid-svg-icons/faKey");
const faCircle_1 = require("@fortawesome/free-solid-svg-icons/faCircle");
let KeyComponent = class KeyComponent {
    constructor(activatedRoute, accountService, chainData, title) {
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
    ngOnInit() {
        this.activatedRoute.params.subscribe(async (routeParams) => {
            this.pubKey = routeParams.key;
            this.key = await this.accountService.loadPubKey(routeParams.key);
            if (!this.chainData.chainInfoData.chain_name) {
                this.title.setTitle(`🔑 ${routeParams.key.slice(0, 12)} • Hyperion Explorer`);
            }
            else {
                this.title.setTitle(`🔑 ${routeParams.key.slice(0, 12)} • ${this.chainData.chainInfoData.chain_name} Hyperion Explorer`);
            }
        });
    }
};
KeyComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-key',
        templateUrl: './key.component.html',
        styleUrls: ['./key.component.css']
    })
], KeyComponent);
exports.KeyComponent = KeyComponent;
//# sourceMappingURL=key.component.js.map
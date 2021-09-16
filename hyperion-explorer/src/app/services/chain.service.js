"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainService = void 0;
const core_1 = require("@angular/core");
const environment_1 = require("../../environments/environment");
let ChainService = class ChainService {
    constructor(http, title) {
        this.http = http;
        this.title = title;
        this.chainInfoData = {};
        this.loadChainData().catch(console.log);
    }
    async loadChainData() {
        try {
            this.chainInfoData = await this.http.get(environment_1.environment.hyperionApiUrl + '/v2/explorer_metadata').toPromise();
            if (this.chainInfoData.chain_name) {
                this.title.setTitle(`${this.chainInfoData.chain_name} Hyperion Explorer`);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
};
ChainService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], ChainService);
exports.ChainService = ChainService;
//# sourceMappingURL=chain.service.js.map
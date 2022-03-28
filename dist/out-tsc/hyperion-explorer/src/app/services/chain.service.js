import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let ChainService = class ChainService {
    constructor(http, title) {
        this.http = http;
        this.title = title;
        this.chainInfoData = {};
        this.loadChainData().catch(console.log);
    }
    loadChainData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.chainInfoData = yield this.http.get(environment.hyperionApiUrl + '/v2/explorer_metadata').toPromise();
                if (this.chainInfoData.chain_name) {
                    this.title.setTitle(`${this.chainInfoData.chain_name} Hyperion Explorer`);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
ChainService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ChainService);
export { ChainService };
//# sourceMappingURL=chain.service.js.map
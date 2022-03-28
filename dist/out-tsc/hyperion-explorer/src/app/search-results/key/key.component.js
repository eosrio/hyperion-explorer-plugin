import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { faSadTear } from '@fortawesome/free-solid-svg-icons/faSadTear';
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
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
        this.faCircle = faCircle;
        this.faKey = faKey;
        this.faSadTear = faSadTear;
        this.faSpinner = faSpinner;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((routeParams) => __awaiter(this, void 0, void 0, function* () {
            this.pubKey = routeParams.key;
            this.key = (yield this.accountService.loadPubKey(routeParams.key));
            if (!this.chainData.chainInfoData.chain_name) {
                this.title.setTitle(`🔑 ${routeParams.key.slice(0, 12)} • Hyperion Explorer`);
            }
            else {
                this.title.setTitle(`🔑 ${routeParams.key.slice(0, 12)} • ${this.chainData.chainInfoData.chain_name} Hyperion Explorer`);
            }
        }));
    }
};
KeyComponent = __decorate([
    Component({
        selector: 'app-key',
        templateUrl: './key.component.html',
        styleUrls: ['./key.component.css']
    })
], KeyComponent);
export { KeyComponent };
//# sourceMappingURL=key.component.js.map
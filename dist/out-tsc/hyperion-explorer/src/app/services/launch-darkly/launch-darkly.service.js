var LaunchDarklyService_1;
import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { initialize } from 'launchdarkly-js-client-sdk';
import { environment } from '../../../environments/environment';
import { featureFlags } from './featureFlags';
export const LDUserCustomProperties = {
    platform: 'hyperion-web',
};
export const LDAnonymousUser = {
    anonymous: true,
    custom: LDUserCustomProperties,
    key: 'anonymous',
};
let LaunchDarklyService = LaunchDarklyService_1 = class LaunchDarklyService {
    initLaunchDarkly() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Initializing LaunchDarkly client-side');
            this.user = LDAnonymousUser;
            LaunchDarklyService_1.client = initialize(environment.clientSideID, this.user);
            yield LaunchDarklyService_1.client.waitForInitialization();
        });
    }
    variation(flag) {
        return __awaiter(this, void 0, void 0, function* () {
            const defaultValue = featureFlags[flag].defaultValue;
            yield LaunchDarklyService_1.client.waitUntilReady();
            return LaunchDarklyService_1.client.variation(`${flag}`, defaultValue);
        });
    }
};
LaunchDarklyService = LaunchDarklyService_1 = __decorate([
    Injectable({
        providedIn: 'root',
    })
], LaunchDarklyService);
export { LaunchDarklyService };
//# sourceMappingURL=launch-darkly.service.js.map
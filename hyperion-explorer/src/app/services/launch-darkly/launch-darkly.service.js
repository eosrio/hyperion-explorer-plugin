"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LaunchDarklyService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchDarklyService = exports.LDAnonymousUser = exports.LDUserCustomProperties = void 0;
const core_1 = require("@angular/core");
const launchdarkly_js_client_sdk_1 = require("launchdarkly-js-client-sdk");
const environment_1 = require("src/environments/environment");
const featureFlags_1 = require("./featureFlags");
exports.LDUserCustomProperties = {
    platform: 'hyperion-web',
};
exports.LDAnonymousUser = {
    anonymous: true,
    custom: exports.LDUserCustomProperties,
    key: 'anonymous',
};
let LaunchDarklyService = LaunchDarklyService_1 = class LaunchDarklyService {
    async initLaunchDarkly() {
        console.log('Initializing LaunchDarkly client-side');
        this.user = exports.LDAnonymousUser;
        LaunchDarklyService_1.client = (0, launchdarkly_js_client_sdk_1.initialize)(environment_1.environment.clientSideID, this.user);
        await LaunchDarklyService_1.client.waitForInitialization();
    }
    async variation(flag) {
        const defaultValue = featureFlags_1.featureFlags[flag].defaultValue;
        await LaunchDarklyService_1.client.waitUntilReady();
        return LaunchDarklyService_1.client.variation(`${flag}`, defaultValue);
    }
};
LaunchDarklyService = LaunchDarklyService_1 = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    })
], LaunchDarklyService);
exports.LaunchDarklyService = LaunchDarklyService;
//# sourceMappingURL=launch-darkly.service.js.map
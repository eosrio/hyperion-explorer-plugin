import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { LaunchDarklyService } from './services/launch-darkly/launch-darkly.service';
let AppComponent = class AppComponent {
    initLaunchDarkly() {
        return __awaiter(this, void 0, void 0, function* () {
            const featureFlagClient = new LaunchDarklyService();
            yield featureFlagClient.initLaunchDarkly();
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initLaunchDarkly();
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppPage = void 0;
const protractor_1 = require("protractor");
class AppPage {
    async navigateTo() {
        return protractor_1.browser.get(protractor_1.browser.baseUrl);
    }
    async getTitleText() {
        return (0, protractor_1.element)(protractor_1.by.css('app-root .content span')).getText();
    }
}
exports.AppPage = AppPage;
//# sourceMappingURL=app.po.js.map
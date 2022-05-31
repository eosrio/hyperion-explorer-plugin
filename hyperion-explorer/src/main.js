"use strict";
exports.__esModule = true;
require("hammerjs");
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var environment_1 = require("./environments/environment");
if (environment_1.environment.production) {
    (0, core_1.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', function () {
    (0, platform_browser_dynamic_1.platformBrowserDynamic)().bootstrapModule(app_module_1.AppModule)["catch"](function (err) { return console.error(err); });
});

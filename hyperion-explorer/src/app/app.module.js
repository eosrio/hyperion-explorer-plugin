"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.CustomPaginator = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var paginator_1 = require("@angular/material/paginator");
var service_worker_1 = require("@angular/service-worker");
var environment_1 = require("../environments/environment");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var toolbar_1 = require("@angular/material/toolbar");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var autocomplete_1 = require("@angular/material/autocomplete");
var card_1 = require("@angular/material/card");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var table_1 = require("@angular/cdk/table");
var tree_1 = require("@angular/material/tree");
var router_1 = require("@angular/router");
var progress_bar_1 = require("@angular/material/progress-bar");
var expansion_1 = require("@angular/material/expansion");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var chips_1 = require("@angular/material/chips");
var sort_1 = require("@angular/material/sort");
var table_2 = require("@angular/material/table");
var tooltip_1 = require("@angular/material/tooltip");
var flex_layout_1 = require("@angular/flex-layout");
var button_1 = require("@angular/material/button");
var home_component_1 = require("./home/home.component");
var search_results_component_1 = require("./search-results/search-results.component");
var account_component_1 = require("./search-results/account/account.component");
var transaction_component_1 = require("./search-results/transaction/transaction.component");
var simple_assets_component_1 = require("./search-results/simple-assets/simple-assets.component");
var block_component_1 = require("./search-results/block/block.component");
var key_component_1 = require("./search-results/key/key.component");
var evm_address_component_1 = require("./search-results/evm-address/evm-address.component");
var evm_block_component_1 = require("./search-results/evm-block/evm-block.component");
var evm_transaction_component_1 = require("./search-results/evm-transaction/evm-transaction.component");
var ngx_json_viewer_1 = require("ngx-json-viewer");
var launch_darkly_service_1 = require("./services/launch-darkly/launch-darkly.service");
var CustomPaginator = /** @class */ (function (_super) {
    __extends(CustomPaginator, _super);
    function CustomPaginator(pagService) {
        var _this = _super.call(this) || this;
        _this.pagService = pagService;
        _this.getRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
                return "0 of ".concat(length);
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            return "".concat(startIndex + 1, " \u2013 ").concat(endIndex, " of ").concat(_this.pagService.totalItems, " (").concat(length, " loaded)");
        };
        return _this;
    }
    CustomPaginator = __decorate([
        (0, core_1.Injectable)()
    ], CustomPaginator);
    return CustomPaginator;
}(paginator_1.MatPaginatorIntl));
exports.CustomPaginator = CustomPaginator;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                search_results_component_1.SearchResultsComponent,
                account_component_1.AccountComponent,
                transaction_component_1.TransactionComponent,
                simple_assets_component_1.SimpleAssetsComponent,
                block_component_1.BlockComponent,
                key_component_1.KeyComponent,
                evm_address_component_1.EvmAddressComponent,
                evm_block_component_1.EvmBlockComponent,
                evm_transaction_component_1.EvmTransactionComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                service_worker_1.ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment_1.environment.production }),
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                toolbar_1.MatToolbarModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                autocomplete_1.MatAutocompleteModule,
                card_1.MatCardModule,
                angular_fontawesome_1.FontAwesomeModule,
                button_1.MatButtonModule,
                flex_layout_1.FlexLayoutModule,
                progress_bar_1.MatProgressBarModule,
                tree_1.MatTreeModule,
                table_1.CdkTableModule,
                table_2.MatTableModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                tooltip_1.MatTooltipModule,
                chips_1.MatChipsModule,
                expansion_1.MatExpansionModule,
                router_1.RouterModule,
                progress_spinner_1.MatProgressSpinnerModule,
                ngx_json_viewer_1.NgxJsonViewerModule
            ],
            providers: [{ provide: paginator_1.MatPaginatorIntl, useClass: CustomPaginator }, launch_darkly_service_1.LaunchDarklyService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

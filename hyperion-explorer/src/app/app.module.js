"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = exports.CustomPaginator = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const animations_1 = require("@angular/platform-browser/animations");
const paginator_1 = require("@angular/material/paginator");
const service_worker_1 = require("@angular/service-worker");
const environment_1 = require("../environments/environment");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/common/http");
const toolbar_1 = require("@angular/material/toolbar");
const form_field_1 = require("@angular/material/form-field");
const input_1 = require("@angular/material/input");
const autocomplete_1 = require("@angular/material/autocomplete");
const card_1 = require("@angular/material/card");
const angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
const table_1 = require("@angular/cdk/table");
const tree_1 = require("@angular/material/tree");
const router_1 = require("@angular/router");
const progress_bar_1 = require("@angular/material/progress-bar");
const expansion_1 = require("@angular/material/expansion");
const progress_spinner_1 = require("@angular/material/progress-spinner");
const chips_1 = require("@angular/material/chips");
const sort_1 = require("@angular/material/sort");
const table_2 = require("@angular/material/table");
const tooltip_1 = require("@angular/material/tooltip");
const flex_layout_1 = require("@angular/flex-layout");
const button_1 = require("@angular/material/button");
const home_component_1 = require("./home/home.component");
const search_results_component_1 = require("./search-results/search-results.component");
const account_component_1 = require("./search-results/account/account.component");
const transaction_component_1 = require("./search-results/transaction/transaction.component");
const block_component_1 = require("./search-results/block/block.component");
const key_component_1 = require("./search-results/key/key.component");
const evm_address_component_1 = require("./search-results/evm-address/evm-address.component");
const evm_block_component_1 = require("./search-results/evm-block/evm-block.component");
const evm_transaction_component_1 = require("./search-results/evm-transaction/evm-transaction.component");
const ngx_json_viewer_1 = require("ngx-json-viewer");
const launch_darkly_service_1 = require("./services/launch-darkly/launch-darkly.service");
let CustomPaginator = class CustomPaginator extends paginator_1.MatPaginatorIntl {
    constructor(pagService) {
        super();
        this.pagService = pagService;
        this.getRangeLabel = (page, pageSize, length) => {
            if (length === 0 || pageSize === 0) {
                return `0 of ${length}`;
            }
            length = Math.max(length, 0);
            const startIndex = page * pageSize;
            const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            return `${startIndex + 1} – ${endIndex} of ${this.pagService.totalItems} (${length} loaded)`;
        };
    }
};
CustomPaginator = __decorate([
    (0, core_1.Injectable)()
], CustomPaginator);
exports.CustomPaginator = CustomPaginator;
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            search_results_component_1.SearchResultsComponent,
            account_component_1.AccountComponent,
            transaction_component_1.TransactionComponent,
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
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
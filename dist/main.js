(self["webpackChunkhyperion_explorer_plugin"] = self["webpackChunkhyperion_explorer_plugin"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-results/search-results.component */ 4158);
/* harmony import */ var _search_results_account_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-results/account/account.component */ 6122);
/* harmony import */ var _search_results_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-results/transaction/transaction.component */ 1710);
/* harmony import */ var _search_results_simple_assets_simple_assets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-results/simple-assets/simple-assets.component */ 6078);
/* harmony import */ var _search_results_block_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-results/block/block.component */ 3423);
/* harmony import */ var _search_results_key_key_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-results/key/key.component */ 759);
/* harmony import */ var _search_results_evm_address_evm_address_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-results/evm-address/evm-address.component */ 2221);
/* harmony import */ var _search_results_evm_block_evm_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-results/evm-block/evm-block.component */ 2041);
/* harmony import */ var _search_results_evm_transaction_evm_transaction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-results/evm-transaction/evm-transaction.component */ 4035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);













const routes = [
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: '',
        component: _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_1__.SearchResultsComponent,
        children: [
            { path: 'account/:account_name', component: _search_results_account_account_component__WEBPACK_IMPORTED_MODULE_2__.AccountComponent },
            { path: 'transaction/:transaction_id', component: _search_results_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_3__.TransactionComponent },
            { path: 'assetid/:asset_id', component: _search_results_simple_assets_simple_assets_component__WEBPACK_IMPORTED_MODULE_4__.SimpleAssetsComponent },
            { path: 'block/:block_num', component: _search_results_block_block_component__WEBPACK_IMPORTED_MODULE_5__.BlockComponent },
            { path: 'key/:key', component: _search_results_key_key_component__WEBPACK_IMPORTED_MODULE_6__.KeyComponent },
            { path: 'evm/address/:address', component: _search_results_evm_address_evm_address_component__WEBPACK_IMPORTED_MODULE_7__.EvmAddressComponent },
            { path: 'evm/transaction/:hash', component: _search_results_evm_transaction_evm_transaction_component__WEBPACK_IMPORTED_MODULE_9__.EvmTransactionComponent },
            { path: 'evm/block/:block_num', component: _search_results_evm_block_evm_block_component__WEBPACK_IMPORTED_MODULE_8__.EvmBlockComponent }
        ],
    },
    {
        path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes, {
                scrollPositionRestoration: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _services_launch_darkly_launch_darkly_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/launch-darkly/launch-darkly.service */ 8638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);




class AppComponent {
    initLaunchDarkly() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const featureFlagClient = new _services_launch_darkly_launch_darkly_service__WEBPACK_IMPORTED_MODULE_0__.LaunchDarklyService();
            yield featureFlagClient.initLaunchDarkly();
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.initLaunchDarkly();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomPaginator": () => (/* binding */ CustomPaginator),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/service-worker */ 7334);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ 5924);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/table */ 2306);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tree */ 5473);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/expansion */ 2323);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/chips */ 9243);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sort */ 5381);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/flex-layout */ 8662);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-results/search-results.component */ 4158);
/* harmony import */ var _search_results_account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-results/account/account.component */ 6122);
/* harmony import */ var _search_results_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-results/transaction/transaction.component */ 1710);
/* harmony import */ var _search_results_simple_assets_simple_assets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-results/simple-assets/simple-assets.component */ 6078);
/* harmony import */ var _search_results_block_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-results/block/block.component */ 3423);
/* harmony import */ var _search_results_key_key_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-results/key/key.component */ 759);
/* harmony import */ var _search_results_evm_address_evm_address_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-results/evm-address/evm-address.component */ 2221);
/* harmony import */ var _search_results_evm_block_evm_block_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-results/evm-block/evm-block.component */ 2041);
/* harmony import */ var _search_results_evm_transaction_evm_transaction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search-results/evm-transaction/evm-transaction.component */ 4035);
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-json-viewer */ 2244);
/* harmony import */ var _services_launch_darkly_launch_darkly_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/launch-darkly/launch-darkly.service */ 8638);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-google-analytics */ 992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_pagination_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/pagination.service */ 538);












































class CustomPaginator extends _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorIntl {
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
}
CustomPaginator.ɵfac = function CustomPaginator_Factory(t) { return new (t || CustomPaginator)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_services_pagination_service__WEBPACK_IMPORTED_MODULE_14__.PaginationService)); };
CustomPaginator.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjectable"]({ token: CustomPaginator, factory: CustomPaginator.ɵfac });
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorIntl, useClass: CustomPaginator }, _services_launch_darkly_launch_darkly_service__WEBPACK_IMPORTED_MODULE_13__.LaunchDarklyService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__.FontAwesomeModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__.FlexLayoutModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__.MatProgressBarModule,
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_31__.MatTreeModule,
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__.CdkTableModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__.MatSortModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__.MatTooltipModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_36__.MatChipsModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_37__.MatExpansionModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_38__.RouterModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__.MatProgressSpinnerModule,
            ngx_json_viewer__WEBPACK_IMPORTED_MODULE_40__.NgxJsonViewerModule,
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_41__.NgxGoogleAnalyticsModule.forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.trackingId),
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_41__.NgxGoogleAnalyticsRouterModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_4__.SearchResultsComponent,
        _search_results_account_account_component__WEBPACK_IMPORTED_MODULE_5__.AccountComponent,
        _search_results_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_6__.TransactionComponent,
        _search_results_simple_assets_simple_assets_component__WEBPACK_IMPORTED_MODULE_7__.SimpleAssetsComponent,
        _search_results_block_block_component__WEBPACK_IMPORTED_MODULE_8__.BlockComponent,
        _search_results_key_key_component__WEBPACK_IMPORTED_MODULE_9__.KeyComponent,
        _search_results_evm_address_evm_address_component__WEBPACK_IMPORTED_MODULE_10__.EvmAddressComponent,
        _search_results_evm_block_evm_block_component__WEBPACK_IMPORTED_MODULE_11__.EvmBlockComponent,
        _search_results_evm_transaction_evm_transaction_component__WEBPACK_IMPORTED_MODULE_12__.EvmTransactionComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__.ServiceWorkerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__.FontAwesomeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__.FlexLayoutModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__.MatProgressBarModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_31__.MatTreeModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__.CdkTableModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__.MatSortModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__.MatTooltipModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_36__.MatChipsModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_37__.MatExpansionModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_38__.RouterModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__.MatProgressSpinnerModule,
        ngx_json_viewer__WEBPACK_IMPORTED_MODULE_40__.NgxJsonViewerModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_41__.NgxGoogleAnalyticsModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_41__.NgxGoogleAnalyticsRouterModule] }); })();


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSearch */ 7984);
/* harmony import */ var src_app_services_launch_darkly_launch_darkly_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/launch-darkly/launch-darkly.service */ 8638);
/* harmony import */ var src_app_services_launch_darkly_featureFlags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/launch-darkly/featureFlags */ 2563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search.service */ 4112);
/* harmony import */ var _services_chain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/chain.service */ 5955);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 5924);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 2220);




















function HomeComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.err);
} }
function HomeComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", account_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](account_r3);
} }
class HomeComponent {
    constructor(formBuilder, searchService, chainData, title) {
        this.formBuilder = formBuilder;
        this.searchService = searchService;
        this.chainData = chainData;
        this.title = title;
        this.faSearch = _fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_5__.faSearch;
        this.placeholders = [
            'Search by account name...',
            'Search by transaction id...',
            'Search by public key...',
            'Search by asset id...',
        ];
        this.err = '';
        this.currentPlaceholder = 0;
        this.searchForm = this.formBuilder.group({
            search_field: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
        this.filteredAccounts = [];
        this.searchPlaceholder = this.placeholders[0];
        this.featureFlagClient = new src_app_services_launch_darkly_launch_darkly_service__WEBPACK_IMPORTED_MODULE_0__.LaunchDarklyService();
        setInterval(() => {
            this.currentPlaceholder++;
            if (!this.placeholders[this.currentPlaceholder]) {
                this.currentPlaceholder = 0;
            }
            this.searchPlaceholder = this.placeholders[this.currentPlaceholder];
        }, 2000);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.searchForm.get('search_field').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(300)).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                this.filteredAccounts = yield this.searchService.filterAccountNames(result);
            }));
            if (this.chainData.chainInfoData.chain_name) {
                this.title.setTitle(`${this.chainData.chainInfoData.chain_name} Hyperion Explorer`);
            }
            this.isQueryingByBlockNumberEnabled =
                yield this.featureFlagClient.variation(src_app_services_launch_darkly_featureFlags__WEBPACK_IMPORTED_MODULE_1__.FeatureFlagName.IsQueryingByBlockNumberEnabled);
            if (this.isQueryingByBlockNumberEnabled) {
                this.placeholders.push('Search by block number...');
            }
        });
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.searchForm.valid) {
                return;
            }
            const searchText = this.searchForm.get('search_field').value;
            this.searchForm.reset();
            const status = yield this.searchService.submitSearch(searchText, this.filteredAccounts);
            if (!status && !isNaN(searchText)) {
                this.err = 'cannot search block numbers ';
            }
            else if (!status) {
                this.err = 'no results for ' + searchText;
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_chain_service__WEBPACK_IMPORTED_MODULE_3__.ChainService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 28, vars: 9, consts: [["fxLayout", "column", "fxLayoutAlign", "space-between stretch", 2, "height", "100vh"], ["fxLayout", "column", "fxLayoutAlign", "end center", 1, "search-card"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "20px", 2, "text-align", "center"], ["src", "assets/voiceBlockExplorer.png", "alt", "logo", 1, "logo"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "center stretch"], ["fxLayout", "column"], ["appearance", "outline", "fxFlex", "grow", 1, "home-search-input", 2, "height", "100%"], ["matInput", "", "formControlName", "search_field", 3, "matAutocomplete", "placeholder"], [4, "ngIf"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", "matSuffix", "", "type", "submit", 1, "search-btn", 3, "keyup.enter"], [3, "icon"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "6px", 2, "margin-bottom", "10px"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "5px", 1, "outline"], ["src", "assets/hyperion.png", "alt", "logo", 2, "height", "28px"], ["target", "_blank", 3, "href"], [1, "faded", "footer-text"], [3, "value"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, HomeComponent_mat_error_10_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-autocomplete", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("optionSelected", function HomeComponent_Template_mat_autocomplete_optionSelected_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, HomeComponent_mat_option_13_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function HomeComponent_Template_button_keyup_enter_14_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Powered by");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Provided by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Made with \u2764 by EOS Rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matAutocomplete", _r1)("placeholder", ctx.searchPlaceholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.err);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filteredAccounts);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx.chainData.chainInfoData.provider_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.chainData.chainInfoData.provider);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutGapDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FaIconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption], styles: [".search-card[_ngcontent-%COMP%] {\n  height: 50%;\n  padding: 50px 0 20px;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  height: 60px;\n  border-radius: 0 5px 5px 0;\n  border-left: 0;\n}\n\n  .home-search-input.mat-form-field-appearance-outline .mat-form-field-outline-end {\n  border-radius: 0 0 0 0 !important;\n}\n\n  .home-search-input.mat-form-field-appearance-outline .mat-form-field-wrapper {\n  \n  padding-bottom: unset;\n  margin: unset;\n  height: 100%;\n}\n\n  .home-search-input .mat-form-field-flex {\n  height: 100%;\n  align-items: center;\n}\n\n  .home-search-input .mat-form-field-outline {\n  height: 100%;\n}\n\n.outline[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0,0,0,.12);\n  padding: 4px 7px;\n  border-radius: 3px;\n}\n\n.faded[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.footer-text[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 30px;\n}\n\n@media screen and (max-width: 576px) {\n  .logo[_ngcontent-%COMP%] {\n    height: 85px;\n    margin-bottom: 8px !important;\n  }\n  .home-search-input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .search-card[_ngcontent-%COMP%] {\n    padding-top: 10px;\n  }\n}\n\n@media (min-width: 577px) {\n  .logo[_ngcontent-%COMP%] {\n    height: 130px;\n  }\n  .home-search-input[_ngcontent-%COMP%] {\n    width: 330px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtY2FyZCB7XG4gIGhlaWdodDogNTAlO1xuICBwYWRkaW5nOiA1MHB4IDAgMjBweDtcbn1cblxuLnNlYXJjaC1idG4ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICBib3JkZXItbGVmdDogMDtcbn1cblxuOjpuZy1kZWVwIC5ob21lLXNlYXJjaC1pbnB1dC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmhvbWUtc2VhcmNoLWlucHV0Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIC8qbWFyZ2luOiAwIDAgLjI1ZW0gMDsqL1xuICBwYWRkaW5nLWJvdHRvbTogdW5zZXQ7XG4gIG1hcmdpbjogdW5zZXQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5ob21lLXNlYXJjaC1pbnB1dCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5ob21lLXNlYXJjaC1pbnB1dCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm91dGxpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMik7XG4gIHBhZGRpbmc6IDRweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmZhZGVkIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5mb290ZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDg1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhvbWUtc2VhcmNoLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VhcmNoLWNhcmQge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc3cHgpIHtcbiAgLmxvZ28ge1xuICAgIGhlaWdodDogMTMwcHg7XG4gIH1cbiAgLmhvbWUtc2VhcmNoLWlucHV0IHtcbiAgICB3aWR0aDogMzMwcHg7XG4gIH1cbn1cblxuIl19 */"] });


/***/ }),

/***/ 6122:
/*!*************************************************************!*\
  !*** ./src/app/search-results/account/account.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ 5381);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faClock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faClock */ 5081);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faUserCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUserCircle */ 6807);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCircle */ 8935);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faStar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faStar */ 1840);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faLink */ 8134);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHistory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHistory */ 175);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/tree */ 5443);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tree */ 5473);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faChevronRight__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faChevronRight */ 506);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faChevronDown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faChevronDown */ 1075);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faKey__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faKey */ 6813);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faUser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUser */ 5795);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSadTear__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSadTear */ 8026);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faVoteYea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faVoteYea */ 6793);
/* harmony import */ var _fortawesome_free_regular_svg_icons_faQuestionCircle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons/faQuestionCircle */ 9070);
/* harmony import */ var src_app_services_launch_darkly_launch_darkly_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/launch-darkly/launch-darkly.service */ 8638);
/* harmony import */ var src_app_services_launch_darkly_featureFlags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/launch-darkly/featureFlags */ 2563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/account.service */ 9876);
/* harmony import */ var _services_chain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/chain.service */ 5955);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/expansion */ 2323);






































function AccountComponent_mat_progress_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-spinner", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 45);
} }
function AccountComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Account not found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "We couldn't find the account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r1.faSadTear);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.accountName);
} }
function AccountComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Access Denied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " You do not have permission to view this account. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r2.faSadTear);
} }
const _c0 = function (a1) { return ["/account", a1]; };
function AccountComponent_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Created by: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r4.creationData.creator));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.creationData.creator);
} }
function AccountComponent_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Created on: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.formatDate(ctx_r5.creationData.timestamp));
} }
function AccountComponent_div_4_mat_card_80_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const token_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, token_r22.contract));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](token_r22.contract);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass.lt-sm", "break-word");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 5, token_r22.amount, "1.0-" + (token_r22.precision || 4)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](token_r22.symbol);
} }
function AccountComponent_div_4_mat_card_80_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountComponent_div_4_mat_card_80_div_7_div_1_Template, 9, 10, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r19.accountService.tokens);
} }
function AccountComponent_div_4_mat_card_80_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No tokens to display");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AccountComponent_div_4_mat_card_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "fa-layers", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "fa-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "fa-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Tokens ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, AccountComponent_div_4_mat_card_80_div_7_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AccountComponent_div_4_mat_card_80_div_8_Template, 2, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r6.faCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r6.faStar)("inverse", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r6.faQuestionCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.accountService.tokens.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r6.accountService.tokens || !ctx_r6.accountService.tokens.length);
} }
function AccountComponent_div_4_mat_accordion_81_div_10_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "proxy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r25.accountService.account["voter_info"].proxy));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r25.accountService.account["voter_info"].proxy);
} }
function AccountComponent_div_4_mat_accordion_81_div_10_span_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AccountComponent_div_4_mat_accordion_81_div_10_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " producer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AccountComponent_div_4_mat_accordion_81_div_10_span_3_span_4_Template, 2, 0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r26.accountService.account["voter_info"].producers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r26.accountService.account["voter_info"].producers.length > 1);
} }
function AccountComponent_div_4_mat_accordion_81_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AccountComponent_div_4_mat_accordion_81_div_10_span_2_Template, 4, 4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AccountComponent_div_4_mat_accordion_81_div_10_span_3_Template, 5, 2, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r23.accountService.account["account_name"], " is voting in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r23.accountService.account["voter_info"].proxy);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r23.accountService.account["voter_info"].producers.length > 0);
} }
function AccountComponent_div_4_mat_accordion_81_div_11_span_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AccountComponent_div_4_mat_accordion_81_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AccountComponent_div_4_mat_accordion_81_div_11_span_1_span_3_Template, 2, 0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producer_r29 = ctx.$implicit;
    const last_r30 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, producer_r29));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](producer_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !last_r30);
} }
function AccountComponent_div_4_mat_accordion_81_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountComponent_div_4_mat_accordion_81_div_11_span_1_Template, 4, 5, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r24.accountService.account["voter_info"].producers);
} }
function AccountComponent_div_4_mat_accordion_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-accordion", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-expansion-panel", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "fa-layers", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "fa-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "fa-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Votes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-panel-description", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AccountComponent_div_4_mat_accordion_81_div_10_Template, 4, 3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AccountComponent_div_4_mat_accordion_81_div_11_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r7.accountService.account["voter_info"].producers.length <= 0)("hideToggle", ctx_r7.accountService.account["voter_info"].producers.length <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r7.faCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r7.faVote)("inverse", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.accountService.account["voter_info"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.accountService.account["voter_info"].producers.length > 0);
} }
const _c1 = function (a0, a1) { return { "pulse": a0, "red-dot": a1 }; };
function AccountComponent_div_4_div_93_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountComponent_div_4_div_93_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r32.accountService.toggleStreaming(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " action live streaming ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.accountService.streamClientStatus ? "enabled" : "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](2, _c1, ctx_r8.accountService.streamClientStatus, !ctx_r8.accountService.streamClientStatus));
} }
const _c2 = function () { return { "min-width": "100px" }; };
function AccountComponent_div_4_th_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " TX");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c2));
} }
function AccountComponent_div_4_td_97_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "fa-icon", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r35.faClock);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (action_r34["block_num"] - ctx_r35.accountService.libNum) / 2, "s ");
} }
const _c3 = function (a1) { return ["/transaction", a1]; };
function AccountComponent_div_4_td_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountComponent_div_4_td_97_span_1_Template, 3, 2, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r34 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.accountService.libNum < action_r34["block_num"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c3, action_r34["trx_id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", action_r34["trx_id"].slice(0, 8), "... ");
} }
const _c4 = function () { return { "padding-left": "14px", "padding-right": "14px", "min-width": "100px" }; };
const _c5 = function () { return { "min-width": "240px" }; };
function AccountComponent_div_4_th_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c4))("ngStyle.gt-sm", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c5));
} }
const _c6 = function () { return { "padding-left": "14px", "padding-right": "14px" }; };
const _c7 = function () { return { "padding": "0" }; };
function AccountComponent_div_4_td_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c7))("ngClass.gt-sm", "action-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](action_r37["act"]["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, action_r37["act"]["account"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", action_r37["act"]["account"], " ");
} }
function AccountComponent_div_4_th_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_1_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const subitem_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u2022 ", subitem_r47, "");
} }
const _c8 = function (a0) { return { "data-item": a0 }; };
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_1_div_4_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const elem_r52 = ctx.$implicit;
    const subitem_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c8, ctx_r51.objectKeyCount(subitem_r47) > 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", elem_r52.key, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r51.stringifyObject(elem_r52.value), " ");
} }
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_1_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_1_div_4_ng_container_2_div_1_Template, 6, 5, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const subitem_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, subitem_r47));
} }
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_1_div_4_ng_container_1_Template, 4, 1, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_1_div_4_ng_container_2_Template, 3, 3, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r47 = ctx.$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r46.getType(subitem_r47) === "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r46.getType(subitem_r47) === "object");
} }
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_1_div_4_Template, 3, 2, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", item_r43.key, " [", item_r43.value.length, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r43.value);
} }
const _c9 = function (a1) { return ["/evm/address", a1]; };
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_ng_container_1_span_5_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c9, item_r43.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r43.value);
} }
const _c10 = function (a1) { return ["/evm/transaction", a1]; };
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_ng_container_1_span_5_ng_template_2_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c10, item_r43.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r43.value, "");
} }
const _c11 = function (a1) { return ["/evm/block", a1]; };
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_ng_container_1_span_5_ng_template_2_ng_template_1_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](6).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c11, item_r43.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r43.value, "");
} }
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_ng_container_1_span_5_ng_template_2_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](6).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (item_r43.value / 1000000000000000000).toFixed(4), " TLOS");
} }
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_ng_container_1_span_5_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_ng_container_1_span_5_ng_template_2_ng_template_1_a_0_Template, 2, 4, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_ng_container_1_span_5_ng_template_2_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 105, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r43.key === "block")("ngIfElse", _r68);
} }
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_ng_container_1_span_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_ng_container_1_span_5_ng_template_2_a_0_Template, 2, 4, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_ng_container_1_span_5_ng_template_2_ng_template_1_Template, 3, 2, "ng-template", null, 104, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r43.key === "hash")("ngIfElse", _r64);
} }
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_ng_container_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_ng_container_1_span_5_a_1_Template, 2, 4, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_ng_container_1_span_5_ng_template_2_Template, 3, 2, "ng-template", null, 103, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r43.key === "to" || item_r43.key === "from")("ngIfElse", _r60);
} }
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_ng_container_1_span_5_Template, 4, 2, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r43.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r43.value);
} }
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_2_ng_template_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r43.value);
} }
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_2_ng_template_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_2_ng_template_0_span_3_Template, 2, 1, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_2_ng_template_0_span_4_Template, 2, 0, "span", 93);
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r43.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r43.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !item_r43.value);
} }
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_2_ng_template_0_Template, 5, 3, "ng-template", null, 106, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
} }
const _c12 = function () { return ["to", "from", "hash", "value", "block"]; };
function AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_ng_container_1_Template, 6, 2, "ng-container", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_2_Template, 2, 0, undefined, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const action_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", action_r38["act"]["account"] === "eosio.evm" && action_r38["act"]["name"] === "raw" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c12).includes(item_r43.key))("ngIfElse", ctx_r45.elseBlock);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", action_r38["act"]["account"] !== "eosio.evm" && action_r38["act"]["name"] !== "raw");
} }
function AccountComponent_div_4_td_103_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_1_Template, 5, 3, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AccountComponent_div_4_td_103_ng_container_1_div_1_ng_container_2_Template, 3, 4, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = ctx.$implicit;
    const action_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c8, ctx_r41.objectKeyCount(action_r38["act"]["data"]) > 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r41.isArray(item_r43.value) && action_r38["act"]["account"] !== "eosio.evm" && action_r38["act"]["name"] !== "raw");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r41.isArray(item_r43.value));
} }
function AccountComponent_div_4_td_103_ng_container_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", action_r38["act"]["data"], " ");
} }
function AccountComponent_div_4_td_103_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountComponent_div_4_td_103_ng_container_1_div_1_Template, 3, 5, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AccountComponent_div_4_td_103_ng_container_1_span_3_Template, 2, 1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const action_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, action_r38["act"]["data"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r39.getType(action_r38["act"]["data"]) === "string");
} }
function AccountComponent_div_4_td_103_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
const _c13 = function () { return { "padding": "10px 10px 7px 0" }; };
function AccountComponent_div_4_td_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountComponent_div_4_td_103_ng_container_1_Template, 4, 4, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AccountComponent_div_4_td_103_ng_container_2_Template, 1, 0, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c13));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.detailedView);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r14.detailedView);
} }
const _c14 = function () { return { "min-width": "70px" }; };
function AccountComponent_div_4_th_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Block & Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c14));
} }
function AccountComponent_div_4_td_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r87 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", action_r87["block_num"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r16.formatDate(action_r87["@timestamp"]), "");
} }
function AccountComponent_div_4_tr_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 110);
} }
function AccountComponent_div_4_tr_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 111);
} }
const _c15 = function () { return [10, 20, 50, 100]; };
function AccountComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AccountComponent_div_4_div_8_Template, 5, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AccountComponent_div_4_div_9_Template, 5, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "CPU");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "mat-progress-bar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Self-staked:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Staked by others:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Total in CPU:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "NET");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](46, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "mat-progress-bar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Self-staked:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](56, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Staked by others:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](62, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Total in NET:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](68, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "RAM");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](75, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "mat-progress-bar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, AccountComponent_div_4_mat_card_80_Template, 9, 7, "mat-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](81, AccountComponent_div_4_mat_accordion_81_Template, 12, 8, "mat-accordion", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "fa-layers", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](86, "fa-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "fa-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Last Irreversible Block: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "strong", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](93, AccountComponent_div_4_div_93_Template, 5, 5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](95, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](96, AccountComponent_div_4_th_96_Template, 2, 2, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](97, AccountComponent_div_4_td_97_Template, 4, 5, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](98, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](99, AccountComponent_div_4_th_99_Template, 2, 4, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](100, AccountComponent_div_4_td_100_Template, 7, 10, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](101, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](102, AccountComponent_div_4_th_102_Template, 2, 0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](103, AccountComponent_div_4_td_103_Template, 3, 4, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](104, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](105, AccountComponent_div_4_th_105_Template, 2, 2, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](106, AccountComponent_div_4_td_106_Template, 5, 2, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](107, AccountComponent_div_4_tr_107_Template, 1, 0, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](108, AccountComponent_div_4_tr_108_Template, 1, 0, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "mat-paginator", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function AccountComponent_div_4_Template_mat_paginator_page_109_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r89.changePage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountComponent_div_4_Template_button_click_110_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r90); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r91.accountService.loadMoreActions(ctx_r91.accountName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, " load more actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r3.faUserCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.accountService.account["account_name"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.creationData && ctx_r3.creationData.creator);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.creationData && ctx_r3.creationData.timestamp);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 42, ctx_r3.accountService.account["cpu_limit"]["used"] / ctx_r3.accountService.account["cpu_limit"]["max"] * 100, "1.0-2"), "% used");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r3.convertMicroS(ctx_r3.accountService.account["cpu_limit"]["used"]), " / ", ctx_r3.convertMicroS(ctx_r3.accountService.account["cpu_limit"]["max"]), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r3.accountService.account["cpu_limit"]["used"] / ctx_r3.accountService.account["cpu_limit"]["max"] * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](27, 45, ctx_r3.myCpuBalance(), "1.0-" + ctx_r3.systemPrecision), " ", ctx_r3.systemSymbol, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](33, 48, ctx_r3.cpuByOthers(), "1.0-" + ctx_r3.systemPrecision), " ", ctx_r3.systemSymbol, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](39, 51, ctx_r3.cpuBalance(), "1.0-" + ctx_r3.systemPrecision), " ", ctx_r3.systemSymbol, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](46, 54, ctx_r3.accountService.account["net_limit"]["used"] / ctx_r3.accountService.account["net_limit"]["max"] * 100, "1.0-2"), "% used");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r3.convertBytes(ctx_r3.accountService.account["net_limit"]["used"]), " / ", ctx_r3.convertBytes(ctx_r3.accountService.account["net_limit"]["max"]), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r3.accountService.account["net_limit"]["used"] / ctx_r3.accountService.account["net_limit"]["max"] * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](56, 57, ctx_r3.myNetBalance(), "1.0-" + ctx_r3.systemPrecision), " ", ctx_r3.systemSymbol, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](62, 60, ctx_r3.netByOthers(), "1.0-" + ctx_r3.systemPrecision), " ", ctx_r3.systemSymbol, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](68, 63, ctx_r3.netBalance(), "1.0-" + ctx_r3.systemPrecision), " ", ctx_r3.systemSymbol, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](75, 66, ctx_r3.accountService.account["ram_usage"] / ctx_r3.accountService.account["ram_quota"] * 100), "% used");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r3.convertBytes(ctx_r3.accountService.account["ram_usage"]), " / ", ctx_r3.convertBytes(ctx_r3.accountService.account["ram_quota"]), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r3.accountService.account["ram_usage"] / ctx_r3.accountService.account["ram_quota"] * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.isQueryingTokenValueEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.accountService.account["voter_info"] && (ctx_r3.accountService.account["voter_info"].proxy || ctx_r3.accountService.account["voter_info"].producers.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r3.faCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r3.faHistory)("inverse", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.accountService.libNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.accountService.streamClientLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r3.accountService.tableDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.columnsToDisplay)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r3.columnsToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](68, _c15))("length", ctx_r3.accountService.tableDataSource.filteredData.length);
} }
class AccountComponent {
    constructor(activatedRoute, accountService, chainData, title) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.chainData = chainData;
        this.title = title;
        // FontAwesome Icons
        this.faClock = _fortawesome_free_solid_svg_icons_faClock__WEBPACK_IMPORTED_MODULE_5__.faClock;
        this.faUserCircle = _fortawesome_free_solid_svg_icons_faUserCircle__WEBPACK_IMPORTED_MODULE_6__.faUserCircle;
        this.faCircle = _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_7__.faCircle;
        this.faStar = _fortawesome_free_solid_svg_icons_faStar__WEBPACK_IMPORTED_MODULE_8__.faStar;
        this.faLink = _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_9__.faLink;
        this.faHistory = _fortawesome_free_solid_svg_icons_faHistory__WEBPACK_IMPORTED_MODULE_10__.faHistory;
        this.faChevronRight = _fortawesome_free_solid_svg_icons_faChevronRight__WEBPACK_IMPORTED_MODULE_11__.faChevronRight;
        this.faChevronDown = _fortawesome_free_solid_svg_icons_faChevronDown__WEBPACK_IMPORTED_MODULE_12__.faChevronDown;
        this.faSadTear = _fortawesome_free_solid_svg_icons_faSadTear__WEBPACK_IMPORTED_MODULE_13__.faSadTear;
        this.faKey = _fortawesome_free_solid_svg_icons_faKey__WEBPACK_IMPORTED_MODULE_14__.faKey;
        this.faUser = _fortawesome_free_solid_svg_icons_faUser__WEBPACK_IMPORTED_MODULE_15__.faUser;
        this.faVote = _fortawesome_free_solid_svg_icons_faVoteYea__WEBPACK_IMPORTED_MODULE_16__.faVoteYea;
        this.faQuestionCircle = _fortawesome_free_regular_svg_icons_faQuestionCircle__WEBPACK_IMPORTED_MODULE_17__.faQuestionCircle;
        this.columnsToDisplay = ['trx_id', 'action', 'data', 'block_num'];
        this.detailedView = true;
        this.systemPrecision = 4;
        this.systemSymbol = '';
        this.creationData = {
            creator: undefined,
            timestamp: undefined
        };
        this.systemTokenContract = 'eosio.token';
        this.hasChild = (_, node) => node.expandable;
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_18__.FlatTreeControl(node => node.level, node => node.expandable);
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__.MatTreeFlattener(this.transformer, node => node.level, node => node.expandable, node => node.children);
        this.featureFlagClient = new src_app_services_launch_darkly_launch_darkly_service__WEBPACK_IMPORTED_MODULE_0__.LaunchDarklyService;
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    }
    ngOnDestroy() {
        console.log('ngOnDestroy');
        this.accountService.disconnectStream();
    }
    transformer(node, level) {
        return Object.assign({ expandable: !!node.children && node.children.length > 0, perm_name: node.perm_name, level }, node);
    }
    objectKeyCount(obj) {
        try {
            return Object.keys(obj).length;
        }
        catch (e) {
            return 0;
        }
    }
    ngOnInit() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.isQueryingTokenValueEnabled = yield this.featureFlagClient.variation(src_app_services_launch_darkly_featureFlags__WEBPACK_IMPORTED_MODULE_1__.FeatureFlagName.IsQueryingTokenValueEnabled);
            this.systemAccounts = JSON.parse((_a = (yield this.featureFlagClient.variation(src_app_services_launch_darkly_featureFlags__WEBPACK_IMPORTED_MODULE_1__.FeatureFlagName.VoiceSystemAccounts))) !== null && _a !== void 0 ? _a : '[]');
            this.activatedRoute.params.subscribe((routeParams) => (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
                if (this.accountService.streamClientStatus) {
                    this.accountService.disconnectStream();
                }
                this.accountName = routeParams.account_name;
                if (yield this.accountService.loadAccountData(routeParams.account_name)) {
                    if (!this.chainData.chainInfoData.chain_name) {
                        this.title.setTitle(`${this.accountName} • Hyperion Explorer`);
                    }
                    else {
                        this.title.setTitle(`${this.accountName} • ${this.chainData.chainInfoData.chain_name} Hyperion Explorer`);
                    }
                    const customCoreToken = this.chainData.chainInfoData.custom_core_token;
                    if (customCoreToken && customCoreToken !== '') {
                        const parts = this.chainData.chainInfoData.custom_core_token.split('::');
                        this.systemSymbol = parts[1];
                        this.systemTokenContract = parts[0];
                        const coreBalance = this.accountService.jsonData.tokens.find((v) => {
                            return v.symbol === this.systemSymbol && v.contract === this.systemTokenContract;
                        });
                        if (coreBalance) {
                            this.accountService.account.core_liquid_balance = coreBalance.amount + ' ' + this.systemSymbol;
                        }
                    }
                    else {
                        this.systemSymbol = this.getSymbol(this.accountService.account.core_liquid_balance);
                    }
                    this.systemPrecision = this.getPrecision(this.accountService.account.core_liquid_balance);
                    if (this.systemSymbol === null) {
                        try {
                            this.systemSymbol = this.getSymbol(this.accountService.account.total_resources.cpu_weight);
                            if (this.systemSymbol === null) {
                                this.systemSymbol = 'SYS';
                            }
                        }
                        catch (e) {
                            this.systemSymbol = 'SYS';
                        }
                    }
                    this.processPermissions();
                    setTimeout(() => {
                        this.accountService.tableDataSource.sort = this.sort;
                        this.accountService.tableDataSource.paginator = this.paginator;
                    }, 500);
                    this.creationData = yield this.accountService.getCreator(routeParams.account_name);
                }
            }));
        });
    }
    getPrecision(asset) {
        if (asset) {
            try {
                return asset.split(' ')[0].split('.')[1].length;
            }
            catch (e) {
                return 4;
            }
        }
        else {
            return 4;
        }
    }
    getSymbol(asset) {
        if (asset) {
            try {
                return asset.split(' ')[1];
            }
            catch (e) {
                return null;
            }
        }
        else {
            return null;
        }
    }
    liquidBalance() {
        if (this.accountService.account.core_liquid_balance) {
            return parseFloat(this.accountService.account.core_liquid_balance.split(' ')[0]);
        }
        return 0;
    }
    myCpuBalance() {
        if (this.accountService.account.self_delegated_bandwidth) {
            return parseFloat(this.accountService.account.self_delegated_bandwidth.cpu_weight.split(' ')[0]);
        }
        return 0;
    }
    myNetBalance() {
        if (this.accountService.account.self_delegated_bandwidth) {
            return parseFloat(this.accountService.account.self_delegated_bandwidth.net_weight.split(' ')[0]);
        }
        return 0;
    }
    cpuBalance() {
        if (this.accountService.account.total_resources) {
            return parseFloat(this.accountService.account.total_resources.cpu_weight.split(' ')[0]);
        }
        return 0;
    }
    netBalance() {
        if (this.accountService.account.total_resources) {
            return parseFloat(this.accountService.account.total_resources.net_weight.split(' ')[0]);
        }
        return 0;
    }
    totalBalance() {
        const liquid = this.liquidBalance();
        const cpu = this.myCpuBalance();
        const net = this.myNetBalance();
        return liquid + cpu + net;
    }
    stakedBalance() {
        const cpu = this.myCpuBalance();
        const net = this.myNetBalance();
        return cpu + net;
    }
    cpuByOthers() {
        const cpu = this.cpuBalance();
        const mycpu = this.myCpuBalance();
        return cpu - mycpu;
    }
    netByOthers() {
        const net = this.netBalance();
        const mynet = this.myNetBalance();
        return net - mynet;
    }
    stakedbyOthers() {
        const cpu = this.cpuBalance();
        const net = this.netBalance();
        const mycpu = this.myCpuBalance();
        const mynet = this.myNetBalance();
        return (cpu + net) - (mycpu + mynet);
    }
    refundBalance() {
        let cpuRefund = 0;
        let netRefund = 0;
        if (this.accountService.account.refund_request) {
            cpuRefund = parseFloat(this.accountService.account.refund_request.cpu_amount.split(' ')[0]);
            netRefund = parseFloat(this.accountService.account.refund_request.net_amount.split(' ')[0]);
        }
        return cpuRefund + netRefund;
    }
    formatDate(date) {
        return new Date(date).toLocaleString();
    }
    getChildren(arr, parent) {
        return arr.filter(value => value.parent === parent).map((value) => {
            const children = this.getChildren(arr, value.perm_name);
            if (children.length > 0) {
                value.children = children;
            }
            return value;
        });
    }
    processPermissions() {
        if (this.accountService.account) {
            const permissions = this.accountService.account.permissions;
            if (permissions) {
                try {
                    this.dataSource.data = this.getChildren(permissions, '');
                    this.treeControl.expand(this.treeControl.dataNodes[0]);
                    this.treeControl.expand(this.treeControl.dataNodes[1]);
                }
                catch (e) {
                    console.log(e);
                    this.dataSource.data = [];
                }
            }
        }
    }
    isArray(value) {
        return value !== null && typeof value === 'object' && value.length > 0;
    }
    getType(subitem) {
        return typeof subitem;
    }
    stringifyObject(subitem) {
        return JSON.stringify(subitem, null, 2);
    }
    convertBytes(bytes) {
        if (bytes > (Math.pow(1024, 3))) {
            return (bytes / (Math.pow(1024, 3))).toFixed(2) + ' GB';
        }
        if (bytes > (Math.pow(1024, 2))) {
            return (bytes / (Math.pow(1024, 2))).toFixed(2) + ' MB';
        }
        if (bytes > 1024) {
            return (bytes / (1024)).toFixed(2) + ' KB';
        }
        return bytes + ' bytes';
    }
    convertMicroS(micros) {
        let int = 0;
        let remainder = 0;
        const calcSec = Math.pow(1000, 2);
        const calcMin = calcSec * 60;
        const calcHour = calcMin * 60;
        if (micros > calcHour) {
            int = Math.floor(micros / calcHour);
            remainder = micros % calcHour;
            return int + 'h ' + Math.round(remainder / calcMin) + 'min';
        }
        if (micros > calcMin) {
            int = Math.floor(micros / calcMin);
            remainder = micros % calcMin;
            return int + 'min ' + Math.round(remainder / calcSec) + 's';
        }
        if (micros > calcSec) {
            return (micros / calcSec).toFixed(2) + 's';
        }
        if (micros > 1000) {
            return (micros / (1000)).toFixed(2) + 'ms';
        }
        return micros + 'µs';
    }
    changePage(event) {
        // disable streaming if enabled
        if (this.accountService.streamClientStatus) {
            this.accountService.toggleStreaming();
        }
        const maxPages = Math.floor(event.length / event.pageSize);
        console.log(event);
        console.log(`${event.pageIndex} / ${maxPages}`);
        try {
            if (event.pageIndex === maxPages - 1) {
                this.accountService.loadMoreActions(this.accountName).catch(console.log);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_chain_service__WEBPACK_IMPORTED_MODULE_3__.ChainService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.Title)); };
AccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], viewQuery: function AccountComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 5, vars: 4, consts: [["mode", "indeterminate", 3, "diameter", 4, "ngIf"], [1, "container"], ["fxLayout", "column", "fxLayoutAlign", "start center", "fxLayoutGap", "15px", "style", "height: 100%", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start center", "fxLayoutGap", "15px", 4, "ngIf"], ["mode", "indeterminate", 3, "diameter"], ["fxLayout", "column", "fxLayoutAlign", "start center", "fxLayoutGap", "15px", 2, "height", "100%"], [1, "width-100"], [1, "faded"], [2, "margin-right", "5px", 3, "icon"], ["fxLayout", "column", "fxLayoutAlign", "start center", "fxLayoutGap", "15px"], ["fxFlex", "100", "fxFlexFill", ""], [2, "letter-spacing", "1px"], ["fxLayout.gt-xs", "row", "fxLayoutAlign.gt-xs", "space-between start", "fxLayoutGap.gt-xs", "30px", "fxLayout.lt-sm", "column", "fxLayoutAlign.lt-sm", "start stretch", "fxLayoutGap.lt-sm", "20px"], ["fxLayout", "column", "fxLayoutAlign", "start start", "fxFlex.gt-xs", "316px", "fxFlexFill", "", 1, "mt-7", 2, "height", "100%"], [1, "width-100", 2, "margin-top", "12px"], ["class", "mt-7 width-100", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxFlex", "grow"], ["fxFlex.gt-sm", "287px", "fxFlex.lt-md", "100", "ngStyle.gt-sm", "margin-right: 40px", 1, "full-width"], [1, "title"], [1, "faded", "used"], [1, "values", "float-r"], ["mode", "determinate", 1, "progress-bar", 3, "value"], [1, "small-info"], [1, "m-bottom"], [1, "float-r"], ["fxFlex.gt-sm", "287px", "fxFlex.lt-md", "100", "ngClass.lt-md", "mt-30", 1, "full-width", "mt-responsive"], ["fxFlex", "100", 1, "mt-30"], [1, "title", "mt-6"], ["fxLayout.gt-sm", "row", "fxLayoutAlign.gt-sm", "space-between", "fxLayout.lt-md", "column", "fxLayoutAlign.lt-md", "start auto", "fxLayoutGap", "10px", "fxFlexFill", "", "fxFlex", "auto"], ["fxFlex.gt-sm", "25", "ngClass.gt-sm", "middle-card", 4, "ngIf"], ["class", "width-100 vote-card", 4, "ngIf"], ["fxFlexFill", "", "fxFlex", "100"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [2, "margin-top", "0"], [2, "margin-right", "5px", 3, "fixedWidth"], ["transform", "grow-3", 3, "icon"], ["transform", "shrink-5", 3, "icon", "inverse"], [1, "lib"], [1, "monospace"], ["class", "livestream", "matTooltip", "click to turn on/off", "matTooltipClass", "tooltip-bigger", 3, "click", 4, "ngIf"], ["mat-table", "", "matSort", "", "matSortActive", "block_num", "matSortStart", "desc", "matSortDirection", "desc", 1, "actions-table", 3, "dataSource"], ["matColumnDef", "trx_id"], ["mat-header-cell", "", 3, "ngStyle.gt-xs", 4, "matHeaderCellDef"], ["mat-cell", "", "data-label", "TX", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 3, "ngStyle.gt-xs", "ngStyle.gt-sm", 4, "matHeaderCellDef"], ["mat-cell", "", "data-label", "Action", 3, "ngStyle.gt-xs", 4, "matCellDef"], ["matColumnDef", "data"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "data-label", "Data", 3, "ngStyle.gt-xs", 4, "matCellDef"], ["matColumnDef", "block_num"], ["mat-header-cell", "", "mat-sort-header", "", 3, "ngStyle.gt-xs", 4, "matHeaderCellDef"], ["mat-cell", "", "data-label", "Block & Date", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "length", "page"], ["mat-stroked-button", "", "color", "primary", 1, "float-r", 2, "margin-right", "16px", 3, "click"], [1, "mt-7", "width-100"], [1, "float-r", "link-gray", 3, "routerLink"], ["fxFlex.gt-sm", "25", "ngClass.gt-sm", "middle-card"], ["matTooltip", "Only liquid balances are displayed", "matTooltipClass", "tooltip-bigger", 1, "faded", "float-r", "pointer", 3, "icon"], ["fxLayout.sm", "row wrap", "fxLayout.lt-sm", "column", "fxLayout.gt-sm", "column", "fxLayoutGap.sm", "43px", "fxLayoutGap.lt-sm", "10px", "fxLayoutGap.gt-sm", "10px", 4, "ngIf"], [4, "ngIf"], ["fxLayout.sm", "row wrap", "fxLayout.lt-sm", "column", "fxLayout.gt-sm", "column", "fxLayoutGap.sm", "43px", "fxLayoutGap.lt-sm", "10px", "fxLayoutGap.gt-sm", "10px"], ["fxFlex.sm", "0 0 calc((100% - 132px) / 3)", 4, "ngFor", "ngForOf"], ["fxFlex.sm", "0 0 calc((100% - 132px) / 3)"], [1, "token-cell"], [1, "faded", "monospace", "div-link", 3, "routerLink"], [1, "token-amount", 3, "ngClass.lt-sm"], [1, "token"], [1, "width-100", "vote-card"], [3, "disabled", "hideToggle"], [1, "vote-card-title"], ["transform", "shrink-4", 3, "icon", "inverse"], [2, "margin-top", "22px"], [1, "link-blue", 3, "routerLink"], [4, "ngFor", "ngForOf"], ["matTooltip", "click to turn on/off", "matTooltipClass", "tooltip-bigger", 1, "livestream", 3, "click"], [1, "w-500"], [1, "dot", 3, "ngClass"], ["mat-header-cell", "", 3, "ngStyle.gt-xs"], ["mat-cell", "", "data-label", "TX"], ["matTooltip", "time until irreversible", "matTooltipClass", "tooltip-bigger", 4, "ngIf"], ["matTooltip", "time until irreversible", "matTooltipClass", "tooltip-bigger"], [1, "accent", 2, "margin-right", "1px", 3, "icon"], ["mat-header-cell", "", 3, "ngStyle.gt-xs", "ngStyle.gt-sm"], ["mat-cell", "", "data-label", "Action", 3, "ngStyle.gt-xs"], [1, "action-cell", 3, "ngStyle.lt-md", "ngClass.gt-sm"], [1, "accent", "w-500"], [1, "w-500", "div-link", 3, "routerLink"], ["mat-header-cell", ""], ["mat-cell", "", "data-label", "Data", 3, "ngStyle.gt-xs"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "break-word", "style", "font-style: italic", 4, "ngIf"], [3, "ngClass"], ["style", "margin-top: 5px", 4, "ngFor", "ngForOf"], [2, "margin-top", "5px"], [2, "margin-left", "15px"], [1, "break-word"], [1, "w-500", 2, "margin-left", "15px"], [4, "ngIf", "ngIfElse"], ["class", "break-word", 4, "ngIf"], ["class", "link-blue", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["notAddress", ""], ["notHash", ""], ["notBlock", ""], ["elseBlock", ""], [1, "break-word", 2, "font-style", "italic"], ["mat-header-cell", "", "mat-sort-header", "", 3, "ngStyle.gt-xs"], ["mat-cell", "", "data-label", "Block & Date"], ["mat-header-row", ""], ["mat-row", ""]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AccountComponent_mat_progress_spinner_0_Template, 1, 1, "mat-progress-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AccountComponent_div_2_Template, 9, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AccountComponent_div_3_Template, 7, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AccountComponent_div_4_Template, 112, 69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.accountService.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.accountService.jsonData && ctx.accountService.loaded && !ctx.systemAccounts.includes(ctx.accountName));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !!ctx.systemAccounts && ctx.systemAccounts.includes(ctx.accountName));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.accountService.jsonData && ctx.accountService.loaded && !!ctx.systemAccounts && !ctx.systemAccounts.includes(ctx.accountName));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinner, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__.DefaultLayoutGapDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCard, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_29__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__.FlexFillDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_30__.DefaultStyleDirective, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__.MatProgressBar, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_30__.DefaultClassDirective, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_29__.FaLayersComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginator, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterLinkWithHref, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterLink, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__.MatExpansionPanelDescription, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.KeyValuePipe], styles: [".total-balance[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0,0,0,.12);\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.mt-7[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\n\n.mt-30[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 21px;\n  color: #00a6de;\n  font-weight: 500;\n}\n\n.used[_ngcontent-%COMP%] {\n  margin-left: 7px;\n}\n\n.values[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.small-info[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: 10px;\n  color: rgba(0,0,0,.45);\n}\n\n.display-block[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 0;\n}\n\n.actions-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  .bigger-tooltip {\n  font-size: 16px;\n}\n\n.middle-card[_ngcontent-%COMP%] {\n  max-height: 523px;\n  overflow-y: auto;\n}\n\n.token-cell[_ngcontent-%COMP%] {\n  margin-bottom: 11px;\n  border-bottom: 1px solid rgba(0,0,0,.12);\n  padding-bottom: 14px;\n  border-radius: 3px;\n}\n\n.token[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #00a6de;\n  font-weight: 500;\n}\n\n.faded[_ngcontent-%COMP%] {\n  color: #a4a4a4;\n}\n\n.permission-cell[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e2e2;\n  border-left: 1px solid #e2e2e2;\n  border-radius: 0 0 0 5px;\n  padding: 10px 0 8px 8px;\n  width: 100%;\n}\n\n.monospace[_ngcontent-%COMP%] {\n  font-family: 'Courier Prime', monospace;\n  font-size: 16px;\n}\n\n.m-left[_ngcontent-%COMP%] {\n  margin-left: 7px;\n}\n\n.m-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n\n.float-r[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.space-right[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.vote-card[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.vote-card-title[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n\n.action-cell[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 13px;\n  letter-spacing: 0.5px;\n}\n\n.action-border[_ngcontent-%COMP%] {\n  border: 1px solid #f0f0f0;\n  border-radius: 3px;\n}\n\n.data-item[_ngcontent-%COMP%] {\n  padding-bottom: 3px;\n}\n\n.dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.red-dot[_ngcontent-%COMP%] {\n  background: #de0000;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.off[_ngcontent-%COMP%] {\n  background-color: gray;\n}\n\n.livestream[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 7px;\n  font-size: 15px;\n}\n\n.pulse[_ngcontent-%COMP%] {\n  background: #00a6de;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 0 0 rgba(0, 166, 222, 0.5);\n  animation: pulse 2s infinite;\n}\n\n.pulse[_ngcontent-%COMP%]:hover {\n  animation: none;\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(0, 166, 222, 0.5);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(204,169,44, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(204,169,44, 0);\n  }\n}\n\n  .tooltip-bigger {\n  font-size: 13px;\n}\n\n\n\n@media (max-width: 599px) {\n  .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    height: auto;\n    position: sticky;\n    top: 0;\n    z-index: 2;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 1;\n    align-items: center;\n    padding: 1rem 0.5rem;\n    justify-content: space-around;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container[_ngcontent-%COMP%] {\n    padding-left: 15px;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container[_ngcontent-%COMP%]:not([mat-sort-header]), .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container.mat-sort-header-disabled[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container.mat-column-actions[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:not(.mat-column-actions) {\n    display: grid;\n    grid-template-columns: 50% 50%;\n    padding: 0.5rem;\n    text-align: left;\n    \n    word-break: break-word;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:not(.mat-column-actions)    > *[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:not(.mat-column-actions):before {\n    content: attr(data-label);\n    text-align: left;\n    font-size: 12px;\n    font-weight: 500;\n    color: rgba(0, 0, 0, 0.54);\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-column-actions[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    padding: 0 0.5rem;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-column-actions[_ngcontent-%COMP%] > button[_ngcontent-%COMP%] {\n    margin: 0.5rem 0;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:last-of-type   td[_ngcontent-%COMP%]:last-of-type {\n    border: none;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:not(:last-of-type)   td[_ngcontent-%COMP%]:last-of-type {\n    border-bottom: 0.5rem solid #e5e5e5;\n    padding-bottom: 20px !important;\n    margin-bottom: 20px;\n  }\n\n  .mat-card[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%] {\n    border: 0.5rem solid #fafafa;\n  }\n}\n\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%] {\n  color: rgba(0,0,0,.87);\n}\n\n@media (min-width: 960px) and (max-width: 1049px) {\n  .full-width[_ngcontent-%COMP%] {\n    flex: 1 1 100% !important;\n    box-sizing: border-box !important;\n    max-width: 100% !important;\n    min-width: unset !important;\n    margin-right: 0  !important;\n  }\n\n  .mt-responsive[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n\n.lib[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: 1px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  padding-bottom: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUF3QztFQUN4QyxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBYUE7RUFDRTtJQUVFLDBDQUEwQztFQUM1QztFQUNBO0lBRUUsMENBQTBDO0VBQzVDO0VBQ0E7SUFFRSx1Q0FBdUM7RUFDekM7QUFDRjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsbUJBQW1COztBQUNuQjtFQUNFO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsT0FBTztJQUNQLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBOzs7SUFHRSxhQUFhO0VBQ2Y7OztFQUdBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQywwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZiw0Q0FBNEM7RUFDNUMsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6ImFjY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3RhbC1iYWxhbmNlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYi01IHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubXQtNyB7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLm10LTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBjb2xvcjogIzAwYTZkZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnVzZWQge1xuICBtYXJnaW4tbGVmdDogN3B4O1xufVxuXG4udmFsdWVzIHtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNtYWxsLWluZm8ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC40NSk7XG59XG5cbi5kaXNwbGF5LWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uYWN0aW9ucy10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmJpZ2dlci10b29sdGlwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubWlkZGxlLWNhcmQge1xuICBtYXgtaGVpZ2h0OiA1MjNweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnRva2VuLWNlbGwge1xuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpO1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4udG9rZW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDBhNmRlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZmFkZWQge1xuICBjb2xvcjogI2E0YTRhNDtcbn1cblxuLnBlcm1pc3Npb24tY2VsbCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlMmUyO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMmUyZTI7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDVweDtcbiAgcGFkZGluZzogMTBweCAwIDhweCA4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9ub3NwYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIFByaW1lJywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tLWxlZnQge1xuICBtYXJnaW4tbGVmdDogN3B4O1xufVxuXG4ubS1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5mbG9hdC1yIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc3BhY2UtcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLnZvdGUtY2FyZCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi52b3RlLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbi5hY3Rpb24tY2VsbCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLmFjdGlvbi1ib3JkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5kYXRhLWl0ZW0ge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufVxuXG4uZG90IHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ucmVkLWRvdCB7XG4gIGJhY2tncm91bmQ6ICNkZTAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ub2ZmIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuLmxpdmVzdHJlYW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ucHVsc2Uge1xuICBiYWNrZ3JvdW5kOiAjMDBhNmRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDAgcmdiYSgwLCAxNjYsIDIyMiwgMC41KTtcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbn1cblxuLnB1bHNlOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiBub25lO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMTY2LCAyMjIsIDAuNSk7XG4gIH1cbiAgNzAlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyMDQsMTY5LDQ0LCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyMDQsMTY5LDQ0LCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAxNjYsIDIyMiwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMTY2LCAyMjIsIDAuNSk7XG4gIH1cbiAgNzAlIHtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyMDQsMTY5LDQ0LCAwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjA0LDE2OSw0NCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjA0LDE2OSw0NCwgMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDIwNCwxNjksNDQsIDApO1xuICB9XG59XG5cbjo6bmctZGVlcCAudG9vbHRpcC1iaWdnZXIge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi8qdGFibGUgcmVzcG9uc2l2ZSovXG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLm1hdC10YWJsZSAubWF0LWhlYWRlci1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAyO1xuICB9XG5cbiAgLm1hdC10YWJsZSAubWF0LWhlYWRlci1yb3cgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuXG4gIC5tYXQtdGFibGUgLm1hdC1oZWFkZXItcm93IHRoLm1hdC1oZWFkZXItY2VsbD4ubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgLm1hdC10YWJsZSAubWF0LWhlYWRlci1yb3cgdGgubWF0LWhlYWRlci1jZWxsPi5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyOm5vdChbbWF0LXNvcnQtaGVhZGVyXSksXG4gIC5tYXQtdGFibGUgLm1hdC1oZWFkZXItcm93IHRoLm1hdC1oZWFkZXItY2VsbD4ubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lci5tYXQtc29ydC1oZWFkZXItZGlzYWJsZWQsXG4gIC5tYXQtdGFibGUgLm1hdC1oZWFkZXItcm93IHRoLm1hdC1oZWFkZXItY2VsbD4ubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lci5tYXQtY29sdW1uLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuXG4gIC5tYXQtdGFibGUgLm1hdC1yb3cge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5tYXQtdGFibGUgLm1hdC1yb3cgdGQubWF0LWNlbGw6bm90KC5tYXQtY29sdW1uLWFjdGlvbnMpIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAvKnRleHQtYWxpZ246IHJpZ2h0OyovXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgfVxuXG4gIC5tYXQtdGFibGUgLm1hdC1yb3cgdGQubWF0LWNlbGw6bm90KC5tYXQtY29sdW1uLWFjdGlvbnMpID4gKiB7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG4gIH1cblxuICAubWF0LXRhYmxlIC5tYXQtcm93IHRkLm1hdC1jZWxsOm5vdCgubWF0LWNvbHVtbi1hY3Rpb25zKTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgfVxuXG4gIC5tYXQtdGFibGUgLm1hdC1yb3cgdGQubWF0LWNvbHVtbi1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICB9XG5cbiAgLm1hdC10YWJsZSAubWF0LXJvdyB0ZC5tYXQtY29sdW1uLWFjdGlvbnM+YnV0dG9uIHtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xuICB9XG5cbiAgLm1hdC10YWJsZSAubWF0LXJvdzpsYXN0LW9mLXR5cGUgdGQ6bGFzdC1vZi10eXBlIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICAubWF0LXRhYmxlIC5tYXQtcm93Om5vdCg6bGFzdC1vZi10eXBlKSB0ZDpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1ib3R0b206IDAuNXJlbSBzb2xpZCAjZTVlNWU1O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5tYXQtY2FyZCAubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LXRhYmxlIHtcbiAgICBib3JkZXI6IDAuNXJlbSBzb2xpZCAjZmFmYWZhO1xuICB9XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjg3KTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTA0OXB4KSB7XG4gIC5mdWxsLXdpZHRoIHtcbiAgICBmbGV4OiAxIDEgMTAwJSAhaW1wb3J0YW50O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXJlc3BvbnNpdmUge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbn1cblxuLmxpYiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 3423:
/*!*********************************************************!*\
  !*** ./src/app/search-results/block/block.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockComponent": () => (/* binding */ BlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCircle */ 8935);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCube */ 9773);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHourglassStart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHourglassStart */ 9807);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faLock */ 9622);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHistory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHistory */ 175);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSpinner */ 2328);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSadTear__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSadTear */ 8026);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faChevronRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faChevronRight */ 506);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faChevronDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faChevronDown */ 1075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/account.service */ 9876);
/* harmony import */ var _services_chain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chain.service */ 5955);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ 9243);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);

























function BlockComponent_mat_progress_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-spinner", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 45);
} }
function BlockComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " We're sorry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "We are not currently supporting the searches of specific blocks");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faSadTear);
} }
function BlockComponent_div_3_mat_chip_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Irreversible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r3.faLock);
} }
function BlockComponent_div_3_mat_chip_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r4.faHourglass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Pending (", ctx_r4.countdownTimer, "s) ");
} }
function BlockComponent_div_3_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BlockComponent_div_3_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "th", 44);
} }
function BlockComponent_div_3_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "fa-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r18 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r7.expandedElement === transaction_r18 ? ctx_r7.faChevronDown : ctx_r7.faChevronRight);
} }
function BlockComponent_div_3_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "TX ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/transaction", a1]; };
function BlockComponent_div_3_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, transaction_r19.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](transaction_r19.id);
} }
function BlockComponent_div_3_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Root Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { "min-width": "170px" }; };
const _c2 = function (a1) { return ["/account", a1]; };
function BlockComponent_div_3_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1))("ngClass.gt-sm", "action-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](transaction_r20.actions[0].action);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c2, transaction_r20.actions[0].account));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](transaction_r20.actions[0].account);
} }
function BlockComponent_div_3_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "# Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BlockComponent_div_3_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", transaction_r21["actions"].length, " ");
} }
function BlockComponent_div_3_td_49_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c3 = function () { return { "padding-right": "14px" }; };
function BlockComponent_div_3_td_49_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](action_r31.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c2, action_r31.account));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](action_r31.account);
} }
function BlockComponent_div_3_td_49_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c4 = function (a0) { return { "data-item": a0 }; };
function BlockComponent_div_3_td_49_td_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    const action_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c4, ctx_r33.objectKeyCount(action_r32["data"]) > 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r34.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r34.value);
} }
const _c5 = function () { return { "padding": "10px 14px 10px 0" }; };
function BlockComponent_div_3_td_49_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BlockComponent_div_3_td_49_td_8_div_1_Template, 6, 5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, action_r32["data"]));
} }
function BlockComponent_div_3_td_49_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Authorization");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BlockComponent_div_3_td_49_td_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const auth_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](auth_r38.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](auth_r38.value);
} }
const _c6 = function () { return { "padding": "10px 0 6px" }; };
function BlockComponent_div_3_td_49_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BlockComponent_div_3_td_49_td_11_div_1_Template, 6, 2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, action_r36["authorization"][0]));
} }
function BlockComponent_div_3_td_49_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 73);
} }
function BlockComponent_div_3_td_49_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 74);
} }
function BlockComponent_div_3_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "table", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](3, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BlockComponent_div_3_td_49_th_4_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BlockComponent_div_3_td_49_td_5_Template, 7, 7, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BlockComponent_div_3_td_49_th_7_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, BlockComponent_div_3_td_49_td_8_Template, 3, 5, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, BlockComponent_div_3_td_49_th_10_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, BlockComponent_div_3_td_49_td_11_Template, 3, 5, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BlockComponent_div_3_td_49_tr_12_Template, 1, 0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BlockComponent_div_3_td_49_tr_13_Template, 1, 0, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r22 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", ctx_r14.columnsToDisplay.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@detailExpand", transaction_r22 == ctx_r14.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", transaction_r22.actions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r14.columnsInside)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r14.columnsInside);
} }
function BlockComponent_div_3_tr_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 73);
} }
function BlockComponent_div_3_tr_51_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlockComponent_div_3_tr_51_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const myRowData_r40 = restoredCtx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r41.expandedElement = ctx_r41.expandedElement === myRowData_r40 ? null : myRowData_r40; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const myRowData_r40 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("expanded-row", ctx_r16.expandedElement === myRowData_r40);
} }
function BlockComponent_div_3_tr_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 76);
} }
const _c7 = function () { return ["expandedDetail"]; };
function BlockComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "fa-layers", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-chip-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BlockComponent_div_3_mat_chip_12_Template, 3, 1, "mat-chip", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BlockComponent_div_3_mat_chip_13_Template, 3, 2, "mat-chip", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Block ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Producer: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "fa-layers", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, BlockComponent_div_3_span_34_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](36, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, BlockComponent_div_3_th_37_Template, 1, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, BlockComponent_div_3_td_38_Template, 3, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](39, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, BlockComponent_div_3_th_40_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, BlockComponent_div_3_td_41_Template, 3, 4, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](42, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, BlockComponent_div_3_th_43_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, BlockComponent_div_3_td_44_Template, 7, 8, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](45, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, BlockComponent_div_3_th_46_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, BlockComponent_div_3_td_47_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](48, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, BlockComponent_div_3_td_49_Template, 14, 6, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, BlockComponent_div_3_tr_50_Template, 1, 0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, BlockComponent_div_3_tr_51_Template, 1, 2, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, BlockComponent_div_3_tr_52_Template, 1, 0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faBlock)("inverse", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.block.number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.accountService.libNum > ctx_r2.block["number"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.accountService.libNum < ctx_r2.block["number"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.block.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.block.producer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.formatDate(ctx_r2.block.timestamp));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faHistory)("inverse", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.block.transactions.length, " Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.block.transactions.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r2.block.transactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.columnsToDisplay)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r2.columnsToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c7));
} }
class BlockComponent {
    constructor(activatedRoute, accountService, chainData, title) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.chainData = chainData;
        this.title = title;
        this.columnsToDisplay = ['icon', 'id', 'root', 'action'];
        this.columnsInside = ['action', 'data', 'auth'];
        this.faCircle = _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_3__.faCircle;
        this.faBlock = _fortawesome_free_solid_svg_icons_faCube__WEBPACK_IMPORTED_MODULE_4__.faCube;
        this.faLock = _fortawesome_free_solid_svg_icons_faLock__WEBPACK_IMPORTED_MODULE_5__.faLock;
        this.faHourglass = _fortawesome_free_solid_svg_icons_faHourglassStart__WEBPACK_IMPORTED_MODULE_6__.faHourglassStart;
        this.faHistory = _fortawesome_free_solid_svg_icons_faHistory__WEBPACK_IMPORTED_MODULE_7__.faHistory;
        this.faChevronRight = _fortawesome_free_solid_svg_icons_faChevronRight__WEBPACK_IMPORTED_MODULE_8__.faChevronRight;
        this.faChevronDown = _fortawesome_free_solid_svg_icons_faChevronDown__WEBPACK_IMPORTED_MODULE_9__.faChevronDown;
        this.faSadTear = _fortawesome_free_solid_svg_icons_faSadTear__WEBPACK_IMPORTED_MODULE_10__.faSadTear;
        this.faSpinner = _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_11__.faSpinner;
        this.block = {
            transactions: [],
            status: '',
            number: 0
        };
        this.countdownTimer = 0;
    }
    objectKeyCount(obj) {
        try {
            return Object.keys(obj).length;
        }
        catch (e) {
            return 0;
        }
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((routeParams) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.blockNum = routeParams.block_num;
            this.block = yield this.accountService.loadBlockData(routeParams.block_num);
            if (!this.chainData.chainInfoData.chain_name) {
                this.title.setTitle(`#${routeParams.block_num} • Hyperion Explorer`);
            }
            else {
                this.title.setTitle(`#${routeParams.block_num} • ${this.chainData.chainInfoData.chain_name} Hyperion Explorer`);
            }
            if (this.block && this.block.status === 'pending') {
                yield this.reloadCountdownTimer();
                this.countdownLoop = setInterval(() => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                    this.countdownTimer--;
                    if (this.countdownTimer <= 0) {
                        yield this.reloadCountdownTimer();
                        if (this.accountService.libNum > this.block.number) {
                            clearInterval(this.countdownLoop);
                        }
                    }
                }), 1000);
            }
        }));
    }
    reloadCountdownTimer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.accountService.updateLib();
            this.countdownTimer = Math.ceil((this.block.number - this.accountService.libNum) / 2);
        });
    }
    ngOnDestroy() {
        if (this.countdownLoop) {
            clearInterval(this.countdownLoop);
        }
    }
    formatDate(date) {
        return new Date(date).toLocaleString();
    }
}
BlockComponent.ɵfac = function BlockComponent_Factory(t) { return new (t || BlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_chain_service__WEBPACK_IMPORTED_MODULE_1__.ChainService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.Title)); };
BlockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BlockComponent, selectors: [["app-block"]], decls: 4, vars: 3, consts: [["mode", "indeterminate", 3, "diameter", 4, "ngIf"], [1, "container"], ["fxLayout", "column", "style", "height: 100%", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "15px", "fxLayoutAlign", "start center", 4, "ngIf"], ["mode", "indeterminate", 3, "diameter"], ["fxLayout", "column", 2, "height", "100%"], [1, "faded"], [2, "margin-right", "5px", 3, "icon"], ["fxLayout", "column", "fxLayoutGap", "15px", "fxLayoutAlign", "start center"], ["fxFlex", "100", "fxFlexFill", ""], [2, "border-bottom", "1px solid #e4e4e4", "margin-bottom", "12px"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "10px"], [2, "margin-right", "5px", 3, "fixedWidth"], ["transform", "grow-1", 3, "icon"], ["transform", "shrink-4", 3, "icon", "inverse"], ["orientation", "vertical"], ["selected", "", 4, "ngIf"], ["color", "accent", "selected", "", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "10px"], [1, "w-500"], [1, "break-word"], [2, "margin-top", "0"], ["transform", "grow-3", 3, "icon"], ["transform", "shrink-5", 3, "icon", "inverse"], [4, "ngIf"], ["mat-table", "", "multiTemplateDataRows", "", 1, "transactions-table", 3, "dataSource"], ["matColumnDef", "icon"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "data-label", "Tap to see all actions", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-cell", "", "data-label", "TX ID", 4, "matCellDef"], ["matColumnDef", "root"], ["mat-header-cell", "", "style", "padding-left: 10px;", 4, "matHeaderCellDef"], ["mat-cell", "", "data-label", "Root Action", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", "style", "text-align: center", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "text-align: center", "data-label", "# Actions", 4, "matCellDef"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "element-row", 3, "expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "detail-row", 4, "matRowDef", "matRowDefColumns"], ["selected", ""], ["color", "accent", "selected", ""], ["mat-header-cell", ""], ["mat-cell", "", "data-label", "Tap to see all actions"], ["mat-icon-button", ""], [3, "icon"], ["mat-cell", "", "data-label", "TX ID"], [1, "link-blue", "break-word", 3, "routerLink"], ["mat-header-cell", "", 2, "padding-left", "10px"], ["mat-cell", "", "data-label", "Root Action"], [1, "action-cell", 3, "ngStyle.gt-xs", "ngClass.gt-sm"], [1, "accent", "w-500"], [1, "w-500", "div-link", 3, "routerLink"], ["mat-header-cell", "", 2, "text-align", "center"], ["mat-cell", "", "data-label", "# Actions", 2, "text-align", "center"], ["mat-cell", ""], [1, "element-detail"], ["mat-table", "", 1, "actions-table", 3, "dataSource"], ["mat-cell", "", "data-label", "Action", 3, "ngStyle.gt-xs", 4, "matCellDef"], ["matColumnDef", "data"], ["mat-cell", "", "data-label", "Data", 3, "ngStyle.gt-xs", 4, "matCellDef"], ["matColumnDef", "auth"], ["mat-cell", "", "data-label", "Authorization", 3, "ngStyle.gt-xs", 4, "matCellDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-cell", "", "data-label", "Action", 3, "ngStyle.gt-xs"], ["mat-cell", "", "data-label", "Data", 3, "ngStyle.gt-xs"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["mat-cell", "", "data-label", "Authorization", 3, "ngStyle.gt-xs"], ["class", "data-item", 4, "ngFor", "ngForOf"], [1, "data-item"], ["mat-header-row", ""], ["mat-row", ""], ["mat-row", "", 1, "element-row", 3, "click"], ["mat-row", "", 1, "detail-row"]], template: function BlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BlockComponent_mat_progress_spinner_0_Template, 1, 1, "mat-progress-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BlockComponent_div_2_Template, 7, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BlockComponent_div_3_Template, 53, 22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.accountService.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.block && ctx.accountService.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.block && ctx.accountService.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinner, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.FlexFillDirective, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FaLayersComponent, _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__.MatChipList, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatRowDef, _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__.MatChip, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatCell, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__.DefaultStyleDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__.DefaultClassDirective, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.KeyValuePipe], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 21px;\n  color: #00a6de;\n  font-weight: 500;\n}\n\n.used[_ngcontent-%COMP%] {\n  margin-left: 7px;\n}\n\n.faded[_ngcontent-%COMP%] {\n  color: #a4a4a4;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.actions-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n  margin: 5px 0 15px;\n  padding: 2px 0 1px;\n}\n\n.action-cell[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 13px;\n  letter-spacing: 0.5px;\n}\n\n.action-border[_ngcontent-%COMP%] {\n  border: 1px solid #f0f0f0;\n  border-radius: 3px;\n}\n\n.data-item[_ngcontent-%COMP%] {\n  padding-bottom: 4px;\n}\n\n\n\n.expanded-row[_ngcontent-%COMP%] {\n  background: whitesmoke;\n}\n\ntr.detail-row[_ngcontent-%COMP%] {\n  height: 0 !important;\n  background: whitesmoke;\n}\n\ntr.element-row[_ngcontent-%COMP%]:not(.expanded-row):hover {\n  background: whitesmoke;\n  cursor: pointer;\n}\n\ntr.element-row[_ngcontent-%COMP%]:not(.expanded-row):active {\n  background: #efefef;\n}\n\n.element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  max-width: 1118px;\n}\n\n.element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n\n\n\n\n@media (max-width: 599px) {\n  td.mat-cell[_ngcontent-%COMP%]:not(:last-of-type):not(:first-of-type) {\n    border-bottom-width: 1px !important;\n    border-bottom-style: solid;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    height: auto;\n    position: sticky;\n    top: 0;\n    z-index: 2;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container[_ngcontent-%COMP%] {\n    padding-left: 15px;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container[_ngcontent-%COMP%]:not([mat-sort-header]), .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container.mat-sort-header-disabled[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container.mat-column-actions[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:not(.mat-column-actions) {\n    display: grid;\n    grid-template-columns: 50% 50%;\n    padding: 0.5rem;\n    text-align: left;\n    word-break: break-word;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell.mat-column-expandedDetail[_ngcontent-%COMP%]:not(.mat-column-actions) {\n    display: grid;\n    grid-template-columns: 0 100%;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:not(.mat-column-actions)    > *[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:not(.mat-column-actions):before {\n    content: attr(data-label);\n    text-align: left;\n    font-size: 12px;\n    font-weight: 500;\n    color: rgba(0, 0, 0, 0.54);\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell.mat-column-icon[_ngcontent-%COMP%]:not(.mat-column-actions):before {\n    align-self: center;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-column-actions[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    padding: 0 0.5rem;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-column-actions[_ngcontent-%COMP%] > button[_ngcontent-%COMP%] {\n    margin: 0.5rem 0;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:last-of-type   td[_ngcontent-%COMP%]:last-of-type {\n    border: none;\n  }\n\n  \n    \n    \n    \n  \n\n  \n  \n  \n  \n  \n\n  .mat-table[_ngcontent-%COMP%]   .mat-column-expandedDetail[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:not(:last-of-type)   td[_ngcontent-%COMP%]:last-of-type {\n    border-bottom: 0.5rem solid #e5e5e5;\n    padding-bottom: 20px !important;\n    margin-bottom: 20px;\n  }\n\n  .mat-card[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%] {\n    border: 0.5rem solid #fafafa;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2NrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEseUNBQXlDOztBQUN6QyxxQkFBcUI7O0FBQ3JCLDBCQUEwQjs7QUFDMUIsTUFBTTs7QUFDTixJQUFJOztBQUNKLHNEQUFzRDs7QUFDdEQscUJBQXFCOztBQUNyQix3QkFBd0I7O0FBQ3hCLE1BQU07O0FBQ04sSUFBSTs7QUFDSix1REFBdUQ7O0FBQ3ZELHFCQUFxQjs7QUFDckIsd0JBQXdCOztBQUN4QixNQUFNOztBQUNOLElBQUk7O0FBRUosK0JBQStCOztBQUMvQixxQkFBcUI7O0FBQ3JCLHlCQUF5Qjs7QUFDekIsTUFBTTs7QUFDTixJQUFJOztBQUVKO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSx5QkFBeUI7O0FBQ3pCO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBLHVCQUF1Qjs7QUFFdkIsbUJBQW1COztBQUNuQjtFQUNFO0lBQ0UsbUNBQW1DO0lBQ25DLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBOzs7SUFHRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUEsMkRBQTJEO0lBQ3pELHVDQUF1QztJQUN2QyxtQ0FBbUM7SUFDbkMsdUJBQXVCO0VBQ3pCLElBQUk7O0VBRUosc0ZBQXNGO0VBQ3RGLHlDQUF5QztFQUN6QyxxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLElBQUk7O0VBRUo7SUFDRSxtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGIiwiZmlsZSI6ImJsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICBmb250LXNpemU6IDIxcHg7XG4gIGNvbG9yOiAjMDBhNmRlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udXNlZCB7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG5cbi5mYWRlZCB7XG4gIGNvbG9yOiAjYTRhNGE0O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7Ki9cbi8qICAuYWN0aW9ucy10YWJsZSB7Ki9cbi8qICAgIHBhZGRpbmc6IDMwcHggMTBweDsqL1xuLyogIH0qL1xuLyp9Ki9cbi8qQG1lZGlhIChtaW4td2lkdGg6IDU3N3B4KSBhbmQgKG1heC13aWR0aDogMTA0OXB4KSB7Ki9cbi8qICAuYWN0aW9ucy10YWJsZSB7Ki9cbi8qICAgIG1heC13aWR0aDogOTkycHg7Ki9cbi8qICB9Ki9cbi8qfSovXG4vKkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHsqL1xuLyogIC5hY3Rpb25zLXRhYmxlIHsqL1xuLyogICAgbWF4LXdpZHRoOiA4MDBweDsqL1xuLyogIH0qL1xuLyp9Ki9cblxuLypAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7Ki9cbi8qICAuYWN0aW9ucy10YWJsZSB7Ki9cbi8qICAgIG1heC13aWR0aDogMTEyOHB4OyovXG4vKiAgfSovXG4vKn0qL1xuXG4uYWN0aW9ucy10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogNXB4IDAgMTVweDtcbiAgcGFkZGluZzogMnB4IDAgMXB4O1xufVxuXG4uYWN0aW9uLWNlbGwge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5hY3Rpb24tYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uZGF0YS1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuLyp0YWJsZSBleHBhbmQgcm93IFNUQVJUKi9cbi5leHBhbmRlZC1yb3cge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuXG50ci5kZXRhaWwtcm93IHtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG5cbnRyLmVsZW1lbnQtcm93Om5vdCguZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudHIuZWxlbWVudC1yb3c6bm90KC5leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5lbGVtZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTExOHB4O1xufVxuXG4uZWxlbWVudC1kaWFncmFtIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiA4cHggMDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmVsZW1lbnQtc3ltYm9sIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmVsZW1lbnQtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi8qdGFibGUgZXhwYW5kIHJvdyBFTkQqL1xuXG4vKnRhYmxlIHJlc3BvbnNpdmUqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIHRkLm1hdC1jZWxsOm5vdCg6bGFzdC1vZi10eXBlKTpub3QoOmZpcnN0LW9mLXR5cGUpIHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgfVxuXG4gIC5tYXQtdGFibGUgLm1hdC1oZWFkZXItcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gIC5tYXQtdGFibGUgLm1hdC1oZWFkZXItcm93IHRoLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tYXQtdGFibGUgLm1hdC1oZWFkZXItcm93IHRoLm1hdC1oZWFkZXItY2VsbD4ubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgLm1hdC10YWJsZSAubWF0LWhlYWRlci1yb3cgdGgubWF0LWhlYWRlci1jZWxsPi5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyOm5vdChbbWF0LXNvcnQtaGVhZGVyXSksXG4gIC5tYXQtdGFibGUgLm1hdC1oZWFkZXItcm93IHRoLm1hdC1oZWFkZXItY2VsbD4ubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lci5tYXQtc29ydC1oZWFkZXItZGlzYWJsZWQsXG4gIC5tYXQtdGFibGUgLm1hdC1oZWFkZXItcm93IHRoLm1hdC1oZWFkZXItY2VsbD4ubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lci5tYXQtY29sdW1uLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWF0LXRhYmxlIC5tYXQtcm93IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAubWF0LXRhYmxlIC5tYXQtcm93IHRkLm1hdC1jZWxsOm5vdCgubWF0LWNvbHVtbi1hY3Rpb25zKSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgfVxuXG4gIC5tYXQtdGFibGUgLm1hdC1yb3cgdGQubWF0LWNlbGwubWF0LWNvbHVtbi1leHBhbmRlZERldGFpbDpub3QoLm1hdC1jb2x1bW4tYWN0aW9ucykge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwIDEwMCU7XG4gIH1cblxuICAubWF0LXRhYmxlIC5tYXQtcm93IHRkLm1hdC1jZWxsOm5vdCgubWF0LWNvbHVtbi1hY3Rpb25zKSA+ICoge1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICB9XG5cbiAgLm1hdC10YWJsZSAubWF0LXJvdyB0ZC5tYXQtY2VsbDpub3QoLm1hdC1jb2x1bW4tYWN0aW9ucyk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIH1cblxuICAubWF0LXRhYmxlIC5tYXQtcm93IHRkLm1hdC1jZWxsLm1hdC1jb2x1bW4taWNvbjpub3QoLm1hdC1jb2x1bW4tYWN0aW9ucyk6YmVmb3JlIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cblxuICAubWF0LXRhYmxlIC5tYXQtcm93IHRkLm1hdC1jb2x1bW4tYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgfVxuXG4gIC5tYXQtdGFibGUgLm1hdC1yb3cgdGQubWF0LWNvbHVtbi1hY3Rpb25zPmJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgfVxuXG4gIC5tYXQtdGFibGUgLm1hdC1yb3c6bGFzdC1vZi10eXBlIHRkOmxhc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgLyoubWF0LXRhYmxlIC5tYXQtcm93Om5vdCg6bGFzdC1vZi10eXBlKSB0ZDpsYXN0LW9mLXR5cGUgeyovXG4gICAgLypib3JkZXItYm90dG9tOiAwLjVyZW0gc29saWQgI2U1ZTVlNTsqL1xuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDsqL1xuICAgIC8qbWFyZ2luLWJvdHRvbTogMjBweDsqL1xuICAvKn0qL1xuXG4gIC8qLm1hdC10YWJsZSAubWF0LXJvdzpub3QoOmxhc3Qtb2YtdHlwZSkgLm1hdC1jb2x1bW4tZXhwYW5kZWREZXRhaWwgdGQ6bGFzdC1vZi10eXBlIHsqL1xuICAvKiAgYm9yZGVyLWJvdHRvbTogMC41cmVtIHNvbGlkICNlNWU1ZTU7Ki9cbiAgLyogIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7Ki9cbiAgLyogIG1hcmdpbi1ib3R0b206IDIwcHg7Ki9cbiAgLyp9Ki9cblxuICAubWF0LXRhYmxlIC5tYXQtY29sdW1uLWV4cGFuZGVkRGV0YWlsIC5tYXQtcm93Om5vdCg6bGFzdC1vZi10eXBlKSB0ZDpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1ib3R0b206IDAuNXJlbSBzb2xpZCAjZTVlNWU1O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5tYXQtY2FyZCAubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LXRhYmxlIHtcbiAgICBib3JkZXI6IDAuNXJlbSBzb2xpZCAjZmFmYWZhO1xuICB9XG59XG4iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 2221:
/*!*********************************************************************!*\
  !*** ./src/app/search-results/evm-address/evm-address.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvmAddressComponent": () => (/* binding */ EvmAddressComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCircle */ 8935);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHistory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHistory */ 175);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faUserCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUserCircle */ 6807);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faClock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faClock */ 5081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/account.service */ 9876);
/* harmony import */ var _services_evm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/evm.service */ 1161);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 5381);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);




















function EvmAddressComponent_mat_progress_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-spinner", 3);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 45);
} }
const _c0 = function (a0, a1) { return { "pulse": a0, "red-dot": a1 }; };
function EvmAddressComponent_div_2_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EvmAddressComponent_div_2_div_25_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.evm.toggleStreaming(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " action live streaming ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.evm.streamClientStatus ? "enabled" : "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r2.evm.streamClientStatus, !ctx_r2.evm.streamClientStatus));
} }
const _c1 = function () { return { "min-width": "100px" }; };
function EvmAddressComponent_div_2_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "TX Hash");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function (a1) { return ["/evm/transaction", a1]; };
function EvmAddressComponent_div_2_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trx_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, trx_r17["hash"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", trx_r17["hash"].slice(0, 8), "...", trx_r17["hash"].slice(-8), " ");
} }
const _c3 = function () { return { "min-width": "70px" }; };
function EvmAddressComponent_div_2_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Block & Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c3));
} }
const _c4 = function (a1) { return ["/evm/block", a1]; };
function EvmAddressComponent_div_2_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trx_r18 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c4, trx_r18["evm_block"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](trx_r18["block_num"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.formatDate(trx_r18["@timestamp"]), "");
} }
function EvmAddressComponent_div_2_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
const _c5 = function (a1) { return ["/evm/address", a1]; };
function EvmAddressComponent_div_2_td_35_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c5, trx_r19["from"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", trx_r19["from"].slice(0, 8), "...", trx_r19["from"].slice(-8), " ");
} }
function EvmAddressComponent_div_2_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EvmAddressComponent_div_2_td_35_a_1_Template, 2, 5, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trx_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", trx_r19["from"]);
} }
function EvmAddressComponent_div_2_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
function EvmAddressComponent_div_2_td_38_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c5, trx_r22["to"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", trx_r22["to"].slice(0, 8), "...", trx_r22["to"].slice(-8), " ");
} }
function EvmAddressComponent_div_2_td_38_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " 0x0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EvmAddressComponent_div_2_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EvmAddressComponent_div_2_td_38_a_1_Template, 2, 5, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EvmAddressComponent_div_2_td_38_a_2_Template, 2, 0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trx_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", trx_r22["to"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !trx_r22["to"]);
} }
function EvmAddressComponent_div_2_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
function EvmAddressComponent_div_2_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trx_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", trx_r26["val_formatted"], " ");
} }
function EvmAddressComponent_div_2_tr_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 51);
} }
function EvmAddressComponent_div_2_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 52);
} }
const _c6 = function () { return [10, 20, 50, 100]; };
function EvmAddressComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "EVM Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Native Balance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "fa-layers", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Transactions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Last Irreversible Block: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "strong", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, EvmAddressComponent_div_2_div_25_Template, 5, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](27, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, EvmAddressComponent_div_2_th_28_Template, 2, 2, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, EvmAddressComponent_div_2_td_29_Template, 3, 5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](30, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, EvmAddressComponent_div_2_th_31_Template, 2, 2, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, EvmAddressComponent_div_2_td_32_Template, 6, 5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](33, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, EvmAddressComponent_div_2_th_34_Template, 2, 2, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, EvmAddressComponent_div_2_td_35_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](36, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, EvmAddressComponent_div_2_th_37_Template, 2, 2, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, EvmAddressComponent_div_2_td_38_Template, 3, 2, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](39, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, EvmAddressComponent_div_2_th_40_Template, 2, 2, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, EvmAddressComponent_div_2_td_41_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, EvmAddressComponent_div_2_tr_42_Template, 1, 0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, EvmAddressComponent_div_2_tr_43_Template, 1, 0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-paginator", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function EvmAddressComponent_div_2_Template_mat_paginator_page_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.changePage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EvmAddressComponent_div_2_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r30.evm.loadMoreTransactions(ctx_r30.address); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " load more actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faUserCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.nativeBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faHistory)("inverse", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.accountService.libNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.evm.streamClientLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r1.evm.addressTransactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.columnsToDisplay)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r1.columnsToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c6))("length", ctx_r1.evm.addressTransactions.filteredData.length);
} }
class EvmAddressComponent {
    constructor(activatedRoute, accountService, evm) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.evm = evm;
        this.address = '';
        this.faUserCircle = _fortawesome_free_solid_svg_icons_faUserCircle__WEBPACK_IMPORTED_MODULE_3__.faUserCircle;
        this.nativeBalance = 0;
        this.faCircle = _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_4__.faCircle;
        this.faHistory = _fortawesome_free_solid_svg_icons_faHistory__WEBPACK_IMPORTED_MODULE_5__.faHistory;
        this.faClock = _fortawesome_free_solid_svg_icons_faClock__WEBPACK_IMPORTED_MODULE_6__.faClock;
        this.columnsToDisplay = [
            'hash',
            'block',
            'fromAddr',
            'toAddr',
            'nativeValue'
        ];
        this.subs = [];
    }
    ngOnInit() {
        this.subs.push(this.activatedRoute.params.subscribe((routeParams) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.address = routeParams.address;
            this.nativeBalance = yield this.evm.getBalance(this.address);
            yield this.evm.loadTransactions(this.address);
            yield this.accountService.checkIrreversibility();
        })));
    }
    ngOnDestroy() {
        this.subs.forEach(s => s.unsubscribe());
    }
    formatDate(date) {
        return new Date(date).toLocaleString();
    }
    changePage(event) {
        // disable streaming if enabled
        if (this.evm.streamClientStatus) {
            this.evm.toggleStreaming();
        }
        const maxPages = Math.floor(event.length / event.pageSize);
        console.log(event);
        console.log(`${event.pageIndex} / ${maxPages}`);
        try {
            if (event.pageIndex === maxPages - 1) {
                this.evm.loadMoreTransactions(this.address).catch(console.log);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}
EvmAddressComponent.ɵfac = function EvmAddressComponent_Factory(t) { return new (t || EvmAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_evm_service__WEBPACK_IMPORTED_MODULE_1__.EvmService)); };
EvmAddressComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EvmAddressComponent, selectors: [["app-evm-address"]], decls: 3, vars: 2, consts: [["mode", "indeterminate", 3, "diameter", 4, "ngIf"], [1, "container", 2, "height", "100%"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "15px", 4, "ngIf"], ["mode", "indeterminate", 3, "diameter"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "15px"], [1, "faded", 2, "margin-bottom", "0"], [2, "margin-right", "5px", 3, "icon"], [1, "break-word", 2, "letter-spacing", "1px"], ["fxLayout", "column"], [1, "total-balance", "width-100"], [1, "float-r"], ["fxFlex", "100", "fxFlexFill", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [2, "margin-top", "0"], [2, "margin-right", "5px", 3, "fixedWidth"], ["transform", "grow-3", 3, "icon"], ["transform", "shrink-5", 3, "icon", "inverse"], [1, "lib"], [1, "monospace"], ["class", "livestream", "matTooltip", "click to turn on/off", "matTooltipClass", "tooltip-bigger", 3, "click", 4, "ngIf"], ["mat-table", "", "matSort", "", "matSortActive", "block", "matSortStart", "desc", "matSortDirection", "desc", 1, "actions-table", 3, "dataSource"], ["matColumnDef", "hash"], ["mat-header-cell", "", 3, "ngStyle.gt-xs", 4, "matHeaderCellDef"], ["mat-cell", "", "data-label", "TX", 4, "matCellDef"], ["matColumnDef", "block"], ["mat-header-cell", "", "mat-sort-header", "", 3, "ngStyle.gt-xs", 4, "matHeaderCellDef"], ["mat-cell", "", "data-label", "Block & Date", 4, "matCellDef"], ["matColumnDef", "fromAddr"], ["mat-cell", "", "data-label", "From", 4, "matCellDef"], ["matColumnDef", "toAddr"], ["mat-cell", "", "data-label", "To", 4, "matCellDef"], ["matColumnDef", "nativeValue"], ["mat-cell", "", "data-label", "Value", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "length", "page"], ["mat-stroked-button", "", "color", "primary", 1, "float-r", 2, "margin-right", "16px", 3, "click"], ["matTooltip", "click to turn on/off", "matTooltipClass", "tooltip-bigger", 1, "livestream", 3, "click"], [1, "w-500"], [1, "dot", 3, "ngClass"], ["mat-header-cell", "", 3, "ngStyle.gt-xs"], ["mat-cell", "", "data-label", "TX"], [1, "link-blue", "monospace", 3, "routerLink"], ["mat-header-cell", "", "mat-sort-header", "", 3, "ngStyle.gt-xs"], ["mat-cell", "", "data-label", "Block & Date"], [1, "link-blue", 3, "routerLink"], ["mat-cell", "", "data-label", "From"], ["class", "link-blue monospace", 3, "routerLink", 4, "ngIf"], ["mat-cell", "", "data-label", "To"], ["class", "monospace", 4, "ngIf"], ["mat-cell", "", "data-label", "Value"], ["mat-header-row", ""], ["mat-row", ""]], template: function EvmAddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EvmAddressComponent_mat_progress_spinner_0_Template, 1, 1, "mat-progress-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EvmAddressComponent_div_2_Template, 47, 16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.evm.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.evm.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutGapDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.FlexFillDirective, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaLayersComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__.DefaultClassDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__.DefaultStyleDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow], styles: [".livestream[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 7px;\n  font-size: 15px;\n}\n\n.monospace[_ngcontent-%COMP%] {\n  font-family: 'Courier Prime', monospace;\n  font-size: 16px;\n}\n\n.lib[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: 1px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  padding-bottom: 13px;\n}\n\n  .tooltip-bigger {\n  font-size: 13px;\n}\n\n.dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.red-dot[_ngcontent-%COMP%] {\n  background: #de0000;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.pulse[_ngcontent-%COMP%] {\n  background: #00a6de;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 0 0 rgba(0, 166, 222, 0.5);\n  animation: pulse 2s infinite;\n}\n\n.pulse[_ngcontent-%COMP%]:hover {\n  animation: none;\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(0, 166, 222, 0.5);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(204,169,44, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(204,169,44, 0);\n  }\n}\n\n.actions-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2bS1hZGRyZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsNENBQTRDO0VBQzVDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBYUE7RUFDRTtJQUVFLDBDQUEwQztFQUM1QztFQUNBO0lBRUUsMENBQTBDO0VBQzVDO0VBQ0E7SUFFRSx1Q0FBdUM7RUFDekM7QUFDRjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJldm0tYWRkcmVzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpdmVzdHJlYW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubW9ub3NwYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIFByaW1lJywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5saWIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xufVxuXG46Om5nLWRlZXAgLnRvb2x0aXAtYmlnZ2VyIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZG90IHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ucmVkLWRvdCB7XG4gIGJhY2tncm91bmQ6ICNkZTAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHVsc2Uge1xuICBiYWNrZ3JvdW5kOiAjMDBhNmRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDAgcmdiYSgwLCAxNjYsIDIyMiwgMC41KTtcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbn1cblxuLnB1bHNlOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiBub25lO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMTY2LCAyMjIsIDAuNSk7XG4gIH1cbiAgNzAlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyMDQsMTY5LDQ0LCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyMDQsMTY5LDQ0LCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAxNjYsIDIyMiwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMTY2LCAyMjIsIDAuNSk7XG4gIH1cbiAgNzAlIHtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyMDQsMTY5LDQ0LCAwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjA0LDE2OSw0NCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjA0LDE2OSw0NCwgMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDIwNCwxNjksNDQsIDApO1xuICB9XG59XG5cbi5hY3Rpb25zLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 2041:
/*!*****************************************************************!*\
  !*** ./src/app/search-results/evm-block/evm-block.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvmBlockComponent": () => (/* binding */ EvmBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCube */ 9773);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHourglassStart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHourglassStart */ 9807);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCircle */ 8935);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faLock */ 9622);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHistory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHistory */ 175);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSadTear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSadTear */ 8026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/account.service */ 9876);
/* harmony import */ var _services_evm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/evm.service */ 1161);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);



















function EvmBlockComponent_mat_progress_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-spinner", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 45);
} }
function EvmBlockComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " We're sorry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "We are not currently supporting the searches of specific blocks");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faSadTear);
} }
const _c0 = function (a0, a1) { return { "pulse": a0, "red-dot": a1 }; };
function EvmBlockComponent_div_3_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EvmBlockComponent_div_3_div_20_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r14.evm.toggleStreaming(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " action live streaming ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.evm.streamClientStatus ? "enabled" : "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r3.evm.streamClientStatus, !ctx_r3.evm.streamClientStatus));
} }
const _c1 = function () { return { "min-width": "100px" }; };
function EvmBlockComponent_div_3_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "TX Hash");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function (a1) { return ["/evm/transaction", a1]; };
function EvmBlockComponent_div_3_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trx_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, trx_r16["hash"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", trx_r16["hash"].slice(0, 8), "...", trx_r16["hash"].slice(-8), " ");
} }
function EvmBlockComponent_div_3_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
const _c3 = function (a1) { return ["/evm/address", a1]; };
function EvmBlockComponent_div_3_td_27_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c3, trx_r17["from"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", trx_r17["from"].slice(0, 8), "...", trx_r17["from"].slice(-8), " ");
} }
function EvmBlockComponent_div_3_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EvmBlockComponent_div_3_td_27_a_1_Template, 2, 5, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trx_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", trx_r17["from"]);
} }
function EvmBlockComponent_div_3_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
function EvmBlockComponent_div_3_td_30_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c3, trx_r20["to"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", trx_r20["to"].slice(0, 8), "...", trx_r20["to"].slice(-8), " ");
} }
function EvmBlockComponent_div_3_td_30_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " 0x0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EvmBlockComponent_div_3_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EvmBlockComponent_div_3_td_30_a_1_Template, 2, 5, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EvmBlockComponent_div_3_td_30_a_2_Template, 2, 0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trx_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", trx_r20["to"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !trx_r20["to"]);
} }
function EvmBlockComponent_div_3_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
function EvmBlockComponent_div_3_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trx_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", trx_r24["val_formatted"], " ");
} }
function EvmBlockComponent_div_3_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 43);
} }
function EvmBlockComponent_div_3_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 44);
} }
function EvmBlockComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "fa-layers", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "EVM Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "fa-layers", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Transactions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Last Irreversible Block: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "strong", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, EvmBlockComponent_div_3_div_20_Template, 5, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](22, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, EvmBlockComponent_div_3_th_23_Template, 2, 2, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, EvmBlockComponent_div_3_td_24_Template, 3, 5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](25, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, EvmBlockComponent_div_3_th_26_Template, 2, 2, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, EvmBlockComponent_div_3_td_27_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](28, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, EvmBlockComponent_div_3_th_29_Template, 2, 2, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, EvmBlockComponent_div_3_td_30_Template, 3, 2, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](31, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, EvmBlockComponent_div_3_th_32_Template, 2, 2, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, EvmBlockComponent_div_3_td_33_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, EvmBlockComponent_div_3_tr_34_Template, 1, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, EvmBlockComponent_div_3_tr_35_Template, 1, 0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faBlock)("inverse", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.blockNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faHistory)("inverse", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.accountService.libNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.evm.streamClientLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r2.evm.blockTransactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.columnsToDisplay)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r2.columnsToDisplay);
} }
class EvmBlockComponent {
    constructor(activatedRoute, accountService, evm) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.evm = evm;
        this.faCircle = _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_3__.faCircle;
        this.faBlock = _fortawesome_free_solid_svg_icons_faCube__WEBPACK_IMPORTED_MODULE_4__.faCube;
        this.faLock = _fortawesome_free_solid_svg_icons_faLock__WEBPACK_IMPORTED_MODULE_5__.faLock;
        this.faHourglass = _fortawesome_free_solid_svg_icons_faHourglassStart__WEBPACK_IMPORTED_MODULE_6__.faHourglassStart;
        this.faHistory = _fortawesome_free_solid_svg_icons_faHistory__WEBPACK_IMPORTED_MODULE_7__.faHistory;
        this.faSadTear = _fortawesome_free_solid_svg_icons_faSadTear__WEBPACK_IMPORTED_MODULE_8__.faSadTear;
        this.txData = {
            hash: '0xaef244314c42bdc2d62bfaa82880049dafa958ae4e4ce8a0ae8b94598ff1549a',
            block_num: 23232,
            block: 23229,
            '@timestamp': Date.now(),
            from: '0x5fe25eec20614b9a9109c1a31a9959b467e0df85',
            to: '0x292f04a44506c2fd49bac032e1ca148c35a478c8',
            value: '',
            fee: '',
            gas_price: '',
            gas_limit: '',
            gas_used: '',
            nonce: 0,
            input_data: '',
        };
        this.blockData = {
            block: 292823,
            block_hash: '0x25472228743439862758372832',
            transactions: [this.txData, this.txData]
        };
        this.blockNumber = '';
        this.columnsToDisplay = [
            'hash',
            'fromAddr',
            'toAddr',
            'nativeValue'
        ];
        this.subs = [];
    }
    ngOnInit() {
        this.subs.push(this.activatedRoute.params.subscribe((routeParams) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.blockNumber = routeParams.block_num;
            yield this.evm.loadBlock(this.blockNumber);
            yield this.accountService.checkIrreversibility();
        })));
    }
    ngOnDestroy() {
        this.subs.forEach(s => s.unsubscribe());
    }
}
EvmBlockComponent.ɵfac = function EvmBlockComponent_Factory(t) { return new (t || EvmBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_evm_service__WEBPACK_IMPORTED_MODULE_1__.EvmService)); };
EvmBlockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EvmBlockComponent, selectors: [["app-evm-block"]], decls: 4, vars: 3, consts: [["mode", "indeterminate", 3, "diameter", 4, "ngIf"], [1, "container", 2, "height", "100%"], ["fxLayout", "column", "style", "height: 100%", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "15px", 4, "ngIf"], ["mode", "indeterminate", 3, "diameter"], ["fxLayout", "column", 2, "height", "100%"], [1, "faded"], [2, "margin-right", "5px", 3, "icon"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "15px"], [2, "margin-right", "5px", 3, "fixedWidth"], ["transform", "grow-1", 3, "icon"], ["transform", "shrink-4", 3, "icon", "inverse"], ["fxFlex", "100", "fxFlexFill", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [2, "margin-top", "0"], ["transform", "grow-3", 3, "icon"], ["transform", "shrink-5", 3, "icon", "inverse"], [1, "lib"], [1, "monospace"], ["class", "livestream", "matTooltip", "click to turn on/off", "matTooltipClass", "tooltip-bigger", 3, "click", 4, "ngIf"], ["mat-table", "", 1, "actions-table", 3, "dataSource"], ["matColumnDef", "hash"], ["mat-header-cell", "", 3, "ngStyle.gt-xs", 4, "matHeaderCellDef"], ["mat-cell", "", "data-label", "TX", 4, "matCellDef"], ["matColumnDef", "fromAddr"], ["mat-cell", "", "data-label", "From", 4, "matCellDef"], ["matColumnDef", "toAddr"], ["mat-cell", "", "data-label", "To", 4, "matCellDef"], ["matColumnDef", "nativeValue"], ["mat-cell", "", "data-label", "Value", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matTooltip", "click to turn on/off", "matTooltipClass", "tooltip-bigger", 1, "livestream", 3, "click"], [1, "w-500"], [1, "dot", 3, "ngClass"], ["mat-header-cell", "", 3, "ngStyle.gt-xs"], ["mat-cell", "", "data-label", "TX"], [1, "link-blue", "monospace", 3, "routerLink"], ["mat-cell", "", "data-label", "From"], ["class", "link-blue monospace", 3, "routerLink", 4, "ngIf"], ["mat-cell", "", "data-label", "To"], ["class", "monospace", 4, "ngIf"], ["mat-cell", "", "data-label", "Value"], ["mat-header-row", ""], ["mat-row", ""]], template: function EvmBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EvmBlockComponent_mat_progress_spinner_0_Template, 1, 1, "mat-progress-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EvmBlockComponent_div_2_Template, 7, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EvmBlockComponent_div_3_Template, 36, 15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.evm.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf",  false && 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.evm.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutGapDirective, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FaLayersComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.FlexFillDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__.DefaultClassDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__.DefaultStyleDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow], styles: [".actions-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.monospace[_ngcontent-%COMP%] {\n  font-family: 'Courier Prime', monospace;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2bS1ibG9jay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGVBQWU7QUFDakIiLCJmaWxlIjoiZXZtLWJsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9ucy10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9ub3NwYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIFByaW1lJywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 4035:
/*!*****************************************************************************!*\
  !*** ./src/app/search-results/evm-transaction/evm-transaction.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvmTransactionComponent": () => (/* binding */ EvmTransactionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faExchangeAlt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faExchangeAlt */ 6554);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSadTear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSadTear */ 8026);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCircle */ 8935);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHourglassStart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHourglassStart */ 9807);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faLock */ 9622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/account.service */ 9876);
/* harmony import */ var _services_evm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/evm.service */ 1161);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ 9243);
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-json-viewer */ 2244);

















function EvmTransactionComponent_mat_progress_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-spinner", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 45);
} }
function EvmTransactionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Transaction not found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "We couldn't find the transaction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "strong", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faSadTear);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.txData.hash);
} }
function EvmTransactionComponent_div_3_mat_chip_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Irreversible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r3.faLock);
} }
function EvmTransactionComponent_div_3_mat_chip_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r4.faHourglass);
} }
function EvmTransactionComponent_div_3_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Error:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.txData.errors, "");
} }
const _c0 = function (a1) { return ["/evm/block", a1]; };
const _c1 = function (a1) { return ["/evm/address", a1]; };
function EvmTransactionComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "fa-layers", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " EVM Transaction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-chip-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EvmTransactionComponent_div_3_mat_chip_10_Template, 3, 1, "mat-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, EvmTransactionComponent_div_3_mat_chip_11_Template, 2, 1, "mat-chip", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Block Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Block Timestamp:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "From:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Value:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Gas Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Gas Used:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Gas Limit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Nonce:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Input Data:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Output Data:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, EvmTransactionComponent_div_3_div_78_Template, 4, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Logs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "ngx-json-viewer", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Trace:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "ngx-json-viewer", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faExchange)("inverse", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.accountService.libNum > ctx_r2.txData.block_num);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.accountService.libNum < ctx_r2.txData.block_num);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.txData.hash);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](27, _c0, ctx_r2.txData.block));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.txData.block);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.formatDate(ctx_r2.txData.timestamp), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](29, _c1, ctx_r2.txData.to));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.txData.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](31, _c1, ctx_r2.txData.from));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.txData.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.txData.val_formatted, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.txData.gas_price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.txData.gas_used, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.txData.gas, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.txData.nonce, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.txData.input_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.txData.output);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.txData.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.txData.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("json", ctx_r2.txData.logs)("expanded", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("json", ctx_r2.txData.trace)("expanded", false);
} }
class EvmTransactionComponent {
    constructor(activatedRoute, accountService, evm) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.evm = evm;
        this.faSadTear = _fortawesome_free_solid_svg_icons_faSadTear__WEBPACK_IMPORTED_MODULE_3__.faSadTear;
        this.faExchange = _fortawesome_free_solid_svg_icons_faExchangeAlt__WEBPACK_IMPORTED_MODULE_4__.faExchangeAlt;
        this.faCircle = _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_5__.faCircle;
        this.faLock = _fortawesome_free_solid_svg_icons_faLock__WEBPACK_IMPORTED_MODULE_6__.faLock;
        this.faHourglass = _fortawesome_free_solid_svg_icons_faHourglassStart__WEBPACK_IMPORTED_MODULE_7__.faHourglassStart;
        this.txHash = '';
        this.txData = {
            hash: '0xaef244314c42bdc2d62bfaa82880049dafa958ae4e4ce8a0ae8b94598ff1549a',
            block_num: 0,
            block: 0,
            timestamp: '',
            from: '',
            to: '',
            value: 0,
            gas_price: '',
            gas_used: '',
            nonce: 0,
            input_data: '',
            logs: [],
            errors: '',
            status: '',
            trace: []
        };
        this.subs = [];
    }
    ngOnInit() {
        this.subs.push(this.activatedRoute.params.subscribe((routeParams) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.txHash = routeParams.hash;
            const [hash, receipt, trace] = yield Promise.all([this.evm.getTransactionByHash(this.txHash), this.evm.getTransactionReceipt(this.txHash), this.evm.traceTransaction(this.txHash)]);
            const txData = Object.assign(hash, receipt, { trace });
            console.log({ txData });
            this.txData.block = parseInt(txData.blockNumber, 16);
            this.txData.from = txData.from;
            this.txData.timestamp = txData.timestamp || Date.now();
            this.txData.to = txData.to;
            this.txData.value = parseInt(txData.value, 16);
            this.txData.val_formatted = `${(this.txData.value / 1000000000000000000).toFixed(4)} TLOS`;
            this.txData.nonce = parseInt(txData.nonce, 16);
            this.txData.gas_price = parseInt(txData.gasPrice, 16);
            this.txData.gas_used = parseInt(txData.gasUsed, 16);
            this.txData.gas = parseInt(txData.gas, 16);
            this.txData.input_data = txData.input;
            this.txData.logs = txData.logs;
            this.txData.error = this.evm.getErrorFromOutput(txData.output);
            this.txData.status = txData.status;
            this.txData.output = txData.output;
            this.txData.trace = txData.trace;
            yield this.accountService.checkIrreversibility();
        })));
    }
    ngOnDestroy() {
        this.subs.forEach(s => s.unsubscribe());
    }
    formatDate(date) {
        return new Date(date).toLocaleString();
    }
}
EvmTransactionComponent.ɵfac = function EvmTransactionComponent_Factory(t) { return new (t || EvmTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_evm_service__WEBPACK_IMPORTED_MODULE_1__.EvmService)); };
EvmTransactionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EvmTransactionComponent, selectors: [["app-evm-transaction"]], decls: 4, vars: 3, consts: [["mode", "indeterminate", 3, "diameter", 4, "ngIf"], [1, "container"], ["fxLayout", "column", "style", "height: calc(100vh - 209px);", "fxLayoutAlign", "start center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start center", "fxLayoutGap", "15px", 4, "ngIf"], ["mode", "indeterminate", 3, "diameter"], ["fxLayout", "column", "fxLayoutAlign", "start center", 2, "height", "calc(100vh - 209px)"], [2, "width", "100%"], [1, "faded"], [2, "margin-right", "5px", 3, "icon"], [1, "break-word"], ["fxLayout", "column", "fxLayoutAlign", "start center", "fxLayoutGap", "15px"], ["fxFlex", "100", "fxFlexFill", ""], [2, "border-bottom", "1px solid #e4e4e4", "margin-bottom", "12px"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [1, "faded", 2, "margin-bottom", "-15px", "margin-top", "0", "margin-right", "10px"], [2, "margin-right", "2px", 3, "fixedWidth"], ["transform", "grow-1", 3, "icon"], ["transform", "shrink-4", 3, "icon", "inverse"], ["orientation", "vertical"], ["selected", "", 4, "ngIf"], ["color", "accent", "selected", "", 4, "ngIf"], [1, "break-word", 2, "margin", "10px 0 12px 0"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "15px"], [1, "monospace"], [1, "link-blue", 3, "routerLink"], [1, "link-blue", "break-word", "monospace", 3, "routerLink"], [1, "break-word", "monospace"], [4, "ngIf"], [3, "json", "expanded"], ["selected", ""], ["color", "accent", "selected", ""]], template: function EvmTransactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EvmTransactionComponent_mat_progress_spinner_0_Template, 1, 1, "mat-progress-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EvmTransactionComponent_div_2_Template, 9, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EvmTransactionComponent_div_3_Template, 87, 33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.evm.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf",  true && ctx.evm.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinner, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.FlexFillDirective, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaLayersComponent, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipList, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, ngx_json_viewer__WEBPACK_IMPORTED_MODULE_16__.NgxJsonViewerComponent, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChip], styles: [".monospace[_ngcontent-%COMP%] {\n  font-family: 'Courier Prime', monospace;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2bS10cmFuc2FjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGVBQWU7QUFDakIiLCJmaWxlIjoiZXZtLXRyYW5zYWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9ub3NwYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIFByaW1lJywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 759:
/*!*****************************************************!*\
  !*** ./src/app/search-results/key/key.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyComponent": () => (/* binding */ KeyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSpinner */ 2328);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSadTear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSadTear */ 8026);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faKey */ 6813);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCircle */ 8935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/account.service */ 9876);
/* harmony import */ var _services_chain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chain.service */ 5955);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);















function KeyComponent_mat_progress_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-spinner", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 45);
} }
function KeyComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Key not found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "We couldn't find the key ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "strong", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faSadTear);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.pubKey);
} }
const _c0 = function (a1) { return ["/account", a1]; };
function KeyComponent_div_3_ng_container_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const acc_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, acc_r6["owner"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](acc_r6["owner"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](acc_r6.name);
} }
function KeyComponent_div_3_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, KeyComponent_div_3_ng_container_14_div_1_Template, 5, 5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.key.permissions);
} }
function KeyComponent_div_3_ng_container_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const acc_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, acc_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](acc_r8);
} }
function KeyComponent_div_3_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, KeyComponent_div_3_ng_container_15_div_1_Template, 3, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.key.account_names);
} }
function KeyComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "fa-layers", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Public Key ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Associated accounts:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, KeyComponent_div_3_ng_container_14_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, KeyComponent_div_3_ng_container_15_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faKey)("inverse", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.pubKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.key.permissions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.key.permissions.length === 0);
} }
class KeyComponent {
    constructor(activatedRoute, accountService, chainData, title) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.chainData = chainData;
        this.title = title;
        this.key = {
            account_names: null,
            permissions: null
        };
        this.faCircle = _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_3__.faCircle;
        this.faKey = _fortawesome_free_solid_svg_icons_faKey__WEBPACK_IMPORTED_MODULE_4__.faKey;
        this.faSadTear = _fortawesome_free_solid_svg_icons_faSadTear__WEBPACK_IMPORTED_MODULE_5__.faSadTear;
        this.faSpinner = _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_6__.faSpinner;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((routeParams) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
}
KeyComponent.ɵfac = function KeyComponent_Factory(t) { return new (t || KeyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_chain_service__WEBPACK_IMPORTED_MODULE_1__.ChainService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title)); };
KeyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: KeyComponent, selectors: [["app-key"]], decls: 4, vars: 3, consts: [["mode", "indeterminate", 3, "diameter", 4, "ngIf"], [1, "container"], ["fxLayout", "column", "style", "height: 100%", "fxLayoutAlign", "start center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start center", "fxLayoutGap", "15px", 4, "ngIf"], ["mode", "indeterminate", 3, "diameter"], ["fxLayout", "column", "fxLayoutAlign", "start center", 2, "height", "100%"], [2, "width", "100%"], [1, "faded"], [2, "margin-right", "5px", 3, "icon"], [1, "break-word"], ["fxLayout", "column", "fxLayoutAlign", "start center", "fxLayoutGap", "15px"], ["fxFlex", "100", "fxFlexFill", ""], [2, "border-bottom", "1px solid #e4e4e4", "margin-bottom", "12px"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [2, "margin-bottom", "-15px", "color", "#9c9c9c", "margin-top", "0", "margin-right", "10px"], [2, "margin-right", "2px", 3, "fixedWidth"], ["transform", "grow-1", 3, "icon"], ["transform", "shrink-4", 3, "icon", "inverse"], [1, "break-word", 2, "margin", "27px 0 12px 0"], [2, "font-weight", "500"], [4, "ngIf"], ["class", "account-cell", 4, "ngFor", "ngForOf"], [1, "account-cell"], [3, "routerLink"], [1, "permission"]], template: function KeyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, KeyComponent_mat_progress_spinner_0_Template, 1, 1, "mat-progress-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, KeyComponent_div_2_Template, 9, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, KeyComponent_div_3_Template, 16, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.accountService.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.key.account_names && ctx.key.account_names.length === 0 && ctx.accountService.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.key.account_names && ctx.key.account_names.length > 0 && ctx.accountService.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinner, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.FlexFillDirective, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaLayersComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref], styles: [".account-cell[_ngcontent-%COMP%] {\n  padding: 20px 10px 10px;\n  letter-spacing: 0.5px;\n  font-size: 14px;\n  width: 160px;\n  border-bottom: 1px solid rgba(0,0,0,.12);\n  border-radius: 3px;\n}\n\n.permission[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 12px;\n  font-weight: 500;\n  text-align: right;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkIiwiZmlsZSI6ImtleS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtY2VsbCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweCAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDE2MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5wZXJtaXNzaW9uIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsb2F0OiByaWdodDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 4158:
/*!************************************************************!*\
  !*** ./src/app/search-results/search-results.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsComponent": () => (/* binding */ SearchResultsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSearch */ 7984);
/* harmony import */ var src_app_services_launch_darkly_launch_darkly_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/launch-darkly/launch-darkly.service */ 8638);
/* harmony import */ var src_app_services_launch_darkly_featureFlags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/launch-darkly/featureFlags */ 2563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search.service */ 4112);
/* harmony import */ var _services_chain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/chain.service */ 5955);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ 5924);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 2220);




















function SearchResultsComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.err);
} }
function SearchResultsComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", account_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](account_r3);
} }
class SearchResultsComponent {
    constructor(formBuilder, searchService, chainData) {
        this.formBuilder = formBuilder;
        this.searchService = searchService;
        this.chainData = chainData;
        this.faSearch = _fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_5__.faSearch;
        this.placeholders = [
            'Search by account name...',
            'Search by transaction id...',
            'Search by public key...',
            'Search by asset id...',
        ];
        this.err = '';
        this.currentPlaceholder = 0;
        this.searchForm = this.formBuilder.group({
            search_field: ['']
        });
        this.filteredAccounts = [];
        this.searchPlaceholder = this.placeholders[0];
        this.featureFlagClient = new src_app_services_launch_darkly_launch_darkly_service__WEBPACK_IMPORTED_MODULE_0__.LaunchDarklyService();
        setInterval(() => {
            this.currentPlaceholder++;
            if (!this.placeholders[this.currentPlaceholder]) {
                this.currentPlaceholder = 0;
            }
            this.searchPlaceholder = this.placeholders[this.currentPlaceholder];
        }, 3000);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.searchForm.get('search_field').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(300)).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                this.filteredAccounts = yield this.searchService.filterAccountNames(result);
            }));
            this.isQueryingByBlockNumberEnabled =
                yield this.featureFlagClient.variation(src_app_services_launch_darkly_featureFlags__WEBPACK_IMPORTED_MODULE_1__.FeatureFlagName.IsQueryingByBlockNumberEnabled);
            if (this.isQueryingByBlockNumberEnabled) {
                this.placeholders.push('Search by block number...');
            }
        });
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.searchForm.valid) {
                return;
            }
            const searchText = this.searchForm.get('search_field').value;
            const status = yield this.searchService.submitSearch(searchText, this.filteredAccounts);
            if (!status && !isNaN(searchText)) {
                this.err = 'cannot search block numbers ';
            }
            else if (!status) {
                this.err = 'no results for ' + searchText;
            }
            return;
        });
    }
}
SearchResultsComponent.ɵfac = function SearchResultsComponent_Factory(t) { return new (t || SearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_chain_service__WEBPACK_IMPORTED_MODULE_3__.ChainService)); };
SearchResultsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SearchResultsComponent, selectors: [["app-search-results"]], decls: 32, vars: 11, consts: [["fxLayout", "column", "fxLayoutGap", "10px", 1, "user-pages", 2, "height", "100vh"], [1, "search-card"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "container", 2, "padding", "0", "width", "100%"], ["src", "assets/voiceBlockExplorer.png", "alt", "logo", "routerLink", "/", 1, "logo", 2, "height", "80px", 3, "fxHide.lt-sm"], ["src", "assets/logo_symbol.png", "alt", "logo", "routerLink", "/", 1, "logo", 2, "height", "80px", 3, "fxHide.gt-xs"], [1, "search-container"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "6px", 1, "chain"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "5px", 1, "outline"], ["src", "assets/hyperion.png", "alt", "logo", 2, "height", "23px"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "center stretch"], ["fxLayout", "column"], ["appearance", "outline", "fxFlex", "grow", 1, "search-input", 2, "height", "100%"], ["matInput", "", "formControlName", "search_field", 3, "matAutocomplete", "placeholder"], [4, "ngIf"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", "matSuffix", "", "type", "submit", 1, "search-btn", 3, "keyup.enter"], [3, "icon"], ["fxFlex", "grow", "fxLayout", "column", 1, "user-page"], [1, "faded", "footer-text"], [2, "margin-bottom", "7px"], ["target", "_blank", 3, "href"], [3, "value"]], template: function SearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Powered by");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SearchResultsComponent_Template_form_ngSubmit_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SearchResultsComponent_mat_error_17_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-autocomplete", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("optionSelected", function SearchResultsComponent_Template_mat_autocomplete_optionSelected_18_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, SearchResultsComponent_mat_option_20_Template, 2, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchResultsComponent_Template_button_keyup_enter_21_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Data provider ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Made with \u2764 by EOS Rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fxHide.lt-sm", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fxHide.gt-xs", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matAutocomplete", _r1)("placeholder", ctx.searchPlaceholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.err);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filteredAccounts);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx.chainData.chainInfoData.provider_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.chainData.chainInfoData.provider);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultShowHideDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption], styles: [".search-card[_ngcontent-%COMP%] {\n  \n  z-index: 42;\n  margin: 0;\n  width: 100%;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  height: 55px;\n  border-radius: 0 5px 5px 0;\n  border-left: 0;\n}\n\n  .search-input.mat-form-field-appearance-outline .mat-form-field-outline-end {\n  border-radius: 0 0 0 0 !important;\n}\n\n  .search-input.mat-form-field-appearance-outline .mat-form-field-wrapper {\n  padding-bottom: unset;\n  margin: unset;\n  height: 100%;\n}\n\n  .search-input.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 0.7em 0;\n}\n\n  .search-input .mat-form-field-flex {\n  height: 100%;\n  align-items: center;\n}\n\n  .search-input .mat-form-field-outline {\n  height: 100%;\n}\n\n.logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n}\n\n.chain[_ngcontent-%COMP%] {\n  font-size: 15px;\n  \n  margin-bottom: 5px;\n}\n\n.faded[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.footer-text[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 30px;\n}\n\n@media screen and (max-width: 599px) {\n  .search-container[_ngcontent-%COMP%] {\n    padding-right: 10px;\n  }\n}\n\n@media (min-width: 600px) {\n  .search-input[_ngcontent-%COMP%] {\n    width: 330px;\n  }\n}\n\n@media screen and (max-width: 1049px) {\n  .search-container[_ngcontent-%COMP%] {\n    padding-right: 10px;\n  }\n  .logo[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n\n.user-pages[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.user-page[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWNhcmQge1xuICAvKnBvc2l0aW9uOiBmaXhlZDsqL1xuICB6LWluZGV4OiA0MjtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlYXJjaC1idG4ge1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICBib3JkZXItbGVmdDogMDtcbn1cblxuOjpuZy1kZWVwIC5zZWFyY2gtaW5wdXQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5zZWFyY2gtaW5wdXQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IHVuc2V0O1xuICBtYXJnaW46IHVuc2V0O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAuc2VhcmNoLWlucHV0Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjdlbSAwO1xufVxuXG46Om5nLWRlZXAgLnNlYXJjaC1pbnB1dCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5zZWFyY2gtaW5wdXQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sb2dvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY2hhaW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIC8qbWFyZ2luLXRvcDogNXB4OyovXG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmZhZGVkIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5mb290ZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnNlYXJjaC1pbnB1dCB7XG4gICAgd2lkdGg6IDMzMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDQ5cHgpIHtcbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmxvZ28ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG5cbi51c2VyLXBhZ2VzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnVzZXItcGFnZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuIl19 */"] });


/***/ }),

/***/ 6078:
/*!*************************************************************************!*\
  !*** ./src/app/search-results/simple-assets/simple-assets.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleAssetsComponent": () => (/* binding */ SimpleAssetsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faExchangeAlt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faExchangeAlt */ 6554);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCircle */ 8935);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faLock */ 9622);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHourglassStart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHourglassStart */ 9807);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHistory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHistory */ 175);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSadTear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSadTear */ 8026);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSpinner */ 2328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_simple_assets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/simple-assets.service */ 9040);
/* harmony import */ var _services_chain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chain.service */ 5955);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 5381);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);





















function SimpleAssetsComponent_mat_progress_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-spinner", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 45);
} }
function SimpleAssetsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Asset ID not found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "We couldn't find the asset ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "strong", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faSadTear);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.assetId);
} }
function SimpleAssetsComponent_div_3_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SimpleAssetsComponent_div_3_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Contract");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SimpleAssetsComponent_div_3_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const res_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](res_r16["act"]["account"]);
} }
const _c0 = function () { return { "padding-left": "14px", "padding-right": "14px", "min-width": "100px" }; };
const _c1 = function () { return { "min-width": "150px" }; };
function SimpleAssetsComponent_div_3_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0))("ngStyle.gt-sm", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
} }
const _c2 = function () { return { "padding-left": "14px", "padding-right": "14px" }; };
const _c3 = function () { return { "padding": "0" }; };
function SimpleAssetsComponent_div_3_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const res_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c3))("ngClass.gt-sm", "action-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](res_r17["act"]["name"]);
} }
function SimpleAssetsComponent_div_3_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c4 = function (a0) { return { "data-item": a0 }; };
function SimpleAssetsComponent_div_3_td_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const res_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c4, ctx_r19.objectKeyCount(res_r18["act"]["data"]) > 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r20.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r19.stringifyObject(item_r20.value));
} }
const _c5 = function () { return { "padding": "10px 0 6px" }; };
function SimpleAssetsComponent_div_3_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SimpleAssetsComponent_div_3_td_26_div_1_Template, 6, 5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const res_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, res_r18["act"]["data"]));
} }
function SimpleAssetsComponent_div_3_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Authorization");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SimpleAssetsComponent_div_3_td_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const auth_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](auth_r24.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](auth_r24.value);
} }
const _c6 = function () { return { "padding": "10px 70px 6px" }; };
function SimpleAssetsComponent_div_3_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SimpleAssetsComponent_div_3_td_29_div_1_Template, 6, 2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, action_r22["act"]["authorization"][0]));
} }
const _c7 = function () { return { "min-width": "70px" }; };
function SimpleAssetsComponent_div_3_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Block & Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c7));
} }
function SimpleAssetsComponent_div_3_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const res_r25 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", res_r25["block_num"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r13.formatDate(res_r25["@timestamp"]), "");
} }
function SimpleAssetsComponent_div_3_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 55);
} }
function SimpleAssetsComponent_div_3_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 56);
} }
function SimpleAssetsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "fa-layers", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " NFT History ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "fa-layers", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SimpleAssetsComponent_div_3_span_16_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, SimpleAssetsComponent_div_3_th_19_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, SimpleAssetsComponent_div_3_td_20_Template, 3, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](21, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SimpleAssetsComponent_div_3_th_22_Template, 2, 4, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SimpleAssetsComponent_div_3_td_23_Template, 4, 6, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](24, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, SimpleAssetsComponent_div_3_th_25_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, SimpleAssetsComponent_div_3_td_26_Template, 3, 5, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](27, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, SimpleAssetsComponent_div_3_th_28_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, SimpleAssetsComponent_div_3_td_29_Template, 3, 5, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](30, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, SimpleAssetsComponent_div_3_th_31_Template, 2, 2, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, SimpleAssetsComponent_div_3_td_32_Template, 5, 2, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, SimpleAssetsComponent_div_3_tr_33_Template, 1, 0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, SimpleAssetsComponent_div_3_tr_34_Template, 1, 0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faExchange)("inverse", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.tx.asset_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faHistory)("inverse", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.tx.res.length, " Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.tx.res.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r2.tx.res);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.columnsToDisplay)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r2.columnsToDisplay);
} }
class SimpleAssetsComponent {
    constructor(activatedRoute, simpleAssetsService, chainData, title) {
        this.activatedRoute = activatedRoute;
        this.simpleAssetsService = simpleAssetsService;
        this.chainData = chainData;
        this.title = title;
        this.columnsToDisplay = ['contract', 'action', 'data', 'auth', 'block_num'];
        this.tx = {
            res: [],
            total: [],
        };
        this.faCircle = _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_3__.faCircle;
        this.faExchange = _fortawesome_free_solid_svg_icons_faExchangeAlt__WEBPACK_IMPORTED_MODULE_4__.faExchangeAlt;
        this.faLock = _fortawesome_free_solid_svg_icons_faLock__WEBPACK_IMPORTED_MODULE_5__.faLock;
        this.faHourglass = _fortawesome_free_solid_svg_icons_faHourglassStart__WEBPACK_IMPORTED_MODULE_6__.faHourglassStart;
        this.faHistory = _fortawesome_free_solid_svg_icons_faHistory__WEBPACK_IMPORTED_MODULE_7__.faHistory;
        this.faSadTear = _fortawesome_free_solid_svg_icons_faSadTear__WEBPACK_IMPORTED_MODULE_8__.faSadTear;
        this.faSpinner = _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_9__.faSpinner;
    }
    objectKeyCount(obj) {
        try {
            return Object.keys(obj).length;
        }
        catch (e) {
            return 0;
        }
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((routeParams) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.assetId = routeParams.asset_id;
            this.tx = yield this.simpleAssetsService.getHistoryByAssetId(routeParams.asset_id);
            if (!this.chainData.chainInfoData.chain_name) {
                this.title.setTitle(`Asset ${routeParams.asset_id} • Hyperion Explorer`);
            }
            else {
                this.title.setTitle(`Asset ${routeParams.asset_id} • ${this.chainData.chainInfoData.chain_name} Hyperion Explorer`);
            }
        }));
    }
    formatDate(date) {
        return new Date(date).toLocaleString();
    }
    stringifyObject(subitem) {
        return JSON.stringify(subitem, null, 2);
    }
}
SimpleAssetsComponent.ɵfac = function SimpleAssetsComponent_Factory(t) { return new (t || SimpleAssetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_simple_assets_service__WEBPACK_IMPORTED_MODULE_0__.SimpleAssetsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_chain_service__WEBPACK_IMPORTED_MODULE_1__.ChainService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.Title)); };
SimpleAssetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SimpleAssetsComponent, selectors: [["app-simple-assets"]], decls: 4, vars: 3, consts: [["mode", "indeterminate", 3, "diameter", 4, "ngIf"], [1, "container"], ["fxLayout", "column", "style", "height: calc(100vh - 209px);", "fxLayoutAlign", "start center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start center", "fxLayoutGap", "15px", 4, "ngIf"], ["mode", "indeterminate", 3, "diameter"], ["fxLayout", "column", "fxLayoutAlign", "start center", 2, "height", "calc(100vh - 209px)"], [2, "width", "100%"], [1, "faded"], [2, "margin-right", "5px", 3, "icon"], [1, "break-word"], ["fxLayout", "column", "fxLayoutAlign", "start center", "fxLayoutGap", "15px"], ["fxFlex", "100", "fxFlexFill", ""], [2, "border-bottom", "1px solid #e4e4e4", "margin-bottom", "12px"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [2, "margin-bottom", "-15px", "color", "#9c9c9c", "margin-top", "0", "margin-right", "10px"], [2, "margin-right", "2px", 3, "fixedWidth"], ["transform", "grow-1", 3, "icon"], ["transform", "shrink-4", 3, "icon", "inverse"], [1, "break-word", 2, "margin", "10px 0 12px 0"], [2, "margin-top", "0"], [2, "margin-right", "5px", 3, "fixedWidth"], ["transform", "grow-3", 3, "icon"], ["transform", "shrink-5", 3, "icon", "inverse"], [4, "ngIf"], ["mat-table", "", "matSort", "", "matSortActive", "block_num", "matSortStart", "desc", "matSortDirection", "desc", 1, "history-table", 3, "dataSource"], ["matColumnDef", "contract"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "data-label", "Contract", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 3, "ngStyle.gt-xs", "ngStyle.gt-sm", 4, "matHeaderCellDef"], ["mat-cell", "", "data-label", "Action", 3, "ngStyle.gt-xs", 4, "matCellDef"], ["matColumnDef", "data"], ["mat-cell", "", "data-label", "Data", 3, "ngStyle.gt-xs", 4, "matCellDef"], ["matColumnDef", "auth"], ["mat-cell", "", "data-label", "Authorization", 3, "ngStyle.gt-xs", 4, "matCellDef"], ["matColumnDef", "block_num"], ["mat-header-cell", "", "mat-sort-header", "", 3, "ngStyle.gt-xs", 4, "matHeaderCellDef"], ["mat-cell", "", "data-label", "Block & Date", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", "data-label", "Contract"], ["mat-header-cell", "", 3, "ngStyle.gt-xs", "ngStyle.gt-sm"], ["mat-cell", "", "data-label", "Action", 3, "ngStyle.gt-xs"], [1, "action-cell", 3, "ngStyle.lt-md", "ngClass.gt-sm"], [1, "accent", "w-500"], ["mat-cell", "", "data-label", "Data", 3, "ngStyle.gt-xs"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "w-500"], ["mat-cell", "", "data-label", "Authorization", 3, "ngStyle.gt-xs"], ["class", "data-item", 4, "ngFor", "ngForOf"], [1, "data-item"], ["mat-header-cell", "", "mat-sort-header", "", 3, "ngStyle.gt-xs"], ["mat-cell", "", "data-label", "Block & Date"], ["mat-header-row", ""], ["mat-row", ""]], template: function SimpleAssetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SimpleAssetsComponent_mat_progress_spinner_0_Template, 1, 1, "mat-progress-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SimpleAssetsComponent_div_2_Template, 9, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SimpleAssetsComponent_div_3_Template, 35, 15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.simpleAssetsService.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.tx);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tx && ctx.simpleAssetsService.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinner, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.FlexFillDirective, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FaLayersComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCell, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__.DefaultStyleDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.KeyValuePipe], styles: [".title[_ngcontent-%COMP%] {\n    font-size: 21px;\n    color: #00a6de;\n    font-weight: 500;\n  }\n\n  .used[_ngcontent-%COMP%] {\n    margin-left: 7px;\n  }\n\n  .history-table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .data-item[_ngcontent-%COMP%] {\n    padding-bottom: 4px;\n  }\n\n  \n\n  @media (max-width: 599px) {\n    .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%] {\n      display: flex;\n      flex-wrap: wrap;\n      height: auto;\n      position: sticky;\n      top: 0;\n      z-index: 2;\n    }\n\n    .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n      display: none;\n    }\n\n    .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container[_ngcontent-%COMP%] {\n      padding-left: 15px;\n    }\n\n    .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container[_ngcontent-%COMP%]:not([mat-sort-header]), .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container.mat-sort-header-disabled[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container.mat-column-actions[_ngcontent-%COMP%] {\n      display: none;\n    }\n\n\n    .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%] {\n      height: auto;\n    }\n\n    .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:not(.mat-column-actions) {\n      display: grid;\n      grid-template-columns: 50% 50%;\n      padding: 0.5rem;\n      text-align: left;\n      word-break: break-word;\n    }\n\n    .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:not(.mat-column-actions)    > *[_ngcontent-%COMP%] {\n      grid-column: 2;\n    }\n\n    .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:not(.mat-column-actions):before {\n      content: attr(data-label);\n      text-align: left;\n      font-size: 12px;\n      font-weight: 500;\n      color: rgba(0, 0, 0, 0.54);\n    }\n\n    .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-column-actions[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: center;\n      padding: 0 0.5rem;\n    }\n\n    .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-column-actions[_ngcontent-%COMP%] > button[_ngcontent-%COMP%] {\n      margin: 0.5rem 0;\n    }\n\n    .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:last-of-type   td[_ngcontent-%COMP%]:last-of-type {\n      border: none;\n    }\n\n    .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:not(:last-of-type)   td[_ngcontent-%COMP%]:last-of-type {\n      border-bottom: 0.5rem solid #e5e5e5;\n      padding-bottom: 20px !important;\n      margin-bottom: 20px;\n    }\n\n    .mat-card[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%] {\n      border: 0.5rem solid #fafafa;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS1hc3NldHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBLG1CQUFtQjs7RUFDbkI7SUFDRTtNQUNFLGFBQWE7TUFDYixlQUFlO01BQ2YsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixNQUFNO01BQ04sVUFBVTtJQUNaOztJQUVBO01BQ0UsYUFBYTtJQUNmOztJQUVBO01BQ0Usa0JBQWtCO0lBQ3BCOztJQUVBOzs7TUFHRSxhQUFhO0lBQ2Y7OztJQUdBO01BQ0UsWUFBWTtJQUNkOztJQUVBO01BQ0UsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLHNCQUFzQjtJQUN4Qjs7SUFFQTtNQUNFLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSx5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsMEJBQTBCO0lBQzVCOztJQUVBO01BQ0UsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxtQ0FBbUM7TUFDbkMsK0JBQStCO01BQy9CLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLDRCQUE0QjtJQUM5QjtFQUNGIiwiZmlsZSI6InNpbXBsZS1hc3NldHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGNvbG9yOiAjMDBhNmRlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAudXNlZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgfVxuXG4gIC5oaXN0b3J5LXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5kYXRhLWl0ZW0ge1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIH1cblxuICAvKnRhYmxlIHJlc3BvbnNpdmUqL1xuICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICAubWF0LXRhYmxlIC5tYXQtaGVhZGVyLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgLm1hdC10YWJsZSAubWF0LWhlYWRlci1yb3cgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1hdC10YWJsZSAubWF0LWhlYWRlci1yb3cgdGgubWF0LWhlYWRlci1jZWxsPi5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICB9XG5cbiAgICAubWF0LXRhYmxlIC5tYXQtaGVhZGVyLXJvdyB0aC5tYXQtaGVhZGVyLWNlbGw+Lm1hdC1zb3J0LWhlYWRlci1jb250YWluZXI6bm90KFttYXQtc29ydC1oZWFkZXJdKSxcbiAgICAubWF0LXRhYmxlIC5tYXQtaGVhZGVyLXJvdyB0aC5tYXQtaGVhZGVyLWNlbGw+Lm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIubWF0LXNvcnQtaGVhZGVyLWRpc2FibGVkLFxuICAgIC5tYXQtdGFibGUgLm1hdC1oZWFkZXItcm93IHRoLm1hdC1oZWFkZXItY2VsbD4ubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lci5tYXQtY29sdW1uLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cblxuICAgIC5tYXQtdGFibGUgLm1hdC1yb3cge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5tYXQtdGFibGUgLm1hdC1yb3cgdGQubWF0LWNlbGw6bm90KC5tYXQtY29sdW1uLWFjdGlvbnMpIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICB9XG5cbiAgICAubWF0LXRhYmxlIC5tYXQtcm93IHRkLm1hdC1jZWxsOm5vdCgubWF0LWNvbHVtbi1hY3Rpb25zKSA+ICoge1xuICAgICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgfVxuXG4gICAgLm1hdC10YWJsZSAubWF0LXJvdyB0ZC5tYXQtY2VsbDpub3QoLm1hdC1jb2x1bW4tYWN0aW9ucyk6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgIH1cblxuICAgIC5tYXQtdGFibGUgLm1hdC1yb3cgdGQubWF0LWNvbHVtbi1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgIH1cblxuICAgIC5tYXQtdGFibGUgLm1hdC1yb3cgdGQubWF0LWNvbHVtbi1hY3Rpb25zPmJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgIH1cblxuICAgIC5tYXQtdGFibGUgLm1hdC1yb3c6bGFzdC1vZi10eXBlIHRkOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1hdC10YWJsZSAubWF0LXJvdzpub3QoOmxhc3Qtb2YtdHlwZSkgdGQ6bGFzdC1vZi10eXBlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDAuNXJlbSBzb2xpZCAjZTVlNWU1O1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLm1hdC1jYXJkIC5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtdGFibGUge1xuICAgICAgYm9yZGVyOiAwLjVyZW0gc29saWQgI2ZhZmFmYTtcbiAgICB9XG4gIH1cbiJdfQ== */"] });


/***/ }),

/***/ 1710:
/*!*********************************************************************!*\
  !*** ./src/app/search-results/transaction/transaction.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionComponent": () => (/* binding */ TransactionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faExchangeAlt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faExchangeAlt */ 6554);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCircle */ 8935);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faLock */ 9622);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHourglassStart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHourglassStart */ 9807);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHistory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHistory */ 175);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSadTear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSadTear */ 8026);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSpinner */ 2328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/account.service */ 9876);
/* harmony import */ var _services_chain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chain.service */ 5955);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ 9243);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);





















function TransactionComponent_mat_progress_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-spinner", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 45);
} }
function TransactionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Transaction not found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "We couldn't find the transaction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "strong", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faSadTear);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.txID);
} }
function TransactionComponent_div_3_mat_chip_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Irreversible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r3.faLock);
} }
function TransactionComponent_div_3_mat_chip_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r4.faHourglass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Pending (", ctx_r4.countdownTimer, "s) ");
} }
function TransactionComponent_div_3_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TransactionComponent_div_3_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Contract");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TransactionComponent_div_3_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](action_r16.act.account);
} }
const _c0 = function () { return { "padding-left": "14px", "padding-right": "14px" }; };
function TransactionComponent_div_3_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function TransactionComponent_div_3_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](action_r17.act.name);
} }
function TransactionComponent_div_3_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "data-item": a0 }; };
function TransactionComponent_div_3_td_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const action_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c1, ctx_r19.objectKeyCount(action_r18["act"]["data"]) > 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r20.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r19.stringifyObject(item_r20.value));
} }
const _c2 = function () { return { "padding": "10px 0 6px" }; };
function TransactionComponent_div_3_td_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TransactionComponent_div_3_td_52_div_1_Template, 6, 5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, action_r18["act"]["data"]));
} }
function TransactionComponent_div_3_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Authorization");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TransactionComponent_div_3_td_55_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const auth_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](auth_r24.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](auth_r24.value);
} }
const _c3 = function () { return { "padding": "10px 70px 6px" }; };
function TransactionComponent_div_3_td_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TransactionComponent_div_3_td_55_div_1_Template, 6, 2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, action_r22["act"]["authorization"][0]));
} }
function TransactionComponent_div_3_tr_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 58);
} }
function TransactionComponent_div_3_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 59);
} }
function TransactionComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "fa-layers", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Transaction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-chip-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TransactionComponent_div_3_mat_chip_10_Template, 3, 1, "mat-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TransactionComponent_div_3_mat_chip_11_Template, 3, 2, "mat-chip", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "CPU");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "usage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "NET");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "usage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "fa-layers", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "fa-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, TransactionComponent_div_3_span_42_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](44, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, TransactionComponent_div_3_th_45_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, TransactionComponent_div_3_td_46_Template, 3, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](47, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, TransactionComponent_div_3_th_48_Template, 2, 2, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, TransactionComponent_div_3_td_49_Template, 3, 3, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](50, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, TransactionComponent_div_3_th_51_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, TransactionComponent_div_3_td_52_Template, 3, 5, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](53, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, TransactionComponent_div_3_th_54_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, TransactionComponent_div_3_td_55_Template, 3, 5, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, TransactionComponent_div_3_tr_56_Template, 1, 0, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, TransactionComponent_div_3_tr_57_Template, 1, 0, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faExchange)("inverse", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.accountService.libNum > ctx_r2.tx.actions[0]["block_num"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.accountService.libNum < ctx_r2.tx.actions[0]["block_num"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.tx.trx_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Block num: ", ctx_r2.tx.actions[0].block_num, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Block time: ", ctx_r2.formatDate(ctx_r2.tx.actions[0]["@timestamp"]), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.tx.actions[0]["cpu_usage_us"], " \u00B5s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.tx.actions[0]["net_usage_words"], " bytes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faHistory)("inverse", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.tx.actions.length, " Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.tx.actions.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r2.tx.actions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.columnsToDisplay)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r2.columnsToDisplay);
} }
class TransactionComponent {
    constructor(activatedRoute, accountService, chainData, title) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.chainData = chainData;
        this.title = title;
        this.columnsToDisplay = ['contract', 'action', 'data', 'auth'];
        this.tx = {
            actions: null
        };
        this.faCircle = _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_3__.faCircle;
        this.faExchange = _fortawesome_free_solid_svg_icons_faExchangeAlt__WEBPACK_IMPORTED_MODULE_4__.faExchangeAlt;
        this.faLock = _fortawesome_free_solid_svg_icons_faLock__WEBPACK_IMPORTED_MODULE_5__.faLock;
        this.faHourglass = _fortawesome_free_solid_svg_icons_faHourglassStart__WEBPACK_IMPORTED_MODULE_6__.faHourglassStart;
        this.faHistory = _fortawesome_free_solid_svg_icons_faHistory__WEBPACK_IMPORTED_MODULE_7__.faHistory;
        this.faSadTear = _fortawesome_free_solid_svg_icons_faSadTear__WEBPACK_IMPORTED_MODULE_8__.faSadTear;
        this.faSpinner = _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_9__.faSpinner;
        this.countdownTimer = 0;
    }
    objectKeyCount(obj) {
        try {
            return Object.keys(obj).length;
        }
        catch (e) {
            return 0;
        }
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((routeParams) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.txID = routeParams.transaction_id;
            this.tx = yield this.accountService.loadTxData(routeParams.transaction_id);
            if (!this.chainData.chainInfoData.chain_name) {
                this.title.setTitle(`TX ${routeParams.transaction_id.slice(0, 8)} • Hyperion Explorer`);
            }
            else {
                this.title.setTitle(`TX ${routeParams.transaction_id.slice(0, 8)} • ${this.chainData.chainInfoData.chain_name} Hyperion Explorer`);
            }
            this.accountService.libNum = this.tx.lib;
            if (this.tx.actions[0].block_num > this.tx.lib) {
                yield this.reloadCountdownTimer();
                this.countdownLoop = setInterval(() => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                    this.countdownTimer--;
                    if (this.countdownTimer <= 0) {
                        yield this.reloadCountdownTimer();
                        if (this.accountService.libNum > this.tx.actions[0].block_num) {
                            clearInterval(this.countdownLoop);
                        }
                    }
                }), 1000);
            }
        }));
    }
    ngOnDestroy() {
        if (this.countdownLoop) {
            clearInterval(this.countdownLoop);
        }
    }
    formatDate(date) {
        return new Date(date).toLocaleString();
    }
    stringifyObject(subitem) {
        return JSON.stringify(subitem, null, 2);
    }
    reloadCountdownTimer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.accountService.updateLib();
            this.countdownTimer = Math.ceil((this.tx.actions[0].block_num - this.accountService.libNum) / 2);
        });
    }
}
TransactionComponent.ɵfac = function TransactionComponent_Factory(t) { return new (t || TransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_chain_service__WEBPACK_IMPORTED_MODULE_1__.ChainService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.Title)); };
TransactionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TransactionComponent, selectors: [["app-transaction"]], decls: 4, vars: 3, consts: [["mode", "indeterminate", 3, "diameter", 4, "ngIf"], [1, "container"], ["fxLayout", "column", "style", "height: calc(100vh - 209px);", "fxLayoutAlign", "start center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start center", "fxLayoutGap", "15px", 4, "ngIf"], ["mode", "indeterminate", 3, "diameter"], ["fxLayout", "column", "fxLayoutAlign", "start center", 2, "height", "calc(100vh - 209px)"], [2, "width", "100%"], [1, "faded"], [2, "margin-right", "5px", 3, "icon"], [1, "break-word"], ["fxLayout", "column", "fxLayoutAlign", "start center", "fxLayoutGap", "15px"], ["fxFlex", "100", "fxFlexFill", ""], [2, "border-bottom", "1px solid #e4e4e4", "margin-bottom", "12px"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [2, "margin-bottom", "-15px", "color", "#9c9c9c", "margin-top", "0", "margin-right", "10px"], [2, "margin-right", "2px", 3, "fixedWidth"], ["transform", "grow-1", 3, "icon"], ["transform", "shrink-4", 3, "icon", "inverse"], ["orientation", "vertical"], ["selected", "", 4, "ngIf"], ["color", "accent", "selected", "", 4, "ngIf"], [1, "break-word", 2, "margin", "10px 0 12px 0"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "15px"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "50px"], [1, "title"], [1, "faded", "used"], [2, "margin-top", "0"], [2, "margin-right", "5px", 3, "fixedWidth"], ["transform", "grow-3", 3, "icon"], ["transform", "shrink-5", 3, "icon", "inverse"], [4, "ngIf"], ["mat-table", "", 1, "actions-table", 3, "dataSource"], ["matColumnDef", "contract"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "data-label", "Contract", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 3, "ngStyle.gt-xs", 4, "matHeaderCellDef"], ["mat-cell", "", "data-label", "Action", 3, "ngStyle.gt-xs", 4, "matCellDef"], ["matColumnDef", "data"], ["mat-cell", "", "data-label", "Data", 3, "ngStyle.gt-xs", 4, "matCellDef"], ["matColumnDef", "auth"], ["mat-cell", "", "data-label", "Authorization", 3, "ngStyle.gt-xs", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["selected", ""], ["color", "accent", "selected", ""], ["mat-header-cell", ""], ["mat-cell", "", "data-label", "Contract"], ["mat-header-cell", "", 3, "ngStyle.gt-xs"], ["mat-cell", "", "data-label", "Action", 3, "ngStyle.gt-xs"], [1, "accent", "w-500"], ["mat-cell", "", "data-label", "Data", 3, "ngStyle.gt-xs"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "w-500"], ["mat-cell", "", "data-label", "Authorization", 3, "ngStyle.gt-xs"], ["class", "data-item", 4, "ngFor", "ngForOf"], [1, "data-item"], ["mat-header-row", ""], ["mat-row", ""]], template: function TransactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TransactionComponent_mat_progress_spinner_0_Template, 1, 1, "mat-progress-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TransactionComponent_div_2_Template, 9, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TransactionComponent_div_3_Template, 58, 21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.accountService.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tx.actions && ctx.tx.actions.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tx.actions && ctx.tx.actions.length > 0 && ctx.accountService.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinner, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.FlexFillDirective, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FaLayersComponent, _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__.MatChipList, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRowDef, _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__.MatChip, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCell, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__.DefaultStyleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__.DefaultClassDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.KeyValuePipe], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 21px;\n  color: #00a6de;\n  font-weight: 500;\n}\n\n.used[_ngcontent-%COMP%] {\n  margin-left: 7px;\n}\n\n.actions-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.data-item[_ngcontent-%COMP%] {\n  padding-bottom: 4px;\n}\n\n\n\n@media (max-width: 599px) {\n  .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    height: auto;\n    position: sticky;\n    top: 0;\n    z-index: 2;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container[_ngcontent-%COMP%] {\n    padding-left: 15px;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container[_ngcontent-%COMP%]:not([mat-sort-header]), .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container.mat-sort-header-disabled[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container.mat-column-actions[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:not(.mat-column-actions) {\n    display: grid;\n    grid-template-columns: 50% 50%;\n    padding: 0.5rem;\n    text-align: left;\n    word-break: break-word;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:not(.mat-column-actions)    > *[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:not(.mat-column-actions):before {\n    content: attr(data-label);\n    text-align: left;\n    font-size: 12px;\n    font-weight: 500;\n    color: rgba(0, 0, 0, 0.54);\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-column-actions[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    padding: 0 0.5rem;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-column-actions[_ngcontent-%COMP%] > button[_ngcontent-%COMP%] {\n    margin: 0.5rem 0;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:last-of-type   td[_ngcontent-%COMP%]:last-of-type {\n    border: none;\n  }\n\n  .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:not(:last-of-type)   td[_ngcontent-%COMP%]:last-of-type {\n    border-bottom: 0.5rem solid #e5e5e5;\n    padding-bottom: 20px !important;\n    margin-bottom: 20px;\n  }\n\n  .mat-card[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%] {\n    border: 0.5rem solid #fafafa;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxtQkFBbUI7O0FBQ25CO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTs7O0lBR0UsYUFBYTtFQUNmOzs7RUFHQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRiIsImZpbGUiOiJ0cmFuc2FjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBjb2xvcjogIzAwYTZkZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnVzZWQge1xuICBtYXJnaW4tbGVmdDogN3B4O1xufVxuXG4uYWN0aW9ucy10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGF0YS1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuLyp0YWJsZSByZXNwb25zaXZlKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xuICAubWF0LXRhYmxlIC5tYXQtaGVhZGVyLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cblxuICAubWF0LXRhYmxlIC5tYXQtaGVhZGVyLXJvdyB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWF0LXRhYmxlIC5tYXQtaGVhZGVyLXJvdyB0aC5tYXQtaGVhZGVyLWNlbGw+Lm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgfVxuXG4gIC5tYXQtdGFibGUgLm1hdC1oZWFkZXItcm93IHRoLm1hdC1oZWFkZXItY2VsbD4ubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lcjpub3QoW21hdC1zb3J0LWhlYWRlcl0pLFxuICAubWF0LXRhYmxlIC5tYXQtaGVhZGVyLXJvdyB0aC5tYXQtaGVhZGVyLWNlbGw+Lm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIubWF0LXNvcnQtaGVhZGVyLWRpc2FibGVkLFxuICAubWF0LXRhYmxlIC5tYXQtaGVhZGVyLXJvdyB0aC5tYXQtaGVhZGVyLWNlbGw+Lm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIubWF0LWNvbHVtbi1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cblxuICAubWF0LXRhYmxlIC5tYXQtcm93IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAubWF0LXRhYmxlIC5tYXQtcm93IHRkLm1hdC1jZWxsOm5vdCgubWF0LWNvbHVtbi1hY3Rpb25zKSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgfVxuXG4gIC5tYXQtdGFibGUgLm1hdC1yb3cgdGQubWF0LWNlbGw6bm90KC5tYXQtY29sdW1uLWFjdGlvbnMpID4gKiB7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG4gIH1cblxuICAubWF0LXRhYmxlIC5tYXQtcm93IHRkLm1hdC1jZWxsOm5vdCgubWF0LWNvbHVtbi1hY3Rpb25zKTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgfVxuXG4gIC5tYXQtdGFibGUgLm1hdC1yb3cgdGQubWF0LWNvbHVtbi1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICB9XG5cbiAgLm1hdC10YWJsZSAubWF0LXJvdyB0ZC5tYXQtY29sdW1uLWFjdGlvbnM+YnV0dG9uIHtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xuICB9XG5cbiAgLm1hdC10YWJsZSAubWF0LXJvdzpsYXN0LW9mLXR5cGUgdGQ6bGFzdC1vZi10eXBlIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICAubWF0LXRhYmxlIC5tYXQtcm93Om5vdCg6bGFzdC1vZi10eXBlKSB0ZDpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1ib3R0b206IDAuNXJlbSBzb2xpZCAjZTVlNWU1O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5tYXQtY2FyZCAubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LXRhYmxlIHtcbiAgICBib3JkZXI6IDAuNXJlbSBzb2xpZCAjZmFmYWZhO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 9876:
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _eosrio_hyperion_stream_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eosrio/hyperion-stream-client */ 3128);
/* harmony import */ var _eosrio_hyperion_stream_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eosrio_hyperion_stream_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.service */ 538);







class AccountService {
    constructor(httpClient, pagService) {
        this.httpClient = httpClient;
        this.pagService = pagService;
        this.account = {
            cpu_limit: {
                used: 1,
                max: 1
            },
            net_limit: {
                used: 1,
                max: 1
            }
        };
        this.actions = [];
        this.tokens = [];
        this.streamClientStatus = false;
        this.pendingSet = new Set();
        this.loaded = false;
        this.streamClientLoaded = false;
        this.getServerUrl();
        this.getAccountUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hyperionApiUrl + '/v2/state/get_account?account=';
        this.getActionsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hyperionApiUrl + '/v2/history/get_actions?account=';
        this.getCreatorUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hyperionApiUrl + '/v2/history/get_creator?account=';
        this.getTxUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hyperionApiUrl + '/v2/history/get_transaction?id=';
        this.getBlockUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hyperionApiUrl + '/v1/trace_api/get_block';
        this.getKeyUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hyperionApiUrl + '/v2/state/get_key_accounts?public_key=';
        this.tableDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource([]);
        // this.initStreamClient().catch(console.log);
    }
    monitorLib() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Starting LIB monitoring...');
            if (!this.verificationLoop) {
                this.verificationLoop = setInterval(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.updateLib();
                }), 21 * 12 * 500);
            }
            if (!this.predictionLoop) {
                this.predictionLoop = setInterval(() => {
                    this.libNum += 12;
                    if (this.pendingSet.size > 0) {
                        this.pendingSet.forEach((value) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            if (value < this.libNum) {
                                console.log(`Block cleared ${value} < ${this.libNum}`);
                                this.pendingSet.delete(value);
                            }
                        }));
                    }
                    else {
                        console.log('No more pending actions, clearing loops');
                        this.clearLoops();
                    }
                }, 12 * 500);
            }
        });
    }
    checkIrreversibility() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.libNum = yield this.checkLib();
            if (this.libNum) {
                let counter = 0;
                for (const action of this.actions) {
                    if (action.block_num <= this.libNum) {
                        action.irreversible = true;
                    }
                    else {
                        counter++;
                        this.pendingSet.add(action.block_num);
                    }
                }
                if (counter > 0) {
                    console.log('Pending actions: ' + counter);
                    this.monitorLib().catch(console.log);
                }
            }
        });
    }
    getServerUrl() {
        let server;
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
            server = window.location.origin;
        }
        else {
            server = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hyperionApiUrl;
        }
        this.server = server;
    }
    updateLib() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.libNum = yield this.checkLib();
        });
    }
    checkLib() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const info = yield this.httpClient.get(this.server + '/v1/chain/get_info').toPromise();
                if (info) {
                    return info.last_irreversible_block_num;
                }
                else {
                    return null;
                }
            }
            catch (e) {
                console.log(e);
                return null;
            }
        });
    }
    initStreamClient() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const health = yield this.httpClient.get(this.server + '/v2/health').toPromise();
                if (health.features.streaming.enable) {
                    this.streamClient = new (_eosrio_hyperion_stream_client__WEBPACK_IMPORTED_MODULE_1___default())(this.server, { async: true });
                    this.streamClientLoaded = true;
                    this.streamClient.onConnect = () => {
                        this.streamClientStatus = this.streamClient.online;
                    };
                    this.streamClient.onLIB = (data) => {
                        this.libNum = data.block_num;
                    };
                    this.streamClient.onData = (data, ack) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        if (data.type === 'action') {
                            this.actions.unshift(data.content);
                            if (this.actions.length > 20) {
                                this.actions.pop();
                            }
                            this.tableDataSource.data = this.actions;
                        }
                        ack();
                    });
                }
                else {
                    console.log('Streaming disabled!');
                    this.streamClientLoaded = false;
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    setupRequests() {
        // find latest block
        let maxBlock = 0;
        for (const action of this.actions) {
            if (action.block_num > maxBlock) {
                maxBlock = action.block_num;
            }
        }
        console.log(maxBlock);
        // setup request
        this.streamClient.onConnect = () => {
            this.streamClient.streamActions({
                account: this.account.account_name,
                action: '*',
                contract: '*',
                filters: [],
                read_until: 0,
                start_from: maxBlock + 1
            }).catch(console.log);
            this.streamClientStatus = this.streamClient.online;
        };
    }
    loadAccountData(accountName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loaded = false;
            try {
                this.jsonData = (yield this.httpClient.get(this.getAccountUrl + accountName).toPromise());
                if (this.jsonData.account) {
                    this.account = this.jsonData.account;
                }
                if (this.jsonData.tokens) {
                    this.tokens = this.jsonData.tokens;
                }
                if (this.jsonData.actions) {
                    this.actions = this.jsonData.actions;
                    this.checkIrreversibility().catch(console.log);
                    this.tableDataSource.data = this.actions;
                }
                if (this.jsonData.total_actions) {
                    this.pagService.totalItems = this.jsonData.total_actions;
                }
                this.loaded = true;
                return true;
            }
            catch (error) {
                console.log(error);
                this.jsonData = null;
                this.loaded = true;
                return false;
            }
        });
    }
    loadMoreActions(accountName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const firstAction = this.actions[this.actions.length - 1];
            const maxGs = (firstAction.global_sequence - 1);
            try {
                const q = this.getActionsUrl + accountName + '&global_sequence=0-' + maxGs + '&limit=50';
                const results = yield this.httpClient.get(q).toPromise();
                if (results.actions && results.actions.length > 0) {
                    this.actions.push(...results.actions);
                    this.tableDataSource.data = this.actions;
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    loadTxData(txId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loaded = false;
            try {
                const data = yield this.httpClient.get(this.getTxUrl + txId).toPromise();
                this.loaded = true;
                return data;
            }
            catch (error) {
                console.log(error);
                this.loaded = true;
                return null;
            }
        });
    }
    loadBlockData(blockNum) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loaded = false;
            try {
                const data = yield this.httpClient.post(this.getBlockUrl, {
                    block_num: blockNum
                }).toPromise();
                this.loaded = true;
                return data;
            }
            catch (error) {
                console.log(error);
                this.loaded = true;
                return null;
            }
        });
    }
    loadPubKey(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loaded = false;
            try {
                const data = yield this.httpClient.get(this.getKeyUrl + key + '&details=true').toPromise();
                this.loaded = true;
                return data;
            }
            catch (error) {
                console.log(error);
                this.loaded = true;
                return null;
            }
        });
    }
    getCreator(accountName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.httpClient.get(this.getCreatorUrl + accountName).toPromise();
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    toggleStreaming() {
        if (this.streamClientStatus) {
            this.streamClient.disconnect();
            this.streamClientStatus = false;
            this.checkIrreversibility().catch(console.log);
        }
        else {
            this.tableDataSource.paginator.firstPage();
            this.clearLoops();
            this.setupRequests();
            this.streamClient.connect(() => {
                console.log('hyperion streaming client connected!');
            });
        }
    }
    clearLoops() {
        if (this.predictionLoop) {
            clearInterval(this.predictionLoop);
        }
        if (this.verificationLoop) {
            clearInterval(this.verificationLoop);
        }
    }
    disconnectStream() {
        if (this.streamClient && this.streamClientStatus) {
            this.streamClient.disconnect();
            this.streamClient.online = false;
            this.streamClientStatus = false;
        }
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_pagination_service__WEBPACK_IMPORTED_MODULE_2__.PaginationService)); };
AccountService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5955:
/*!*******************************************!*\
  !*** ./src/app/services/chain.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChainService": () => (/* binding */ ChainService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 1570);





class ChainService {
    constructor(http, title) {
        this.http = http;
        this.title = title;
        this.chainInfoData = {};
        this.loadChainData().catch(console.log);
    }
    loadChainData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.chainInfoData = yield this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hyperionApiUrl + '/v2/explorer_metadata').toPromise();
                if (this.chainInfoData.chain_name) {
                    this.title.setTitle(`${this.chainInfoData.chain_name} Hyperion Explorer`);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
ChainService.ɵfac = function ChainService_Factory(t) { return new (t || ChainService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title)); };
ChainService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ChainService, factory: ChainService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1161:
/*!*****************************************!*\
  !*** ./src/app/services/evm.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvmService": () => (/* binding */ EvmService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _pagination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.service */ 538);






const REVERT_FUNCTION_SELECTOR = '0x08c379a0';
const REVERT_PANIC_SELECTOR = '0x4e487b71';
class EvmService {
    constructor(http, pagService) {
        this.http = http;
        this.pagService = pagService;
        this.loaded = true;
        this.jsonRpcApi = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.eosioNodeUrl + '/evm';
        this.streamClientStatus = false;
        this.libNum = 0;
        this.streamClientLoaded = true;
        this.transactions = [];
        this.getServerUrl();
        this.addressTransactions = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource([]);
        this.blockTransactions = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource([]);
    }
    callRpcMethod(method, params) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const response = yield this.http.post(this.jsonRpcApi, {
                    jsonrpc: '2.0',
                    id: Date.now(),
                    method,
                    params
                }).toPromise();
                return response.result;
            }
            catch (e) {
                console.log(e);
                return null;
            }
        });
    }
    getBalance(address) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const getBalResult = yield this.callRpcMethod('eth_getBalanceHuman', [address]);
            if (getBalResult) {
                return Number(getBalResult);
            }
            else {
                return 0;
            }
        });
    }
    getTransactionReceipt(hash) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.callRpcMethod('eth_getTransactionReceipt', [hash.toLowerCase()]);
        });
    }
    getTransactionByHash(hash) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.callRpcMethod('eth_getTransactionByHash', [hash.toLowerCase()]);
        });
    }
    getBlockByNumber(blockNumber, full) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.callRpcMethod('eth_getBlockByNumber', [blockNumber.toLowerCase(), full]);
        });
    }
    getBlockByHash(hash, full) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.callRpcMethod('eth_getBlockByHash', [hash.toLowerCase(), full]);
        });
    }
    traceTransaction(hash) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.callRpcMethod('trace_transaction', [hash.toLowerCase()]);
        });
    }
    getServerUrl() {
        let server;
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
            server = window.location.origin;
        }
        else {
            server = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hyperionApiUrl;
        }
        this.server = server;
    }
    toggleStreaming() {
        this.streamClientStatus = !this.streamClientStatus;
    }
    loadTransactions(address) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const resp = yield this.http.get(this.server + '/evm_explorer/get_transactions?address=' + address).toPromise();
            this.processTransactions(resp.transactions);
            if (resp.total) {
                this.pagService.totalItems = resp.total;
            }
        });
    }
    loadBlock(blockNumber) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const blockData = yield this.getBlockByNumber('0x' + Number(blockNumber).toString(16), true);
            blockData.transactions.forEach((trx) => {
                trx.val_formatted = `${(parseInt(trx.value, 16) / 1000000000000000000).toFixed(4)} TLOS`;
            });
            this.blockTransactions.data = blockData.transactions;
        });
    }
    loadMoreTransactions(address) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log(address);
        });
    }
    processTransactions(transactions) {
        this.transactions = [];
        this.transactions = transactions;
        for (const trx of this.transactions) {
            trx.evm_block = trx.block;
            trx.evm_hash = trx.hash;
            trx.val_formatted = `${parseInt(trx.value_d).toFixed(4)} TLOS`;
        }
        this.addressTransactions.data = this.transactions;
    }
    getErrorFromOutput(output) {
        if (!output)
            return '';
        if (output.startsWith(REVERT_FUNCTION_SELECTOR)) {
            return this.parseRevertReason(output);
        }
        if (output.startsWith(REVERT_PANIC_SELECTOR)) {
            return this.parsePanicReason(output);
        }
        return '';
    }
    parseRevertReason(revertOutput) {
        if (!revertOutput || revertOutput.length < 138) {
            return '';
        }
        let reason = '';
        let trimmedOutput = revertOutput.substr(138);
        for (let i = 0; i < trimmedOutput.length; i += 2) {
            reason += String.fromCharCode(parseInt(trimmedOutput.substr(i, 2), 16));
        }
        return reason;
    }
    parsePanicReason(revertOutput) {
        let trimmedOutput = revertOutput.slice(-2);
        let reason;
        switch (trimmedOutput) {
            case "01":
                reason = "If you call assert with an argument that evaluates to false.";
                break;
            case "11":
                reason = "If an arithmetic operation results in underflow or overflow outside of an unchecked { ... } block.";
                break;
            case "12":
                reason = "If you divide or modulo by zero (e.g. 5 / 0 or 23 % 0).";
                break;
            case "21":
                reason = "If you convert a value that is too big or negative into an enum type.";
                break;
            case "31":
                reason = "If you call .pop() on an empty array.";
                break;
            case "32":
                reason = "If you access an array, bytesN or an array slice at an out-of-bounds or negative index (i.e. x[i] where i >= x.length or i < 0).";
                break;
            case "41":
                reason = "If you allocate too much memory or create an array that is too large.";
                break;
            case "51":
                reason = "If you call a zero-initialized variable of internal function type.";
                break;
            default:
                reason = "Default panic message";
        }
        return reason;
    }
}
EvmService.ɵfac = function EvmService_Factory(t) { return new (t || EvmService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_pagination_service__WEBPACK_IMPORTED_MODULE_1__.PaginationService)); };
EvmService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: EvmService, factory: EvmService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2563:
/*!********************************************************!*\
  !*** ./src/app/services/launch-darkly/featureFlags.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureFlagName": () => (/* binding */ FeatureFlagName),
/* harmony export */   "featureFlags": () => (/* binding */ featureFlags)
/* harmony export */ });
var FeatureFlagName;
(function (FeatureFlagName) {
    FeatureFlagName["IsQueryingByBlockNumberEnabled"] = "is_querying_by_block_number_enabled";
    FeatureFlagName["IsQueryingTokenValueEnabled"] = "is_querying_token_value_enabled";
    FeatureFlagName["VoiceSystemAccounts"] = "voice_system_accounts";
})(FeatureFlagName || (FeatureFlagName = {}));
const featureFlags = {
    [FeatureFlagName.IsQueryingByBlockNumberEnabled]: { defaultValue: false },
    [FeatureFlagName.IsQueryingTokenValueEnabled]: { defaultValue: false },
    [FeatureFlagName.VoiceSystemAccounts]: {
        defaultValue: JSON.stringify([
            'eosio.token',
            'eosio',
            'eosio.msig',
            'eosio.wrap',
            'eosio.names',
            'eosio.bpay',
            'eosio.prods',
            'eosio.ram',
            'eosio.ramfee',
            'eosio.saving',
            'eosio.stake',
            'eosio.vpay',
            'eosio.rex',
            'simpleassets',
            'simplemarket',
            'vcewaxbridge',
            'voice.auth',
            'voicebp1',
            'voice.bridge',
            'voice.fi',
            'voice.market',
            'voice.nft',
            'voice.pay',
            'voice.perms',
            'voice.tknms',
            'voice.up',
        ]),
    },
};


/***/ }),

/***/ 8638:
/*!*****************************************************************!*\
  !*** ./src/app/services/launch-darkly/launch-darkly.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LDUserCustomProperties": () => (/* binding */ LDUserCustomProperties),
/* harmony export */   "LDAnonymousUser": () => (/* binding */ LDAnonymousUser),
/* harmony export */   "LaunchDarklyService": () => (/* binding */ LaunchDarklyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var launchdarkly_js_client_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! launchdarkly-js-client-sdk */ 7444);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _featureFlags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./featureFlags */ 2563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);





const LDUserCustomProperties = {
    platform: 'hyperion-web',
};
const LDAnonymousUser = {
    anonymous: true,
    custom: LDUserCustomProperties,
    key: 'anonymous',
};
class LaunchDarklyService {
    initLaunchDarkly() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Initializing LaunchDarkly client-side');
            this.user = LDAnonymousUser;
            LaunchDarklyService.client = (0,launchdarkly_js_client_sdk__WEBPACK_IMPORTED_MODULE_0__.initialize)(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.clientSideID, this.user);
            yield LaunchDarklyService.client.waitForInitialization();
        });
    }
    variation(flag) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const defaultValue = _featureFlags__WEBPACK_IMPORTED_MODULE_2__.featureFlags[flag].defaultValue;
            yield LaunchDarklyService.client.waitUntilReady();
            return LaunchDarklyService.client.variation(`${flag}`, defaultValue);
        });
    }
}
LaunchDarklyService.ɵfac = function LaunchDarklyService_Factory(t) { return new (t || LaunchDarklyService)(); };
LaunchDarklyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LaunchDarklyService, factory: LaunchDarklyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 538:
/*!************************************************!*\
  !*** ./src/app/services/pagination.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationService": () => (/* binding */ PaginationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class PaginationService {
    constructor() {
        this.totalItems = 0;
    }
}
PaginationService.ɵfac = function PaginationService_Factory(t) { return new (t || PaginationService)(); };
PaginationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaginationService, factory: PaginationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4112:
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var src_app_services_launch_darkly_launch_darkly_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/launch-darkly/launch-darkly.service */ 8638);
/* harmony import */ var src_app_services_launch_darkly_featureFlags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/launch-darkly/featureFlags */ 2563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);







class SearchService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.searchAccountUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.eosioNodeUrl + '/v1/chain/get_table_by_scope';
        this.featureFlagClient = new src_app_services_launch_darkly_launch_darkly_service__WEBPACK_IMPORTED_MODULE_1__.LaunchDarklyService();
    }
    filterAccountNames(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if ((value && value.length > 12) || !value) {
                return [];
            }
            try {
                const sValue = value.toLowerCase();
                const requestBody = {
                    code: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.systemContract,
                    table: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.userResourcesTable,
                    lower_bound: sValue,
                    limit: 5
                };
                const response = yield this.httpClient.post(this.searchAccountUrl, requestBody).toPromise();
                if (response.rows) {
                    return response.rows.filter((tableData) => {
                        return tableData.scope.startsWith(sValue);
                    }).map((tableData) => {
                        return tableData.scope;
                    });
                }
            }
            catch (error) {
                console.log(error);
                return [];
            }
        });
    }
    submitSearch(searchText, filteredAccounts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const sValue = searchText.toLowerCase();
            this.isQueryingByBlockNumberEnabled =
                yield this.featureFlagClient.variation(src_app_services_launch_darkly_featureFlags__WEBPACK_IMPORTED_MODULE_2__.FeatureFlagName.IsQueryingByBlockNumberEnabled);
            // account direct
            if (filteredAccounts.length > 0) {
                yield this.router.navigate(['/account', sValue]);
                return true;
            }
            // tx id
            if (sValue.length === 64) {
                yield this.router.navigate(['/transaction', sValue]);
                return true;
            }
            // account search
            if (sValue.length > 0 && sValue.length <= 12 && isNaN(sValue)) {
                yield this.router.navigate(['/account', sValue]);
                return true;
            }
            // public key
            if (searchText.startsWith('PUB_K1_') || searchText.startsWith('EOS')) {
                yield this.router.navigate(['/key', searchText]);
                return true;
            }
            // block number
            if (this.isQueryingByBlockNumberEnabled) {
                const blockNum = searchText.replace(/[,.]/g, '');
                if (parseInt(blockNum, 10) > 0) {
                    yield this.router.navigate(['/block', blockNum]);
                    return true;
                }
            }
            // asset id
            if (!isNaN(sValue) && sValue.length === 15) {
                yield this.router.navigate(['/assetid', sValue]);
                return true;
            }
            // match EVM 0x prefix
            if (searchText.startsWith('0x')) {
                let route;
                switch (searchText.length) {
                    case 42: {
                        route = '/evm/address';
                        break;
                    }
                    case 66: {
                        route = '/evm/transaction';
                        break;
                    }
                    default: {
                        if (searchText.length < 16) {
                            // probably a block number in hex
                            route = '/evm/block';
                        }
                        else {
                            console.log('Ox prefixed string with length:', searchText.length);
                        }
                    }
                }
                if (route) {
                    yield this.router.navigate([route, searchText]);
                    return true;
                }
            }
            console.log('NO PATTERN MATCHED!');
            return false;
        });
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
SearchService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9040:
/*!***************************************************!*\
  !*** ./src/app/services/simple-assets.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleAssetsService": () => (/* binding */ SimpleAssetsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);




class SimpleAssetsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.loaded = false;
        this.getNftHistoryUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hyperionApiUrl + '/simpleassets/v2/nft/history_light?id=';
    }
    getHistoryByAssetId(assetId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.loaded = false;
            try {
                const data = yield this.httpClient.get(this.getNftHistoryUrl + assetId).toPromise();
                this.loaded = true;
                return data;
            }
            catch (error) {
                console.log(error);
                this.loaded = true;
                return null;
            }
        });
    }
}
SimpleAssetsService.ɵfac = function SimpleAssetsService_Factory(t) { return new (t || SimpleAssetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
SimpleAssetsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SimpleAssetsService, factory: SimpleAssetsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    clientSideID: '5f874a1e1663d70aab4db753',
    production: false,
    eosioNodeUrl: 'https://scan.dev.vops.co',
    hyperionApiUrl: 'https://scan.dev.vops.co',
    systemContract: 'eosio',
    trackingId: '',
    userResourcesTable: 'userres'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 8256);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
        .catch(err => console.error(err));
});


/***/ }),

/***/ 7020:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
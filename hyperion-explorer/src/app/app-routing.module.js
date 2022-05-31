"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
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
var routes = [
    {
        path: '', component: home_component_1.HomeComponent
    },
    {
        path: '',
        component: search_results_component_1.SearchResultsComponent,
        children: [
            { path: 'account/:account_name', component: account_component_1.AccountComponent },
            { path: 'transaction/:transaction_id', component: transaction_component_1.TransactionComponent },
            { path: 'assetid/:asset_id', component: simple_assets_component_1.SimpleAssetsComponent },
            { path: 'block/:block_num', component: block_component_1.BlockComponent },
            { path: 'key/:key', component: key_component_1.KeyComponent },
            { path: 'evm/address/:address', component: evm_address_component_1.EvmAddressComponent },
            { path: 'evm/transaction/:hash', component: evm_transaction_component_1.EvmTransactionComponent },
            { path: 'evm/block/:block_num', component: evm_block_component_1.EvmBlockComponent }
        ]
    },
    {
        path: '**', component: home_component_1.HomeComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        (0, core_1.NgModule)({
            imports: [router_1.RouterModule.forRoot(routes, {
                    scrollPositionRestoration: 'enabled'
                })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

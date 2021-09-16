"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const home_component_1 = require("./home/home.component");
const search_results_component_1 = require("./search-results/search-results.component");
const account_component_1 = require("./search-results/account/account.component");
const transaction_component_1 = require("./search-results/transaction/transaction.component");
const block_component_1 = require("./search-results/block/block.component");
const key_component_1 = require("./search-results/key/key.component");
const evm_address_component_1 = require("./search-results/evm-address/evm-address.component");
const evm_block_component_1 = require("./search-results/evm-block/evm-block.component");
const evm_transaction_component_1 = require("./search-results/evm-transaction/evm-transaction.component");
const routes = [
    {
        path: '', component: home_component_1.HomeComponent
    },
    {
        path: '',
        component: search_results_component_1.SearchResultsComponent,
        children: [
            { path: 'account/:account_name', component: account_component_1.AccountComponent },
            { path: 'transaction/:transaction_id', component: transaction_component_1.TransactionComponent },
            { path: 'block/:block_num', component: block_component_1.BlockComponent },
            { path: 'key/:key', component: key_component_1.KeyComponent },
            { path: 'evm/address/:address', component: evm_address_component_1.EvmAddressComponent },
            { path: 'evm/transaction/:hash', component: evm_transaction_component_1.EvmTransactionComponent },
            { path: 'evm/block/:block_num', component: evm_block_component_1.EvmBlockComponent }
        ],
    },
    {
        path: '**', component: home_component_1.HomeComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forRoot(routes, {
                scrollPositionRestoration: 'enabled'
            })],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map
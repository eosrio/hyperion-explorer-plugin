"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const core_1 = require("@angular/core");
const environment_1 = require("../../environments/environment");
let SearchService = class SearchService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.searchAccountUrl = environment_1.environment.eosioNodeUrl + '/v1/chain/get_table_by_scope';
    }
    async filterAccountNames(value) {
        if ((value && value.length > 12) || !value) {
            return [];
        }
        try {
            const sValue = value.toLowerCase();
            const requestBody = {
                code: environment_1.environment.systemContract,
                table: environment_1.environment.userResourcesTable,
                lower_bound: sValue,
                limit: 5
            };
            const response = await this.httpClient.post(this.searchAccountUrl, requestBody).toPromise();
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
    }
    async submitSearch(searchText, filteredAccounts) {
        const sValue = searchText.toLowerCase();
        // account direct
        if (filteredAccounts.length > 0) {
            await this.router.navigate(['/account', sValue]);
            return true;
        }
        // tx id
        if (sValue.length === 64) {
            await this.router.navigate(['/transaction', sValue]);
            return true;
        }
        // account search
        if (sValue.length > 0 && sValue.length <= 12 && isNaN(sValue)) {
            await this.router.navigate(['/account', sValue]);
            return true;
        }
        // public key
        if (searchText.startsWith('PUB_K1_') || searchText.startsWith('EOS')) {
            await this.router.navigate(['/key', searchText]);
            return true;
        }
        // block number
        const blockNum = searchText.replace(/[,.]/g, '');
        if (parseInt(blockNum, 10) > 0) {
            await this.router.navigate(['/block', blockNum]);
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
                await this.router.navigate([route, searchText]);
                return true;
            }
        }
        console.log('NO PATTERN MATCHED!');
        return false;
    }
};
SearchService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map
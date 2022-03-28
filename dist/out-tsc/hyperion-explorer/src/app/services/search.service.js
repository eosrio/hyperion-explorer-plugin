import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LaunchDarklyService } from '../services/launch-darkly/launch-darkly.service';
import { FeatureFlagName } from '../services/launch-darkly/featureFlags';
let SearchService = class SearchService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.searchAccountUrl = environment.eosioNodeUrl + '/v1/chain/get_table_by_scope';
        this.featureFlagClient = new LaunchDarklyService();
    }
    filterAccountNames(value) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((value && value.length > 12) || !value) {
                return [];
            }
            try {
                const sValue = value.toLowerCase();
                const requestBody = {
                    code: environment.systemContract,
                    table: environment.userResourcesTable,
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
        return __awaiter(this, void 0, void 0, function* () {
            const sValue = searchText.toLowerCase();
            this.isQueryingByBlockNumberEnabled =
                yield this.featureFlagClient.variation(FeatureFlagName.IsQueryingByBlockNumberEnabled);
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
};
SearchService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SearchService);
export { SearchService };
//# sourceMappingURL=search.service.js.map
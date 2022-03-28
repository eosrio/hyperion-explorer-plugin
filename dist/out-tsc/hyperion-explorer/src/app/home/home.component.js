import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { LaunchDarklyService } from '../services/launch-darkly/launch-darkly.service';
import { FeatureFlagName } from '../services/launch-darkly/featureFlags';
let HomeComponent = class HomeComponent {
    constructor(formBuilder, router, accountService, searchService, chainData, title) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.accountService = accountService;
        this.searchService = searchService;
        this.chainData = chainData;
        this.title = title;
        this.faSearch = faSearch;
        this.placeholders = [
            'Search by account name...',
            'Search by transaction id...',
            'Search by public key...'
        ];
        this.err = '';
        this.currentPlaceholder = 0;
        this.searchForm = this.formBuilder.group({
            search_field: ['', Validators.required]
        });
        this.filteredAccounts = [];
        this.searchPlaceholder = this.placeholders[0];
        this.featureFlagClient = new LaunchDarklyService();
        setInterval(() => {
            this.currentPlaceholder++;
            if (!this.placeholders[this.currentPlaceholder]) {
                this.currentPlaceholder = 0;
            }
            this.searchPlaceholder = this.placeholders[this.currentPlaceholder];
        }, 2000);
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.searchForm.get('search_field').valueChanges.pipe(debounceTime(300)).subscribe((result) => __awaiter(this, void 0, void 0, function* () {
                this.filteredAccounts = yield this.searchService.filterAccountNames(result);
            }));
            if (this.chainData.chainInfoData.chain_name) {
                this.title.setTitle(`${this.chainData.chainInfoData.chain_name} Hyperion Explorer`);
            }
            this.isQueryingByBlockNumberEnabled =
                yield this.featureFlagClient.variation(FeatureFlagName.IsQueryingByBlockNumberEnabled);
            if (this.isQueryingByBlockNumberEnabled) {
                this.placeholders.push('Search by block number...');
            }
        });
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.searchForm.valid) {
                return;
            }
            const searchText = this.searchForm.get('search_field').value;
            this.searchForm.reset();
            const status = this.searchService.submitSearch(searchText, this.filteredAccounts);
            if (!status) {
                this.err = 'no results for ' + searchText;
            }
        });
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map
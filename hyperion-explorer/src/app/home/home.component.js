"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const operators_1 = require("rxjs/operators");
const faSearch_1 = require("@fortawesome/free-solid-svg-icons/faSearch");
let HomeComponent = class HomeComponent {
    constructor(formBuilder, router, accountService, searchService, chainData, title) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.accountService = accountService;
        this.searchService = searchService;
        this.chainData = chainData;
        this.title = title;
        this.faSearch = faSearch_1.faSearch;
        this.placeholders = [
            'Search by account name...',
            'Search by block number...',
            'Search by transaction id...',
            'Search by public key...'
        ];
        this.err = '';
        this.currentPlaceholder = 0;
        this.searchForm = this.formBuilder.group({
            search_field: ['', forms_1.Validators.required]
        });
        this.filteredAccounts = [];
        this.searchPlaceholder = this.placeholders[0];
        setInterval(() => {
            this.currentPlaceholder++;
            if (!this.placeholders[this.currentPlaceholder]) {
                this.currentPlaceholder = 0;
            }
            this.searchPlaceholder = this.placeholders[this.currentPlaceholder];
        }, 2000);
    }
    ngOnInit() {
        this.searchForm.get('search_field').valueChanges.pipe((0, operators_1.debounceTime)(300)).subscribe(async (result) => {
            this.filteredAccounts = await this.searchService.filterAccountNames(result);
        });
        if (this.chainData.chainInfoData.chain_name) {
            this.title.setTitle(`${this.chainData.chainInfoData.chain_name} Hyperion Explorer`);
        }
    }
    async submit() {
        if (!this.searchForm.valid) {
            return;
        }
        const searchText = this.searchForm.get('search_field').value;
        this.searchForm.reset();
        const status = this.searchService.submitSearch(searchText, this.filteredAccounts);
        if (!status) {
            this.err = 'no results for ' + searchText;
        }
    }
};
HomeComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
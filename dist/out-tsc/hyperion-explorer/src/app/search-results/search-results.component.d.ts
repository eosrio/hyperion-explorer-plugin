import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { AccountService } from '../services/account.service';
import { ChainService } from '../services/chain.service';
import { LaunchDarklyService } from '../services/launch-darkly/launch-darkly.service';
export declare class SearchResultsComponent implements OnInit {
    private formBuilder;
    private router;
    private accountService;
    private searchService;
    chainData: ChainService;
    searchForm: FormGroup;
    filteredAccounts: string[];
    faSearch: import("@fortawesome/fontawesome-common-types").IconDefinition;
    searchPlaceholder: string;
    featureFlagClient: LaunchDarklyService;
    isQueryingByBlockNumberEnabled: boolean;
    placeholders: string[];
    err: string;
    private currentPlaceholder;
    constructor(formBuilder: FormBuilder, router: Router, accountService: AccountService, searchService: SearchService, chainData: ChainService);
    ngOnInit(): Promise<void>;
    submit(): Promise<boolean>;
}

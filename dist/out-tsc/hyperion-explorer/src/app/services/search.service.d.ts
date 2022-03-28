import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LaunchDarklyService } from '../services/launch-darkly/launch-darkly.service';
export declare class SearchService {
    private httpClient;
    private router;
    searchAccountUrl: string;
    featureFlagClient: LaunchDarklyService;
    isQueryingByBlockNumberEnabled: boolean;
    constructor(httpClient: HttpClient, router: Router);
    filterAccountNames(value: string): Promise<any>;
    submitSearch(searchText: any, filteredAccounts: string[]): Promise<boolean>;
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {debounceTime} from 'rxjs/operators';
import {SearchService} from '../services/search.service';
import {AccountService} from '../services/account.service';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {ChainService} from '../services/chain.service';
import { LaunchDarklyService } from 'src/app/services/launch-darkly/launch-darkly.service';
import { FeatureFlagName } from 'src/app/services/launch-darkly/featureFlags';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchForm: FormGroup;
  filteredAccounts: string[];
  faSearch = faSearch;
  searchPlaceholder: string;
  featureFlagClient: LaunchDarklyService;
  isQueryingByBlockNumberEnabled: boolean;
  placeholders = [
    'Search by account name...',
    'Search by transaction id...',
    'Search by asset id...',
  ];
  err = '';
  private currentPlaceholder = 0;

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
    public chainData: ChainService
  ) {
    this.searchForm = this.formBuilder.group({
      search_field: ['']
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
    }, 3000);
  }

  async ngOnInit(): Promise<void> {
    this.searchForm.get('search_field').valueChanges.pipe(debounceTime(300)).subscribe(async (result) => {
      this.filteredAccounts = await this.searchService.filterAccountNames(result);
    });
    this.isQueryingByBlockNumberEnabled =
      await this.featureFlagClient.variation(
        FeatureFlagName.IsQueryingByBlockNumberEnabled
      );
    if (this.isQueryingByBlockNumberEnabled) {
      this.placeholders.push('Search by block number...');
    }
  }

  async submit(): Promise<boolean> {
    if (!this.searchForm.valid) {
      return;
    }
    const searchText = this.searchForm.get('search_field').value;
    const status = await this.searchService.submitSearch(searchText, this.filteredAccounts);
    if(!status && !isNaN(searchText)) {
      this.err = 'cannot search block numbers ';
    } else if (!status) {
      this.err = 'no results for ' + searchText;
    }
    return;
  }

}

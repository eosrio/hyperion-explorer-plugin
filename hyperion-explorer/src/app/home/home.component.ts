import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {debounceTime} from 'rxjs/operators';
import {SearchService} from '../services/search.service';
import {AccountService} from '../services/account.service';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {ChainService} from '../services/chain.service';
import {Title} from '@angular/platform-browser';
import { LaunchDarklyService } from '../services/launch-darkly/launch-darkly.service';
import { FeatureFlagName } from '../services/launch-darkly/featureFlags';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  filteredAccounts: string[];
  faSearch = faSearch;
  searchPlaceholder: string;
  featureFlagClient: LaunchDarklyService;
  isQueryingByBlockNumberEnabled: boolean;
  placeholders = [
    'Search by account name...',
    'Search by transaction id...',
    'Search by public key...'
  ];
  err = '';
  private currentPlaceholder = 0;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    private searchService: SearchService,
    public chainData: ChainService,
    private title: Title
  ) {
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

  async ngOnInit(): Promise<void> {
    this.searchForm.get('search_field').valueChanges.pipe(debounceTime(300)).subscribe(async (result) => {
      this.filteredAccounts = await this.searchService.filterAccountNames(result);
    });
    if (this.chainData.chainInfoData.chain_name) {
      this.title.setTitle(`${this.chainData.chainInfoData.chain_name} Hyperion Explorer`);
    }
    this.isQueryingByBlockNumberEnabled = false
      // await this.featureFlagClient.variation(
      //   FeatureFlagName.IsQueryingByBlockNumberEnabled
      // );
    if (this.isQueryingByBlockNumberEnabled) {
      this.placeholders.push('Search by block number...');
    }
  }

  async submit(): Promise<void> {
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
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {debounceTime} from 'rxjs/operators';
import {SearchService} from '../services/search.service';
import {AccountService} from '../services/account.service';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {ChainService} from '../services/chain.service';

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
  placeholders = [
    'Search by EVM address...',
    'Search by transaction hash...',
    'Search by contract address...'
  ];
  err = '';
  private currentPlaceholder = 0;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    private searchService: SearchService,
    public chainData: ChainService
  ) {
    this.searchForm = this.formBuilder.group({
      search_field: ['']
    });
    this.filteredAccounts = [];

    this.searchPlaceholder = this.placeholders[0];
    setInterval(() => {
      this.currentPlaceholder++;
      if (!this.placeholders[this.currentPlaceholder]) {
        this.currentPlaceholder = 0;
      }
      this.searchPlaceholder = this.placeholders[this.currentPlaceholder];
    }, 3000);
  }

  ngOnInit(): void {
    this.searchForm.get('search_field').valueChanges.pipe(debounceTime(300)).subscribe(async (result) => {
      this.filteredAccounts = await this.searchService.filterAccountNames(result);
    });
  }

  async submit(): Promise<boolean> {
    if (!this.searchForm.valid) {
      return true;
    }
    const searchText = this.searchForm.get('search_field').value;
    const status = this.searchService.submitSearch(searchText, this.filteredAccounts);
    if (!status) {
      this.err = 'no results for ' + searchText;
    }
    return false;
  }

}

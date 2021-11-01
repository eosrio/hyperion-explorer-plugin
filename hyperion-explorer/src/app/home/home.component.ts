import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {debounceTime} from 'rxjs/operators';
import {SearchService} from '../services/search.service';
import {AccountService} from '../services/account.service';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {ChainService} from '../services/chain.service';
import {EvmService} from '../services/evm.service';
import {Title} from '@angular/platform-browser';
import {Subscription} from 'rxjs';
import {faCircle} from '@fortawesome/free-solid-svg-icons/faCircle';
import {faHistory} from '@fortawesome/free-solid-svg-icons/faHistory';
import { PageEvent } from '@angular/material/paginator';
// import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  address = '';
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
  columnsToDisplay: string[] = [
    'hash',
    'block',
    'fromAddr',
    'toAddr',
    'nativeValue'
  ];
  subs: Subscription[];
  faCircle = faCircle;
  faHistory = faHistory;

  private currentPlaceholder = 0;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public accountService: AccountService,
    private searchService: SearchService,
    public chainData: ChainService,
    public evm: EvmService,
    private title: Title
  ) {
    this.searchForm = this.formBuilder.group({
      search_field: ['', Validators.required]
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
    this.subs = [];
  }

  changePage(event: PageEvent): void {

    // disable streaming if enabled
    if (this.evm.streamClientStatus) {
      this.evm.toggleStreaming();
    }

    const maxPages = Math.floor(event.length / event.pageSize);
    console.log(event);
    console.log(`${event.pageIndex} / ${maxPages}`);
    try {
      if (event.pageIndex === maxPages - 1) {
        this.evm.loadMoreTransactions(this.address).catch(console.log);
      }
    } catch (e) {
      console.log(e);
    }
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleString();
  }

  ngOnInit(): void {
    this.searchForm.get('search_field').valueChanges.pipe(debounceTime(300)).subscribe(async (result) => {
      this.filteredAccounts = await this.searchService.filterAccountNames(result);
    });
    if (this.chainData.chainInfoData.chain_name) {
      this.title.setTitle(`${this.chainData.chainInfoData.chain_name} Telos EVM Explorer`);
    }
    this.subs.push(this.activatedRoute.params.subscribe(async (routeParams) => {
      await this.evm.loadRecentTransactions();
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
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

import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {SearchService} from '../../services/search.service';
import {debounceTime} from 'rxjs/operators';
import {ChainService} from '../../services/chain.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm: UntypedFormGroup;
  filteredAccounts: string[];
  faSearch = faSearch;
  searchPlaceholder: string;
  placeholders = [
    'Search by account name...',
    'Search by block number...',
    'Search by transaction id...',
    'Search by public key...'
  ];
  err = '';
  private currentPlaceholder = 0;

  constructor(private formBuilder: UntypedFormBuilder,
              private searchService: SearchService,
              public chainData: ChainService) {
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

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SearchService} from '../services/search.service';
import {AccountService} from '../services/account.service';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {ChainService} from '../services/chain.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  faHeart = faHeart;

  constructor(
    private router: Router,
    private accountService: AccountService,
    private searchService: SearchService,
    public chainData: ChainService
  ) {}

  ngOnInit(): void {}

}

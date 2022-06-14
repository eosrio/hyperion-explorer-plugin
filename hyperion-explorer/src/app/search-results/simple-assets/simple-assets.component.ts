import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SimpleAssetsService } from '../../services/simple-assets.service'
import {faExchangeAlt} from '@fortawesome/free-solid-svg-icons/faExchangeAlt';
import {faCircle} from '@fortawesome/free-solid-svg-icons/faCircle';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';
import {faHourglassStart} from '@fortawesome/free-solid-svg-icons/faHourglassStart';
import {faHistory} from '@fortawesome/free-solid-svg-icons/faHistory';
import {faSadTear} from '@fortawesome/free-solid-svg-icons/faSadTear';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';
import {ChainService} from '../../services/chain.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-simple-assets',
  templateUrl: './simple-assets.component.html',
  styleUrls: ['./simple-assets.component.css']
})
export class SimpleAssetsComponent implements OnInit {
  columnsToDisplay: string[] = ['contract', 'action', 'data', 'block_num'];
  tx: any = {
      res: [],
      total: [],
  };
  faCircle = faCircle;
  faExchange = faExchangeAlt;
  faLock = faLock;
  faHourglass = faHourglassStart;
  faHistory = faHistory;
  faSadTear = faSadTear;
  faSpinner = faSpinner;
  assetId: string;

  objectKeyCount(obj): number {
    try {
      return Object.keys(obj).length;
    } catch (e) {
      return 0;
    }
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    public simpleAssetsService: SimpleAssetsService,
    public chainData: ChainService,
    private title: Title) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (routeParams) => {
      this.assetId = routeParams.asset_id;
      this.tx = await this.simpleAssetsService.getHistoryByAssetId(routeParams.asset_id)

      if (!this.chainData.chainInfoData.chain_name) {
        this.title.setTitle(`Asset ${routeParams.asset_id} • Hyperion Explorer`);
      } else {
        this.title.setTitle(`Asset ${routeParams.asset_id} • ${this.chainData.chainInfoData.chain_name} Hyperion Explorer`);
      }
    });
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleString();
  }

  stringifyObject(subitem: object): string {
    return JSON.stringify(subitem, null, 2);
}
}

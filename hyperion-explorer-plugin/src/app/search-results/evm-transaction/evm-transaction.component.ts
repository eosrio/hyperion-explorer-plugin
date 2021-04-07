import {Component, OnInit} from '@angular/core';
import {EvmService} from '../../services/evm.service';
import {faExchangeAlt} from '@fortawesome/free-solid-svg-icons/faExchangeAlt';
import {faSadTear} from '@fortawesome/free-solid-svg-icons/faSadTear';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import {faHourglassStart} from '@fortawesome/free-solid-svg-icons/faHourglassStart';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';

@Component({
  selector: 'app-evm-transaction',
  templateUrl: './evm-transaction.component.html',
  styleUrls: ['./evm-transaction.component.css']
})
export class EvmTransactionComponent implements OnInit {
  faSadTear = faSadTear;
  faExchange = faExchangeAlt;
  faCircle = faCircle;
  faLock = faLock;
  faHourglass = faHourglassStart;

  txData: any = {
    hash: '0xaef244314c42bdc2d62bfaa82880049dafa958ae4e4ce8a0ae8b94598ff1549a',
    block_num: 23232,
    block: 23229,
    '@timestamp': Date.now(),
    from: '0x5fe25eec20614b9a9109c1a31a9959b467e0df85',
    to: '0x292f04a44506c2fd49bac032e1ca148c35a478c8',
    value: '',
    fee: '',
    gas_price: '',
    gas_limit: '',
    gas_used: '',
    nonce: 0,
    input_data: '',
  };

  constructor(public evm: EvmService) {
  }

  ngOnInit(): void {
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleString();
  }

}

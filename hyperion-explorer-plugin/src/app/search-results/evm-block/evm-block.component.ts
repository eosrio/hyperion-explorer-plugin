import {Component, OnInit} from '@angular/core';
import {EvmService} from '../../services/evm.service';
import {faCube} from '@fortawesome/free-solid-svg-icons/faCube';
import {faHourglassStart} from '@fortawesome/free-solid-svg-icons/faHourglassStart';
import {faCircle} from '@fortawesome/free-solid-svg-icons/faCircle';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';
import {faHistory} from '@fortawesome/free-solid-svg-icons/faHistory';
import {faSadTear} from '@fortawesome/free-solid-svg-icons/faSadTear';

@Component({
  selector: 'app-evm-block',
  templateUrl: './evm-block.component.html',
  styleUrls: ['./evm-block.component.css']
})
export class EvmBlockComponent implements OnInit {
  faCircle = faCircle;
  faBlock = faCube;
  faLock = faLock;
  faHourglass = faHourglassStart;
  faHistory = faHistory;
  faSadTear = faSadTear;

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

  blockData = {
    block: 292823,
    block_hash: '0x25472228743439862758372832',
    transactions: [this.txData, this.txData]
  };

  constructor(public evm: EvmService) {
  }

  ngOnInit(): void {
  }

}

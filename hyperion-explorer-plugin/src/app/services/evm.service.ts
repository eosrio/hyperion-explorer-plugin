import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {MatTableDataSource} from '@angular/material/table';
import {PaginationService} from './pagination.service';

@Injectable({
  providedIn: 'root'
})
export class EvmService {
  loaded = true;

  jsonRpcApi = environment.eosioNodeUrl + '/evm';
  streamClientStatus = false;
  libNum = 0;
  streamClientLoaded = true;
  transactions = [];
  addressTransactions: MatTableDataSource<any[]>;
  private server: string;

  constructor(private http: HttpClient, private pagService: PaginationService) {
    this.getServerUrl();
    this.addressTransactions = new MatTableDataSource([]);
  }

  async getBalance(address: string): Promise<number> {
    const response = await this.http.post(this.jsonRpcApi, {
      jsonrpc: '2.0',
      id: Date.now(),
      method: 'eth_getBalanceHuman',
      params: [address]
    }).toPromise() as any;
    if (response.result) {
      return Number(response.result);
    } else {
      return 0;
    }
  }

  getServerUrl(): void {
    let server;
    if (environment.production) {
      server = window.location.origin;
    } else {
      server = environment.hyperionApiUrl;
    }
    this.server = server;
  }

  toggleStreaming(): void {
    this.streamClientStatus = !this.streamClientStatus;
  }

  async loadTransactions(address: string): Promise<void> {
    const resp = await this.http.get(this.server + '/evm_explorer/get_transactions?address=' + address).toPromise() as any;
    this.processTransactions(resp.transactions);
    if (resp.total) {
      this.pagService.totalItems = resp.total;
    }
  }

  async loadMoreTransactions(address: string): Promise<void> {
    console.log(address);
  }

  private processTransactions(transactions: any[]): void {
    this.transactions = [];
    this.transactions = transactions;
    for (const trx of this.transactions) {
      if (trx.receipt) {
        trx.evm_block = trx.receipt.block;
        trx.evm_hash = trx.receipt.hash;
      }
      console.log(trx);
    }
    this.addressTransactions.data = this.transactions;
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SimpleAssetsService {
  getNftHistoryUrl: string;
  public loaded = false;

  constructor(private httpClient: HttpClient) {
    this.getNftHistoryUrl = environment.hyperionApiUrl + '/simpleassets/v2/nft/history?id='
  }

  async getHistoryByAssetId(assetId: string): Promise<any> {
    this.loaded = false;
    try {
      const data = await this.httpClient.get(this.getNftHistoryUrl + assetId).toPromise();
      this.loaded = true;
      return data;
    } catch (error) {
      console.log(error);
      this.loaded = true;
      return null;
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
export declare class ChainService {
    private http;
    private title;
    chainInfoData: any;
    constructor(http: HttpClient, title: Title);
    loadChainData(): Promise<void>;
}

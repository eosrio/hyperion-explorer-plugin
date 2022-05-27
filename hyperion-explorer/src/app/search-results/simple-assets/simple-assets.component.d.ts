import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { SimpleAssetsService } from '../../services/simple-assets.service'
import { ChainService } from '../../services/chain.service';
import { Title } from '@angular/platform-browser';
export declare class SimpleAssetsComponent implements OnInit {
    private activatedRoute;
    accountService: AccountService;
    chainData: ChainService;
    private title;
    columnsToDisplay: string[];
    tx: any;
    faCircle: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faExchange: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faLock: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faHourglass: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faHistory: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faSadTear: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faSpinner: import("@fortawesome/fontawesome-common-types").IconDefinition;
    assetId: string;
    // countdownLoop: any;
    // countdownTimer: number;
    objectKeyCount(obj: any): number;
    constructor(activatedRoute: ActivatedRoute, simpleAssetsService: SimpleAssetsService, chainData: ChainService, title: Title);
    ngOnInit(): void;
    // ngOnDestroy(): void;
    formatDate(date: string): string;
    stringifyObject(subitem: object): string;
    // reloadCountdownTimer(): Promise<void>;
}
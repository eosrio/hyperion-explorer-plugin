import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { ChainService } from '../../services/chain.service';
import { Title } from '@angular/platform-browser';
interface KeyResponse {
    account_names: string[];
    permissions: any[];
}
export declare class KeyComponent implements OnInit {
    private activatedRoute;
    accountService: AccountService;
    chainData: ChainService;
    private title;
    key: KeyResponse;
    pubKey: string;
    faCircle: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faKey: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faSadTear: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faSpinner: import("@fortawesome/fontawesome-common-types").IconDefinition;
    constructor(activatedRoute: ActivatedRoute, accountService: AccountService, chainData: ChainService, title: Title);
    ngOnInit(): void;
}
export {};

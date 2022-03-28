import { OnDestroy, OnInit } from '@angular/core';
import { EvmService } from '../../services/evm.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';
export declare class EvmTransactionComponent implements OnInit, OnDestroy {
    private activatedRoute;
    accountService: AccountService;
    evm: EvmService;
    faSadTear: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faExchange: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faCircle: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faLock: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faHourglass: import("@fortawesome/fontawesome-common-types").IconDefinition;
    txHash: string;
    txData: any;
    subs: Subscription[];
    constructor(activatedRoute: ActivatedRoute, accountService: AccountService, evm: EvmService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    formatDate(date: string): string;
}

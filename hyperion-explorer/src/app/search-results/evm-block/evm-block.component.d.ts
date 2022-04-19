import { OnDestroy, OnInit } from '@angular/core';
import { EvmService } from '../../services/evm.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';
export declare class EvmBlockComponent implements OnInit, OnDestroy {
    private activatedRoute;
    accountService: AccountService;
    evm: EvmService;
    faCircle: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faBlock: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faLock: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faHourglass: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faHistory: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faSadTear: import("@fortawesome/fontawesome-common-types").IconDefinition;
    txData: any;
    blockData: {
        block: number;
        block_hash: string;
        transactions: any[];
    };
    subs: Subscription[];
    blockNumber: string;
    columnsToDisplay: string[];
    constructor(activatedRoute: ActivatedRoute, accountService: AccountService, evm: EvmService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

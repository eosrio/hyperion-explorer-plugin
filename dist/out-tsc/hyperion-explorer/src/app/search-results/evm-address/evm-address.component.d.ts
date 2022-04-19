import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EvmService } from '../../services/evm.service';
import { PageEvent } from '@angular/material/paginator';
import { AccountService } from '../../services/account.service';
export declare class EvmAddressComponent implements OnInit, OnDestroy {
    private activatedRoute;
    accountService: AccountService;
    evm: EvmService;
    address: string;
    subs: Subscription[];
    faUserCircle: import("@fortawesome/fontawesome-common-types").IconDefinition;
    nativeBalance: number;
    faCircle: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faHistory: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faClock: import("@fortawesome/fontawesome-common-types").IconDefinition;
    columnsToDisplay: string[];
    constructor(activatedRoute: ActivatedRoute, accountService: AccountService, evm: EvmService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    formatDate(date: string): string;
    changePage(event: PageEvent): void;
}

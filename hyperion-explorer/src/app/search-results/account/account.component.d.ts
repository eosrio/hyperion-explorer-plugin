import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { MatSort } from '@angular/material/sort';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { AccountCreationData } from '../../interfaces';
import { ChainService } from '../../services/chain.service';
import { Title } from '@angular/platform-browser';
import { LaunchDarklyService } from '../../services/launch-darkly/launch-darkly.service';
interface Permission {
    perm_name: string;
    parent: string;
    required_auth: RequiredAuth;
    children?: Permission[];
}
interface RequiredAuth {
    threshold: number;
    keys: Keys[];
    accounts?: Accs[];
    waits?: Waits[];
}
interface Keys {
    key: string;
    weight: number;
}
interface Accs {
    permission: Perm;
    weight: number;
}
interface Perm {
    actor: string;
    permission: string;
}
interface Waits {
    wait_sec: number;
    weight: number;
}
/** Flat node with expandable and level information */
interface FlatNode {
    expandable: boolean;
    perm_name: string;
    level: number;
}
export declare class AccountComponent implements OnInit, OnDestroy {
    private activatedRoute;
    accountService: AccountService;
    chainData: ChainService;
    private title;
    sort: MatSort;
    paginator: MatPaginator;
    faClock: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faUserCircle: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faCircle: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faStar: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faLink: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faHistory: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faChevronRight: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faChevronDown: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faSadTear: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faKey: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faUser: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faVote: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faQuestionCircle: import("@fortawesome/fontawesome-common-types").IconDefinition;
    accountName: string;
    columnsToDisplay: string[];
    treeControl: FlatTreeControl<FlatNode>;
    featureFlagClient: LaunchDarklyService;
    isQueryingTokenValueEnabled: boolean;
    systemAccounts: string;
    treeFlattener: MatTreeFlattener<any, any>;
    dataSource: MatTreeFlatDataSource<any, any>;
    detailedView: boolean;
    systemPrecision: number;
    systemSymbol: string;
    creationData: AccountCreationData;
    systemTokenContract: string;
    constructor(activatedRoute: ActivatedRoute, accountService: AccountService, chainData: ChainService, title: Title);
    ngOnDestroy(): void;
    transformer(node: Permission, level: number): any;
    objectKeyCount(obj: any): number;
    hasChild: (_: number, node: FlatNode) => boolean;
    ngOnInit(): Promise<void>;
    getPrecision(asset: string): number;
    getSymbol(asset: string): string;
    liquidBalance(): number;
    myCpuBalance(): number;
    myNetBalance(): number;
    cpuBalance(): number;
    netBalance(): number;
    totalBalance(): number;
    stakedBalance(): number;
    cpuByOthers(): number;
    netByOthers(): number;
    stakedbyOthers(): number;
    refundBalance(): number;
    formatDate(date: string): string;
    getChildren(arr: Permission[], parent: string): Permission[];
    private processPermissions;
    isArray(value: any): boolean;
    getType(subitem: any): string;
    stringifyObject(subitem: object): string;
    convertBytes(bytes: number): string;
    convertMicroS(micros: number): string;
    changePage(event: PageEvent): void;
}
export {};

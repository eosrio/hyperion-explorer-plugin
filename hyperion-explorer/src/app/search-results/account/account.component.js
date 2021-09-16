"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountComponent = void 0;
const core_1 = require("@angular/core");
const sort_1 = require("@angular/material/sort");
const faClock_1 = require("@fortawesome/free-solid-svg-icons/faClock");
const faUserCircle_1 = require("@fortawesome/free-solid-svg-icons/faUserCircle");
const faCircle_1 = require("@fortawesome/free-solid-svg-icons/faCircle");
const faStar_1 = require("@fortawesome/free-solid-svg-icons/faStar");
const faLink_1 = require("@fortawesome/free-solid-svg-icons/faLink");
const faHistory_1 = require("@fortawesome/free-solid-svg-icons/faHistory");
const tree_1 = require("@angular/cdk/tree");
const tree_2 = require("@angular/material/tree");
const faChevronRight_1 = require("@fortawesome/free-solid-svg-icons/faChevronRight");
const faChevronDown_1 = require("@fortawesome/free-solid-svg-icons/faChevronDown");
const faKey_1 = require("@fortawesome/free-solid-svg-icons/faKey");
const faUser_1 = require("@fortawesome/free-solid-svg-icons/faUser");
const faSadTear_1 = require("@fortawesome/free-solid-svg-icons/faSadTear");
const paginator_1 = require("@angular/material/paginator");
const faVoteYea_1 = require("@fortawesome/free-solid-svg-icons/faVoteYea");
const faQuestionCircle_1 = require("@fortawesome/free-regular-svg-icons/faQuestionCircle");
let AccountComponent = class AccountComponent {
    constructor(activatedRoute, accountService, chainData, title) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.chainData = chainData;
        this.title = title;
        // FontAwesome Icons
        this.faClock = faClock_1.faClock;
        this.faUserCircle = faUserCircle_1.faUserCircle;
        this.faCircle = faCircle_1.faCircle;
        this.faStar = faStar_1.faStar;
        this.faLink = faLink_1.faLink;
        this.faHistory = faHistory_1.faHistory;
        this.faChevronRight = faChevronRight_1.faChevronRight;
        this.faChevronDown = faChevronDown_1.faChevronDown;
        this.faSadTear = faSadTear_1.faSadTear;
        this.faKey = faKey_1.faKey;
        this.faUser = faUser_1.faUser;
        this.faVote = faVoteYea_1.faVoteYea;
        this.faQuestionCircle = faQuestionCircle_1.faQuestionCircle;
        this.columnsToDisplay = ['trx_id', 'action', 'data', 'block_num'];
        this.detailedView = true;
        this.systemPrecision = 4;
        this.systemSymbol = '';
        this.creationData = {
            creator: undefined,
            timestamp: undefined
        };
        this.systemTokenContract = 'eosio.token';
        this.hasChild = (_, node) => node.expandable;
        this.treeControl = new tree_1.FlatTreeControl(node => node.level, node => node.expandable);
        this.treeFlattener = new tree_2.MatTreeFlattener(this.transformer, node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new tree_2.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    }
    ngOnDestroy() {
        console.log('ngOnDestroy');
        this.accountService.disconnectStream();
    }
    transformer(node, level) {
        return {
            expandable: !!node.children && node.children.length > 0,
            perm_name: node.perm_name,
            level,
            ...node
        };
    }
    objectKeyCount(obj) {
        try {
            return Object.keys(obj).length;
        }
        catch (e) {
            return 0;
        }
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(async (routeParams) => {
            if (this.accountService.streamClientStatus) {
                this.accountService.disconnectStream();
            }
            this.accountName = routeParams.account_name;
            if (await this.accountService.loadAccountData(routeParams.account_name)) {
                if (!this.chainData.chainInfoData.chain_name) {
                    this.title.setTitle(`${this.accountName} • Hyperion Explorer`);
                }
                else {
                    this.title.setTitle(`${this.accountName} • ${this.chainData.chainInfoData.chain_name} Hyperion Explorer`);
                }
                const customCoreToken = this.chainData.chainInfoData.custom_core_token;
                if (customCoreToken && customCoreToken !== '') {
                    const parts = this.chainData.chainInfoData.custom_core_token.split('::');
                    this.systemSymbol = parts[1];
                    this.systemTokenContract = parts[0];
                    const coreBalance = this.accountService.jsonData.tokens.find((v) => {
                        return v.symbol === this.systemSymbol && v.contract === this.systemTokenContract;
                    });
                    if (coreBalance) {
                        this.accountService.account.core_liquid_balance = coreBalance.amount + ' ' + this.systemSymbol;
                    }
                }
                else {
                    this.systemSymbol = this.getSymbol(this.accountService.account.core_liquid_balance);
                }
                this.systemPrecision = this.getPrecision(this.accountService.account.core_liquid_balance);
                if (this.systemSymbol === null) {
                    try {
                        this.systemSymbol = this.getSymbol(this.accountService.account.total_resources.cpu_weight);
                        if (this.systemSymbol === null) {
                            this.systemSymbol = 'SYS';
                        }
                    }
                    catch (e) {
                        this.systemSymbol = 'SYS';
                    }
                }
                this.processPermissions();
                setTimeout(() => {
                    this.accountService.tableDataSource.sort = this.sort;
                    this.accountService.tableDataSource.paginator = this.paginator;
                }, 500);
                this.creationData = await this.accountService.getCreator(routeParams.account_name);
            }
        });
    }
    getPrecision(asset) {
        if (asset) {
            try {
                return asset.split(' ')[0].split('.')[1].length;
            }
            catch (e) {
                return 4;
            }
        }
        else {
            return 4;
        }
    }
    getSymbol(asset) {
        if (asset) {
            try {
                return asset.split(' ')[1];
            }
            catch (e) {
                return null;
            }
        }
        else {
            return null;
        }
    }
    liquidBalance() {
        if (this.accountService.account.core_liquid_balance) {
            return parseFloat(this.accountService.account.core_liquid_balance.split(' ')[0]);
        }
        return 0;
    }
    myCpuBalance() {
        if (this.accountService.account.self_delegated_bandwidth) {
            return parseFloat(this.accountService.account.self_delegated_bandwidth.cpu_weight.split(' ')[0]);
        }
        return 0;
    }
    myNetBalance() {
        if (this.accountService.account.self_delegated_bandwidth) {
            return parseFloat(this.accountService.account.self_delegated_bandwidth.net_weight.split(' ')[0]);
        }
        return 0;
    }
    cpuBalance() {
        if (this.accountService.account.total_resources) {
            return parseFloat(this.accountService.account.total_resources.cpu_weight.split(' ')[0]);
        }
        return 0;
    }
    netBalance() {
        if (this.accountService.account.total_resources) {
            return parseFloat(this.accountService.account.total_resources.net_weight.split(' ')[0]);
        }
        return 0;
    }
    totalBalance() {
        const liquid = this.liquidBalance();
        const cpu = this.myCpuBalance();
        const net = this.myNetBalance();
        return liquid + cpu + net;
    }
    stakedBalance() {
        const cpu = this.myCpuBalance();
        const net = this.myNetBalance();
        return cpu + net;
    }
    cpuByOthers() {
        const cpu = this.cpuBalance();
        const mycpu = this.myCpuBalance();
        return cpu - mycpu;
    }
    netByOthers() {
        const net = this.netBalance();
        const mynet = this.myNetBalance();
        return net - mynet;
    }
    stakedbyOthers() {
        const cpu = this.cpuBalance();
        const net = this.netBalance();
        const mycpu = this.myCpuBalance();
        const mynet = this.myNetBalance();
        return (cpu + net) - (mycpu + mynet);
    }
    refundBalance() {
        let cpuRefund = 0;
        let netRefund = 0;
        if (this.accountService.account.refund_request) {
            cpuRefund = parseFloat(this.accountService.account.refund_request.cpu_amount.split(' ')[0]);
            netRefund = parseFloat(this.accountService.account.refund_request.net_amount.split(' ')[0]);
        }
        return cpuRefund + netRefund;
    }
    formatDate(date) {
        return new Date(date).toLocaleString();
    }
    getChildren(arr, parent) {
        return arr.filter(value => value.parent === parent).map((value) => {
            const children = this.getChildren(arr, value.perm_name);
            if (children.length > 0) {
                value.children = children;
            }
            return value;
        });
    }
    processPermissions() {
        if (this.accountService.account) {
            const permissions = this.accountService.account.permissions;
            if (permissions) {
                try {
                    this.dataSource.data = this.getChildren(permissions, '');
                    this.treeControl.expand(this.treeControl.dataNodes[0]);
                    this.treeControl.expand(this.treeControl.dataNodes[1]);
                }
                catch (e) {
                    console.log(e);
                    this.dataSource.data = [];
                }
            }
        }
    }
    isArray(value) {
        return value !== null && typeof value === 'object' && value.length > 0;
    }
    getType(subitem) {
        return typeof subitem;
    }
    convertBytes(bytes) {
        if (bytes > (1024 ** 3)) {
            return (bytes / (1024 ** 3)).toFixed(2) + ' GB';
        }
        if (bytes > (1024 ** 2)) {
            return (bytes / (1024 ** 2)).toFixed(2) + ' MB';
        }
        if (bytes > 1024) {
            return (bytes / (1024)).toFixed(2) + ' KB';
        }
        return bytes + ' bytes';
    }
    convertMicroS(micros) {
        let int = 0;
        let remainder = 0;
        const calcSec = 1000 ** 2;
        const calcMin = calcSec * 60;
        const calcHour = calcMin * 60;
        if (micros > calcHour) {
            int = Math.floor(micros / calcHour);
            remainder = micros % calcHour;
            return int + 'h ' + Math.round(remainder / calcMin) + 'min';
        }
        if (micros > calcMin) {
            int = Math.floor(micros / calcMin);
            remainder = micros % calcMin;
            return int + 'min ' + Math.round(remainder / calcSec) + 's';
        }
        if (micros > calcSec) {
            return (micros / calcSec).toFixed(2) + 's';
        }
        if (micros > 1000) {
            return (micros / (1000)).toFixed(2) + 'ms';
        }
        return micros + 'µs';
    }
    changePage(event) {
        // disable streaming if enabled
        if (this.accountService.streamClientStatus) {
            this.accountService.toggleStreaming();
        }
        const maxPages = Math.floor(event.length / event.pageSize);
        console.log(event);
        console.log(`${event.pageIndex} / ${maxPages}`);
        try {
            if (event.pageIndex === maxPages - 1) {
                this.accountService.loadMoreActions(this.accountName).catch(console.log);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
};
__decorate([
    (0, core_1.ViewChild)(sort_1.MatSort, { static: false })
], AccountComponent.prototype, "sort", void 0);
__decorate([
    (0, core_1.ViewChild)(paginator_1.MatPaginator, { static: false })
], AccountComponent.prototype, "paginator", void 0);
AccountComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-account',
        templateUrl: './account.component.html',
        styleUrls: ['./account.component.css']
    })
], AccountComponent);
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map
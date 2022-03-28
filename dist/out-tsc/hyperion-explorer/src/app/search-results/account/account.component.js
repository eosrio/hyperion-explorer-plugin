import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { faHistory } from '@fortawesome/free-solid-svg-icons/faHistory';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faSadTear } from '@fortawesome/free-solid-svg-icons/faSadTear';
import { MatPaginator } from '@angular/material/paginator';
import { faVoteYea } from '@fortawesome/free-solid-svg-icons/faVoteYea';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons/faQuestionCircle';
import { LaunchDarklyService } from '../../services/launch-darkly/launch-darkly.service';
import { FeatureFlagName } from '../../services/launch-darkly/featureFlags';
let AccountComponent = class AccountComponent {
    constructor(activatedRoute, accountService, chainData, title) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.chainData = chainData;
        this.title = title;
        // FontAwesome Icons
        this.faClock = faClock;
        this.faUserCircle = faUserCircle;
        this.faCircle = faCircle;
        this.faStar = faStar;
        this.faLink = faLink;
        this.faHistory = faHistory;
        this.faChevronRight = faChevronRight;
        this.faChevronDown = faChevronDown;
        this.faSadTear = faSadTear;
        this.faKey = faKey;
        this.faUser = faUser;
        this.faVote = faVoteYea;
        this.faQuestionCircle = faQuestionCircle;
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
        this.treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
        this.treeFlattener = new MatTreeFlattener(this.transformer, node => node.level, node => node.expandable, node => node.children);
        this.featureFlagClient = new LaunchDarklyService;
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    }
    ngOnDestroy() {
        console.log('ngOnDestroy');
        this.accountService.disconnectStream();
    }
    transformer(node, level) {
        return Object.assign({ expandable: !!node.children && node.children.length > 0, perm_name: node.perm_name, level }, node);
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
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.isQueryingTokenValueEnabled = yield this.featureFlagClient.variation(FeatureFlagName.IsQueryingTokenValueEnabled);
            this.systemAccounts = JSON.parse((_a = (yield this.featureFlagClient.variation(FeatureFlagName.VoiceSystemAccounts))) !== null && _a !== void 0 ? _a : '[]');
            this.activatedRoute.params.subscribe((routeParams) => __awaiter(this, void 0, void 0, function* () {
                if (this.accountService.streamClientStatus) {
                    this.accountService.disconnectStream();
                }
                this.accountName = routeParams.account_name;
                if (yield this.accountService.loadAccountData(routeParams.account_name)) {
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
                    this.creationData = yield this.accountService.getCreator(routeParams.account_name);
                }
            }));
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
    stringifyObject(subitem) {
        return JSON.stringify(subitem, null, 2);
    }
    convertBytes(bytes) {
        if (bytes > (Math.pow(1024, 3))) {
            return (bytes / (Math.pow(1024, 3))).toFixed(2) + ' GB';
        }
        if (bytes > (Math.pow(1024, 2))) {
            return (bytes / (Math.pow(1024, 2))).toFixed(2) + ' MB';
        }
        if (bytes > 1024) {
            return (bytes / (1024)).toFixed(2) + ' KB';
        }
        return bytes + ' bytes';
    }
    convertMicroS(micros) {
        let int = 0;
        let remainder = 0;
        const calcSec = Math.pow(1000, 2);
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
    ViewChild(MatSort, { static: false })
], AccountComponent.prototype, "sort", void 0);
__decorate([
    ViewChild(MatPaginator, { static: false })
], AccountComponent.prototype, "paginator", void 0);
AccountComponent = __decorate([
    Component({
        selector: 'app-account',
        templateUrl: './account.component.html',
        styleUrls: ['./account.component.css']
    })
], AccountComponent);
export { AccountComponent };
//# sourceMappingURL=account.component.js.map
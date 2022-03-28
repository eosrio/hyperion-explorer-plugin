import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faCube } from '@fortawesome/free-solid-svg-icons/faCube';
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons/faHourglassStart';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faHistory } from '@fortawesome/free-solid-svg-icons/faHistory';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { faSadTear } from '@fortawesome/free-solid-svg-icons/faSadTear';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
let BlockComponent = class BlockComponent {
    constructor(activatedRoute, accountService, chainData, title) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.chainData = chainData;
        this.title = title;
        this.columnsToDisplay = ['icon', 'id', 'root', 'action'];
        this.columnsInside = ['action', 'data', 'auth'];
        this.faCircle = faCircle;
        this.faBlock = faCube;
        this.faLock = faLock;
        this.faHourglass = faHourglassStart;
        this.faHistory = faHistory;
        this.faChevronRight = faChevronRight;
        this.faChevronDown = faChevronDown;
        this.faSadTear = faSadTear;
        this.faSpinner = faSpinner;
        this.block = {
            transactions: [],
            status: '',
            number: 0
        };
        this.countdownTimer = 0;
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
        this.activatedRoute.params.subscribe((routeParams) => __awaiter(this, void 0, void 0, function* () {
            this.blockNum = routeParams.block_num;
            this.block = yield this.accountService.loadBlockData(routeParams.block_num);
            if (!this.chainData.chainInfoData.chain_name) {
                this.title.setTitle(`#${routeParams.block_num} • Hyperion Explorer`);
            }
            else {
                this.title.setTitle(`#${routeParams.block_num} • ${this.chainData.chainInfoData.chain_name} Hyperion Explorer`);
            }
            if (this.block && this.block.status === 'pending') {
                yield this.reloadCountdownTimer();
                this.countdownLoop = setInterval(() => __awaiter(this, void 0, void 0, function* () {
                    this.countdownTimer--;
                    if (this.countdownTimer <= 0) {
                        yield this.reloadCountdownTimer();
                        if (this.accountService.libNum > this.block.number) {
                            clearInterval(this.countdownLoop);
                        }
                    }
                }), 1000);
            }
        }));
    }
    reloadCountdownTimer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.accountService.updateLib();
            this.countdownTimer = Math.ceil((this.block.number - this.accountService.libNum) / 2);
        });
    }
    ngOnDestroy() {
        if (this.countdownLoop) {
            clearInterval(this.countdownLoop);
        }
    }
    formatDate(date) {
        return new Date(date).toLocaleString();
    }
};
BlockComponent = __decorate([
    Component({
        selector: 'app-block',
        templateUrl: './block.component.html',
        styleUrls: ['./block.component.css'],
        animations: [
            trigger('detailExpand', [
                state('collapsed', style({ height: '0px', minHeight: '0' })),
                state('expanded', style({ height: '*' })),
                transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
    })
], BlockComponent);
export { BlockComponent };
//# sourceMappingURL=block.component.js.map
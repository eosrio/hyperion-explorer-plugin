"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockComponent = void 0;
const core_1 = require("@angular/core");
const faCircle_1 = require("@fortawesome/free-solid-svg-icons/faCircle");
const faCube_1 = require("@fortawesome/free-solid-svg-icons/faCube");
const faHourglassStart_1 = require("@fortawesome/free-solid-svg-icons/faHourglassStart");
const faLock_1 = require("@fortawesome/free-solid-svg-icons/faLock");
const faHistory_1 = require("@fortawesome/free-solid-svg-icons/faHistory");
const animations_1 = require("@angular/animations");
const faSpinner_1 = require("@fortawesome/free-solid-svg-icons/faSpinner");
const faSadTear_1 = require("@fortawesome/free-solid-svg-icons/faSadTear");
const faChevronRight_1 = require("@fortawesome/free-solid-svg-icons/faChevronRight");
const faChevronDown_1 = require("@fortawesome/free-solid-svg-icons/faChevronDown");
let BlockComponent = class BlockComponent {
    constructor(activatedRoute, accountService, chainData, title) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.chainData = chainData;
        this.title = title;
        this.columnsToDisplay = ['icon', 'id', 'root', 'action'];
        this.columnsInside = ['action', 'data', 'auth'];
        this.faCircle = faCircle_1.faCircle;
        this.faBlock = faCube_1.faCube;
        this.faLock = faLock_1.faLock;
        this.faHourglass = faHourglassStart_1.faHourglassStart;
        this.faHistory = faHistory_1.faHistory;
        this.faChevronRight = faChevronRight_1.faChevronRight;
        this.faChevronDown = faChevronDown_1.faChevronDown;
        this.faSadTear = faSadTear_1.faSadTear;
        this.faSpinner = faSpinner_1.faSpinner;
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
        this.activatedRoute.params.subscribe(async (routeParams) => {
            this.blockNum = routeParams.block_num;
            this.block = await this.accountService.loadBlockData(routeParams.block_num);
            if (!this.chainData.chainInfoData.chain_name) {
                this.title.setTitle(`#${routeParams.block_num} • Hyperion Explorer`);
            }
            else {
                this.title.setTitle(`#${routeParams.block_num} • ${this.chainData.chainInfoData.chain_name} Hyperion Explorer`);
            }
            if (this.block && this.block.status === 'pending') {
                await this.reloadCountdownTimer();
                this.countdownLoop = setInterval(async () => {
                    this.countdownTimer--;
                    if (this.countdownTimer <= 0) {
                        await this.reloadCountdownTimer();
                        if (this.accountService.libNum > this.block.number) {
                            clearInterval(this.countdownLoop);
                        }
                    }
                }, 1000);
            }
        });
    }
    async reloadCountdownTimer() {
        await this.accountService.updateLib();
        this.countdownTimer = Math.ceil((this.block.number - this.accountService.libNum) / 2);
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
    (0, core_1.Component)({
        selector: 'app-block',
        templateUrl: './block.component.html',
        styleUrls: ['./block.component.css'],
        animations: [
            (0, animations_1.trigger)('detailExpand', [
                (0, animations_1.state)('collapsed', (0, animations_1.style)({ height: '0px', minHeight: '0' })),
                (0, animations_1.state)('expanded', (0, animations_1.style)({ height: '*' })),
                (0, animations_1.transition)('expanded <=> collapsed', (0, animations_1.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
    })
], BlockComponent);
exports.BlockComponent = BlockComponent;
//# sourceMappingURL=block.component.js.map
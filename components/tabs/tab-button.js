"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const config_1 = require("../../config/config");
const ion_1 = require("../ion");
const tab_1 = require("./tab");
/**
 * @hidden
 */
let TabButton = class TabButton extends ion_1.Ion {
    constructor(config, elementRef, renderer) {
        super(config, elementRef, renderer);
        this.ionSelect = new core_1.EventEmitter();
        this.disHover = (config.get('hoverCSS') === false);
        this.layout = config.get('tabsLayout');
    }
    ngOnInit() {
        this.tab.btn = this;
        this.layout = this.tab.parent.tabsLayout || this.layout;
        this.hasTitle = !!this.tab.tabTitle;
        this.hasIcon = !!this.tab.tabIcon && this.layout !== 'icon-hide';
        this.hasTitleOnly = (this.hasTitle && !this.hasIcon);
        this.hasIconOnly = (this.hasIcon && !this.hasTitle);
        this.hasBadge = !!this.tab.tabBadge;
    }
    onClick() {
        this.ionSelect.emit(this.tab);
        return false;
    }
    updateHref(href) {
        this.setElementAttribute('href', href);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", tab_1.Tab)
], TabButton.prototype, "tab", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TabButton.prototype, "ionSelect", void 0);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], TabButton.prototype, "onClick", null);
TabButton = __decorate([
    core_1.Component({
        selector: '.tab-button',
        template: '<ion-icon *ngIf="tab.tabIcon" [name]="tab.tabIcon" [isActive]="tab.isSelected" class="tab-button-icon"></ion-icon>' +
            '<span *ngIf="tab.tabTitle" class="tab-button-text">{{tab.tabTitle}}</span>' +
            '<ion-badge *ngIf="tab.tabBadge" class="tab-badge" [color]="tab.tabBadgeStyle">{{tab.tabBadge}}</ion-badge>' +
            '<div class="button-effect"></div>',
        host: {
            '[attr.id]': 'tab._btnId',
            '[attr.aria-controls]': 'tab._tabId',
            '[attr.aria-selected]': 'tab.isSelected',
            '[class.has-title]': 'hasTitle',
            '[class.has-icon]': 'hasIcon',
            '[class.has-title-only]': 'hasTitleOnly',
            '[class.icon-only]': 'hasIconOnly',
            '[class.has-badge]': 'hasBadge',
            '[class.disable-hover]': 'disHover',
            '[class.tab-disabled]': '!tab.enabled',
            '[class.tab-hidden]': '!tab.show',
        }
    }),
    __metadata("design:paramtypes", [config_1.Config, core_1.ElementRef, core_1.Renderer])
], TabButton);
exports.TabButton = TabButton;
//# sourceMappingURL=tab-button.js.map
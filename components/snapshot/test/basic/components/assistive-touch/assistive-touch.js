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
const dom_controller_1 = require("../../../../../../platform/dom-controller");
const popover_controller_1 = require("../../../../../popover/popover-controller");
const assistive_popover_1 = require("./assistive-popover/assistive-popover");
let AssistiveTouchComponent = class AssistiveTouchComponent {
    constructor(popoverCtrl, element, renderer, domCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.sideX = 'right';
        this.sideY = 'bottom';
        this.currentX = 2;
        this.currentY = 150;
    }
    ngAfterViewInit() {
        const hammer = new (window)['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: (window)['Hammer'].DIRECTION_ALL });
        hammer.on('panmove', this.handlePan.bind(this));
        hammer.on('panend', this.panEnd.bind(this));
        const rect = this.element.nativeElement.getBoundingClientRect();
        this.elemWidthOffset = rect.width / 2;
        this.elemHeightOffset = rect.height / 2;
        this.updatePosition();
    }
    handlePan(ev) {
        let newX = ev.center.x;
        let newY = ev.center.y;
        this.sideX = (newX < window.innerWidth / 2) ? 'left' : 'right';
        this.sideY = (newY < window.innerHeight / 2) ? 'top' : 'bottom';
        if (this.sideX === 'right')
            newX = window.innerWidth - newX;
        newX -= this.elemWidthOffset;
        if (this.sideY === 'bottom')
            newY = window.innerHeight - newY;
        newY -= this.elemHeightOffset;
        this.currentX = newX > 2 ? newX : 2;
        this.currentY = newY > 2 ? newY : 2;
        this.updatePosition();
    }
    panEnd() {
        if (this.currentX > this.currentY) {
            this.currentY = 2;
        }
        else {
            this.currentX = 2;
        }
        this.updatePosition();
    }
    updatePosition() {
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.element.nativeElement, this.sideX === 'left' ? 'right' : 'left', 'auto');
            this.renderer.setStyle(this.element.nativeElement, this.sideX, this.currentX + 'px');
            this.renderer.setStyle(this.element.nativeElement, this.sideY === 'top' ? 'bottom' : 'top', 'auto');
            this.renderer.setStyle(this.element.nativeElement, this.sideY, this.currentY + 'px');
        });
    }
    openControl() {
        this.popoverCtrl.create(assistive_popover_1.AssistivePopover).present();
    }
};
AssistiveTouchComponent = __decorate([
    core_1.Component({
        selector: 'assistive-touch',
        templateUrl: 'assistive-touch.html',
        host: {
            '(click)': 'openControl()'
        }
    }),
    __metadata("design:paramtypes", [popover_controller_1.PopoverController,
        core_1.ElementRef,
        core_1.Renderer2,
        dom_controller_1.DomController])
], AssistiveTouchComponent);
exports.AssistiveTouchComponent = AssistiveTouchComponent;
//# sourceMappingURL=assistive-touch.js.map
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
const __1 = require("../../../../../..");
let PageOne = class PageOne {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    presentListPopover(ev) {
        let popover = this.popoverCtrl.create('PopoverListPage');
        popover.present({
            ev: ev
        });
    }
    presentLongListPopover(ev) {
        let popover = this.popoverCtrl.create('PopoverLongListPage', {}, {
            cssClass: 'my-popover popover-class'
        });
        popover.present({
            ev: ev
        });
    }
    presentRadioPopover(ev) {
        let popover = this.popoverCtrl.create('PopoverRadioPage', {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });
        popover.present({
            ev: ev
        });
    }
    presentNoEventPopover() {
        this.popoverCtrl.create('PopoverListPage').present();
    }
};
__decorate([
    core_1.ViewChild('popoverContent', { read: core_1.ElementRef }),
    __metadata("design:type", core_1.ElementRef)
], PageOne.prototype, "content", void 0);
__decorate([
    core_1.ViewChild('popoverText', { read: core_1.ElementRef }),
    __metadata("design:type", core_1.ElementRef)
], PageOne.prototype, "text", void 0);
PageOne = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'page-one.html',
        selector: 'e2e-popover-basic'
    }),
    __metadata("design:paramtypes", [__1.PopoverController])
], PageOne);
exports.PageOne = PageOne;
//# sourceMappingURL=page-one.js.map
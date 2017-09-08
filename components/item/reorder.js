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
const item_reorder_util_1 = require("./item-reorder-util");
/**
 * @hidden
 */
let Reorder = class Reorder {
    constructor(elementRef) {
        this.elementRef = elementRef;
        elementRef.nativeElement['$ionComponent'] = this;
    }
    getReorderNode() {
        return item_reorder_util_1.findReorderItem(this.elementRef.nativeElement, null);
    }
    onClick(ev) {
        // Stop propagation if click event reaches ion-reorder
        ev.preventDefault();
        ev.stopPropagation();
    }
};
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UIEvent]),
    __metadata("design:returntype", void 0)
], Reorder.prototype, "onClick", null);
Reorder = __decorate([
    core_1.Component({
        selector: 'ion-reorder',
        template: `<ion-icon name="reorder"></ion-icon>`
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], Reorder);
exports.Reorder = Reorder;
//# sourceMappingURL=reorder.js.map
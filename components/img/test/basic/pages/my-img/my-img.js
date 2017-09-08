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
let MyImg = class MyImg {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MyImg.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MyImg.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MyImg.prototype, "src", void 0);
MyImg = __decorate([
    core_1.Component({
        selector: 'my-img',
        template: `<ion-img [width]="width" [height]="height" [src]="src"></ion-img>`
    })
], MyImg);
exports.MyImg = MyImg;
//# sourceMappingURL=my-img.js.map
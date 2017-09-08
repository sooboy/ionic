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
    constructor(app) {
        this.testingColors = ['primary', 'secondary', 'danger', 'dark'];
        this.testingColorIndex = 0;
        app.setTitle('Basic Buttons');
        this.chgColor();
    }
    chgColor() {
        this.btnColor = this.testingColors[this.testingColorIndex];
        console.log('dynamic btnColor', this.btnColor);
        this.testingColorIndex = (this.testingColorIndex >= this.testingColors.length - 1 ? 0 : this.testingColorIndex + 1);
    }
};
PageOne = __decorate([
    core_1.Component({
        templateUrl: 'page-one.html'
    }),
    __metadata("design:paramtypes", [__1.App])
], PageOne);
exports.PageOne = PageOne;
//# sourceMappingURL=page-one.js.map
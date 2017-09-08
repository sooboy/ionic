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
let PageOne = class PageOne {
    constructor() {
        this.showIf = true;
        this.liked = false;
        this.buttons = [
            { selected: false, value: 'primary', text: 'Primary' },
            { selected: false, value: 'secondary', text: 'Secondary' },
            { selected: false, value: 'dark', text: 'Dark' }
        ];
        this.reset();
    }
    unify() {
        this.isDestructive = false;
        this.isSecondary = false;
        this.isCustom = false;
        this.isSolid = false;
        this.isOutline = false;
        this.isClear = false;
        this.isClicked = false;
        this.myColor1 = 'primary';
        this.myColor2 = 'primary';
    }
    reset() {
        this.isDestructive = true;
        this.isSecondary = true;
        this.isCustom = true;
        this.isSolid = true;
        this.isOutline = true;
        this.isClear = true;
        this.isClicked = false;
        this.myColor1 = 'custom1';
        this.myColor2 = 'custom2';
    }
    toggle() {
        this.isClicked = !this.isClicked;
    }
    reportLike(liked) {
        this.liked = liked;
    }
    setValue(value) {
        if (this.value !== value) {
            this.buttons.forEach((btn) => btn.selected = (value === btn.value));
            this.value = value;
        }
    }
};
PageOne = __decorate([
    core_1.Component({
        templateUrl: 'page-one.html'
    }),
    __metadata("design:paramtypes", [])
], PageOne);
exports.PageOne = PageOne;
//# sourceMappingURL=page-one.js.map
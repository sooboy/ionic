"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let PageOne = class PageOne {
    constructor() {
        this.isFull = true;
        this.isBlock = true;
        this.isBarClear = true;
        // Styles
        this.isSolid = true;
        this.isOutline = true;
        this.isClear = true;
        // Colors
        this.isSecondary = 'secondary';
        this.isDanger = 'danger';
        this.isDark = 'dark';
    }
    toggleBlock() {
        this.isFull = !this.isFull;
        this.isBlock = !this.isBlock;
    }
    // Toggles solid, outline, and clear buttons
    toggleStyles() {
        this.isSolid = !this.isSolid;
        this.isOutline = !this.isOutline;
        this.isClear = !this.isClear;
    }
    // Toggles the colors on the buttons (secondary, danger, dark)
    toggleColors() {
        this.isSecondary = (this.isSecondary === 'secondary' ? '' : 'secondary');
        this.isDanger = (this.isDanger === 'danger' ? '' : 'danger');
        this.isDark = (this.isDark === 'dark' ? '' : 'dark');
    }
    toggleBarClear() {
        this.isBarClear = !this.isBarClear;
    }
    removeColors() {
        this.isSecondary = null;
        this.isDanger = null;
        this.isDark = null;
    }
};
PageOne = __decorate([
    core_1.Component({
        templateUrl: 'page-one.html'
    })
], PageOne);
exports.PageOne = PageOne;
//# sourceMappingURL=page-one.js.map
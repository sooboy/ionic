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
const _1 = require("../../../../../../");
let PageOne = class PageOne {
    constructor() {
        this.page1 = 'PageTwo';
        this.showToolbar = false;
    }
    onScroll(ev) {
        console.log(`scroll move: scrollTop: ${ev.scrollTop}, directionY: ${ev.directionY}, velocityY: ${ev.velocityY}`);
    }
    toggleToolbar() {
        this.showToolbar = !this.showToolbar;
        this.content.resize();
    }
};
__decorate([
    core_1.ViewChild(_1.Content),
    __metadata("design:type", _1.Content)
], PageOne.prototype, "content", void 0);
PageOne = __decorate([
    _1.IonicPage(),
    core_1.Component({
        templateUrl: 'page-one.html'
    })
], PageOne);
exports.PageOne = PageOne;
//# sourceMappingURL=page-one.js.map
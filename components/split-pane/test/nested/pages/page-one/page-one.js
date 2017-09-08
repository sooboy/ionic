"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const page_two_1 = require("../page-two/page-two");
const page_three_1 = require("../page-three/page-three");
const page_four_1 = require("../page-four/page-four");
let PageOne = class PageOne {
    constructor() {
        this.root = page_two_1.PageTwo;
        this.root2 = page_three_1.PageThree;
        this.root3 = page_four_1.PageFour;
    }
};
PageOne = __decorate([
    core_1.Component({
        templateUrl: 'page-one.html'
    })
], PageOne);
exports.PageOne = PageOne;
//# sourceMappingURL=page-one.js.map
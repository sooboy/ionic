"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const __1 = require("../../../../../..");
const nested_nav_two_page_two_1 = require("./nested-nav-two-page-two");
let NestedNavTwoPageTwoModule = class NestedNavTwoPageTwoModule {
};
NestedNavTwoPageTwoModule = __decorate([
    core_1.NgModule({
        imports: [
            __1.IonicPageModule.forChild(nested_nav_two_page_two_1.NestedNavTwoPageTwo)
        ],
        declarations: [
            nested_nav_two_page_two_1.NestedNavTwoPageTwo
        ]
    })
], NestedNavTwoPageTwoModule);
exports.NestedNavTwoPageTwoModule = NestedNavTwoPageTwoModule;
//# sourceMappingURL=nested-nav-two-page-two.module.js.map
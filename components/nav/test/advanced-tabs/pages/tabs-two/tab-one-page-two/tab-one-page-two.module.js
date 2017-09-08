"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const __1 = require("../../../../../../..");
const tab_one_page_two_1 = require("./tab-one-page-two");
let TabsTwoTabOnePageTwoModule = class TabsTwoTabOnePageTwoModule {
};
TabsTwoTabOnePageTwoModule = __decorate([
    core_1.NgModule({
        imports: [
            __1.IonicPageModule.forChild(tab_one_page_two_1.TabsTwoTabOnePageTwo)
        ],
        declarations: [
            tab_one_page_two_1.TabsTwoTabOnePageTwo
        ]
    })
], TabsTwoTabOnePageTwoModule);
exports.TabsTwoTabOnePageTwoModule = TabsTwoTabOnePageTwoModule;
//# sourceMappingURL=tab-one-page-two.module.js.map
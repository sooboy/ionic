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
const page_two_1 = require("./page-two");
let PageTwoModule = class PageTwoModule {
};
PageTwoModule = __decorate([
    core_1.NgModule({
        declarations: [
            page_two_1.PageTwo,
        ],
        imports: [
            __1.IonicPageModule.forChild(page_two_1.PageTwo)
        ],
        entryComponents: [
            page_two_1.PageTwo,
        ]
    })
], PageTwoModule);
exports.PageTwoModule = PageTwoModule;
//# sourceMappingURL=page-two.module.js.map
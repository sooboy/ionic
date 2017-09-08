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
const sixth_page_1 = require("./sixth-page");
let SixthPageModule = class SixthPageModule {
};
SixthPageModule = __decorate([
    core_1.NgModule({
        imports: [
            __1.IonicPageModule.forChild(sixth_page_1.SixthPage)
        ],
        declarations: [
            sixth_page_1.SixthPage
        ]
    })
], SixthPageModule);
exports.SixthPageModule = SixthPageModule;
//# sourceMappingURL=sixth-page.module.js.map
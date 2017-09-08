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
const primary_header_page_1 = require("./primary-header-page");
let PrimaryHeaderPageModule = class PrimaryHeaderPageModule {
};
PrimaryHeaderPageModule = __decorate([
    core_1.NgModule({
        imports: [
            __1.IonicPageModule.forChild(primary_header_page_1.PrimaryHeaderPage)
        ],
        declarations: [
            primary_header_page_1.PrimaryHeaderPage
        ],
        entryComponents: [
            primary_header_page_1.PrimaryHeaderPage,
        ]
    })
], PrimaryHeaderPageModule);
exports.PrimaryHeaderPageModule = PrimaryHeaderPageModule;
//# sourceMappingURL=primary-header-page.module.js.map
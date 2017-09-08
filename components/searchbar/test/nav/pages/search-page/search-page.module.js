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
const search_page_1 = require("./search-page");
let SearchPageModule = class SearchPageModule {
};
SearchPageModule = __decorate([
    core_1.NgModule({
        declarations: [
            search_page_1.SearchPage,
        ],
        imports: [
            __1.IonicPageModule.forChild(search_page_1.SearchPage)
        ]
    })
], SearchPageModule);
exports.SearchPageModule = SearchPageModule;
//# sourceMappingURL=search-page.module.js.map
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
const first_page_1 = require("./first-page");
const my_component_1 = require("./my-component");
const my_component_two_1 = require("./my-component-two");
let FirstPageModule = class FirstPageModule {
};
FirstPageModule = __decorate([
    core_1.NgModule({
        imports: [
            __1.IonicPageModule.forChild(first_page_1.FirstPage)
        ],
        declarations: [
            first_page_1.FirstPage,
            my_component_1.MyCmpTest,
            my_component_two_1.MyCmpTest2
        ]
    })
], FirstPageModule);
exports.FirstPageModule = FirstPageModule;
//# sourceMappingURL=first-page.module.js.map
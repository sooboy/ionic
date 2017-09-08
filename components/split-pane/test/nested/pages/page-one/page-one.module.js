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
const page_one_1 = require("./page-one");
const page_two_module_1 = require("../page-two/page-two.module");
const page_three_module_1 = require("../page-three/page-three.module");
const page_four_module_1 = require("../page-four/page-four.module");
let PageOneModule = class PageOneModule {
};
PageOneModule = __decorate([
    core_1.NgModule({
        declarations: [
            page_one_1.PageOne,
        ],
        imports: [
            __1.IonicPageModule.forChild(page_one_1.PageOne),
            page_two_module_1.PageTwoModule,
            page_three_module_1.PageThreeModule,
            page_four_module_1.PageFourModule
        ]
    })
], PageOneModule);
exports.PageOneModule = PageOneModule;
//# sourceMappingURL=page-one.module.js.map
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
const main_1 = require("./main");
let E2EPageModule = class E2EPageModule {
};
E2EPageModule = __decorate([
    core_1.NgModule({
        declarations: [
            main_1.E2EPage,
        ],
        imports: [
            __1.IonicPageModule.forChild(main_1.E2EPage)
        ],
        entryComponents: [
            main_1.E2EPage,
        ]
    })
], E2EPageModule);
exports.E2EPageModule = E2EPageModule;
//# sourceMappingURL=main.module.js.map
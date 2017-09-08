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
const tab1_page3_1 = require("./tab1-page3");
let Tab1Page3Module = class Tab1Page3Module {
};
Tab1Page3Module = __decorate([
    core_1.NgModule({
        imports: [
            __1.IonicPageModule.forChild(tab1_page3_1.Tab1Page3)
        ],
        declarations: [
            tab1_page3_1.Tab1Page3
        ]
    })
], Tab1Page3Module);
exports.Tab1Page3Module = Tab1Page3Module;
//# sourceMappingURL=tab1-page3.module.js.map
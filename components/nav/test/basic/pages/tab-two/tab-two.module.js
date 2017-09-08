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
const tab_two_1 = require("./tab-two");
let Tab2Module = class Tab2Module {
};
Tab2Module = __decorate([
    core_1.NgModule({
        imports: [
            __1.IonicPageModule.forChild(tab_two_1.Tab2)
        ],
        declarations: [
            tab_two_1.Tab2
        ],
        entryComponents: [
            tab_two_1.Tab2,
        ]
    })
], Tab2Module);
exports.Tab2Module = Tab2Module;
//# sourceMappingURL=tab-two.module.js.map
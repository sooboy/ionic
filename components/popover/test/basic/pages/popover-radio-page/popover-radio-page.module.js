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
const popover_radio_page_1 = require("./popover-radio-page");
let PopoverRadioPageModule = class PopoverRadioPageModule {
};
PopoverRadioPageModule = __decorate([
    core_1.NgModule({
        declarations: [
            popover_radio_page_1.PopoverRadioPage,
        ],
        imports: [
            __1.IonicPageModule.forChild(popover_radio_page_1.PopoverRadioPage)
        ],
        entryComponents: [
            popover_radio_page_1.PopoverRadioPage,
        ]
    })
], PopoverRadioPageModule);
exports.PopoverRadioPageModule = PopoverRadioPageModule;
//# sourceMappingURL=popover-radio-page.module.js.map
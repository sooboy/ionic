"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const assistive_touch_1 = require("./assistive-touch");
const module_1 = require("../../../../../../module");
const assistive_popover_module_1 = require("./assistive-popover/assistive-popover.module");
let AssistiveTouchComponentModule = class AssistiveTouchComponentModule {
};
AssistiveTouchComponentModule = __decorate([
    core_1.NgModule({
        declarations: [
            assistive_touch_1.AssistiveTouchComponent,
        ],
        imports: [
            module_1.IonicPageModule.forChild(assistive_touch_1.AssistiveTouchComponent),
            assistive_popover_module_1.AssistivePopoverModule
        ],
        exports: [
            assistive_touch_1.AssistiveTouchComponent
        ]
    })
], AssistiveTouchComponentModule);
exports.AssistiveTouchComponentModule = AssistiveTouchComponentModule;
//# sourceMappingURL=assistive-touch.module.js.map
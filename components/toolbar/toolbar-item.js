"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const button_1 = require("../button/button");
const config_1 = require("../../config/config");
const ion_1 = require("../ion");
const navbar_1 = require("./navbar");
const toolbar_1 = require("./toolbar");
/**
 * @hidden
 */
let ToolbarItem = class ToolbarItem extends ion_1.Ion {
    constructor(config, elementRef, renderer, toolbar, navbar) {
        super(config, elementRef, renderer, 'bar-buttons');
        this.inToolbar = !!(toolbar || navbar);
    }
    set _buttons(buttons) {
        if (this.inToolbar) {
            buttons.forEach((button) => {
                button.setRole('bar-button');
            });
        }
    }
};
__decorate([
    core_1.ContentChildren(button_1.Button),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ToolbarItem.prototype, "_buttons", null);
ToolbarItem = __decorate([
    core_1.Directive({
        selector: 'ion-buttons,[menuToggle]'
    }),
    __param(3, core_1.Optional()),
    __param(4, core_1.Optional()), __param(4, core_1.Inject(core_1.forwardRef(() => navbar_1.Navbar))),
    __metadata("design:paramtypes", [config_1.Config,
        core_1.ElementRef,
        core_1.Renderer,
        toolbar_1.Toolbar,
        navbar_1.Navbar])
], ToolbarItem);
exports.ToolbarItem = ToolbarItem;
//# sourceMappingURL=toolbar-item.js.map
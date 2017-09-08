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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const config_1 = require("../../config/config");
const ion_1 = require("../ion");
/**
 * @hidden
 */
let ItemDivider = class ItemDivider extends ion_1.Ion {
    constructor(config, elementRef, renderer) {
        super(config, elementRef, renderer, 'item-divider');
    }
};
ItemDivider = __decorate([
    core_1.Directive({
        selector: 'ion-item-divider',
        host: {
            'class': 'item-divider'
        }
    }),
    __metadata("design:paramtypes", [config_1.Config, core_1.ElementRef, core_1.Renderer])
], ItemDivider);
exports.ItemDivider = ItemDivider;
//# sourceMappingURL=item-divider.js.map
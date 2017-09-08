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
const config_1 = require("../../config/config");
const ion_1 = require("../ion");
const view_controller_1 = require("../../navigation/view-controller");
/**
 * @name Footer
 * @description
 * Footer is a root component of a page that sits at the bottom of the page.
 * Footer can be a wrapper for `ion-toolbar` to make sure the content area is sized correctly.
 *
 * @usage
 *
 * ```html
 * <ion-content></ion-content>
 *
 * <ion-footer>
 *   <ion-toolbar>
 *     <ion-title>Footer</ion-title>
 *   </ion-toolbar>
 * </ion-footer>
 * ```
 *
 */
let Footer = class Footer extends ion_1.Ion {
    constructor(config, elementRef, renderer, viewCtrl) {
        super(config, elementRef, renderer, 'footer');
        viewCtrl && viewCtrl._setFooter(this);
    }
};
Footer = __decorate([
    core_1.Directive({
        selector: 'ion-footer'
    }),
    __param(3, core_1.Optional()),
    __metadata("design:paramtypes", [config_1.Config, core_1.ElementRef, core_1.Renderer, view_controller_1.ViewController])
], Footer);
exports.Footer = Footer;
//# sourceMappingURL=toolbar-footer.js.map
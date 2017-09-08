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
const navbar_1 = require("./navbar");
const toolbar_1 = require("./toolbar");
/**
 * @name Title
 * @description
 * `ion-title` is a component that sets the title of the `Toolbar` or `Navbar`
 *
 * @usage
 *
 * ```html
 * <ion-header>
 *
 *   <ion-navbar>
 *     <ion-title>Settings</ion-title>
 *   </ion-navbar>
 *
 * </ion-header>
 * ```
 *
 * Or to create a navbar with a toolbar as a subheader:
 *
 * ```html
 * <ion-header>
 *
 *   <ion-navbar>
 *     <ion-title>Main Header</ion-title>
 *   </ion-navbar>
 *
 *   <ion-toolbar>
 *     <ion-title>Subheader</ion-title>
 *   </ion-toolbar>
 *
 * </ion-header>
 * ```
 *
 * @demo /docs/demos/src/title/
 */
let ToolbarTitle = class ToolbarTitle extends ion_1.Ion {
    constructor(config, elementRef, renderer, toolbar, navbar) {
        super(config, elementRef, renderer, 'title');
        toolbar && toolbar._setTitle(this);
        navbar && navbar._setTitle(this);
    }
    /**
     * @hidden
     */
    getTitleText() {
        return this._elementRef.nativeElement.textContent;
    }
};
ToolbarTitle = __decorate([
    core_1.Component({
        selector: 'ion-title',
        template: '<div class="toolbar-title" [ngClass]="\'toolbar-title-\' + _mode">' +
            '<ng-content></ng-content>' +
            '</div>',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __param(3, core_1.Optional()),
    __param(4, core_1.Optional()), __param(4, core_1.Inject(core_1.forwardRef(() => navbar_1.Navbar))),
    __metadata("design:paramtypes", [config_1.Config,
        core_1.ElementRef,
        core_1.Renderer,
        toolbar_1.Toolbar,
        navbar_1.Navbar])
], ToolbarTitle);
exports.ToolbarTitle = ToolbarTitle;
//# sourceMappingURL=toolbar-title.js.map
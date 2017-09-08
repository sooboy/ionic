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
const menu_controller_1 = require("../app/menu-controller");
const navbar_1 = require("../toolbar/navbar");
const view_controller_1 = require("../../navigation/view-controller");
/**
 * @name MenuToggle
 * @description
 * The `menuToggle` directive can be placed on any button to toggle a menu open or closed.
 * If it is added to the [NavBar](../../navbar/NavBar) of a page, the button will only appear
 * when the page it's in is currently a root page. See the [Menu Navigation Bar Behavior](../Menu#navigation-bar-behavior)
 * docs for more information.
 *
 *
 * @usage
 *
 * A simple `menuToggle` button can be added using the following markup:
 *
 * ```html
 * <button ion-button menuToggle>Toggle Menu</button>
 * ```
 *
 * To toggle a specific menu by its id or side, give the `menuToggle`
 * directive a value.
 *
 * ```html
 * <button ion-button menuToggle="right">Toggle Right Menu</button>
 * ```
 *
 * If placing the `menuToggle` in a navbar or toolbar, it should be
 * placed as a child of the `<ion-navbar>` or `<ion-toolbar>`, and not in
 * the `<ion-buttons>` element:
 *
 * ```html
 * <ion-header>
 *
 *   <ion-navbar>
 *     <ion-buttons start>
 *       <button ion-button>
 *         <ion-icon name="contact"></ion-icon>
 *       </button>
 *     </ion-buttons>
 *     <button ion-button menuToggle>
 *       <ion-icon name="menu"></ion-icon>
 *     </button>
 *     <ion-title>
 *       Title
 *     </ion-title>
 *     <ion-buttons end>
 *       <button ion-button (click)="doClick()">
 *         <ion-icon name="more"></ion-icon>
 *       </button>
 *     </ion-buttons>
 *   </ion-navbar>
 *
 * </ion-header>
 * ```
 *
 * Similar to `<ion-buttons>`, the `menuToggle` can be positioned using
 * `start`, `end`, `left`, or `right`:
 *
 * ```html
 * <ion-toolbar>
 *   <button ion-button menuToggle right>
 *     <ion-icon name="menu"></ion-icon>
 *   </button>
 *   <ion-title>
 *     Title
 *   </ion-title>
 *   <ion-buttons end>
 *     <button ion-button (click)="doClick()">
 *       <ion-icon name="more"></ion-icon>
 *     </button>
 *   </ion-buttons>
 * </ion-toolbar>
 * ```
 *
 * See the [Toolbar API docs](../../toolbar/Toolbar) for more information
 * on the different positions.
 *
 * @demo /docs/demos/src/menu/
 * @see {@link /docs/components#menus Menu Component Docs}
 * @see {@link ../../menu/Menu Menu API Docs}
 */
let MenuToggle = class MenuToggle {
    constructor(_menu, _viewCtrl, _button, _navbar) {
        this._menu = _menu;
        this._viewCtrl = _viewCtrl;
        this._button = _button;
        this._isButton = !!_button;
        this._inNavbar = !!_navbar;
    }
    ngAfterContentInit() {
        // Add the bar-button-menutoggle / button-menutoggle class
        if (this._isButton) {
            this._button._setClass('menutoggle', true);
        }
    }
    /**
    * @hidden
    */
    toggle() {
        const menu = this._menu.get(this.menuToggle);
        menu && menu.toggle();
    }
    /**
    * @hidden
    */
    get isHidden() {
        const menu = this._menu.get(this.menuToggle);
        if (this._inNavbar && this._viewCtrl) {
            if (!menu || !menu._canOpen()) {
                return true;
            }
            if (this._viewCtrl.isFirst()) {
                // this is the first view, so it should always show
                return false;
            }
            if (menu) {
                // this is not the root view, so see if this menu
                // is configured to still be enabled if it's not the root view
                return !menu.persistent;
            }
        }
        return false;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MenuToggle.prototype, "menuToggle", void 0);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuToggle.prototype, "toggle", null);
MenuToggle = __decorate([
    core_1.Directive({
        selector: '[menuToggle]',
        host: {
            '[hidden]': 'isHidden'
        }
    }),
    __param(1, core_1.Optional()),
    __param(2, core_1.Optional()),
    __param(3, core_1.Optional()),
    __metadata("design:paramtypes", [menu_controller_1.MenuController,
        view_controller_1.ViewController,
        button_1.Button,
        navbar_1.Navbar])
], MenuToggle);
exports.MenuToggle = MenuToggle;
//# sourceMappingURL=menu-toggle.js.map
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
const app_1 = require("../app/app");
const config_1 = require("../../config/config");
const util_1 = require("../../util/util");
const nav_controller_1 = require("../../navigation/nav-controller");
const toolbar_base_1 = require("./toolbar-base");
const view_controller_1 = require("../../navigation/view-controller");
/**
 * @name Navbar
 * @description
 * Navbar acts as the navigational toolbar, which also comes with a back
 * button. A navbar can contain a `ion-title`, any number of buttons,
 * a segment, or a searchbar. Navbars must be placed within an
 * `<ion-header>` in order for them to be placed above the content.
 * It's important to note that navbar's are part of the dynamic navigation
 * stack. If you need a static toolbar, use ion-toolbar.
 *
 * @usage
 * ```html
 * <ion-header>
 *
 *   <ion-navbar>
 *     <button ion-button icon-only menuToggle>
 *       <ion-icon name="menu"></ion-icon>
 *     </button>
 *
 *     <ion-title>
 *       Page Title
 *     </ion-title>
 *
 *     <ion-buttons end>
 *       <button ion-button icon-only (click)="openModal()">
 *         <ion-icon name="options"></ion-icon>
 *       </button>
 *     </ion-buttons>
 *   </ion-navbar>
 *
 * </ion-header>
 * ```
 *
 * @demo /docs/demos/src/navbar/
 * @see {@link ../../toolbar/Toolbar/ Toolbar API Docs}
 */
let Navbar = class Navbar extends toolbar_base_1.ToolbarBase {
    constructor(_app, viewCtrl, navCtrl, config, elementRef, renderer) {
        super(config, elementRef, renderer);
        this._app = _app;
        this.navCtrl = navCtrl;
        /**
         * @hidden
         */
        this._hidden = false;
        /**
         * @hidden
         */
        this._hideBb = false;
        viewCtrl && viewCtrl._setNavbar(this);
        this._bbIcon = config.get('backButtonIcon');
        this._sbPadding = config.getBoolean('statusbarPadding');
        this._backText = config.get('backButtonText', 'Back');
    }
    /**
     * @input {boolean} If true, the back button will be hidden.
     */
    get hideBackButton() {
        return this._hideBb;
    }
    set hideBackButton(val) {
        this._hideBb = util_1.isTrueProperty(val);
    }
    backButtonClick(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.navCtrl && this.navCtrl.pop(null, null);
    }
    /**
     * Set the text of the Back Button in the Nav Bar. Defaults to "Back".
     */
    setBackButtonText(text) {
        this._backText = text;
    }
    /**
     * @hidden
     */
    didEnter() {
        try {
            this._app.setTitle(this.getTitleText());
        }
        catch (e) {
            console.error(e);
        }
    }
    /**
     * @hidden
     */
    setHidden(isHidden) {
        // used to display none/block the navbar
        this._hidden = isHidden;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Navbar.prototype, "hideBackButton", null);
Navbar = __decorate([
    core_1.Component({
        selector: 'ion-navbar',
        template: '<div class="toolbar-background" [ngClass]="\'toolbar-background-\' + _mode"></div>' +
            '<button (click)="backButtonClick($event)" ion-button="bar-button" class="back-button" [ngClass]="\'back-button-\' + _mode" [hidden]="_hideBb">' +
            '<ion-icon class="back-button-icon" [ngClass]="\'back-button-icon-\' + _mode" [name]="_bbIcon"></ion-icon>' +
            '<span class="back-button-text" [ngClass]="\'back-button-text-\' + _mode">{{_backText}}</span>' +
            '</button>' +
            '<ng-content select="[menuToggle],ion-buttons[left]"></ng-content>' +
            '<ng-content select="ion-buttons[start]"></ng-content>' +
            '<ng-content select="ion-buttons[end],ion-buttons[right]"></ng-content>' +
            '<div class="toolbar-content" [ngClass]="\'toolbar-content-\' + _mode">' +
            '<ng-content></ng-content>' +
            '</div>',
        host: {
            '[hidden]': '_hidden',
            'class': 'toolbar',
            '[class.statusbar-padding]': '_sbPadding'
        }
    }),
    __param(1, core_1.Optional()),
    __param(2, core_1.Optional()),
    __metadata("design:paramtypes", [app_1.App,
        view_controller_1.ViewController,
        nav_controller_1.NavController,
        config_1.Config,
        core_1.ElementRef,
        core_1.Renderer])
], Navbar);
exports.Navbar = Navbar;
//# sourceMappingURL=navbar.js.map
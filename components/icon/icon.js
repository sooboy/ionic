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
const util_1 = require("../../util/util");
const config_1 = require("../../config/config");
const ion_1 = require("../ion");
/**
 * @name Icon
 * @description
 * Icons can be used on their own, or inside of a number of Ionic components.
 * For a full list of available icons, check out the
 * [Ionicons docs](../../../../ionicons).
 *
 * One feature of Ionicons in Ionic is when icon names are set, the actual icon
 * which is rendered can change slightly depending on the mode the app is
 * running from. For example, by setting the icon name of `alarm`, on iOS the
 * icon will automatically apply `ios-alarm`, and on Material Design it will
 * automatically apply `md-alarm`. This allows the developer to write the
 * markup once while Ionic applies the appropriate icon based on the mode.
 *
 * @usage
 * ```html
 * <!-- automatically uses the correct "star" icon depending on the mode -->
 * <ion-icon name="star"></ion-icon>
 *
 * <!-- explicity set the icon for each mode -->
 * <ion-icon ios="ios-home" md="md-home"></ion-icon>
 *
 * <!-- always use the same icon, no matter what the mode -->
 * <ion-icon name="ios-clock"></ion-icon>
 * <ion-icon name="logo-twitter"></ion-icon>
 * ```
 *
 * @demo /docs/demos/src/icon/
 * @see {@link /docs/components#icons Icon Component Docs}
 *
 */
let Icon = class Icon extends ion_1.Ion {
    constructor(config, elementRef, renderer) {
        super(config, elementRef, renderer, 'icon');
        /** @hidden */
        this._isActive = true;
        /** @hidden */
        this._name = '';
        /** @hidden */
        this._ios = '';
        /** @hidden */
        this._md = '';
        /** @hidden */
        this._css = '';
        /**
         * @hidden
         */
        this._hidden = false;
        this._iconMode = config.get('iconMode');
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        if (this._css) {
            this.setElementClass(this._css, false);
        }
    }
    /**
     * @input {string} Specifies which icon to use. The appropriate icon will be used based on the mode.
     * For more information, see [Ionicons](/docs/ionicons/).
     */
    get name() {
        return this._name;
    }
    set name(val) {
        if (!(/^md-|^ios-|^logo-/.test(val))) {
            // this does not have one of the defaults
            // so lets auto add in the mode prefix for them
            this._name = this._iconMode + '-' + val;
        }
        else {
            this._name = val;
        }
        this.update();
    }
    /**
     * @input {string} Specifies which icon to use on `ios` mode.
     */
    get ios() {
        return this._ios;
    }
    set ios(val) {
        this._ios = val;
        this.update();
    }
    /**
     * @input {string} Specifies which icon to use on `md` mode.
     */
    get md() {
        return this._md;
    }
    set md(val) {
        this._md = val;
        this.update();
    }
    /**
     * @input {boolean} If true, the icon is styled with an "active" appearance.
     * An active icon is filled in, and an inactive icon is the outline of the icon.
     * The `isActive` property is largely used by the tabbar. Only affects `ios` icons.
     */
    get isActive() {
        return this._isActive;
    }
    set isActive(val) {
        this._isActive = util_1.isTrueProperty(val);
        this.update();
    }
    /**
     * @hidden
     */
    update() {
        let iconName;
        if (this._ios && this._iconMode === 'ios') {
            iconName = this._ios;
        }
        else if (this._md && this._iconMode === 'md') {
            iconName = this._md;
        }
        else {
            iconName = this._name;
        }
        let hidden = this._hidden = (iconName === null);
        if (hidden) {
            return;
        }
        let iconMode = iconName.split('-', 2)[0];
        if (iconMode === 'ios' &&
            !this._isActive &&
            iconName.indexOf('logo-') < 0 &&
            iconName.indexOf('-outline') < 0) {
            iconName += '-outline';
        }
        let css = 'ion-' + iconName;
        if (this._css === css) {
            return;
        }
        if (this._css) {
            this.setElementClass(this._css, false);
        }
        this._css = css;
        this.setElementClass(css, true);
        let label = iconName
            .replace('ios-', '')
            .replace('md-', '')
            .replace('-', ' ');
        this.setElementAttribute('aria-label', label);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Icon.prototype, "name", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Icon.prototype, "ios", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Icon.prototype, "md", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Icon.prototype, "isActive", null);
__decorate([
    core_1.HostBinding('class.hide'),
    __metadata("design:type", Boolean)
], Icon.prototype, "_hidden", void 0);
Icon = __decorate([
    core_1.Directive({
        selector: 'ion-icon',
        host: {
            'role': 'img'
        }
    }),
    __metadata("design:paramtypes", [config_1.Config,
        core_1.ElementRef,
        core_1.Renderer])
], Icon);
exports.Icon = Icon;
//# sourceMappingURL=icon.js.map
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
const util_1 = require("../../util/util");
/**
  * @name Button
  * @module ionic
  * @description
  * Buttons are simple components in Ionic. They can consist of text and icons
  * and be enhanced by a wide range of attributes.
  *
  * @usage
  *
  * ```html
  *
  *  <!-- Colors -->
  *  <button ion-button>Default</button>
  *
  *  <button ion-button color="secondary">Secondary</button>
  *
  *  <button ion-button color="danger">Danger</button>
  *
  *  <button ion-button color="light">Light</button>
  *
  *  <button ion-button color="dark">Dark</button>
  *
  *  <!-- Shapes -->
  *  <button ion-button full>Full Button</button>
  *
  *  <button ion-button block>Block Button</button>
  *
  *  <button ion-button round>Round Button</button>
  *
  *  <!-- Outline -->
  *  <button ion-button full outline>Outline + Full</button>
  *
  *  <button ion-button block outline>Outline + Block</button>
  *
  *  <button ion-button round outline>Outline + Round</button>
  *
  *  <!-- Icons -->
  *  <button ion-button icon-start>
  *    <ion-icon name="star"></ion-icon>
  *    Left Icon
  *  </button>
  *
  *  <button ion-button icon-end>
  *    Right Icon
  *    <ion-icon name="star"></ion-icon>
  *  </button>
  *
  *  <button ion-button icon-only>
  *    <ion-icon name="star"></ion-icon>
  *  </button>
  *
  *  <!-- Sizes -->
  *  <button ion-button large>Large</button>
  *
  *  <button ion-button>Default</button>
  *
  *  <button ion-button small>Small</button>
  * ```
  *
  * @advanced
  *
  * ```html
  *
  * <!-- Bind the color and outline inputs to an expression -->
  * <button ion-button [color]="isDanger ? 'danger' : 'primary'" [outline]="isOutline">
  *   Danger (Solid)
  * </button>
  *
  * <!-- Bind the color and round inputs to an expression -->
  * <button ion-button [color]="myColor" [round]="isRound">
  *   Secondary (Round)
  * </button>
  *
  * <!-- Bind the color and clear inputs to an expression -->
  * <button ion-button [color]="isSecondary ? 'secondary' : 'primary'"  [clear]="isClear">
  *   Primary (Clear)
  * </button>
  *
  * <!-- Bind the color, outline and round inputs to an expression -->
  * <button ion-button [color]="myColor2" [outline]="isOutline" [round]="isRound">
  *   Dark (Solid + Round)
  * </button>
  *
  * <!-- Bind the click event to a method -->
  * <button ion-button (click)="logEvent($event)">
  *   Click me!
  * </button>
  * ```
  *
  * ```ts
  * @Component({
  *   templateUrl: 'main.html'
  * })
  * class E2EPage {
  *   isDanger: boolean = true;
  *   isSecondary: boolean = false;
  *   isRound: boolean = true;
  *   isOutline: boolean = false;
  *   isClear: boolean = true;
  *   myColor: string = 'secondary';
  *   myColor2: string = 'dark';
  *
  *   logEvent(event) {
  *     console.log(event)
  *   }
  * }
  *
  * ```
  *
  * @demo /docs/demos/src/button/
  * @see {@link /docs/components#buttons Button Component Docs}
  * @see {@link /docs/components#fabs FabButton Docs}
  * @see {@link ../../fab/FabButton FabButton API Docs}
  * @see {@link ../../fab/FabContainer FabContainer API Docs}
 */
let Button = class Button extends ion_1.Ion {
    constructor(ionButton, config, elementRef, renderer) {
        super(config, elementRef, renderer);
        /** @hidden */
        this._role = 'button'; // bar-button
        /** @hidden */
        this._style = 'default'; // outline/clear/solid
        this._mode = config.get('mode');
        if (config.get('hoverCSS') === false) {
            this.setElementClass('disable-hover', true);
        }
        if (ionButton.trim().length > 0) {
            this.setRole(ionButton);
        }
    }
    /**
     * @input {boolean} If true, activates the large button size.
     */
    set large(val) {
        this._attr('_size', 'large', val);
    }
    /**
     * @input {boolean} If true, activates the small button size.
     */
    set small(val) {
        this._attr('_size', 'small', val);
    }
    /**
     * @input {boolean} If true, activates the default button size. Normally the default, useful for buttons in an item.
     */
    set default(val) {
        this._attr('_size', 'default', val);
    }
    /**
     * @input {boolean} If true, activates a transparent button style with a border.
     */
    set outline(val) {
        this._attr('_style', 'outline', val);
    }
    /**
     * @input {boolean} If true, activates a transparent button style without a border.
     */
    set clear(val) {
        this._attr('_style', 'clear', val);
    }
    /**
     * @input {boolean} If true, activates a solid button style. Normally the default, useful for buttons in a toolbar.
     */
    set solid(val) {
        this._attr('_style', 'solid', val);
    }
    /**
     * @input {boolean} If true, activates a button with rounded corners.
     */
    set round(val) {
        this._attr('_shape', 'round', val);
    }
    /**
     * @input {boolean} If true, activates a button style that fills the available width.
     */
    set block(val) {
        this._attr('_display', 'block', val);
    }
    /**
     * @input {boolean} If true, activates a button style that fills the available width without
     * a left and right border.
     */
    set full(val) {
        this._attr('_display', 'full', val);
    }
    /**
     * @input {boolean} If true, activates a button with a heavier font weight.
     */
    set strong(val) {
        this._attr('_decorator', 'strong', val);
    }
    /**
     * @input {string} The mode determines which platform styles to use.
     * Possible values are: `"ios"`, `"md"`, or `"wp"`.
     * For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
     */
    set mode(val) {
        this._assignCss(false);
        this._mode = val;
        this._assignCss(true);
    }
    /** @hidden */
    _attr(type, attrName, attrValue) {
        if (type === '_style') {
            this._updateColor(this._color, false);
        }
        this._setClass(this[type], false);
        if (util_1.isTrueProperty(attrValue)) {
            this[type] = attrName;
            this._setClass(attrName, true);
        }
        else {
            // Special handling for '_style' which defaults to 'default'.
            this[type] = (type === '_style' ? 'default' : null);
            this._setClass(this[type], true);
        }
        if (type === '_style') {
            this._updateColor(this._color, true);
        }
    }
    /**
     * @input {string} The color to use from your Sass `$colors` map.
     * Default options are: `"primary"`, `"secondary"`, `"danger"`, `"light"`, and `"dark"`.
     * For more information, see [Theming your App](/docs/theming/theming-your-app).
     */
    set color(val) {
        this._updateColor(this._color, false);
        this._updateColor(val, true);
        this._color = val;
    }
    /** @hidden */
    ngAfterContentInit() {
        this._init = true;
        this._assignCss(true);
    }
    /**
     * @hidden
     */
    setRole(val) {
        this._assignCss(false);
        this._role = val;
        this._assignCss(true);
    }
    /**
     * @hidden
     */
    _assignCss(assignCssClass) {
        let role = this._role;
        if (role) {
            this.setElementClass(role, assignCssClass); // button
            this.setElementClass(`${role}-${this._mode}`, assignCssClass); // button
            this._setClass(this._style, assignCssClass); // button-clear
            this._setClass(this._shape, assignCssClass); // button-round
            this._setClass(this._display, assignCssClass); // button-full
            this._setClass(this._size, assignCssClass); // button-small
            this._setClass(this._decorator, assignCssClass); // button-strong
            this._updateColor(this._color, assignCssClass); // button-secondary, bar-button-secondary
        }
    }
    /**
     * @hidden
     */
    _setClass(type, assignCssClass) {
        if (type && this._init) {
            type = type.toLocaleLowerCase();
            this.setElementClass(`${this._role}-${type}`, assignCssClass);
            this.setElementClass(`${this._role}-${type}-${this._mode}`, assignCssClass);
        }
    }
    /**
     * @hidden
     */
    _updateColor(color, isAdd) {
        if (color && this._init) {
            // The class should begin with the button role
            // button, bar-button
            let className = this._role;
            // If the role is not a bar-button, don't apply the solid style
            let style = this._style;
            style = (this._role !== 'bar-button' && style === 'solid' ? 'default' : style);
            className += (style !== null && style !== '' && style !== 'default' ? '-' + style.toLowerCase() : '');
            if (color !== null && color !== '') {
                this.setElementClass(`${className}-${this._mode}-${color}`, isAdd);
            }
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Button.prototype, "large", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Button.prototype, "small", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Button.prototype, "default", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Button.prototype, "outline", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Button.prototype, "clear", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Button.prototype, "solid", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Button.prototype, "round", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Button.prototype, "block", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Button.prototype, "full", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Button.prototype, "strong", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Button.prototype, "mode", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Button.prototype, "color", null);
Button = __decorate([
    core_1.Component({
        selector: '[ion-button]',
        template: '<span class="button-inner">' +
            '<ng-content></ng-content>' +
            '</span>' +
            '<div class="button-effect"></div>',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __param(0, core_1.Attribute('ion-button')),
    __metadata("design:paramtypes", [String, config_1.Config,
        core_1.ElementRef,
        core_1.Renderer])
], Button);
exports.Button = Button;
//# sourceMappingURL=button.js.map
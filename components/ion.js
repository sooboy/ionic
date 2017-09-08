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
/**
 * Base class for all Ionic components. Exposes some common functionality
 * that all Ionic components need, such as accessing underlying native elements and
 * sending/receiving app-level events.
 */
/** @hidden */
class Ion {
    constructor(config, elementRef, renderer, componentName) {
        this._config = config;
        this._elementRef = elementRef;
        this._renderer = renderer;
        this._componentName = componentName;
        if (componentName) {
            this._setComponentName();
            this._setMode(config.get('mode'));
        }
    }
    /**
     * @input {string} The color to use from your Sass `$colors` map.
     * Default options are: `"primary"`, `"secondary"`, `"danger"`, `"light"`, and `"dark"`.
     * For more information, see [Theming your App](/docs/theming/theming-your-app).
     */
    set color(val) {
        this._setColor(val);
    }
    get color() {
        return this._color;
    }
    /**
     * @input {string} The mode determines which platform styles to use.
     * Possible values are: `"ios"`, `"md"`, or `"wp"`.
     * For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
     */
    set mode(val) {
        this._setMode(val);
    }
    get mode() {
        return this._mode;
    }
    /** @hidden */
    setElementClass(className, isAdd) {
        this._renderer.setElementClass(this._elementRef.nativeElement, className, isAdd);
    }
    /** @hidden */
    setElementAttribute(attributeName, attributeValue) {
        this._renderer.setElementAttribute(this._elementRef.nativeElement, attributeName, attributeValue);
    }
    /** @hidden */
    setElementStyle(property, value) {
        this._renderer.setElementStyle(this._elementRef.nativeElement, property, value);
    }
    /** @hidden */
    _setColor(newColor, componentName) {
        if (componentName) {
            // This is needed for the item-radio
            this._componentName = componentName;
        }
        if (this._color) {
            this.setElementClass(`${this._componentName}-${this._mode}-${this._color}`, false);
        }
        if (newColor) {
            this.setElementClass(`${this._componentName}-${this._mode}-${newColor}`, true);
            this._color = newColor;
        }
    }
    /** @hidden */
    _setMode(newMode) {
        if (this._mode) {
            this.setElementClass(`${this._componentName}-${this._mode}`, false);
        }
        if (newMode) {
            this.setElementClass(`${this._componentName}-${newMode}`, true);
            // Remove the color class associated with the previous mode,
            // change the mode, then add the new color class
            this._setColor(null);
            this._mode = newMode;
            this._setColor(this._color);
        }
    }
    /** @hidden */
    _setComponentName() {
        this.setElementClass(this._componentName, true);
    }
    /** @hidden */
    getElementRef() {
        return this._elementRef;
    }
    /** @hidden */
    getNativeElement() {
        return this._elementRef.nativeElement;
    }
}
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Ion.prototype, "color", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Ion.prototype, "mode", null);
exports.Ion = Ion;
//# sourceMappingURL=ion.js.map
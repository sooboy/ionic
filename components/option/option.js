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
/**
 * @name Option
 * @description
 * `ion-option` is a child component of `ion-select`. Similar to the native option element, `ion-option` can take a value and a selected property.
 *
 * @demo /docs/demos/src/select/
 */
let Option = class Option {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this._selected = false;
        this._disabled = false;
        /**
         * @output {any} Event to evaluate when option is selected.
         */
        this.ionSelect = new core_1.EventEmitter();
    }
    /**
     * @input {boolean} If true, the user cannot interact with this element.
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(val) {
        this._disabled = util_1.isTrueProperty(val);
    }
    /**
     * @input {boolean} If true, the element is selected.
     */
    get selected() {
        return this._selected;
    }
    set selected(val) {
        this._selected = util_1.isTrueProperty(val);
    }
    /**
     * @input {any} The value of the option.
     */
    get value() {
        if (util_1.isPresent(this._value)) {
            return this._value;
        }
        return this.text;
    }
    set value(val) {
        this._value = val;
    }
    /**
     * @hidden
     */
    get text() {
        return this._elementRef.nativeElement.textContent;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Option.prototype, "disabled", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Option.prototype, "selected", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Option.prototype, "value", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Option.prototype, "ionSelect", void 0);
Option = __decorate([
    core_1.Directive({
        selector: 'ion-option'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], Option);
exports.Option = Option;
//# sourceMappingURL=option.js.map
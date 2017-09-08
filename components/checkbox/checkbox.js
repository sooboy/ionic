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
const forms_1 = require("@angular/forms");
const config_1 = require("../../config/config");
const util_1 = require("../../util/util");
const form_1 = require("../../util/form");
const base_input_1 = require("../../util/base-input");
const item_1 = require("../item/item");
/**
 * @name Checkbox
 * @module ionic
 *
 * @description
 * The Checkbox is a simple component styled based on the mode. It can be
 * placed in an `ion-item` or used as a stand-alone checkbox.
 *
 * See the [Angular Docs](https://angular.io/docs/ts/latest/guide/forms.html)
 * for more info on forms and inputs.
 *
 *
 * @usage
 * ```html
 *
 *  <ion-list>
 *
 *    <ion-item>
 *      <ion-label>Pepperoni</ion-label>
 *      <ion-checkbox [(ngModel)]="pepperoni"></ion-checkbox>
 *    </ion-item>
 *
 *    <ion-item>
 *      <ion-label>Sausage</ion-label>
 *      <ion-checkbox [(ngModel)]="sausage" disabled="true"></ion-checkbox>
 *    </ion-item>
 *
 *    <ion-item>
 *      <ion-label>Mushrooms</ion-label>
 *      <ion-checkbox [(ngModel)]="mushrooms"></ion-checkbox>
 *    </ion-item>
 *
 *  </ion-list>
 * ```
 *
 * @advanced
 *
 * ```html
 *
 * <!-- Call function when state changes -->
 *  <ion-list>
 *
 *    <ion-item>
 *      <ion-label>Cucumber</ion-label>
 *      <ion-checkbox [(ngModel)]="cucumber" (ionChange)="updateCucumber()"></ion-checkbox>
 *    </ion-item>
 *
 *  </ion-list>
 * ```
 *
 * ```ts
 * @Component({
 *   templateUrl: 'main.html'
 * })
 * class SaladPage {
 *   cucumber: boolean;
 *
 *   updateCucumber() {
 *     console.log('Cucumbers new state:' + this.cucumber);
 *   }
 * }
 * ```
 *
 * @demo /docs/demos/src/checkbox/
 * @see {@link /docs/components#checkbox Checkbox Component Docs}
 */
let Checkbox = Checkbox_1 = class Checkbox extends base_input_1.BaseInput {
    constructor(config, form, item, elementRef, renderer) {
        super(config, elementRef, renderer, 'checkbox', false, form, item, null);
    }
    /**
     * @input {boolean} If true, the element is selected.
     */
    get checked() {
        return this.value;
    }
    set checked(val) {
        this.value = val;
    }
    /**
     * @hidden
     */
    _click(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.value = !this.value;
    }
    /**
     * @hidden
     */
    _inputNormalize(val) {
        return util_1.isTrueProperty(val);
    }
    /**
     * @hidden
     */
    _inputUpdated() {
        this._item && this._item.setElementClass('item-checkbox-checked', this._value);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Checkbox.prototype, "checked", null);
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UIEvent]),
    __metadata("design:returntype", void 0)
], Checkbox.prototype, "_click", null);
Checkbox = Checkbox_1 = __decorate([
    core_1.Component({
        selector: 'ion-checkbox',
        template: '<div class="checkbox-icon" [class.checkbox-checked]="_value">' +
            '<div class="checkbox-inner"></div>' +
            '</div>' +
            '<button role="checkbox" ' +
            'type="button" ' +
            'ion-button="item-cover" ' +
            '[id]="id" ' +
            '[attr.aria-checked]="_value" ' +
            '[attr.aria-labelledby]="_labelId" ' +
            '[attr.aria-disabled]="_disabled" ' +
            'class="item-cover"> ' +
            '</button>',
        host: {
            '[class.checkbox-disabled]': '_disabled'
        },
        providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: Checkbox_1, multi: true }],
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __param(2, core_1.Optional()),
    __metadata("design:paramtypes", [config_1.Config,
        form_1.Form,
        item_1.Item,
        core_1.ElementRef,
        core_1.Renderer])
], Checkbox);
exports.Checkbox = Checkbox;
var Checkbox_1;
//# sourceMappingURL=checkbox.js.map
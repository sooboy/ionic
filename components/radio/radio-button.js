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
const form_1 = require("../../util/form");
const ion_1 = require("../ion");
const util_1 = require("../../util/util");
const item_1 = require("../item/item");
const radio_group_1 = require("./radio-group");
/**
 * @description
 * A radio button is a button that can be either checked or unchecked. A user can tap
 * the button to check or uncheck it. It can also be checked from the template using
 * the `checked` property.
 *
 * Use an element with a `radio-group` attribute to group a set of radio buttons. When
 * radio buttons are inside a [radio group](../RadioGroup), exactly one radio button
 * in the group can be checked at any time. If a radio button is not placed in a group,
 * they will all have the ability to be checked at the same time.
 *
 * See the [Angular Forms Docs](https://angular.io/docs/ts/latest/guide/forms.html) for
 * more information on forms and input.
 *
 * @usage
 * ```html
 * <ion-list radio-group [(ngModel)]="relationship">
 *   <ion-item>
 *     <ion-label>Friends</ion-label>
 *     <ion-radio value="friends" checked></ion-radio>
 *   </ion-item>
 *   <ion-item>
 *     <ion-label>Family</ion-label>
 *     <ion-radio value="family"></ion-radio>
 *   </ion-item>
 *   <ion-item>
 *     <ion-label>Enemies</ion-label>
 *     <ion-radio value="enemies" [disabled]="isDisabled"></ion-radio>
 *   </ion-item>
 * </ion-list>
 * ```
 * @demo /docs/demos/src/radio/
 * @see {@link /docs/components#radio Radio Component Docs}
 * @see {@link ../RadioGroup RadioGroup API Docs}
 */
let RadioButton = class RadioButton extends ion_1.Ion {
    constructor(_form, config, elementRef, renderer, _item, _group) {
        super(config, elementRef, renderer, 'radio');
        this._form = _form;
        this._item = _item;
        this._group = _group;
        /**
         * @internal
         */
        this._checked = false;
        /**
         * @internal
         */
        this._disabled = false;
        /**
         * @internal
         */
        this._value = null;
        /**
         * @output {any} Emitted when the radio button is selected.
         */
        this.ionSelect = new core_1.EventEmitter();
        _form.register(this);
        if (_group) {
            // register with the radiogroup
            this.id = 'rb-' + _group.add(this);
        }
        if (_item) {
            // register the input inside of the item
            // reset to the item's id instead of the radiogroup id
            this.id = 'rb-' + _item.registerInput('radio');
            this._labelId = 'lbl-' + _item.id;
            this._item.setElementClass('item-radio', true);
        }
    }
    /**
     * @input {string} The color to use from your Sass `$colors` map.
     * Default options are: `"primary"`, `"secondary"`, `"danger"`, `"light"`, and `"dark"`.
     * For more information, see [Theming your App](/docs/theming/theming-your-app).
     */
    set color(val) {
        this._setColor(val);
        if (this._item) {
            this._item._updateColor(val, 'item-radio');
        }
    }
    /**
     * @input {any} The value of the radio button. Defaults to the generated id.
     */
    get value() {
        // if the value is not defined then use it's unique id
        return util_1.isBlank(this._value) ? this.id : this._value;
    }
    set value(val) {
        this._value = val;
    }
    /**
     * @input {boolean} If true, the element is selected, and other buttons in the group are unselected.
     */
    get checked() {
        return this._checked;
    }
    set checked(val) {
        this._checked = util_1.isTrueProperty(val);
        if (this._item) {
            this._item.setElementClass('item-radio-checked', this._checked);
        }
    }
    /**
     * @input {boolean} If true, the user cannot interact with this element.
     */
    get disabled() {
        return this._disabled || (this._group != null && this._group.disabled);
    }
    set disabled(val) {
        this._disabled = util_1.isTrueProperty(val);
        this._item && this._item.setElementClass('item-radio-disabled', this._disabled);
    }
    /**
     * @hidden
     */
    initFocus() {
        this._elementRef.nativeElement.querySelector('button').focus();
    }
    /**
     * @internal
     */
    _click(ev) {
        console.debug('radio, select', this.id);
        ev.preventDefault();
        ev.stopPropagation();
        this.checked = true;
        this.ionSelect.emit(this.value);
    }
    /**
     * @internal
     */
    ngOnInit() {
        if (this._group && util_1.isPresent(this._group.value)) {
            this.checked = util_1.isCheckedProperty(this._group.value, this.value);
        }
        if (this._group && this._group.disabled) {
            this.disabled = this._group.disabled;
        }
    }
    /**
     * @internal
     */
    ngOnDestroy() {
        this._form.deregister(this);
        this._group && this._group.remove(this);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], RadioButton.prototype, "color", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RadioButton.prototype, "ionSelect", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], RadioButton.prototype, "value", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], RadioButton.prototype, "checked", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], RadioButton.prototype, "disabled", null);
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UIEvent]),
    __metadata("design:returntype", void 0)
], RadioButton.prototype, "_click", null);
RadioButton = __decorate([
    core_1.Component({
        selector: 'ion-radio',
        template: '<div class="radio-icon" [class.radio-checked]="_checked"> ' +
            '<div class="radio-inner"></div> ' +
            '</div> ' +
            '<button role="radio" ' +
            'type="button" ' +
            'ion-button="item-cover" ' +
            '[id]="id" ' +
            '[attr.aria-checked]="_checked" ' +
            '[attr.aria-labelledby]="_labelId" ' +
            '[attr.aria-disabled]="_disabled" ' +
            'class="item-cover"> ' +
            '</button>',
        host: {
            '[class.radio-disabled]': '_disabled'
        },
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __param(4, core_1.Optional()),
    __param(5, core_1.Optional()),
    __metadata("design:paramtypes", [form_1.Form,
        config_1.Config,
        core_1.ElementRef,
        core_1.Renderer,
        item_1.Item,
        radio_group_1.RadioGroup])
], RadioButton);
exports.RadioButton = RadioButton;
//# sourceMappingURL=radio-button.js.map
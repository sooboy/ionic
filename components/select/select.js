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
const action_sheet_1 = require("../action-sheet/action-sheet");
const alert_1 = require("../alert/alert");
const popover_1 = require("../popover/popover");
const app_1 = require("../app/app");
const config_1 = require("../../config/config");
const deep_linker_1 = require("../../navigation/deep-linker");
const form_1 = require("../../util/form");
const base_input_1 = require("../../util/base-input");
const util_1 = require("../../util/util");
const item_1 = require("../item/item");
const option_1 = require("../option/option");
const select_popover_component_1 = require("./select-popover-component");
/**
 * @name Select
 * @description
 * The `ion-select` component is similar to an HTML `<select>` element, however,
 * Ionic's select component makes it easier for users to sort through and select
 * the preferred option or options. When users tap the select component, a
 * dialog will appear with all of the options in a large, easy to select list
 * for users.
 *
 * The select component takes child `ion-option` components. If `ion-option` is not
 * given a `value` attribute then it will use its text as the value.
 *
 * If `ngModel` is bound to `ion-select`, the selected value will be based on the
 * bound value of the model. Otherwise, the `selected` attribute can be used on
 * `ion-option` components.
 *
 * ### Interfaces
 *
 * By default, the `ion-select` uses the {@link ../../alert/AlertController AlertController API}
 * to open up the overlay of options in an alert. The interface can be changed to use the
 * {@link ../../action-sheet/ActionSheetController ActionSheetController API} or
 * {@link ../../popover/PopoverController PopoverController API} by passing `action-sheet` or `popover`,
 * respectively, to the `interface` property. Read on to the other sections for the limitations
 * of the different interfaces.
 *
 * ### Single Value: Radio Buttons
 *
 * The standard `ion-select` component allows the user to select only one
 * option. When selecting only one option the alert interface presents users with
 * a radio button styled list of options. The action sheet interface can only be
 * used with a single value select. If the number of options exceed 6, it will
 * use the `alert` interface even if `action-sheet` is passed. The `ion-select`
 * component's value receives the value of the selected option's value.
 *
 * ```html
 * <ion-item>
 *   <ion-label>Gender</ion-label>
 *   <ion-select [(ngModel)]="gender">
 *     <ion-option value="f">Female</ion-option>
 *     <ion-option value="m">Male</ion-option>
 *   </ion-select>
 * </ion-item>
 * ```
 *
 * ### Multiple Value: Checkboxes
 *
 * By adding the `multiple="true"` attribute to `ion-select`, users are able
 * to select multiple options. When multiple options can be selected, the alert
 * overlay presents users with a checkbox styled list of options. The
 * `ion-select multiple="true"` component's value receives an array of all the
 * selected option values. In the example below, because each option is not given
 * a `value`, then it'll use its text as the value instead.
 *
 * Note: the `action-sheet` and `popover` interfaces will not work with a multi-value select.
 *
 * ```html
 * <ion-item>
 *   <ion-label>Toppings</ion-label>
 *   <ion-select [(ngModel)]="toppings" multiple="true">
 *     <ion-option>Bacon</ion-option>
 *     <ion-option>Black Olives</ion-option>
 *     <ion-option>Extra Cheese</ion-option>
 *     <ion-option>Mushrooms</ion-option>
 *     <ion-option>Pepperoni</ion-option>
 *     <ion-option>Sausage</ion-option>
 *   </ion-select>
 * </ion-item>
 * ```
 *
 * ### Select Buttons
 * By default, the two buttons read `Cancel` and `OK`. Each button's text
 * can be customized using the `cancelText` and `okText` attributes:
 *
 * ```html
 * <ion-select okText="Okay" cancelText="Dismiss">
 *   ...
 * </ion-select>
 * ```
 *
 * The `action-sheet` and `popover` interfaces do not have an `OK` button, clicking
 * on any of the options will automatically close the overlay and select
 * that value.
 *
 * ### Select Options
 *
 * Since `ion-select` uses the `Alert`, `Action Sheet` and `Popover` interfaces, options can be
 * passed to these components through the `selectOptions` property. This can be used
 * to pass a custom title, subtitle, css class, and more. See the
 * {@link ../../alert/AlertController/#create AlertController API docs},
 * {@link ../../action-sheet/ActionSheetController/#create ActionSheetController API docs}, and
 * {@link ../../popover/PopoverController/#create PopoverController API docs}
 * for the properties that each interface accepts.
 *
 * For example, to change the `mode` of the overlay, pass it into `selectOptions`.
 *
 * ```html
 * <ion-select [selectOptions]="selectOptions">
 *   ...
 * </ion-select>
 * ```
 *
 * ```ts
 * this.selectOptions = {
 *   title: 'Pizza Toppings',
 *   subTitle: 'Select your toppings',
 *   mode: 'md'
 * };
 * ```
 *
 * ### Object Value References
 *
 * When using objects for select values, it is possible for the identities of these objects to
 * change if they are coming from a server or database, while the selected value's identity
 * remains the same. For example, this can occur when an existing record with the desired object value
 * is loaded into the select, but the newly retrieved select options now have different identities. This will
 * result in the select appearing to have no value at all, even though the original selection in still intact.
 *
 * Using the `compareWith` `Input` is the solution to this problem
 *
 * ```html
 * <ion-item>
 *   <ion-label>Employee</ion-label>
 *   <ion-select [(ngModel)]="employee" [compareWith]="compareFn">
 *     <ion-option *ngFor="let employee of employees" [value]="employee">{{employee.name}}</ion-option>
 *   </ion-select>
 * </ion-item>
 * ```
 *
 * ```ts
 * compareFn(e1: Employee, e2: Employee): boolean {
 *   return e1 && e2 ? e1.id === e2.id : e1 === e2;
 * }
 * ```
 *
 * @demo /docs/demos/src/select/
 */
let Select = Select_1 = class Select extends base_input_1.BaseInput {
    constructor(_app, form, config, elementRef, renderer, item, deepLinker) {
        super(config, elementRef, renderer, 'select', [], form, item, null);
        this._app = _app;
        this.config = config;
        this.deepLinker = deepLinker;
        this._multi = false;
        this._texts = [];
        this._text = '';
        this._compareWith = util_1.isCheckedProperty;
        /**
         * @input {string} The text to display on the cancel button. Default: `Cancel`.
         */
        this.cancelText = 'Cancel';
        /**
         * @input {string} The text to display on the ok button. Default: `OK`.
         */
        this.okText = 'OK';
        /**
         * @input {any} Any additional options that the `alert` or `action-sheet` interface can take.
         * See the [AlertController API docs](../../alert/AlertController/#create) and the
         * [ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) for the
         * create options for each interface.
         */
        this.selectOptions = {};
        /**
         * @input {string} The interface the select should use: `action-sheet`, `popover` or `alert`. Default: `alert`.
         */
        this.interface = '';
        /**
         * @input {string} The text to display instead of the selected option's value.
         */
        this.selectedText = '';
        /**
         * @output {any} Emitted when the selection was cancelled.
         */
        this.ionCancel = new core_1.EventEmitter();
    }
    /**
     * @input {Function} The function that will be called to compare object values
     */
    set compareWith(fn) {
        if (typeof fn !== 'function') {
            throw new Error(`compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
    }
    _click(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.open(ev);
    }
    _keyup() {
        this.open();
    }
    /**
     * @hidden
     */
    getValues() {
        const values = Array.isArray(this._value) ? this._value : [this._value];
        util_1.assert(this._multi || values.length <= 1, 'single only can have one value');
        return values;
    }
    /**
     * Open the select interface.
     */
    open(ev) {
        if (this.isFocus() || this._disabled) {
            return;
        }
        console.debug('select, open alert');
        // the user may have assigned some options specifically for the alert
        const selectOptions = util_1.deepCopy(this.selectOptions);
        // make sure their buttons array is removed from the options
        // and we create a new array for the alert's two buttons
        selectOptions.buttons = [{
                text: this.cancelText,
                role: 'cancel',
                handler: () => {
                    this.ionCancel.emit(this);
                }
            }];
        // if the selectOptions didn't provide a title then use the label's text
        if (!selectOptions.title && this._item) {
            selectOptions.title = this._item.getLabelText();
        }
        let options = this._options.toArray();
        if (this.interface === 'action-sheet' && options.length > 6) {
            console.warn('Interface cannot be "action-sheet" with more than 6 options. Using the "alert" interface.');
            this.interface = 'alert';
        }
        if ((this.interface === 'action-sheet' || this.interface === 'popover') && this._multi) {
            console.warn('Interface cannot be "' + this.interface + '" with a multi-value select. Using the "alert" interface.');
            this.interface = 'alert';
        }
        if (this.interface === 'popover' && !ev) {
            console.warn('Interface cannot be "popover" without UIEvent.');
            this.interface = 'alert';
        }
        let overlay;
        if (this.interface === 'action-sheet') {
            selectOptions.buttons = selectOptions.buttons.concat(options.map(input => {
                return {
                    role: (input.selected ? 'selected' : ''),
                    text: input.text,
                    handler: () => {
                        this.value = input.value;
                        input.ionSelect.emit(input.value);
                    }
                };
            }));
            var selectCssClass = 'select-action-sheet';
            // If the user passed a cssClass for the select, add it
            selectCssClass += selectOptions.cssClass ? ' ' + selectOptions.cssClass : '';
            selectOptions.cssClass = selectCssClass;
            overlay = new action_sheet_1.ActionSheet(this._app, selectOptions, this.config);
        }
        else if (this.interface === 'popover') {
            let popoverOptions = options.map(input => ({
                text: input.text,
                checked: input.selected,
                disabled: input.disabled,
                value: input.value,
                handler: () => {
                    this.value = input.value;
                    input.ionSelect.emit(input.value);
                }
            }));
            var popoverCssClass = 'select-popover';
            // If the user passed a cssClass for the select, add it
            popoverCssClass += selectOptions.cssClass ? ' ' + selectOptions.cssClass : '';
            overlay = new popover_1.Popover(this._app, select_popover_component_1.SelectPopover, {
                options: popoverOptions
            }, {
                cssClass: popoverCssClass
            }, this.config, this.deepLinker);
            // ev.target is readonly.
            // place popover regarding to ion-select instead of .button-inner
            Object.defineProperty(ev, 'target', { value: ev.currentTarget });
            selectOptions.ev = ev;
        }
        else {
            // default to use the alert interface
            this.interface = 'alert';
            // user cannot provide inputs from selectOptions
            // alert inputs must be created by ionic from ion-options
            selectOptions.inputs = this._options.map(input => {
                return {
                    type: (this._multi ? 'checkbox' : 'radio'),
                    label: input.text,
                    value: input.value,
                    checked: input.selected,
                    disabled: input.disabled,
                    handler: (selectedOption) => {
                        // Only emit the select event if it is being checked
                        // For multi selects this won't emit when unchecking
                        if (selectedOption.checked) {
                            input.ionSelect.emit(input.value);
                        }
                    }
                };
            });
            let selectCssClass = 'select-alert';
            // create the alert instance from our built up selectOptions
            overlay = new alert_1.Alert(this._app, selectOptions, this.config);
            if (this._multi) {
                // use checkboxes
                selectCssClass += ' multiple-select-alert';
            }
            else {
                // use radio buttons
                selectCssClass += ' single-select-alert';
            }
            // If the user passed a cssClass for the select, add it
            selectCssClass += selectOptions.cssClass ? ' ' + selectOptions.cssClass : '';
            overlay.setCssClass(selectCssClass);
            overlay.addButton({
                text: this.okText,
                handler: (selectedValues) => this.value = selectedValues
            });
        }
        overlay.present(selectOptions);
        this._fireFocus();
        overlay.onDidDismiss(() => {
            this._fireBlur();
            this._overlay = undefined;
        });
        this._overlay = overlay;
    }
    /**
     * Close the select interface.
     */
    close() {
        if (!this._overlay || !this.isFocus()) {
            return;
        }
        return this._overlay.dismiss();
    }
    /**
     * @input {boolean} If true, the element can accept multiple values.
     */
    get multiple() {
        return this._multi;
    }
    set multiple(val) {
        this._multi = util_1.isTrueProperty(val);
    }
    /**
     * @hidden
     */
    get text() {
        return (this._multi ? this._texts : this._texts.join());
    }
    /**
     * @private
     */
    set options(val) {
        this._options = val;
        const values = this.getValues();
        if (values.length === 0) {
            // there are no values set at this point
            // so check to see who should be selected
            // we use writeValue() because we don't want to update ngModel
            this.writeValue(val.filter(o => o.selected).map(o => o.value));
        }
        else {
            this._updateText();
        }
    }
    _inputShouldChange(val) {
        return !util_1.deepEqual(this._value, val);
    }
    /**
     * TODO: REMOVE THIS
     * @hidden
     */
    _inputChangeEvent() {
        return this.value;
    }
    /**
     * @hidden
     */
    _updateText() {
        this._texts.length = 0;
        if (this._options) {
            this._options.forEach(option => {
                // check this option if the option's value is in the values array
                option.selected = this.getValues().some(selectValue => {
                    return this._compareWith(selectValue, option.value);
                });
                if (option.selected) {
                    this._texts.push(option.text);
                }
            });
        }
        this._text = this._texts.join(', ');
    }
    /**
     * @hidden
     */
    _inputUpdated() {
        this._updateText();
        super._inputUpdated();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Select.prototype, "cancelText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Select.prototype, "okText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Select.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Select.prototype, "selectOptions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Select.prototype, "interface", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Select.prototype, "selectedText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function])
], Select.prototype, "compareWith", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Select.prototype, "ionCancel", void 0);
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UIEvent]),
    __metadata("design:returntype", void 0)
], Select.prototype, "_click", null);
__decorate([
    core_1.HostListener('keyup.space'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Select.prototype, "_keyup", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Select.prototype, "multiple", null);
__decorate([
    core_1.ContentChildren(option_1.Option),
    __metadata("design:type", core_1.QueryList),
    __metadata("design:paramtypes", [core_1.QueryList])
], Select.prototype, "options", null);
Select = Select_1 = __decorate([
    core_1.Component({
        selector: 'ion-select',
        template: '<div *ngIf="!_text" class="select-placeholder select-text">{{placeholder}}</div>' +
            '<div *ngIf="_text" class="select-text">{{selectedText || _text}}</div>' +
            '<div class="select-icon">' +
            '<div class="select-icon-inner"></div>' +
            '</div>' +
            '<button aria-haspopup="true" ' +
            'type="button" ' +
            '[id]="id" ' +
            'ion-button="item-cover" ' +
            '[attr.aria-labelledby]="_labelId" ' +
            '[attr.aria-disabled]="_disabled" ' +
            'class="item-cover">' +
            '</button>',
        host: {
            '[class.select-disabled]': '_disabled'
        },
        providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: Select_1, multi: true }],
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __param(5, core_1.Optional()),
    __metadata("design:paramtypes", [app_1.App,
        form_1.Form,
        config_1.Config,
        core_1.ElementRef,
        core_1.Renderer,
        item_1.Item,
        deep_linker_1.DeepLinker])
], Select);
exports.Select = Select;
var Select_1;
//# sourceMappingURL=select.js.map
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
const forms_1 = require("@angular/forms");
const list_header_1 = require("../list/list-header");
const util_1 = require("../../util/util");
/**
 * @name RadioGroup
 * @description
 * A radio group is a group of [radio buttons](../RadioButton). It allows
 * a user to select at most one radio button from a set. Checking one radio
 * button that belongs to a radio group unchecks any previous checked
 * radio button within the same group.
 *
 * See the [Angular Forms Docs](https://angular.io/docs/ts/latest/guide/forms.html)
 * for more information on forms and inputs.
 *
 * @usage
 * ```html
 * <ion-list radio-group [(ngModel)]="autoManufacturers">
 *
 *   <ion-list-header>
 *     Auto Manufacturers
 *   </ion-list-header>
 *
 *   <ion-item>
 *     <ion-label>Cord</ion-label>
 *     <ion-radio value="cord"></ion-radio>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-label>Duesenberg</ion-label>
 *     <ion-radio value="duesenberg"></ion-radio>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-label>Hudson</ion-label>
 *     <ion-radio value="hudson"></ion-radio>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-label>Packard</ion-label>
 *     <ion-radio value="packard"></ion-radio>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-label>Studebaker</ion-label>
 *     <ion-radio value="studebaker"></ion-radio>
 *   </ion-item>
 *
 * </ion-list>
 * ```
 *
 * @demo /docs/demos/src/radio/
 * @see {@link /docs/components#radio Radio Component Docs}
 * @see {@link ../RadioButton RadioButton API Docs}
*/
let RadioGroup = RadioGroup_1 = class RadioGroup {
    constructor(_renderer, _elementRef, _cd) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._cd = _cd;
        /**
         * @internal
         */
        this._disabled = false;
        /**
         * @hidden
         */
        this._btns = [];
        /**
         * @hidden
         */
        this._ids = -1;
        /**
         * @hidden
         */
        this._init = false;
        /**
         * @output {any} Emitted when the selected button has changed.
         */
        this.ionChange = new core_1.EventEmitter();
        this.id = ++radioGroupIds;
    }
    /**
     * @input {boolean} If true, the user cannot interact with any of the buttons in the group.
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(val) {
        this._disabled = util_1.isTrueProperty(val);
    }
    /**
     * @hidden
     */
    ngAfterContentInit() {
        let activeButton = this._btns.find(b => b.checked);
        if (activeButton) {
            this._setActive(activeButton);
        }
    }
    /**
     * @hidden
     */
    writeValue(val) {
        console.debug('radio group, writeValue', val);
        this.value = val;
        if (this._init) {
            this._update();
            this.onTouched();
            this.ionChange.emit(val);
        }
        this._init = true;
    }
    /**
     * @hidden
     */
    registerOnChange(fn) {
        this._fn = fn;
        this.onChange = (val) => {
            // onChange used when there's an formControlName
            console.debug('radio group, onChange', val);
            fn(val);
            this.value = val;
            this._update();
            this.onTouched();
            this.ionChange.emit(val);
        };
    }
    /**
     * @hidden
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * @hidden
     */
    _update() {
        // loop through each of the radiobuttons
        let hasChecked = false;
        this._btns.forEach(radioButton => {
            // check this radiobutton if its value is
            // the same as the radiogroups value
            radioButton.checked = util_1.isCheckedProperty(this.value, radioButton.value) && !hasChecked;
            if (radioButton.checked) {
                // if this button is checked, then set it as
                // the radiogroup's active descendant
                this._setActive(radioButton);
                hasChecked = true;
            }
        });
    }
    /**
     * @hidden
     */
    _setActive(radioButton) {
        this._renderer.setElementAttribute(this._elementRef.nativeElement, 'aria-activedescendant', radioButton.id);
    }
    /**
     * @hidden
     */
    add(button) {
        this._btns.push(button);
        // listen for radiobutton select events
        button.ionSelect.subscribe((val) => {
            // this radiobutton has been selected
            this.onChange(val);
        });
        return this.id + '-' + (++this._ids);
    }
    /**
     * @hidden
     */
    remove(button) {
        let index = this._btns.indexOf(button);
        if (index > -1) {
            if (button.value === this.value) {
                this.value = null;
            }
            this._btns.splice(index, 1);
        }
    }
    /**
     * @hidden
     */
    set _header(header) {
        if (header) {
            if (!header.id) {
                header.id = 'rg-hdr-' + this.id;
            }
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'aria-describedby', header.id);
        }
    }
    /**
     * @hidden
     */
    onChange(val) {
        // onChange used when there is not an formControlName
        console.debug('radio group, onChange w/out formControlName', val);
        this.value = val;
        this._update();
        this.onTouched();
        this.ionChange.emit(val);
        this._cd.detectChanges();
    }
    /**
     * @hidden
     */
    onTouched() { }
    /**
     * @hidden
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], RadioGroup.prototype, "disabled", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RadioGroup.prototype, "ionChange", void 0);
__decorate([
    core_1.ContentChild(list_header_1.ListHeader),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], RadioGroup.prototype, "_header", null);
RadioGroup = RadioGroup_1 = __decorate([
    core_1.Directive({
        selector: '[radio-group]',
        host: {
            'role': 'radiogroup'
        },
        providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: RadioGroup_1, multi: true }],
    }),
    __metadata("design:paramtypes", [core_1.Renderer,
        core_1.ElementRef,
        core_1.ChangeDetectorRef])
], RadioGroup);
exports.RadioGroup = RadioGroup;
let radioGroupIds = -1;
var RadioGroup_1;
//# sourceMappingURL=radio-group.js.map
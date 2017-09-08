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
const util_1 = require("./util");
const ion_1 = require("../components/ion");
const debouncer_1 = require("./debouncer");
class BaseInput extends ion_1.Ion {
    constructor(config, elementRef, renderer, name, _defaultValue, _form, _item, _ngControl) {
        super(config, elementRef, renderer, name);
        this._defaultValue = _defaultValue;
        this._form = _form;
        this._item = _item;
        this._ngControl = _ngControl;
        this._isFocus = false;
        this._disabled = false;
        this._debouncer = new debouncer_1.TimeoutDebouncer(0);
        this._init = false;
        this._initModel = false;
        /**
         * @output {Range} Emitted when the range selector drag starts.
         */
        this.ionFocus = new core_1.EventEmitter();
        /**
         * @output {Range} Emitted when the range value changes.
         */
        this.ionChange = new core_1.EventEmitter();
        /**
         * @output {Range} Emitted when the range selector drag ends.
         */
        this.ionBlur = new core_1.EventEmitter();
        _form && _form.register(this);
        this._value = util_1.deepCopy(this._defaultValue);
        if (_item) {
            util_1.assert('lbl-' + _item.id === _item.labelId, 'labelId was not calculated correctly');
            this.id = name + '-' + _item.registerInput(name);
            this._labelId = _item.labelId;
            this._item.setElementClass('item-' + name, true);
        }
        // If the user passed a ngControl we need to set the valueAccessor
        if (_ngControl) {
            _ngControl.valueAccessor = this;
        }
    }
    /**
     * @input {boolean} If true, the user cannot interact with this element.
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(val) {
        this.setDisabledState(val);
    }
    get value() {
        return this._value;
    }
    set value(val) {
        if (this._writeValue(val)) {
            this.onChange();
            this._fireIonChange();
        }
    }
    // 1. Updates the value
    // 2. Calls _inputUpdated()
    // 3. Dispatch onChange events
    setValue(val) {
        this.value = val;
    }
    /**
     * @hidden
     */
    setDisabledState(isDisabled) {
        this._disabled = isDisabled = util_1.isTrueProperty(isDisabled);
        this._item && this._item.setElementClass(`item-${this._componentName}-disabled`, isDisabled);
    }
    /**
     * @hidden
     */
    writeValue(val) {
        if (this._writeValue(val)) {
            if (this._initModel) {
                this._fireIonChange();
            }
            else if (this._init) {
                // ngModel fires the first time too late, we need to skip the first ngModel update
                this._initModel = true;
            }
        }
    }
    /**
     * @hidden
     */
    _writeValue(val) {
        util_1.assert(core_1.NgZone.isInAngularZone(), 'callback should be zoned');
        if (util_1.isUndefined(val)) {
            return false;
        }
        const normalized = (val === null)
            ? util_1.deepCopy(this._defaultValue)
            : this._inputNormalize(val);
        const notUpdate = util_1.isUndefined(normalized) || !this._inputShouldChange(normalized);
        if (notUpdate) {
            return false;
        }
        console.debug('BaseInput: value changed:', normalized, this);
        this._value = normalized;
        if (this._init) {
            this._inputUpdated();
        }
        return true;
    }
    /**
     * @hidden
     */
    _fireIonChange() {
        if (this._init) {
            this._debouncer.debounce(() => {
                util_1.assert(core_1.NgZone.isInAngularZone(), 'IonChange: should be zoned');
                this.ionChange.emit(this._inputChangeEvent());
                this._initModel = true;
            });
        }
    }
    /**
     * @hidden
     */
    registerOnChange(fn) {
        this._onChanged = fn;
    }
    /**
     * @hidden
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @hidden
     */
    _initialize() {
        if (this._init) {
            util_1.assert(false, 'input was already initilized');
            return;
        }
        this._init = true;
        if (util_1.isPresent(this._value)) {
            this._inputUpdated();
        }
    }
    /**
     * @hidden
     */
    _fireFocus() {
        if (this._isFocus) {
            return;
        }
        console.debug('BaseInput: focused:', this);
        this._form && this._form.setAsFocused(this);
        this._setFocus(true);
        this.ionFocus.emit(this);
    }
    /**
     * @hidden
     */
    _fireBlur() {
        if (!this._isFocus) {
            return;
        }
        console.debug('BaseInput: blurred:', this);
        this._form && this._form.unsetAsFocused(this);
        this._setFocus(false);
        this.ionBlur.emit(this);
    }
    /**
     * @hidden
     */
    _setFocus(isFocused) {
        util_1.assert(this._init, 'component was not initialized');
        util_1.assert(core_1.NgZone.isInAngularZone(), '_fireFocus: should be zoned');
        util_1.assert(isFocused !== this._isFocus, 'bad internal state');
        this._isFocus = isFocused;
        const item = this._item;
        if (item) {
            item.setElementClass('input-has-focus', isFocused);
            item.setElementClass('item-input-has-focus', isFocused);
        }
        this._inputUpdated();
    }
    /**
     * @hidden
     */
    onChange() {
        this._onChanged && this._onChanged(this._inputNgModelEvent());
        this._onTouched && this._onTouched();
    }
    /**
     * @hidden
     */
    isFocus() {
        return this._isFocus;
    }
    /**
     * @hidden
     */
    hasValue() {
        const val = this._value;
        if (!util_1.isPresent(val)) {
            return false;
        }
        if (util_1.isArray(val) || util_1.isString(val)) {
            return val.length > 0;
        }
        return true;
    }
    /**
     * @hidden
     */
    focusNext() {
        this._form && this._form.tabFocus(this);
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        util_1.assert(this._init, 'input was destroed without being initialized');
        const form = this._form;
        form && form.deregister(this);
        this._init = false;
    }
    /**
     * @hidden
     */
    ngAfterContentInit() {
        this._initialize();
    }
    /**
     * @hidden
     */
    initFocus() {
        const ele = this._elementRef.nativeElement.querySelector('button');
        ele && ele.focus();
    }
    /**
     * @hidden
     */
    _inputNormalize(val) {
        return val;
    }
    /**
     * @hidden
     */
    _inputShouldChange(val) {
        return this._value !== val;
    }
    /**
     * @hidden
     */
    _inputChangeEvent() {
        return this;
    }
    /**
     * @hidden
     */
    _inputNgModelEvent() {
        return this._value;
    }
    /**
     * @hidden
     */
    _inputUpdated() {
        util_1.assert(this._init, 'component should be initialized');
        const item = this._item;
        if (item) {
            setControlCss(item, this._ngControl);
            // TODO remove all uses of input-has-value in v4
            let hasValue = this.hasValue();
            item.setElementClass('input-has-value', hasValue);
            item.setElementClass('item-input-has-value', hasValue);
        }
    }
}
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], BaseInput.prototype, "ionFocus", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], BaseInput.prototype, "ionChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], BaseInput.prototype, "ionBlur", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], BaseInput.prototype, "disabled", null);
exports.BaseInput = BaseInput;
function setControlCss(element, control) {
    if (!control) {
        return;
    }
    element.setElementClass('ng-untouched', control.untouched);
    element.setElementClass('ng-touched', control.touched);
    element.setElementClass('ng-pristine', control.pristine);
    element.setElementClass('ng-dirty', control.dirty);
    element.setElementClass('ng-valid', control.valid);
    element.setElementClass('ng-invalid', !control.valid);
}
//# sourceMappingURL=base-input.js.map
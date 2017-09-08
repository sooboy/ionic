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
const dom_controller_1 = require("../../platform/dom-controller");
const form_1 = require("../../util/form");
const gesture_controller_1 = require("../../gestures/gesture-controller");
const haptic_1 = require("../../tap-click/haptic");
const util_1 = require("../../util/util");
const base_input_1 = require("../../util/base-input");
const item_1 = require("../item/item");
const key_1 = require("../../platform/key");
const platform_1 = require("../../platform/platform");
const toggle_gesture_1 = require("./toggle-gesture");
/**
 * @name Toggle
 * @description
 * A toggle technically is the same thing as an HTML checkbox input,
 * except it looks different and is easier to use on a touch device.
 * Toggles can also have colors assigned to them, by adding any color
 * attribute.
 *
 * See the [Angular Docs](https://angular.io/docs/ts/latest/guide/forms.html)
 * for more info on forms and inputs.
 *
 * @usage
 * ```html
 *
 *  <ion-list>
 *
 *    <ion-item>
 *      <ion-label>Pepperoni</ion-label>
 *      <ion-toggle [(ngModel)]="pepperoni"></ion-toggle>
 *    </ion-item>
 *
 *    <ion-item>
 *      <ion-label>Sausage</ion-label>
 *      <ion-toggle [(ngModel)]="sausage" disabled="true"></ion-toggle>
 *    </ion-item>
 *
 *    <ion-item>
 *      <ion-label>Mushrooms</ion-label>
 *      <ion-toggle [(ngModel)]="mushrooms"></ion-toggle>
 *    </ion-item>
 *
 *  </ion-list>
 * ```
 *
 * @demo /docs/demos/src/toggle/
 * @see {@link /docs/components#toggle Toggle Component Docs}
 */
let Toggle = Toggle_1 = class Toggle extends base_input_1.BaseInput {
    constructor(form, config, _plt, elementRef, renderer, _haptic, item, _gestureCtrl, _domCtrl, _zone) {
        super(config, elementRef, renderer, 'toggle', false, form, item, null);
        this._plt = _plt;
        this._haptic = _haptic;
        this._gestureCtrl = _gestureCtrl;
        this._domCtrl = _domCtrl;
        this._zone = _zone;
        this._activated = false;
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
    ngAfterContentInit() {
        this._initialize();
        this._gesture = new toggle_gesture_1.ToggleGesture(this._plt, this, this._gestureCtrl, this._domCtrl);
        this._gesture.listen();
    }
    /**
     * @hidden
     */
    _inputUpdated() { }
    /**
     * @hidden
     */
    _inputNormalize(val) {
        return util_1.isTrueProperty(val);
    }
    /**
     * @hidden
     */
    _onDragStart(startX) {
        util_1.assert(startX, 'startX must be valid');
        console.debug('toggle, _onDragStart', startX);
        this._zone.run(() => {
            this._startX = startX;
            this._fireFocus();
            this._activated = true;
        });
    }
    /**
     * @hidden
     */
    _onDragMove(currentX) {
        if (!this._startX) {
            util_1.assert(false, '_startX must be valid');
            return;
        }
        if (this._shouldToggle(currentX, -15)) {
            this._zone.run(() => {
                this.value = !this.value;
                this._startX = currentX;
                this._haptic.selection();
            });
        }
    }
    /**
     * @hidden
     */
    _onDragEnd(endX) {
        if (!this._startX) {
            util_1.assert(false, '_startX must be valid');
            return;
        }
        console.debug('toggle, _onDragEnd', endX);
        this._zone.run(() => {
            if (this._shouldToggle(endX, 4)) {
                this.value = !this.value;
                this._haptic.selection();
            }
            this._activated = false;
            this._fireBlur();
            this._startX = null;
        });
    }
    /**
     * @hidden
     */
    _shouldToggle(currentX, margin) {
        const isLTR = !this._plt.isRTL;
        const startX = this._startX;
        if (this._value) {
            return (isLTR && (startX + margin > currentX)) ||
                (!isLTR && (startX - margin < currentX));
        }
        else {
            return (isLTR && (startX - margin < currentX)) ||
                (!isLTR && (startX + margin > currentX));
        }
    }
    /**
     * @hidden
     */
    _keyup(ev) {
        if (ev.keyCode === key_1.KEY_SPACE || ev.keyCode === key_1.KEY_ENTER) {
            console.debug(`toggle, keyup: ${ev.keyCode}`);
            ev.preventDefault();
            ev.stopPropagation();
            this.value = !this.value;
        }
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this._gesture && this._gesture.destroy();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Toggle.prototype, "checked", null);
__decorate([
    core_1.HostListener('keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], Toggle.prototype, "_keyup", null);
Toggle = Toggle_1 = __decorate([
    core_1.Component({
        selector: 'ion-toggle',
        template: '<div class="toggle-icon">' +
            '<div class="toggle-inner"></div>' +
            '</div>' +
            '<button role="checkbox" ' +
            'type="button" ' +
            'ion-button="item-cover" ' +
            '[id]="id" ' +
            '[attr.aria-checked]="_value" ' +
            '[attr.aria-labelledby]="_labelId" ' +
            '[attr.aria-disabled]="_disabled" ' +
            'class="item-cover" disable-activated>' +
            '</button>',
        host: {
            '[class.toggle-disabled]': '_disabled',
            '[class.toggle-checked]': '_value',
            '[class.toggle-activated]': '_activated',
        },
        providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: Toggle_1, multi: true }],
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __param(6, core_1.Optional()),
    __metadata("design:paramtypes", [form_1.Form,
        config_1.Config,
        platform_1.Platform,
        core_1.ElementRef,
        core_1.Renderer,
        haptic_1.Haptic,
        item_1.Item,
        gesture_controller_1.GestureController,
        dom_controller_1.DomController,
        core_1.NgZone])
], Toggle);
exports.Toggle = Toggle;
var Toggle_1;
//# sourceMappingURL=toggle.js.map
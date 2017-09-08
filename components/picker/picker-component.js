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
const gesture_controller_1 = require("../../gestures/gesture-controller");
const key_1 = require("../../platform/key");
const nav_params_1 = require("../../navigation/nav-params");
const view_controller_1 = require("../../navigation/view-controller");
const picker_column_1 = require("./picker-column");
/**
 * @hidden
 */
let PickerCmp = class PickerCmp {
    constructor(_viewCtrl, _elementRef, config, gestureCtrl, params, renderer) {
        this._viewCtrl = _viewCtrl;
        this._elementRef = _elementRef;
        this._gestureBlocker = gestureCtrl.createBlocker(gesture_controller_1.BLOCK_ALL);
        this.d = params.data;
        this.mode = config.get('mode');
        renderer.setElementClass(_elementRef.nativeElement, `picker-${this.mode}`, true);
        if (this.d.cssClass) {
            this.d.cssClass.split(' ').forEach(cssClass => {
                renderer.setElementClass(_elementRef.nativeElement, cssClass, true);
            });
        }
        this.id = (++pickerIds);
        this.lastClick = 0;
    }
    ionViewWillLoad() {
        // normalize the data
        let data = this.d;
        data.buttons = data.buttons.map(button => {
            if (util_1.isString(button)) {
                return { text: button };
            }
            if (button.role) {
                button.cssRole = `picker-toolbar-${button.role}`;
            }
            return button;
        });
        // clean up dat data
        data.columns = data.columns.map(column => {
            if (!util_1.isPresent(column.options)) {
                column.options = [];
            }
            column.selectedIndex = column.selectedIndex || 0;
            column.options = column.options.map(inputOpt => {
                let opt = {
                    text: '',
                    value: '',
                    disabled: inputOpt.disabled,
                };
                if (util_1.isPresent(inputOpt)) {
                    if (util_1.isString(inputOpt) || util_1.isNumber(inputOpt)) {
                        opt.text = inputOpt.toString();
                        opt.value = inputOpt;
                    }
                    else {
                        opt.text = util_1.isPresent(inputOpt.text) ? inputOpt.text : inputOpt.value;
                        opt.value = util_1.isPresent(inputOpt.value) ? inputOpt.value : inputOpt.text;
                    }
                }
                return opt;
            });
            return column;
        });
    }
    ionViewDidLoad() {
        this.refresh();
    }
    ionViewWillEnter() {
        this._gestureBlocker.block();
    }
    ionViewDidLeave() {
        this._gestureBlocker.unblock();
    }
    refresh() {
        this._cols.forEach(column => column.refresh());
    }
    _colChange() {
        // one of the columns has changed its selected index
        var picker = this._viewCtrl;
        picker.ionChange.emit(this.getSelected());
    }
    _keyUp(ev) {
        if (this.enabled && this._viewCtrl.isLast()) {
            if (ev.keyCode === key_1.KEY_ENTER) {
                if (this.lastClick + 1000 < Date.now()) {
                    // do not fire this click if there recently was already a click
                    // this can happen when the button has focus and used the enter
                    // key to click the button. However, both the click handler and
                    // this keyup event will fire, so only allow one of them to go.
                    console.debug('picker, enter button');
                    let button = this.d.buttons[this.d.buttons.length - 1];
                    this.btnClick(button);
                }
            }
            else if (ev.keyCode === key_1.KEY_ESCAPE) {
                console.debug('picker, escape button');
                this.bdClick();
            }
        }
    }
    ionViewDidEnter() {
        let focusableEle = this._elementRef.nativeElement.querySelector('button');
        if (focusableEle) {
            focusableEle.focus();
        }
        this.enabled = true;
    }
    btnClick(button) {
        if (!this.enabled) {
            return;
        }
        // keep the time of the most recent button click
        this.lastClick = Date.now();
        let shouldDismiss = true;
        if (button.handler) {
            // a handler has been provided, execute it
            // pass the handler the values from the inputs
            if (button.handler(this.getSelected()) === false) {
                // if the return value of the handler is false then do not dismiss
                shouldDismiss = false;
            }
        }
        if (shouldDismiss) {
            this.dismiss(button.role);
        }
    }
    bdClick() {
        if (this.enabled && this.d.enableBackdropDismiss) {
            let cancelBtn = this.d.buttons.find(b => b.role === 'cancel');
            if (cancelBtn) {
                this.btnClick(cancelBtn);
            }
            else {
                this.dismiss('backdrop');
            }
        }
    }
    dismiss(role) {
        return this._viewCtrl.dismiss(this.getSelected(), role);
    }
    getSelected() {
        let selected = {};
        this.d.columns.forEach((col, index) => {
            let selectedColumn = col.options[col.selectedIndex];
            selected[col.name] = {
                text: selectedColumn ? selectedColumn.text : null,
                value: selectedColumn ? selectedColumn.value : null,
                columnIndex: index,
            };
        });
        return selected;
    }
    ngOnDestroy() {
        util_1.assert(this._gestureBlocker.blocked === false, 'gesture blocker must be already unblocked');
        this._gestureBlocker.destroy();
    }
};
__decorate([
    core_1.ViewChildren(picker_column_1.PickerColumnCmp),
    __metadata("design:type", core_1.QueryList)
], PickerCmp.prototype, "_cols", void 0);
__decorate([
    core_1.HostListener('body:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], PickerCmp.prototype, "_keyUp", null);
PickerCmp = __decorate([
    core_1.Component({
        selector: 'ion-picker-cmp',
        template: `
    <ion-backdrop (click)="bdClick()"></ion-backdrop>
    <div class="picker-wrapper">
      <div class="picker-toolbar">
        <div *ngFor="let b of d.buttons" class="picker-toolbar-button" [ngClass]="b.cssRole">
          <button ion-button (click)="btnClick(b)" [ngClass]="b.cssClass" class="picker-button" clear>
            {{b.text}}
          </button>
        </div>
      </div>
      <div class="picker-columns">
        <div class="picker-above-highlight"></div>
        <div *ngFor="let c of d.columns" [col]="c" class="picker-col" (ionChange)="_colChange($event)"></div>
        <div class="picker-below-highlight"></div>
      </div>
    </div>
  `,
        host: {
            'role': 'dialog'
        },
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [view_controller_1.ViewController,
        core_1.ElementRef,
        config_1.Config,
        gesture_controller_1.GestureController,
        nav_params_1.NavParams,
        core_1.Renderer])
], PickerCmp);
exports.PickerCmp = PickerCmp;
let pickerIds = -1;
//# sourceMappingURL=picker-component.js.map
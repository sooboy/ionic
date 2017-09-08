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
const config_1 = require("../../config/config");
const nav_params_1 = require("../../navigation/nav-params");
const view_controller_1 = require("../../navigation/view-controller");
/**
 * @hidden
 */
let ToastCmp = class ToastCmp {
    constructor(_viewCtrl, _config, _elementRef, params, renderer) {
        this._viewCtrl = _viewCtrl;
        this._config = _config;
        this._elementRef = _elementRef;
        this.dismissTimeout = undefined;
        renderer.setElementClass(_elementRef.nativeElement, `toast-${_config.get('mode')}`, true);
        this.d = params.data;
        if (this.d.cssClass) {
            this.d.cssClass.split(' ').forEach(cssClass => {
                // Make sure the class isn't whitespace, otherwise it throws exceptions
                if (cssClass.trim() !== '')
                    renderer.setElementClass(_elementRef.nativeElement, cssClass, true);
            });
        }
        this.id = (++toastIds);
        if (this.d.message) {
            this.hdrId = 'toast-hdr-' + this.id;
        }
    }
    ngAfterViewInit() {
        // if there's a `duration` set, automatically dismiss.
        if (this.d.duration) {
            this.dismissTimeout = setTimeout(() => {
                this.dismiss('backdrop');
            }, this.d.duration);
        }
        this.enabled = true;
    }
    ionViewDidEnter() {
        const { activeElement } = document;
        if (activeElement) {
            activeElement.blur();
        }
        let focusableEle = this._elementRef.nativeElement.querySelector('button');
        if (focusableEle) {
            focusableEle.focus();
        }
    }
    cbClick() {
        if (this.enabled) {
            this.dismiss('close');
        }
    }
    dismiss(role) {
        clearTimeout(this.dismissTimeout);
        this.dismissTimeout = undefined;
        return this._viewCtrl.dismiss(null, role, { disableApp: false });
    }
};
ToastCmp = __decorate([
    core_1.Component({
        selector: 'ion-toast',
        template: '<div class="toast-wrapper" ' +
            '[class.toast-bottom]="d.position === \'bottom\'" ' +
            '[class.toast-middle]="d.position === \'middle\'" ' +
            '[class.toast-top]="d.position === \'top\'"> ' +
            '<div class="toast-container"> ' +
            '<div class="toast-message" id="{{hdrId}}" *ngIf="d.message">{{d.message}}</div> ' +
            '<button ion-button clear class="toast-button" *ngIf="d.showCloseButton" (click)="cbClick()"> ' +
            '{{ d.closeButtonText || \'Close\' }} ' +
            '</button> ' +
            '</div> ' +
            '</div>',
        host: {
            'role': 'dialog',
            '[attr.aria-labelledby]': 'hdrId',
            '[attr.aria-describedby]': 'descId',
        },
    }),
    __metadata("design:paramtypes", [view_controller_1.ViewController,
        config_1.Config,
        core_1.ElementRef,
        nav_params_1.NavParams,
        core_1.Renderer])
], ToastCmp);
exports.ToastCmp = ToastCmp;
let toastIds = -1;
//# sourceMappingURL=toast-component.js.map
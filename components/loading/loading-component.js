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
const gesture_controller_1 = require("../../gestures/gesture-controller");
const util_1 = require("../../util/util");
const key_1 = require("../../platform/key");
const nav_params_1 = require("../../navigation/nav-params");
const view_controller_1 = require("../../navigation/view-controller");
/**
* @hidden
*/
let LoadingCmp = class LoadingCmp {
    constructor(_viewCtrl, _config, _elementRef, gestureCtrl, params, renderer) {
        this._viewCtrl = _viewCtrl;
        this._config = _config;
        util_1.assert(params.data, 'params data must be valid');
        this.gestureBlocker = gestureCtrl.createBlocker(gesture_controller_1.BLOCK_ALL);
        this.d = params.data;
        renderer.setElementClass(_elementRef.nativeElement, `loading-${_config.get('mode')}`, true);
        if (this.d.cssClass) {
            this.d.cssClass.split(' ').forEach(cssClass => {
                // Make sure the class isn't whitespace, otherwise it throws exceptions
                if (cssClass.trim() !== '')
                    renderer.setElementClass(_elementRef.nativeElement, cssClass, true);
            });
        }
        this.id = (++loadingIds);
    }
    ngOnInit() {
        // If no spinner was passed in loading options we need to fall back
        // to the loadingSpinner in the app's config, then the mode spinner
        if (util_1.isUndefined(this.d.spinner)) {
            this.d.spinner = this._config.get('loadingSpinner', this._config.get('spinner', 'ios'));
        }
        // If the user passed hide to the spinner we don't want to show it
        this.showSpinner = util_1.isDefined(this.d.spinner) && this.d.spinner !== 'hide';
    }
    ionViewWillEnter() {
        this.gestureBlocker.block();
    }
    ionViewDidLeave() {
        this.gestureBlocker.unblock();
    }
    ionViewDidEnter() {
        // If there is a duration, dismiss after that amount of time
        if (this.d && this.d.duration) {
            this.durationTimeout = setTimeout(() => this.dismiss('backdrop'), this.d.duration);
        }
    }
    keyUp(ev) {
        if (this._viewCtrl.isLast() && ev.keyCode === key_1.KEY_ESCAPE) {
            this.bdClick();
        }
    }
    bdClick() {
        if (this.d.enableBackdropDismiss) {
            this.dismiss('backdrop');
        }
    }
    dismiss(role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return this._viewCtrl.dismiss(null, role);
    }
    ngOnDestroy() {
        util_1.assert(this.gestureBlocker.blocked === false, 'gesture blocker must be already unblocked');
        this.gestureBlocker.destroy();
    }
};
__decorate([
    core_1.HostListener('body:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], LoadingCmp.prototype, "keyUp", null);
LoadingCmp = __decorate([
    core_1.Component({
        selector: 'ion-loading',
        template: '<ion-backdrop [hidden]="!d.showBackdrop" (click)="bdClick()" [class.backdrop-no-tappable]="!d.enableBackdropDismiss"></ion-backdrop>' +
            '<div class="loading-wrapper">' +
            '<div *ngIf="showSpinner" class="loading-spinner">' +
            '<ion-spinner [name]="d.spinner"></ion-spinner>' +
            '</div>' +
            '<div *ngIf="d.content" [innerHTML]="d.content" class="loading-content"></div>' +
            '</div>',
        host: {
            'role': 'dialog'
        },
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [view_controller_1.ViewController,
        config_1.Config,
        core_1.ElementRef,
        gesture_controller_1.GestureController,
        nav_params_1.NavParams,
        core_1.Renderer])
], LoadingCmp);
exports.LoadingCmp = LoadingCmp;
let loadingIds = -1;
//# sourceMappingURL=loading-component.js.map
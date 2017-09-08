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
const gesture_controller_1 = require("../../gestures/gesture-controller");
const config_1 = require("../../config/config");
const key_1 = require("../../platform/key");
const nav_params_1 = require("../../navigation/nav-params");
const view_controller_1 = require("../../navigation/view-controller");
/**
 * @hidden
 */
let ActionSheetCmp = class ActionSheetCmp {
    constructor(_viewCtrl, config, _elementRef, gestureCtrl, params, renderer) {
        this._viewCtrl = _viewCtrl;
        this._elementRef = _elementRef;
        this.gestureBlocker = gestureCtrl.createBlocker(gesture_controller_1.BLOCK_ALL);
        this.d = params.data;
        this.mode = config.get('mode');
        renderer.setElementClass(_elementRef.nativeElement, `action-sheet-${this.mode}`, true);
        if (this.d.cssClass) {
            this.d.cssClass.split(' ').forEach(cssClass => {
                // Make sure the class isn't whitespace, otherwise it throws exceptions
                if (cssClass.trim() !== '')
                    renderer.setElementClass(_elementRef.nativeElement, cssClass, true);
            });
        }
        this.id = (++actionSheetIds);
        if (this.d.title) {
            this.hdrId = 'acst-hdr-' + this.id;
        }
        if (this.d.subTitle) {
            this.descId = 'acst-subhdr-' + this.id;
        }
    }
    ionViewDidLoad() {
        // normalize the data
        this.d.buttons = this.d.buttons.map(button => {
            if (typeof button === 'string') {
                button = { text: button };
            }
            if (!button.cssClass) {
                button.cssClass = '';
            }
            switch (button.role) {
                case 'cancel':
                    this.cancelButton = button;
                    return null;
                case 'destructive':
                    button.cssClass = (button.cssClass + ' ' || '') + 'action-sheet-destructive';
                    break;
                case 'selected':
                    button.cssClass = (button.cssClass + ' ' || '') + 'action-sheet-selected';
                    break;
            }
            return button;
        }).filter(button => button !== null);
    }
    ionViewWillEnter() {
        this.gestureBlocker.block();
    }
    ionViewDidLeave() {
        this.gestureBlocker.unblock();
    }
    ionViewDidEnter() {
        const focusableEle = this._elementRef.nativeElement.querySelector('button');
        if (focusableEle) {
            focusableEle.focus();
        }
        this.enabled = true;
    }
    keyUp(ev) {
        if (this.enabled && ev.keyCode === key_1.KEY_ESCAPE && this._viewCtrl.isLast()) {
            console.debug('actionsheet, escape button');
            this.bdClick();
        }
    }
    click(button) {
        if (!this.enabled) {
            return;
        }
        let shouldDismiss = true;
        if (button.handler) {
            // a handler has been provided, execute it
            if (button.handler() === false) {
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
            if (this.cancelButton) {
                this.click(this.cancelButton);
            }
            else {
                this.dismiss('backdrop');
            }
        }
    }
    dismiss(role) {
        const opts = {
            minClickBlockDuration: 400
        };
        return this._viewCtrl.dismiss(null, role, opts);
    }
    ngOnDestroy() {
        util_1.assert(this.gestureBlocker.blocked === false, 'gesture blocker must be already unblocked');
        this.d = this.cancelButton = null;
        this.gestureBlocker.destroy();
    }
};
__decorate([
    core_1.HostListener('body:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], ActionSheetCmp.prototype, "keyUp", null);
ActionSheetCmp = __decorate([
    core_1.Component({
        selector: 'ion-action-sheet',
        template: '<ion-backdrop (click)="bdClick()" [class.backdrop-no-tappable]="!d.enableBackdropDismiss"></ion-backdrop>' +
            '<div class="action-sheet-wrapper">' +
            '<div class="action-sheet-container">' +
            '<div class="action-sheet-group">' +
            '<div class="action-sheet-title" id="{{hdrId}}" *ngIf="d.title">{{d.title}}</div>' +
            '<div class="action-sheet-sub-title" id="{{descId}}" *ngIf="d.subTitle">{{d.subTitle}}</div>' +
            '<button ion-button="action-sheet-button" (click)="click(b)" *ngFor="let b of d.buttons" class="disable-hover" [attr.icon-start]="b.icon ? \'\' : null" [ngClass]="b.cssClass">' +
            '<ion-icon [name]="b.icon" *ngIf="b.icon" class="action-sheet-icon"></ion-icon>' +
            '{{b.text}}' +
            '</button>' +
            '</div>' +
            '<div class="action-sheet-group" *ngIf="cancelButton">' +
            '<button ion-button="action-sheet-button" (click)="click(cancelButton)" class="action-sheet-cancel disable-hover" [attr.icon-start]="cancelButton.icon ? \'\' : null" [ngClass]="cancelButton.cssClass">' +
            '<ion-icon [name]="cancelButton.icon" *ngIf="cancelButton.icon" class="action-sheet-icon"></ion-icon>' +
            '{{cancelButton.text}}' +
            '</button>' +
            '</div>' +
            '</div>' +
            '</div>',
        host: {
            'role': 'dialog',
            '[attr.aria-labelledby]': 'hdrId',
            '[attr.aria-describedby]': 'descId'
        },
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [view_controller_1.ViewController,
        config_1.Config,
        core_1.ElementRef,
        gesture_controller_1.GestureController,
        nav_params_1.NavParams,
        core_1.Renderer])
], ActionSheetCmp);
exports.ActionSheetCmp = ActionSheetCmp;
let actionSheetIds = -1;
//# sourceMappingURL=action-sheet-component.js.map
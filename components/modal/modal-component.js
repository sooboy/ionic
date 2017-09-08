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
const key_1 = require("../../platform/key");
const nav_params_1 = require("../../navigation/nav-params");
const view_controller_1 = require("../../navigation/view-controller");
const gesture_controller_1 = require("../../gestures/gesture-controller");
const module_loader_1 = require("../../util/module-loader");
const util_1 = require("../../util/util");
/**
 * @hidden
 */
let ModalCmp = class ModalCmp {
    constructor(_cfr, _renderer, _elementRef, _navParams, _viewCtrl, gestureCtrl, moduleLoader) {
        this._cfr = _cfr;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._navParams = _navParams;
        this._viewCtrl = _viewCtrl;
        this.moduleLoader = moduleLoader;
        let opts = _navParams.get('opts');
        util_1.assert(opts, 'modal data must be valid');
        this._gestureBlocker = gestureCtrl.createBlocker({
            disable: [gesture_controller_1.GESTURE_MENU_SWIPE, gesture_controller_1.GESTURE_GO_BACK_SWIPE]
        });
        this._bdDismiss = opts.enableBackdropDismiss;
        if (opts.cssClass) {
            opts.cssClass.split(' ').forEach((cssClass) => {
                // Make sure the class isn't whitespace, otherwise it throws exceptions
                if (cssClass.trim() !== '')
                    _renderer.setElementClass(_elementRef.nativeElement, cssClass, true);
            });
        }
    }
    ionViewPreLoad() {
        const component = this._navParams.data.component;
        if (!component) {
            console.warn('modal\'s page was not defined');
            return;
        }
        let cfr = this.moduleLoader.getComponentFactoryResolver(component);
        if (!cfr) {
            cfr = this._cfr;
        }
        const componentFactory = cfr.resolveComponentFactory(component);
        // ******** DOM WRITE ****************
        const componentRef = this._viewport.createComponent(componentFactory, this._viewport.length, this._viewport.parentInjector, []);
        this._setCssClass(componentRef, 'ion-page');
        this._setCssClass(componentRef, 'show-page');
        // Change the viewcontroller's instance to point the user provided page
        // Lifecycle events will be sent to the new instance, instead of the modal's component
        // we need to manually subscribe to them
        this._viewCtrl._setInstance(componentRef.instance);
        this._viewCtrl.willEnter.subscribe(this._viewWillEnter.bind(this));
        this._viewCtrl.didLeave.subscribe(this._viewDidLeave.bind(this));
        this._enabled = true;
    }
    _viewWillEnter() {
        this._gestureBlocker.block();
    }
    _viewDidLeave() {
        this._gestureBlocker.unblock();
    }
    _setCssClass(componentRef, className) {
        this._renderer.setElementClass(componentRef.location.nativeElement, className, true);
    }
    _bdClick() {
        if (this._enabled && this._bdDismiss) {
            const opts = {
                minClickBlockDuration: 400
            };
            return this._viewCtrl.dismiss(null, 'backdrop', opts);
        }
    }
    _keyUp(ev) {
        if (this._enabled && this._viewCtrl.isLast() && ev.keyCode === key_1.KEY_ESCAPE) {
            this._bdClick();
        }
    }
    ngOnDestroy() {
        util_1.assert(this._gestureBlocker.blocked === false, 'gesture blocker must be already unblocked');
        this._gestureBlocker.destroy();
    }
};
__decorate([
    core_1.ViewChild('viewport', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], ModalCmp.prototype, "_viewport", void 0);
__decorate([
    core_1.HostListener('body:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], ModalCmp.prototype, "_keyUp", null);
ModalCmp = __decorate([
    core_1.Component({
        selector: 'ion-modal',
        template: '<ion-backdrop (click)="_bdClick()" [class.backdrop-no-tappable]="!_bdDismiss"></ion-backdrop>' +
            '<div class="modal-wrapper">' +
            '<div #viewport nav-viewport></div>' +
            '</div>'
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
        core_1.Renderer,
        core_1.ElementRef,
        nav_params_1.NavParams,
        view_controller_1.ViewController,
        gesture_controller_1.GestureController,
        module_loader_1.ModuleLoader])
], ModalCmp);
exports.ModalCmp = ModalCmp;
//# sourceMappingURL=modal-component.js.map
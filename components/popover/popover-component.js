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
const key_1 = require("../../platform/key");
const nav_params_1 = require("../../navigation/nav-params");
const view_controller_1 = require("../../navigation/view-controller");
const gesture_controller_1 = require("../../gestures/gesture-controller");
const module_loader_1 = require("../../util/module-loader");
const util_1 = require("../../util/util");
/**
 * @hidden
 */
let PopoverCmp = class PopoverCmp {
    constructor(_cfr, _elementRef, _renderer, _config, _navParams, _viewCtrl, gestureCtrl, moduleLoader) {
        this._cfr = _cfr;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._config = _config;
        this._navParams = _navParams;
        this._viewCtrl = _viewCtrl;
        this.moduleLoader = moduleLoader;
        this._gestureBlocker = gestureCtrl.createBlocker(gesture_controller_1.BLOCK_ALL);
        this.d = _navParams.data.opts;
        _renderer.setElementClass(_elementRef.nativeElement, `popover-${_config.get('mode')}`, true);
        if (this.d.cssClass) {
            this.d.cssClass.split(' ').forEach(cssClass => {
                // Make sure the class isn't whitespace, otherwise it throws exceptions
                if (cssClass.trim() !== '')
                    _renderer.setElementClass(_elementRef.nativeElement, cssClass, true);
            });
        }
        this.id = (++popoverIds);
    }
    ionViewPreLoad() {
        this._load(this._navParams.data.component);
    }
    _load(component) {
        if (component) {
            let cfr = this.moduleLoader.getComponentFactoryResolver(component);
            if (!cfr) {
                cfr = this._cfr;
            }
            const componentFactory = cfr.resolveComponentFactory(component);
            // ******** DOM WRITE ****************
            const componentRef = this._viewport.createComponent(componentFactory, this._viewport.length, this._viewport.parentInjector, []);
            this._viewCtrl._setInstance(componentRef.instance);
            this._enabled = true;
            // Subscribe to events in order to block gestures
            // TODO, should we unsubscribe? memory leak?
            this._viewCtrl.willEnter.subscribe(this._viewWillEnter.bind(this));
            this._viewCtrl.didLeave.subscribe(this._viewDidLeave.bind(this));
        }
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
        if (this._enabled && this.d.enableBackdropDismiss) {
            return this._viewCtrl.dismiss(null, 'backdrop');
        }
    }
    _keyUp(ev) {
        if (this._enabled && ev.keyCode === key_1.KEY_ESCAPE && this._viewCtrl.isLast()) {
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
], PopoverCmp.prototype, "_viewport", void 0);
__decorate([
    core_1.HostListener('body:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], PopoverCmp.prototype, "_keyUp", null);
PopoverCmp = __decorate([
    core_1.Component({
        selector: 'ion-popover',
        template: '<ion-backdrop (click)="_bdClick()" [hidden]="!d.showBackdrop"></ion-backdrop>' +
            '<div class="popover-wrapper">' +
            '<div class="popover-arrow"></div>' +
            '<div class="popover-content">' +
            '<div class="popover-viewport">' +
            '<div #viewport nav-viewport></div>' +
            '</div>' +
            '</div>' +
            '</div>'
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
        core_1.ElementRef,
        core_1.Renderer,
        config_1.Config,
        nav_params_1.NavParams,
        view_controller_1.ViewController,
        gesture_controller_1.GestureController,
        module_loader_1.ModuleLoader])
], PopoverCmp);
exports.PopoverCmp = PopoverCmp;
let popoverIds = -1;
//# sourceMappingURL=popover-component.js.map
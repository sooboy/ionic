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
const app_1 = require("./app");
const util_1 = require("../../util/util");
const config_1 = require("../../config/config");
const ion_1 = require("../ion");
const overlay_portal_1 = require("./overlay-portal");
const platform_1 = require("../../platform/platform");
const Constants = require("./app-constants");
exports.AppRootToken = new core_1.OpaqueToken('USERROOT');
/**
 * @hidden
 */
let IonicApp = class IonicApp extends ion_1.Ion {
    constructor(_userCmp, _cfr, elementRef, renderer, config, _plt, app) {
        super(config, elementRef, renderer, 'app-root');
        this._userCmp = _userCmp;
        this._cfr = _cfr;
        this._plt = _plt;
        // register with App that this is Ionic's appRoot component. tada!
        app._appRoot = this;
        this._stopScrollPlugin = window['IonicStopScroll'];
    }
    ngOnInit() {
        // load the user root component
        // into Ionic's root component
        const factory = this._cfr.resolveComponentFactory(this._userCmp);
        const componentRef = this._viewport.createComponent(factory);
        this._renderer.setElementClass(componentRef.location.nativeElement, 'app-root', true);
        componentRef.changeDetectorRef.detectChanges();
        // set the mode class name
        // ios/md/wp
        this.setElementClass(this._config.get('mode'), true);
        const versions = this._plt.versions();
        this._plt.platforms().forEach(platformName => {
            // platform-ios
            let platformClass = 'platform-' + platformName;
            this.setElementClass(platformClass, true);
            let platformVersion = versions[platformName];
            if (platformVersion) {
                // platform-ios9
                platformClass += platformVersion.major;
                this.setElementClass(platformClass, true);
                // platform-ios9_3
                this.setElementClass(platformClass + '_' + platformVersion.minor, true);
            }
        });
        // touch devices should not use :hover CSS pseudo
        // enable :hover CSS when the "hoverCSS" setting is not false
        if (this._config.getBoolean('hoverCSS', true)) {
            this.setElementClass('enable-hover', true);
        }
        // sweet, the app root has loaded!
        // which means angular and ionic has fully loaded!
        // fire off the platform prepare ready, which could
        // have been switched out by any of the platform engines
        this._plt.prepareReady();
    }
    /**
     * @hidden
     */
    _getPortal(portal) {
        if (portal === Constants.PORTAL_LOADING) {
            return this._loadingPortal;
        }
        if (portal === Constants.PORTAL_TOAST) {
            return this._toastPortal;
        }
        // Modals need their own overlay becuase we don't want an ActionSheet
        // or Alert to trigger lifecycle events inside a modal
        if (portal === Constants.PORTAL_MODAL) {
            return this._modalPortal;
        }
        return this._overlayPortal;
    }
    _getActivePortal() {
        const defaultPortal = this._overlayPortal;
        const modalPortal = this._modalPortal;
        const hasModal = modalPortal.length() > 0;
        const hasDefault = defaultPortal.length() > 0;
        if (!hasModal && !hasDefault) {
            return null;
        }
        else if (hasModal && hasDefault) {
            var defaultIndex = defaultPortal.getActive().getZIndex();
            var modalIndex = modalPortal.getActive().getZIndex();
            if (defaultIndex > modalIndex) {
                return defaultPortal;
            }
            else {
                util_1.assert(modalIndex > defaultIndex, 'modal and default zIndex can not be equal');
                return modalPortal;
            }
        }
        if (hasModal) {
            return modalPortal;
        }
        else if (hasDefault) {
            return defaultPortal;
        }
    }
    _disableScroll(shouldDisableScroll) {
        if (shouldDisableScroll) {
            this.stopScroll().then(() => {
                this._tmr = this._plt.timeout(() => {
                    console.debug('App Root: adding .disable-scroll');
                    this.setElementClass('disable-scroll', true);
                }, 32);
            });
        }
        else {
            let plugin = this._stopScrollPlugin;
            if (plugin && plugin.cancel) {
                plugin.cancel();
            }
            clearTimeout(this._tmr);
            console.debug('App Root: removing .disable-scroll');
            this.setElementClass('disable-scroll', false);
        }
    }
    stopScroll() {
        if (this._stopScrollPlugin) {
            return new Promise((resolve) => {
                this._stopScrollPlugin.stop(() => resolve(true));
            });
        }
        else {
            return Promise.resolve(false);
        }
    }
};
__decorate([
    core_1.ViewChild('viewport', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], IonicApp.prototype, "_viewport", void 0);
__decorate([
    core_1.ViewChild('modalPortal', { read: overlay_portal_1.OverlayPortal }),
    __metadata("design:type", overlay_portal_1.OverlayPortal)
], IonicApp.prototype, "_modalPortal", void 0);
__decorate([
    core_1.ViewChild('overlayPortal', { read: overlay_portal_1.OverlayPortal }),
    __metadata("design:type", overlay_portal_1.OverlayPortal)
], IonicApp.prototype, "_overlayPortal", void 0);
__decorate([
    core_1.ViewChild('loadingPortal', { read: overlay_portal_1.OverlayPortal }),
    __metadata("design:type", overlay_portal_1.OverlayPortal)
], IonicApp.prototype, "_loadingPortal", void 0);
__decorate([
    core_1.ViewChild('toastPortal', { read: overlay_portal_1.OverlayPortal }),
    __metadata("design:type", overlay_portal_1.OverlayPortal)
], IonicApp.prototype, "_toastPortal", void 0);
IonicApp = __decorate([
    core_1.Component({
        selector: 'ion-app',
        template: '<div #viewport app-viewport></div>' +
            '<div #modalPortal overlay-portal></div>' +
            '<div #overlayPortal overlay-portal></div>' +
            '<div #loadingPortal class="loading-portal" overlay-portal></div>' +
            '<div #toastPortal class="toast-portal" [overlay-portal]="10000"></div>' +
            '<div class="click-block"></div>'
    }),
    __param(0, core_1.Inject(exports.AppRootToken)),
    __metadata("design:paramtypes", [Object, core_1.ComponentFactoryResolver,
        core_1.ElementRef,
        core_1.Renderer,
        config_1.Config,
        platform_1.Platform,
        app_1.App])
], IonicApp);
exports.IonicApp = IonicApp;
//# sourceMappingURL=app-root.js.map
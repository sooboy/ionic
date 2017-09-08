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
const config_1 = require("../../config/config");
const deep_linker_1 = require("../../navigation/deep-linker");
const dom_controller_1 = require("../../platform/dom-controller");
const gesture_controller_1 = require("../../gestures/gesture-controller");
const nav_controller_base_1 = require("../../navigation/nav-controller-base");
const platform_1 = require("../../platform/platform");
const transition_controller_1 = require("../../transitions/transition-controller");
/**
 * @hidden
 */
let OverlayPortal = class OverlayPortal extends nav_controller_base_1.NavControllerBase {
    constructor(app, config, plt, elementRef, zone, renderer, cfr, gestureCtrl, transCtrl, linker, viewPort, domCtrl, errHandler) {
        super(null, app, config, plt, elementRef, zone, renderer, cfr, gestureCtrl, transCtrl, linker, domCtrl, errHandler);
        this._isPortal = true;
        this._init = true;
        this.setViewport(viewPort);
        // on every page change make sure the portal has
        // dismissed any views that should be auto dismissed on page change
        app.viewDidLeave.subscribe((view) => {
            if (!view.isOverlay) {
                this.dismissPageChangeViews();
            }
        });
    }
    set _overlayPortal(val) {
        this._zIndexOffset = (val || 0);
    }
    ngOnDestroy() {
        this.destroy();
    }
    /*
     * @private
     */
    getType() {
        return 'portal';
    }
    /*
     * @private
     */
    getSecondaryIdentifier() {
        return null;
    }
};
__decorate([
    core_1.Input('overlay-portal'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], OverlayPortal.prototype, "_overlayPortal", null);
OverlayPortal = __decorate([
    core_1.Directive({
        selector: '[overlay-portal]',
    }),
    __param(0, core_1.Inject(core_1.forwardRef(() => app_1.App))),
    __param(9, core_1.Optional()),
    __metadata("design:paramtypes", [app_1.App,
        config_1.Config,
        platform_1.Platform,
        core_1.ElementRef,
        core_1.NgZone,
        core_1.Renderer,
        core_1.ComponentFactoryResolver,
        gesture_controller_1.GestureController,
        transition_controller_1.TransitionController,
        deep_linker_1.DeepLinker,
        core_1.ViewContainerRef,
        dom_controller_1.DomController,
        core_1.ErrorHandler])
], OverlayPortal);
exports.OverlayPortal = OverlayPortal;
//# sourceMappingURL=overlay-portal.js.map
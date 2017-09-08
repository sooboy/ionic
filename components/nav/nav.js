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
const app_1 = require("../app/app");
const config_1 = require("../../config/config");
const deep_linker_1 = require("../../navigation/deep-linker");
const dom_controller_1 = require("../../platform/dom-controller");
const gesture_controller_1 = require("../../gestures/gesture-controller");
const nav_controller_1 = require("../../navigation/nav-controller");
const nav_controller_base_1 = require("../../navigation/nav-controller-base");
const platform_1 = require("../../platform/platform");
const transition_controller_1 = require("../../transitions/transition-controller");
const view_controller_1 = require("../../navigation/view-controller");
const split_pane_1 = require("../split-pane/split-pane");
/**
 * @name Nav
 * @description
 *
 * `ion-nav` is the declarative component for a [NavController](../../../navigation/NavController/).
 *
 * For more information on using nav controllers like Nav or [Tab](../../Tabs/Tab/),
 * take a look at the [NavController API Docs](../../../navigation/NavController/).
 *
 *
 * @usage
 * You must set a root page to be loaded initially by any Nav you create, using
 * the 'root' property:
 *
 * ```ts
 * import { Component } from '@angular/core';
 * import { GettingStartedPage } from './getting-started';
 *
 * @Component({
 *   template: `<ion-nav [root]="root"></ion-nav>`
 * })
 * class MyApp {
 *   root = GettingStartedPage;
 *
 *   constructor(){
 *   }
 * }
 * ```
 *
 * @demo /docs/demos/src/navigation/
 * @see {@link /docs/components#navigation Navigation Component Docs}
 */
let Nav = Nav_1 = class Nav extends nav_controller_base_1.NavControllerBase {
    constructor(viewCtrl, parent, app, config, plt, elementRef, zone, renderer, cfr, gestureCtrl, transCtrl, linker, domCtrl, errHandler) {
        super(parent, app, config, plt, elementRef, zone, renderer, cfr, gestureCtrl, transCtrl, linker, domCtrl, errHandler);
        this._hasInit = false;
        if (viewCtrl) {
            // an ion-nav can also act as an ion-page within a parent ion-nav
            // this would happen when an ion-nav nests a child ion-nav.
            viewCtrl._setContent(this);
        }
        if (parent) {
            // this Nav has a parent Nav
            parent.registerChildNav(this);
        }
        else if (viewCtrl && viewCtrl.getNav()) {
            // this Nav was opened from a modal
            this.parent = viewCtrl.getNav();
            this.parent.registerChildNav(this);
        }
        else if (app && !app.getRootNavById(this.id)) {
            // a root nav has not been registered yet with the app
            // this is the root navcontroller for the entire app
            app.registerRootNav(this);
        }
    }
    /**
     * @hidden
     */
    set _vp(val) {
        this.setViewport(val);
    }
    ngAfterViewInit() {
        this._hasInit = true;
        const segment = this._linker.getSegmentByNavIdOrName(this.id, this.name);
        if (segment && (segment.component || segment.loadChildren)) {
            return this._linker.initViews(segment).then(views => {
                return this.setPages(views, null, null);
            });
        }
        else if (this._root) {
            // no segment match, so use the root property but don't set the url I guess
            const setUrl = segment ? false : true;
            return this.push(this._root, this.rootParams, {
                isNavRoot: (this._app.getRootNavById(this.id) === this),
                updateUrl: setUrl
            }, null);
        }
    }
    /**
     * @input {Page} The Page component to load as the root page within this nav.
     */
    get root() {
        return this._root;
    }
    set root(page) {
        this._root = page;
        if (this._hasInit) {
            this.setRoot(page);
        }
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        this.destroy();
    }
    initPane() {
        const isMain = this._elementRef.nativeElement.hasAttribute('main');
        return isMain;
    }
    paneChanged(isPane) {
        if (isPane) {
            this.resize();
        }
    }
    goToRoot(opts) {
        return this.setRoot(this._root, this.rootParams, opts, null);
    }
    /*
     * @private
     */
    getType() {
        return 'nav';
    }
    /*
     * @private
     */
    getSecondaryIdentifier() {
        return null;
    }
};
__decorate([
    core_1.ViewChild('viewport', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef),
    __metadata("design:paramtypes", [core_1.ViewContainerRef])
], Nav.prototype, "_vp", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Nav.prototype, "root", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Nav.prototype, "rootParams", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Nav.prototype, "name", void 0);
Nav = Nav_1 = __decorate([
    core_1.Component({
        selector: 'ion-nav',
        template: '<div #viewport nav-viewport></div>' +
            '<div class="nav-decor"></div>',
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [{ provide: split_pane_1.RootNode, useExisting: core_1.forwardRef(() => Nav_1) }]
    }),
    __param(0, core_1.Optional()),
    __param(1, core_1.Optional()),
    __param(11, core_1.Optional()),
    __metadata("design:paramtypes", [view_controller_1.ViewController,
        nav_controller_1.NavController,
        app_1.App,
        config_1.Config,
        platform_1.Platform,
        core_1.ElementRef,
        core_1.NgZone,
        core_1.Renderer,
        core_1.ComponentFactoryResolver,
        gesture_controller_1.GestureController,
        transition_controller_1.TransitionController,
        deep_linker_1.DeepLinker,
        dom_controller_1.DomController,
        core_1.ErrorHandler])
], Nav);
exports.Nav = Nav;
var Nav_1;
//# sourceMappingURL=nav.js.map
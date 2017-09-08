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
const util_1 = require("../../util/util");
const nav_controller_base_1 = require("../../navigation/nav-controller-base");
const platform_1 = require("../../platform/platform");
const tabs_1 = require("./tabs");
const transition_controller_1 = require("../../transitions/transition-controller");
/**
 * @name Tab
 * @description
 * The Tab component, written `<ion-tab>`, is styled based on the mode and should
 * be used in conjunction with the [Tabs](../Tabs/) component.
 *
 * Each `ion-tab` is a declarative component for a [NavController](../../../navigation/NavController/).
 * Basically, each tab is a `NavController`. For more information on using
 * navigation controllers take a look at the [NavController API Docs](../../../navigation/NavController/).
 *
 * See the [Tabs API Docs](../Tabs/) for more details on configuring Tabs.
 *
 * @usage
 *
 * To add a basic tab, you can use the following markup where the `root` property
 * is the page you want to load for that tab, `tabTitle` is the optional text to
 * display on the tab, and `tabIcon` is the optional [icon](../../icon/Icon/).
 *
 * ```html
 * <ion-tabs>
 *  <ion-tab [root]="chatRoot" tabTitle="Chat" tabIcon="chat"></ion-tab>
 * </ion-tabs>
 * ```
 *
 * Then, in your class you can set `chatRoot` to an imported class:
 *
 * ```ts
 * import { ChatPage } from '../chat/chat';
 *
 * export class Tabs {
 *   // here we'll set the property of chatRoot to
 *   // the imported class of ChatPage
 *   chatRoot = ChatPage;
 *
 *   constructor() {
 *
 *   }
 * }
 * ```
 *
 * You can also pass some parameters to the root page of the tab through
 * `rootParams`. Below we pass `chatParams` to the Chat tab:
 *
 * ```html
 * <ion-tabs>
 *  <ion-tab [root]="chatRoot" [rootParams]="chatParams" tabTitle="Chat" tabIcon="chat"></ion-tab>
 * </ion-tabs>
 * ```
 *
 * ```ts
 * export class Tabs {
 *   chatRoot = ChatPage;
 *
 *   // set some user information on chatParams
 *   chatParams = {
 *     user1: 'admin',
 *     user2: 'ionic'
 *   };
 *
 *   constructor() {
 *
 *   }
 * }
 * ```
 *
 * And in `ChatPage` you can get the data from `NavParams`:
 *
 * ```ts
 * export class ChatPage {
 *   constructor(navParams: NavParams) {
 *     console.log('Passed params', navParams.data);
 *   }
 * }
 * ```
 *
 * Sometimes you may want to call a method instead of navigating to a new
 * page. You can use the `(ionSelect)` event to call a method on your class when
 * the tab is selected. Below is an example of presenting a modal from one of
 * the tabs.
 *
 * ```html
 * <ion-tabs>
 *   <ion-tab (ionSelect)="chat()" tabTitle="Show Modal"></ion-tab>
 * </ion-tabs>
 * ```
 *
 * ```ts
 * export class Tabs {
 *   constructor(public modalCtrl: ModalController) {
 *
 *   }
 *
 *   chat() {
 *     let modal = this.modalCtrl.create(ChatPage);
 *     modal.present();
 *   }
 * }
 * ```
 *
 *
 * @demo /docs/demos/src/tabs/
 * @see {@link /docs/components#tabs Tabs Component Docs}
 * @see {@link ../../tabs/Tabs Tabs API Docs}
 * @see {@link ../../nav/Nav Nav API Docs}
 * @see {@link ../../nav/NavController NavController API Docs}
 */
let Tab = class Tab extends nav_controller_base_1.NavControllerBase {
    constructor(parent, app, config, plt, elementRef, zone, renderer, cfr, _cd, gestureCtrl, transCtrl, linker, _dom, errHandler) {
        // A Tab is a NavController for its child pages
        super(parent, app, config, plt, elementRef, zone, renderer, cfr, gestureCtrl, transCtrl, linker, _dom, errHandler);
        this._cd = _cd;
        this.linker = linker;
        this._dom = _dom;
        /**
         * @hidden
         */
        this._isEnabled = true;
        /**
         * @hidden
         */
        this._isShown = true;
        /**
         * @output {Tab} Emitted when the current tab is selected.
         */
        this.ionSelect = new core_1.EventEmitter();
        this.id = parent.add(this);
        this._tabsHideOnSubPages = config.getBoolean('tabsHideOnSubPages');
        this._tabId = 'tabpanel-' + this.id;
        this._btnId = 'tab-' + this.id;
    }
    /**
     * @input {boolean} If true, enable the tab. If false,
     * the user cannot interact with this element.
     * Default: `true`.
     */
    get enabled() {
        return this._isEnabled;
    }
    set enabled(val) {
        this._isEnabled = util_1.isTrueProperty(val);
    }
    /**
     * @input {boolean} If true, the tab button is visible within the
     * tabbar. Default: `true`.
     */
    get show() {
        return this._isShown;
    }
    set show(val) {
        this._isShown = util_1.isTrueProperty(val);
    }
    /**
     * @input {boolean} If true, hide the tabs on child pages.
     */
    get tabsHideOnSubPages() {
        return this._tabsHideOnSubPages;
    }
    set tabsHideOnSubPages(val) {
        this._tabsHideOnSubPages = util_1.isTrueProperty(val);
    }
    /**
     * @hidden
     */
    set _vp(val) {
        this.setViewport(val);
    }
    /**
     * @hidden
     */
    ngOnInit() {
        this.tabBadgeStyle = this.tabBadgeStyle ? this.tabBadgeStyle : 'default';
    }
    /**
     * @hidden
     */
    load(opts, done) {
        if (this._lazyRootFromUrl || (!this._loaded && this.root)) {
            this.setElementClass('show-tab', true);
            // okay, first thing we need to do if check if the view already exists
            const nameToUse = this._lazyRootFromUrl ? this._lazyRootFromUrl : this.root;
            const dataToUse = this._lazyRootFromUrlData ? this._lazyRootFromUrlData : this.rootParams;
            const numViews = this.length() - 1;
            for (let i = numViews; i >= 0; i--) {
                const viewController = this.getByIndex(i);
                if (viewController && (viewController.id === nameToUse || viewController.component === nameToUse)) {
                    if (i === numViews) {
                        // this is the last view in the stack and it's the same
                        // as the segment so there's no change needed
                        if (done) {
                            done(false, false);
                        }
                        return;
                    }
                    else {
                        // it's not the exact view as the end
                        // let's have this nav go back to this exact view
                        return this.popTo(viewController, {
                            animate: false,
                            updateUrl: false,
                        }, done);
                    }
                }
            }
            this.push(nameToUse, dataToUse, opts, done);
            this._lazyRootFromUrl = null;
            this._lazyRootFromUrlData = null;
            this._loaded = true;
        }
        else {
            // if this is not the Tab's initial load then we need
            // to refresh the tabbar and content dimensions to be sure
            // they're lined up correctly
            this._dom.read(() => {
                this.resize();
            });
            if (done) {
                done(false, false);
            }
            return;
        }
    }
    /**
     * @hidden
     */
    resize() {
        const active = this.getActive();
        if (!active) {
            return;
        }
        const content = active.getIONContent();
        content && content.resize();
    }
    /**
     * @hidden
     */
    _viewAttachToDOM(viewCtrl, componentRef, viewport) {
        const isTabSubPage = (this._tabsHideOnSubPages && viewCtrl.index > 0);
        if (isTabSubPage) {
            viewport = this.parent.portal;
        }
        super._viewAttachToDOM(viewCtrl, componentRef, viewport);
        if (isTabSubPage) {
            // add the .tab-subpage css class to tabs pages that should act like subpages
            const pageEleRef = viewCtrl.pageRef();
            if (pageEleRef) {
                this._renderer.setElementClass(pageEleRef.nativeElement, 'tab-subpage', true);
            }
        }
    }
    /**
     * @hidden
     */
    setSelected(isSelected) {
        this.isSelected = isSelected;
        this.setElementClass('show-tab', isSelected);
        this.setElementAttribute('aria-hidden', (!isSelected).toString());
        if (isSelected) {
            // this is the selected tab, detect changes
            this._cd.reattach();
        }
        else {
            // this tab is not selected, do not detect changes
            this._cd.detach();
        }
    }
    /**
     * @hidden
     */
    get index() {
        return this.parent.getIndex(this);
    }
    /**
     * @hidden
     */
    updateHref(component, data) {
        if (this.btn && this.linker) {
            let href = this.linker.createUrl(this.parent, component, data) || '#';
            this.btn.updateHref(href);
        }
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        this.destroy();
    }
    /**
     * @hidden
     */
    getType() {
        return 'tab';
    }
    goToRoot(opts) {
        return this.setRoot(this.root, this.rootParams, opts, null);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Tab.prototype, "root", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Tab.prototype, "rootParams", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Tab.prototype, "tabUrlPath", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Tab.prototype, "tabTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Tab.prototype, "tabIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Tab.prototype, "tabBadge", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Tab.prototype, "tabBadgeStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Tab.prototype, "enabled", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Tab.prototype, "show", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Tab.prototype, "tabsHideOnSubPages", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Tab.prototype, "ionSelect", void 0);
__decorate([
    core_1.ViewChild('viewport', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef),
    __metadata("design:paramtypes", [core_1.ViewContainerRef])
], Tab.prototype, "_vp", null);
Tab = __decorate([
    core_1.Component({
        selector: 'ion-tab',
        template: '<div #viewport></div><div class="nav-decor"></div>',
        host: {
            '[attr.id]': '_tabId',
            '[attr.aria-labelledby]': '_btnId',
            'role': 'tabpanel'
        },
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __param(11, core_1.Optional()),
    __metadata("design:paramtypes", [tabs_1.Tabs,
        app_1.App,
        config_1.Config,
        platform_1.Platform,
        core_1.ElementRef,
        core_1.NgZone,
        core_1.Renderer,
        core_1.ComponentFactoryResolver,
        core_1.ChangeDetectorRef,
        gesture_controller_1.GestureController,
        transition_controller_1.TransitionController,
        deep_linker_1.DeepLinker,
        dom_controller_1.DomController,
        core_1.ErrorHandler])
], Tab);
exports.Tab = Tab;
//# sourceMappingURL=tab.js.map
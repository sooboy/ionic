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
const app_1 = require("../app/app");
const backdrop_1 = require("../backdrop/backdrop");
const config_1 = require("../../config/config");
const content_1 = require("../content/content");
const dom_controller_1 = require("../../platform/dom-controller");
const gesture_controller_1 = require("../../gestures/gesture-controller");
const util_1 = require("../../util/util");
const keyboard_1 = require("../../platform/keyboard");
const menu_gestures_1 = require("./menu-gestures");
const menu_controller_1 = require("../app/menu-controller");
const nav_1 = require("../nav/nav");
const platform_1 = require("../../platform/platform");
const ui_event_manager_1 = require("../../gestures/ui-event-manager");
const split_pane_1 = require("../split-pane/split-pane");
/**
 * @name Menu
 * @description
 * The Menu component is a navigation drawer that slides in from the side of the current
 * view. By default, it slides in from the left, but the side can be overridden. The menu
 * will be displayed differently based on the mode, however the display type can be changed
 * to any of the available [menu types](#menu-types). The menu element should be a sibling
 * to the app's content element. There can be any number of menus attached to the content.
 * These can be controlled from the templates, or programmatically using the [MenuController](../../app/MenuController).
 *
 * @usage
 *
 * ```html
 * <ion-menu [content]="mycontent">
 *   <ion-content>
 *     <ion-list>
 *       <p>some menu content, could be list items</p>
 *     </ion-list>
 *   </ion-content>
 * </ion-menu>
 *
 * <ion-nav #mycontent [root]="rootPage"></ion-nav>
 * ```
 *
 * To add a menu to an app, the `<ion-menu>` element should be added as a sibling to the `ion-nav` it will belongs
 * to. A [local variable](https://angular.io/docs/ts/latest/guide/user-input.html#local-variables)
 * should be added to the `ion-nav` and passed to the `ion-menu`s `content` property.
 *
 * This tells the menu what it is bound to and what element to watch for gestures.
 * In the below example, `content` is using [property binding](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#property-binding)
 * because `mycontent` is a reference to the `<ion-nav>` element, and not a string.
 *
 *
 * ### Opening/Closing Menus
 *
 * There are several ways to open or close a menu. The menu can be **toggled** open or closed
 * from the template using the [MenuToggle](../MenuToggle) directive. It can also be
 * **closed** from the template using the [MenuClose](../MenuClose) directive. To display a menu
 * programmatically, inject the [MenuController](../MenuController) provider and call any of the
 * `MenuController` methods.
 *
 *
 * ### Menu Types
 *
 * The menu supports several display types: `overlay`, `reveal` and `push`. By default,
 * it will use the correct type based on the mode, but this can be changed. The default
 * type for both Material Design and Windows mode is `overlay`, and `reveal` is the default
 * type for iOS mode. The menu type can be changed in the app's [config](../../config/Config)
 * via the `menuType` property, or passed in the `type` property on the `<ion-menu>` element.
 * See [usage](#usage) below for examples of changing the menu type.
 *
 *
 * ### Navigation Bar Behavior
 *
 * If a [MenuToggle](../MenuToggle) button is added to the [Navbar](../../navbar/Navbar) of
 * a page, the button will only appear when the page it's in is currently a root page. The
 * root page is the initial page loaded in the app, or a page that has been set as the root
 * using the [setRoot](../../nav/NavController/#setRoot) method on the [NavController](../../nav/NavController).
 *
 * For example, say the application has two pages, `Page1` and `Page2`, and both have a
 * `MenuToggle` button in their navigation bars. Assume the initial page loaded into the app
 * is `Page1`, making it the root page. `Page1` will display the `MenuToggle` button, but once
 * `Page2` is pushed onto the navigation stack, the `MenuToggle` will not be displayed.
 *
 *
 * ### Persistent Menus
 *
 * Persistent menus display the [MenuToggle](../MenuToggle) button in the [Navbar](../../navbar/Navbar)
 * on all pages in the navigation stack. To make a menu persistent set `persistent` to `true` on the
 * `<ion-menu>` element. Note that this will only affect the `MenuToggle` button in the `Navbar` attached
 * to the `Menu` with `persistent` set to true, any other `MenuToggle` buttons will not be affected.
 * ### Menu Side
 *
 * By default, menus slide in from the left, but this can be overridden by passing `right`
 * to the `side` property:
 *
 * ```html
 * <ion-menu side="right" [content]="mycontent">...</ion-menu>
 * ```
 *
 *
 * ### Menu Type
 *
 * The menu type can be changed by passing the value to `type` on the `<ion-menu>`:
 *
 * ```html
 * <ion-menu type="overlay" [content]="mycontent">...</ion-menu>
 * ```
 *
 * It can also be set in the app's config. The below will set the menu type to
 * `push` for all modes, and then set the type to `overlay` for the `ios` mode.
 *
 * ```ts
 * // in NgModules
 *
 * imports: [
 *   IonicModule.forRoot(MyApp,{
 *     menuType: 'push',
 *     platforms: {
 *       ios: {
 *         menuType: 'overlay',
 *       }
 *     }
 *   })
 * ],
 * ```
 *
 *
 * ### Displaying the Menu
 *
 * To toggle a menu from the template, add a button with the `menuToggle`
 * directive anywhere in the page's template:
 *
 * ```html
 * <button ion-button menuToggle>Toggle Menu</button>
 * ```
 *
 * To close a menu, add the `menuClose` button. It can be added anywhere
 * in the content, or even the menu itself. Below it is added to the menu's
 * content:
 *
 * ```html
 * <ion-menu [content]="mycontent">
 *   <ion-content>
 *     <ion-list>
 *       <ion-item menuClose detail-none>Close Menu</ion-item>
 *     </ion-list>
 *   </ion-content>
 * </ion-menu>
 * ```
 *
 * See the [MenuToggle](../MenuToggle) and [MenuClose](../MenuClose) docs
 * for more information on these directives.
 *
 * The menu can also be controlled from the Page by using the `MenuController`.
 * Inject the `MenuController` provider into the page and then call any of its
 * methods. In the below example, the `openMenu` method will open the menu
 * when it is called.
 *
 * ```ts
 * import { Component } from '@angular/core';
 * import { MenuController } from 'ionic-angular';
 *
 * @Component({...})
 * export class MyPage {
 *  constructor(public menuCtrl: MenuController) {}
 *
 *  openMenu() {
 *    this.menuCtrl.open();
 *  }
 * }
 * ```
 *
 * See the [MenuController](../../app/MenuController) API docs for all of the methods
 * and usage information.
 *
 *
 * @demo /docs/demos/src/menu/
 *
 * @see {@link /docs/components#menus Menu Component Docs}
 * @see {@link ../../app/MenuController MenuController API Docs}
 * @see {@link ../../nav/Nav Nav API Docs}
 * @see {@link ../../nav/NavController NavController API Docs}
 */
let Menu = Menu_1 = class Menu {
    constructor(_menuCtrl, _elementRef, _config, _plt, _renderer, _keyboard, _gestureCtrl, _domCtrl, _app) {
        this._menuCtrl = _menuCtrl;
        this._elementRef = _elementRef;
        this._config = _config;
        this._plt = _plt;
        this._renderer = _renderer;
        this._keyboard = _keyboard;
        this._gestureCtrl = _gestureCtrl;
        this._domCtrl = _domCtrl;
        this._app = _app;
        this._isSwipeEnabled = true;
        this._isAnimating = false;
        this._isPersistent = false;
        this._init = false;
        this._isPane = false;
        /**
         * @hidden
         */
        this.isOpen = false;
        /**
         * @hidden
         */
        this.isRightSide = false;
        /**
         * @output {event} Emitted when the menu is being dragged open.
         */
        this.ionDrag = new core_1.EventEmitter();
        /**
         * @output {event} Emitted when the menu has been opened.
         */
        this.ionOpen = new core_1.EventEmitter();
        /**
         * @output {event} Emitted when the menu has been closed.
         */
        this.ionClose = new core_1.EventEmitter();
        this._events = new ui_event_manager_1.UIEventManager(_plt);
        this._gestureBlocker = _gestureCtrl.createBlocker({
            disable: [gesture_controller_1.GESTURE_GO_BACK_SWIPE]
        });
        this.side = 'start';
    }
    /**
     * @input {boolean} If true, the menu is enabled. Default `true`.
     */
    get enabled() {
        return this._isEnabled;
    }
    set enabled(val) {
        const isEnabled = util_1.isTrueProperty(val);
        this.enable(isEnabled);
    }
    /**
     * @input {string} Which side of the view the menu should be placed. Default `"left"`.
     */
    get side() {
        return this._side;
    }
    set side(val) {
        this.isRightSide = util_1.isRightSide(val, this._plt.isRTL);
        if (this.isRightSide) {
            this._side = 'right';
        }
        else {
            this._side = 'left';
        }
    }
    /**
     * @input {boolean} If true, swiping the menu is enabled. Default `true`.
     */
    get swipeEnabled() {
        return this._isSwipeEnabled;
    }
    set swipeEnabled(val) {
        const isEnabled = util_1.isTrueProperty(val);
        this.swipeEnable(isEnabled);
    }
    /**
     * @input {boolean} If true, the menu will persist on child pages.
     */
    get persistent() {
        return this._isPersistent;
    }
    set persistent(val) {
        this._isPersistent = util_1.isTrueProperty(val);
    }
    /**
     * @hidden
     */
    ngOnInit() {
        this._init = true;
        let content = this.content;
        this._cntEle = (content instanceof Node) ? content : content && content.getNativeElement && content.getNativeElement();
        // requires content element
        if (!this._cntEle) {
            return console.error('Menu: must have a [content] element to listen for drag events on. Example:\n\n<ion-menu [content]="content"></ion-menu>\n\n<ion-nav #content></ion-nav>');
        }
        this.setElementAttribute('side', this._side);
        // normalize the "type"
        if (!this.type) {
            this.type = this._config.get('menuType');
        }
        this.setElementAttribute('type', this.type);
        // add the gestures
        this._gesture = new menu_gestures_1.MenuContentGesture(this._plt, this, this._gestureCtrl, this._domCtrl);
        // add menu's content classes
        this._cntEle.classList.add('menu-content');
        this._cntEle.classList.add('menu-content-' + this.type);
        let isEnabled = this._isEnabled;
        if (isEnabled === true || typeof isEnabled === 'undefined') {
            // check if more than one menu is on the same side
            isEnabled = !this._menuCtrl.getMenus().some(m => {
                return m.side === this.side && m.enabled;
            });
        }
        // register this menu with the app's menu controller
        this._menuCtrl._register(this);
        // mask it as enabled / disabled
        this.enable(isEnabled);
    }
    /**
     * @hidden
     */
    onBackdropClick(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this._menuCtrl.close();
    }
    /**
     * @hidden
     */
    _getType() {
        if (!this._type) {
            this._type = menu_controller_1.MenuController.create(this.type, this, this._plt);
            if (this._config.get('animate') === false) {
                this._type.ani.duration(0);
            }
        }
        return this._type;
    }
    /**
     * @hidden
     */
    setOpen(shouldOpen, animated = true) {
        // If the menu is disabled or it is currenly being animated, let's do nothing
        if ((shouldOpen === this.isOpen) || !this._canOpen() || this._isAnimating) {
            return Promise.resolve(this.isOpen);
        }
        return new Promise(resolve => {
            this._before();
            this._getType().setOpen(shouldOpen, animated, () => {
                this._after(shouldOpen);
                resolve(this.isOpen);
            });
        });
    }
    _forceClosing() {
        util_1.assert(this.isOpen, 'menu cannot be closed');
        this._isAnimating = true;
        this._getType().setOpen(false, false, () => {
            this._after(false);
        });
    }
    /**
     * @hidden
     */
    canSwipe() {
        return this._isSwipeEnabled &&
            !this._isAnimating &&
            this._canOpen() &&
            this._app.isEnabled();
    }
    /**
     * @hidden
     */
    isAnimating() {
        return this._isAnimating;
    }
    _swipeBeforeStart() {
        if (!this.canSwipe()) {
            util_1.assert(false, 'canSwipe() has to be true');
            return;
        }
        this._before();
    }
    _swipeStart() {
        if (!this._isAnimating) {
            util_1.assert(false, '_isAnimating has to be true');
            return;
        }
        this._getType().setProgressStart(this.isOpen);
    }
    _swipeProgress(stepValue) {
        if (!this._isAnimating) {
            util_1.assert(false, '_isAnimating has to be true');
            return;
        }
        this._getType().setProgessStep(stepValue);
        const ionDrag = this.ionDrag;
        if (ionDrag.observers.length > 0) {
            ionDrag.emit(stepValue);
        }
    }
    _swipeEnd(shouldCompleteLeft, shouldCompleteRight, stepValue, velocity) {
        if (!this._isAnimating) {
            util_1.assert(false, '_isAnimating has to be true');
            return;
        }
        // user has finished dragging the menu
        const isRightSide = this.isRightSide;
        const isRTL = this._plt.isRTL;
        const opening = !this.isOpen;
        const shouldComplete = (opening)
            ? (isRightSide !== isRTL) ? shouldCompleteLeft : shouldCompleteRight
            : (isRightSide !== isRTL) ? shouldCompleteRight : shouldCompleteLeft;
        this._getType().setProgressEnd(shouldComplete, stepValue, velocity, (isOpen) => {
            console.debug('menu, swipeEnd', this.side);
            this._after(isOpen);
        });
    }
    _before() {
        util_1.assert(!this._isAnimating, '_before() should not be called while animating');
        // this places the menu into the correct location before it animates in
        // this css class doesn't actually kick off any animations
        this.setElementClass('show-menu', true);
        this.backdrop.setElementClass('show-backdrop', true);
        this.resize();
        this._keyboard.close();
        this._isAnimating = true;
    }
    _after(isOpen) {
        util_1.assert(this._isAnimating, '_before() should be called while animating');
        this._app.setEnabled(false, 100);
        // keep opening/closing the menu disabled for a touch more yet
        // only add listeners/css if it's enabled and isOpen
        // and only remove listeners/css if it's not open
        // emit opened/closed events
        this.isOpen = isOpen;
        this._isAnimating = false;
        this._events.unlistenAll();
        if (isOpen) {
            // Disable swipe to go back gesture
            this._gestureBlocker.block();
            this._cntEle.classList.add('menu-content-open');
            let callback = this.onBackdropClick.bind(this);
            this._events.listen(this._cntEle, 'click', callback, { capture: true });
            this._events.listen(this.backdrop.getNativeElement(), 'click', callback, { capture: true });
            this.ionOpen.emit(true);
        }
        else {
            // Enable swipe to go back gesture
            this._gestureBlocker.unblock();
            this._cntEle.classList.remove('menu-content-open');
            this.setElementClass('show-menu', false);
            this.backdrop.setElementClass('show-menu', false);
            this.ionClose.emit(true);
        }
    }
    /**
     * @hidden
     */
    open() {
        return this.setOpen(true);
    }
    /**
     * @hidden
     */
    close() {
        return this.setOpen(false);
    }
    /**
     * @hidden
     */
    resize() {
        const content = this.menuContent
            ? this.menuContent
            : this.menuNav;
        content && content.resize();
    }
    /**
     * @hidden
     */
    toggle() {
        return this.setOpen(!this.isOpen);
    }
    _canOpen() {
        return this._isEnabled && !this._isPane;
    }
    /**
     * @hidden
     */
    _updateState() {
        const canOpen = this._canOpen();
        // Close menu inmediately
        if (!canOpen && this.isOpen) {
            util_1.assert(this._init, 'menu must be initialized');
            // close if this menu is open, and should not be enabled
            this._forceClosing();
        }
        if (this._isEnabled && this._menuCtrl) {
            this._menuCtrl._setActiveMenu(this);
        }
        if (!this._init) {
            return;
        }
        const gesture = this._gesture;
        // only listen/unlisten if the menu has initialized
        if (canOpen && this._isSwipeEnabled && !gesture.isListening) {
            // should listen, but is not currently listening
            console.debug('menu, gesture listen', this.side);
            gesture.listen();
        }
        else if (gesture.isListening && (!canOpen || !this._isSwipeEnabled)) {
            // should not listen, but is currently listening
            console.debug('menu, gesture unlisten', this.side);
            gesture.unlisten();
        }
        if (this.isOpen || (this._isPane && this._isEnabled)) {
            this.resize();
        }
        util_1.assert(!this._isAnimating, 'can not be animating');
    }
    /**
     * @hidden
     */
    enable(shouldEnable) {
        this._isEnabled = shouldEnable;
        this.setElementClass('menu-enabled', shouldEnable);
        this._updateState();
        return this;
    }
    /**
     * @internal
     */
    initPane() {
        return false;
    }
    /**
     * @internal
     */
    paneChanged(isPane) {
        this._isPane = isPane;
        this._updateState();
    }
    /**
     * @hidden
     */
    swipeEnable(shouldEnable) {
        this._isSwipeEnabled = shouldEnable;
        this._updateState();
        return this;
    }
    /**
     * @hidden
     */
    getNativeElement() {
        return this._elementRef.nativeElement;
    }
    /**
     * @hidden
     */
    getMenuElement() {
        return this.getNativeElement().querySelector('.menu-inner');
    }
    /**
     * @hidden
     */
    getContentElement() {
        return this._cntEle;
    }
    /**
     * @hidden
     */
    getBackdropElement() {
        return this.backdrop.getNativeElement();
    }
    /**
     * @hidden
     */
    width() {
        return this.getMenuElement().offsetWidth;
    }
    /**
     * @hidden
     */
    getMenuController() {
        return this._menuCtrl;
    }
    /**
     * @hidden
     */
    setElementClass(className, add) {
        this._renderer.setElementClass(this._elementRef.nativeElement, className, add);
    }
    /**
     * @hidden
     */
    setElementAttribute(attributeName, value) {
        this._renderer.setElementAttribute(this._elementRef.nativeElement, attributeName, value);
    }
    /**
     * @hidden
     */
    getElementRef() {
        return this._elementRef;
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        this._menuCtrl._unregister(this);
        this._events.destroy();
        this._gesture && this._gesture.destroy();
        this._type && this._type.destroy();
        this._gesture = null;
        this._type = null;
        this._cntEle = null;
    }
};
__decorate([
    core_1.ViewChild(backdrop_1.Backdrop),
    __metadata("design:type", backdrop_1.Backdrop)
], Menu.prototype, "backdrop", void 0);
__decorate([
    core_1.ContentChild(content_1.Content),
    __metadata("design:type", content_1.Content)
], Menu.prototype, "menuContent", void 0);
__decorate([
    core_1.ContentChild(nav_1.Nav),
    __metadata("design:type", nav_1.Nav)
], Menu.prototype, "menuNav", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Menu.prototype, "content", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Menu.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Menu.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Menu.prototype, "enabled", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Menu.prototype, "side", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Menu.prototype, "swipeEnabled", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Menu.prototype, "persistent", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], Menu.prototype, "maxEdgeStart", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Menu.prototype, "ionDrag", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Menu.prototype, "ionOpen", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Menu.prototype, "ionClose", void 0);
Menu = Menu_1 = __decorate([
    core_1.Component({
        selector: 'ion-menu',
        template: '<div class="menu-inner"><ng-content></ng-content></div>' +
            '<ion-backdrop></ion-backdrop>',
        host: {
            'role': 'navigation'
        },
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [{ provide: split_pane_1.RootNode, useExisting: core_1.forwardRef(() => Menu_1) }]
    }),
    __metadata("design:paramtypes", [menu_controller_1.MenuController,
        core_1.ElementRef,
        config_1.Config,
        platform_1.Platform,
        core_1.Renderer,
        keyboard_1.Keyboard,
        gesture_controller_1.GestureController,
        dom_controller_1.DomController,
        app_1.App])
], Menu);
exports.Menu = Menu;
var Menu_1;
//# sourceMappingURL=menu.js.map
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
const util_1 = require("../util/util");
const activator_1 = require("./activator");
const app_1 = require("../components/app/app");
const config_1 = require("../config/config");
const dom_controller_1 = require("../platform/dom-controller");
const gesture_controller_1 = require("../gestures/gesture-controller");
const platform_1 = require("../platform/platform");
const dom_1 = require("../util/dom");
const pointer_events_1 = require("../gestures/pointer-events");
const ripple_1 = require("./ripple");
const ui_event_manager_1 = require("../gestures/ui-event-manager");
/**
 * @hidden
 */
let TapClick = class TapClick {
    constructor(config, plt, dom, app, gestureCtrl) {
        this.plt = plt;
        this.app = app;
        this.gestureCtrl = gestureCtrl;
        this.disableClick = 0;
        this.events = new ui_event_manager_1.UIEventManager(plt);
        let activator = config.get('activator');
        if (activator === 'ripple') {
            this.activator = new ripple_1.RippleActivator(app, config, dom);
        }
        else if (activator === 'highlight') {
            this.activator = new activator_1.Activator(app, config, dom);
        }
        this.usePolyfill = config.getBoolean('tapPolyfill');
        console.debug('Using usePolyfill:', this.usePolyfill);
        const doc = plt.doc();
        this.events.listen(doc, 'click', this.click.bind(this), { passive: false, capture: true });
        this.pointerEvents = this.events.pointerEvents({
            element: doc,
            pointerDown: this.pointerStart.bind(this),
            pointerMove: this.pointerMove.bind(this),
            pointerUp: this.pointerEnd.bind(this),
            passive: true
        });
        this.pointerEvents.mouseWait = DISABLE_NATIVE_CLICK_AMOUNT;
    }
    pointerStart(ev) {
        if (this.startCoord) {
            return false;
        }
        if (!this.app.isEnabled()) {
            return false;
        }
        this.lastTouchEnd = 0;
        this.dispatchClick = true;
        if (this.plt.doc() === ev.target) {
            this.startCoord = dom_1.pointerCoord(ev);
            return true;
        }
        let activatableEle = getActivatableTarget(ev.target);
        if (!activatableEle) {
            this.startCoord = null;
            return false;
        }
        this.startCoord = dom_1.pointerCoord(ev);
        this.activator && this.activator.downAction(ev, activatableEle, this.startCoord);
        return true;
    }
    pointerMove(ev) {
        if (this.startCoord && this.shouldCancelEvent(ev)) {
            this.pointerCancel(ev);
        }
    }
    pointerEnd(ev, pointerEventType) {
        if (!this.dispatchClick)
            return;
        util_1.runInDev(() => this.lastTouchEnd = Date.now());
        if (!this.startCoord) {
            return;
        }
        if (this.activator && ev.target !== this.plt.doc()) {
            let activatableEle = getActivatableTarget(ev.target);
            if (activatableEle) {
                this.activator.upAction(ev, activatableEle, this.startCoord);
            }
        }
        if (this.usePolyfill && pointerEventType === pointer_events_1.POINTER_EVENT_TYPE_TOUCH && this.app.isEnabled()) {
            this.handleTapPolyfill(ev);
        }
        this.startCoord = null;
    }
    pointerCancel(ev) {
        console.debug(`pointerCancel from ${ev.type} ${Date.now()}`);
        this.startCoord = null;
        this.dispatchClick = false;
        this.activator && this.activator.clearState(false);
        this.pointerEvents.stop();
    }
    shouldCancelEvent(ev) {
        return (this.app.isScrolling() ||
            this.gestureCtrl.isCaptured() ||
            dom_1.hasPointerMoved(POINTER_TOLERANCE, this.startCoord, dom_1.pointerCoord(ev)));
    }
    click(ev) {
        if (this.shouldCancelClick(ev)) {
            ev.preventDefault();
            ev.stopPropagation();
            return;
        }
        if (this.activator && this.plt.doc() !== ev.target) {
            // cool, a click is gonna happen, let's tell the activator
            // so the element can get the given "active" style
            const activatableEle = getActivatableTarget(ev.target);
            if (activatableEle) {
                this.activator.clickAction(ev, activatableEle, this.startCoord);
            }
        }
        util_1.runInDev(() => this.profileClickDelay(ev));
    }
    shouldCancelClick(ev) {
        if (this.usePolyfill) {
            if (!ev.isIonicTap && this.isDisabledNativeClick()) {
                console.debug('click prevent: nativeClick');
                return true;
            }
        }
        else if (!this.dispatchClick) {
            console.debug('click prevent: tap-click');
            return true;
        }
        if (!this.app.isEnabled()) {
            console.debug('click prevent: appDisabled');
            return true;
        }
        if (this.gestureCtrl.isCaptured()) {
            console.debug('click prevent: tap-click (gesture is captured)');
            return true;
        }
        return false;
    }
    profileClickDelay(ev) {
        if (this.lastTouchEnd) {
            let diff = Date.now() - this.lastTouchEnd;
            if (diff < 100) {
                console.debug(`FAST click dispatched. Delay(ms):`, diff);
            }
            else {
                console.warn(`SLOW click dispatched. Delay(ms):`, diff, ev);
            }
            this.lastTouchEnd = null;
        }
        else {
            console.debug('Click dispatched. Unknown delay');
        }
    }
    handleTapPolyfill(ev) {
        util_1.assert(this.usePolyfill, 'this code should not be used if tapPolyfill is disabled');
        // only dispatch mouse click events from a touchend event
        // when tapPolyfill config is true, and the startCoordand endCoord
        // are not too far off from each other
        let endCoord = dom_1.pointerCoord(ev);
        if (dom_1.hasPointerMoved(POINTER_TOLERANCE, this.startCoord, endCoord)) {
            console.debug(`click from touch prevented by pointer moved`);
            return;
        }
        // prevent native mouse click events for XX amount of time
        this.disableClick = Date.now() + DISABLE_NATIVE_CLICK_AMOUNT;
        if (this.app.isScrolling()) {
            // do not fire off a click event while the app was scrolling
            console.debug(`click from touch prevented by scrolling ${Date.now()}`);
        }
        else {
            // dispatch a mouse click event
            console.debug(`create click from touch ${Date.now()}`);
            let clickEvent = this.plt.doc().createEvent('MouseEvents');
            clickEvent.initMouseEvent('click', true, true, this.plt.win(), 1, 0, 0, endCoord.x, endCoord.y, false, false, false, false, 0, null);
            clickEvent.isIonicTap = true;
            ev.target.dispatchEvent(clickEvent);
        }
    }
    isDisabledNativeClick() {
        return this.disableClick > Date.now();
    }
};
TapClick = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [config_1.Config,
        platform_1.Platform,
        dom_controller_1.DomController,
        app_1.App,
        gesture_controller_1.GestureController])
], TapClick);
exports.TapClick = TapClick;
function getActivatableTarget(ele) {
    let targetEle = ele;
    for (let x = 0; x < 10; x++) {
        if (!targetEle)
            break;
        if (isActivatable(targetEle)) {
            return targetEle;
        }
        targetEle = targetEle.parentElement;
    }
    return null;
}
/**
 * @hidden
 */
function isActivatable(ele) {
    if (ACTIVATABLE_ELEMENTS.indexOf(ele.tagName) > -1) {
        return true;
    }
    for (let i = 0, l = ACTIVATABLE_ATTRIBUTES.length; i < l; i++) {
        if (ele.hasAttribute && ele.hasAttribute(ACTIVATABLE_ATTRIBUTES[i])) {
            return true;
        }
    }
    return false;
}
exports.isActivatable = isActivatable;
const ACTIVATABLE_ELEMENTS = ['A', 'BUTTON'];
const ACTIVATABLE_ATTRIBUTES = ['tappable', 'ion-button'];
const POINTER_TOLERANCE = 100;
const DISABLE_NATIVE_CLICK_AMOUNT = 2500;
/**
 * @hidden
 */
function setupTapClick(config, plt, dom, app, gestureCtrl) {
    return function () {
        return new TapClick(config, plt, dom, app, gestureCtrl);
    };
}
exports.setupTapClick = setupTapClick;
//# sourceMappingURL=tap-click.js.map
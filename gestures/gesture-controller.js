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
const app_1 = require("../components/app/app");
const util_1 = require("../util/util");
/** @hidden */
exports.GESTURE_GO_BACK_SWIPE = 'goback-swipe';
/** @hidden */
exports.GESTURE_MENU_SWIPE = 'menu-swipe';
/** @hidden */
exports.GESTURE_ITEM_SWIPE = 'item-swipe';
/** @hidden */
exports.GESTURE_REFRESHER = 'refresher';
/** @hidden */
exports.GESTURE_TOGGLE = 'toggle';
/** @hidden */
exports.GESTURE_PRIORITY_SLIDING_ITEM = -10;
/** @hidden */
exports.GESTURE_PRIORITY_REFRESHER = 0;
/** @hidden */
exports.GESTURE_PRIORITY_MENU_SWIPE = 10;
/** @hidden */
exports.GESTURE_PRIORITY_GO_BACK_SWIPE = 20;
/** @hidden */
exports.GESTURE_PRIORITY_TOGGLE = 30;
/**
* @hidden
*/
exports.BLOCK_ALL = {
    disable: [exports.GESTURE_MENU_SWIPE, exports.GESTURE_GO_BACK_SWIPE],
    disableScroll: true
};
/**
* @hidden
*/
let GestureController = class GestureController {
    constructor(_app) {
        this._app = _app;
        this.id = 1;
        this.requestedStart = {};
        this.disabledGestures = {};
        this.disabledScroll = new Set();
        this.capturedID = null;
    }
    createGesture(opts) {
        if (!opts.name) {
            throw new Error('name is undefined');
        }
        return new GestureDelegate(opts.name, this.newID(), this, opts.priority || 0, !!opts.disableScroll);
    }
    createBlocker(opts = {}) {
        return new BlockerDelegate(this.newID(), this, opts.disable, !!opts.disableScroll);
    }
    newID() {
        let id = this.id;
        this.id++;
        return id;
    }
    start(gestureName, id, priority) {
        if (!this.canStart(gestureName)) {
            delete this.requestedStart[id];
            return false;
        }
        this.requestedStart[id] = priority;
        return true;
    }
    capture(gestureName, id, priority) {
        if (!this.start(gestureName, id, priority)) {
            return false;
        }
        let requestedStart = this.requestedStart;
        let maxPriority = -10000;
        for (let gestureID in requestedStart) {
            maxPriority = Math.max(maxPriority, requestedStart[gestureID]);
        }
        if (maxPriority === priority) {
            this.capturedID = id;
            this.requestedStart = {};
            console.debug(`${gestureName} captured!`);
            return true;
        }
        delete requestedStart[id];
        console.debug(`${gestureName} can not start because it is has lower priority`);
        return false;
    }
    release(id) {
        delete this.requestedStart[id];
        if (this.capturedID && id === this.capturedID) {
            this.capturedID = null;
        }
    }
    disableGesture(gestureName, id) {
        let set = this.disabledGestures[gestureName];
        if (!set) {
            set = new Set();
            this.disabledGestures[gestureName] = set;
        }
        set.add(id);
    }
    enableGesture(gestureName, id) {
        let set = this.disabledGestures[gestureName];
        if (set) {
            set.delete(id);
        }
    }
    disableScroll(id) {
        let isEnabled = !this.isScrollDisabled();
        this.disabledScroll.add(id);
        if (this._app && isEnabled && this.isScrollDisabled()) {
            console.debug('GestureController: Disabling scrolling');
            this._app._setDisableScroll(true);
        }
    }
    enableScroll(id) {
        let isDisabled = this.isScrollDisabled();
        this.disabledScroll.delete(id);
        if (this._app && isDisabled && !this.isScrollDisabled()) {
            console.debug('GestureController: Enabling scrolling');
            this._app._setDisableScroll(false);
        }
    }
    canStart(gestureName) {
        if (this.capturedID) {
            console.debug(`${gestureName} can not start becuse gesture was already captured`);
            // a gesture already captured
            return false;
        }
        if (this.isDisabled(gestureName)) {
            console.debug(`${gestureName} is disabled`);
            return false;
        }
        return true;
    }
    isCaptured() {
        return !!this.capturedID;
    }
    isScrollDisabled() {
        return this.disabledScroll.size > 0;
    }
    isDisabled(gestureName) {
        let disabled = this.disabledGestures[gestureName];
        return !!(disabled && disabled.size > 0);
    }
};
GestureController = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(core_1.forwardRef(() => app_1.App))),
    __metadata("design:paramtypes", [app_1.App])
], GestureController);
exports.GestureController = GestureController;
/**
* @hidden
*/
class GestureDelegate {
    constructor(name, id, controller, priority, disableScroll) {
        this.name = name;
        this.id = id;
        this.controller = controller;
        this.priority = priority;
        this.disableScroll = disableScroll;
    }
    canStart() {
        if (!this.controller) {
            util_1.assert(false, 'delegate was destroyed');
            return false;
        }
        return this.controller.canStart(this.name);
    }
    start() {
        if (!this.controller) {
            util_1.assert(false, 'delegate was destroyed');
            return false;
        }
        return this.controller.start(this.name, this.id, this.priority);
    }
    capture() {
        if (!this.controller) {
            util_1.assert(false, 'delegate was destroyed');
            return false;
        }
        let captured = this.controller.capture(this.name, this.id, this.priority);
        if (captured && this.disableScroll) {
            this.controller.disableScroll(this.id);
        }
        return captured;
    }
    release() {
        if (!this.controller) {
            util_1.assert(false, 'delegate was destroyed');
            return;
        }
        this.controller.release(this.id);
        if (this.disableScroll) {
            this.controller.enableScroll(this.id);
        }
    }
    destroy() {
        this.release();
        this.controller = null;
    }
}
exports.GestureDelegate = GestureDelegate;
/**
* @hidden
*/
class BlockerDelegate {
    constructor(id, controller, disable, disableScroll) {
        this.id = id;
        this.controller = controller;
        this.disable = disable;
        this.disableScroll = disableScroll;
        this.blocked = false;
    }
    block() {
        if (!this.controller) {
            util_1.assert(false, 'delegate was destroyed');
            return;
        }
        if (this.disable) {
            this.disable.forEach(gesture => {
                this.controller.disableGesture(gesture, this.id);
            });
        }
        if (this.disableScroll) {
            this.controller.disableScroll(this.id);
        }
        this.blocked = true;
    }
    unblock() {
        if (!this.controller) {
            util_1.assert(false, 'delegate was destroyed');
            return;
        }
        if (this.disable) {
            this.disable.forEach(gesture => {
                this.controller.enableGesture(gesture, this.id);
            });
        }
        if (this.disableScroll) {
            this.controller.enableScroll(this.id);
        }
        this.blocked = false;
    }
    destroy() {
        this.unblock();
        this.controller = null;
    }
}
exports.BlockerDelegate = BlockerDelegate;
//# sourceMappingURL=gesture-controller.js.map
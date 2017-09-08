"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util/util");
/**
 * @hidden
 */
class PointerEvents {
    constructor(plt, ele, pointerDown, pointerMove, pointerUp, option) {
        this.plt = plt;
        this.ele = ele;
        this.pointerDown = pointerDown;
        this.pointerMove = pointerMove;
        this.pointerUp = pointerUp;
        this.option = option;
        this.rmTouchStart = null;
        this.rmTouchMove = null;
        this.rmTouchEnd = null;
        this.rmTouchCancel = null;
        this.rmMouseStart = null;
        this.rmMouseMove = null;
        this.rmMouseUp = null;
        this.lastTouchEvent = 0;
        this.mouseWait = 2 * 1000;
        util_1.assert(ele, 'element can not be null');
        util_1.assert(pointerDown, 'pointerDown can not be null');
        this.bindTouchEnd = this.handleTouchEnd.bind(this);
        this.bindMouseUp = this.handleMouseUp.bind(this);
        this.rmTouchStart = this.plt.registerListener(ele, 'touchstart', this.handleTouchStart.bind(this), option);
        this.rmMouseStart = this.plt.registerListener(ele, 'mousedown', this.handleMouseDown.bind(this), option);
    }
    handleTouchStart(ev) {
        util_1.assert(this.ele, 'element can not be null');
        util_1.assert(this.pointerDown, 'pointerDown can not be null');
        this.lastTouchEvent = Date.now() + this.mouseWait;
        this.lastEventType = exports.POINTER_EVENT_TYPE_TOUCH;
        if (!this.pointerDown(ev, exports.POINTER_EVENT_TYPE_TOUCH)) {
            return;
        }
        if (!this.rmTouchMove && this.pointerMove) {
            this.rmTouchMove = this.plt.registerListener(this.ele, 'touchmove', this.pointerMove, this.option);
        }
        if (!this.rmTouchEnd) {
            this.rmTouchEnd = this.plt.registerListener(this.ele, 'touchend', this.bindTouchEnd, this.option);
        }
        if (!this.rmTouchCancel) {
            this.rmTouchCancel = this.plt.registerListener(this.ele, 'touchcancel', this.bindTouchEnd, this.option);
        }
    }
    handleMouseDown(ev) {
        util_1.assert(this.ele, 'element can not be null');
        util_1.assert(this.pointerDown, 'pointerDown can not be null');
        if (this.lastTouchEvent > Date.now()) {
            console.debug('mousedown event dropped because of previous touch');
            return;
        }
        this.lastEventType = exports.POINTER_EVENT_TYPE_MOUSE;
        if (!this.pointerDown(ev, exports.POINTER_EVENT_TYPE_MOUSE)) {
            return;
        }
        if (!this.rmMouseMove && this.pointerMove) {
            this.rmMouseMove = this.plt.registerListener(this.plt.doc(), 'mousemove', this.pointerMove, this.option);
        }
        if (!this.rmMouseUp) {
            this.rmMouseUp = this.plt.registerListener(this.plt.doc(), 'mouseup', this.bindMouseUp, this.option);
        }
    }
    handleTouchEnd(ev) {
        this.stopTouch();
        this.pointerUp && this.pointerUp(ev, exports.POINTER_EVENT_TYPE_TOUCH);
    }
    handleMouseUp(ev) {
        this.stopMouse();
        this.pointerUp && this.pointerUp(ev, exports.POINTER_EVENT_TYPE_MOUSE);
    }
    stopTouch() {
        this.rmTouchMove && this.rmTouchMove();
        this.rmTouchEnd && this.rmTouchEnd();
        this.rmTouchCancel && this.rmTouchCancel();
        this.rmTouchMove = this.rmTouchEnd = this.rmTouchCancel = null;
    }
    stopMouse() {
        this.rmMouseMove && this.rmMouseMove();
        this.rmMouseUp && this.rmMouseUp();
        this.rmMouseMove = this.rmMouseUp = null;
    }
    stop() {
        this.stopTouch();
        this.stopMouse();
    }
    destroy() {
        this.rmTouchStart && this.rmTouchStart();
        this.rmMouseStart && this.rmMouseStart();
        this.stop();
        this.ele = this.pointerUp = this.pointerMove = this.pointerDown = this.rmTouchStart = this.rmMouseStart = null;
    }
}
exports.PointerEvents = PointerEvents;
exports.POINTER_EVENT_TYPE_MOUSE = 1;
exports.POINTER_EVENT_TYPE_TOUCH = 2;
//# sourceMappingURL=pointer-events.js.map
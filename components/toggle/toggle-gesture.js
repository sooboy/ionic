"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gesture_controller_1 = require("../../gestures/gesture-controller");
const pan_gesture_1 = require("../../gestures/pan-gesture");
const dom_1 = require("../../util/dom");
/**
 * @hidden
 */
class ToggleGesture extends pan_gesture_1.PanGesture {
    constructor(plt, toggle, gestureCtrl, domCtrl) {
        super(plt, toggle.getNativeElement(), {
            threshold: 0,
            zone: false,
            domController: domCtrl,
            gesture: gestureCtrl.createGesture({
                name: gesture_controller_1.GESTURE_TOGGLE,
                priority: gesture_controller_1.GESTURE_PRIORITY_TOGGLE
            })
        });
        this.toggle = toggle;
    }
    canStart() {
        return true;
    }
    onDragStart(ev) {
        ev.preventDefault();
        this.toggle._onDragStart(dom_1.pointerCoord(ev).x);
    }
    onDragMove(ev) {
        ev.preventDefault();
        this.toggle._onDragMove(dom_1.pointerCoord(ev).x);
    }
    onDragEnd(ev) {
        ev.preventDefault();
        this.toggle._onDragEnd(dom_1.pointerCoord(ev).x);
    }
}
exports.ToggleGesture = ToggleGesture;
//# sourceMappingURL=toggle-gesture.js.map
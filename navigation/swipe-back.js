"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util/util");
const gesture_controller_1 = require("../gestures/gesture-controller");
const slide_edge_gesture_1 = require("../gestures/slide-edge-gesture");
/**
 * @hidden
 */
class SwipeBackGesture extends slide_edge_gesture_1.SlideEdgeGesture {
    constructor(plt, _nav, gestureCtlr, domCtrl) {
        super(plt, plt.doc().body, {
            direction: 'x',
            edge: 'start',
            maxEdgeStart: 75,
            threshold: 5,
            zone: false,
            domController: domCtrl,
            gesture: gestureCtlr.createGesture({
                name: gesture_controller_1.GESTURE_GO_BACK_SWIPE,
                priority: gesture_controller_1.GESTURE_PRIORITY_GO_BACK_SWIPE,
                disableScroll: true
            })
        });
        this._nav = _nav;
    }
    canStart(ev) {
        // the gesture swipe angle must be mainly horizontal and the
        // gesture distance would be relatively short for a swipe back
        // and swipe back must be possible on this nav controller
        return (this._nav.canSwipeBack() &&
            super.canStart(ev));
    }
    onSlideBeforeStart(_ev) {
        this._nav.swipeBackStart();
    }
    onSlide(slide, ev) {
        ev.preventDefault();
        ev.stopPropagation();
        const stepValue = (slide.distance / slide.max);
        this._nav.swipeBackProgress(stepValue);
    }
    onSlideEnd(slide, _ev) {
        const velocity = slide.velocity;
        const currentStepValue = (slide.distance / slide.max);
        const isResetDirecction = velocity < 0;
        const isMovingFast = Math.abs(slide.velocity) > 0.4;
        const isInResetZone = Math.abs(slide.delta) < Math.abs(slide.max) * 0.5;
        const shouldComplete = !util_1.swipeShouldReset(isResetDirecction, isMovingFast, isInResetZone);
        this._nav.swipeBackEnd(shouldComplete, currentStepValue, velocity);
    }
}
exports.SwipeBackGesture = SwipeBackGesture;
//# sourceMappingURL=swipe-back.js.map
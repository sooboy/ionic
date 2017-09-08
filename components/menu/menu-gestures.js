"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gesture_controller_1 = require("../../gestures/gesture-controller");
const slide_edge_gesture_1 = require("../../gestures/slide-edge-gesture");
/**
 * Gesture attached to the content which the menu is assigned to
 */
class MenuContentGesture extends slide_edge_gesture_1.SlideEdgeGesture {
    constructor(plt, menu, gestureCtrl, domCtrl) {
        super(plt, plt.doc().body, {
            direction: 'x',
            edge: menu.side,
            threshold: 5,
            maxEdgeStart: menu.maxEdgeStart || 50,
            zone: false,
            passive: true,
            domController: domCtrl,
            gesture: gestureCtrl.createGesture({
                name: gesture_controller_1.GESTURE_MENU_SWIPE,
                priority: gesture_controller_1.GESTURE_PRIORITY_MENU_SWIPE,
                disableScroll: true
            })
        });
        this.menu = menu;
    }
    canStart(ev) {
        const menu = this.menu;
        if (!menu.canSwipe()) {
            return false;
        }
        if (menu.isOpen) {
            return true;
        }
        else if (menu.getMenuController().getOpen()) {
            return false;
        }
        return super.canStart(ev);
    }
    // Set CSS, then wait one frame for it to apply before sliding starts
    onSlideBeforeStart() {
        console.debug('menu gesture, onSlideBeforeStart', this.menu.side);
        this.menu._swipeBeforeStart();
    }
    onSlideStart() {
        console.debug('menu gesture, onSlideStart', this.menu.side);
        this.menu._swipeStart();
    }
    onSlide(slide) {
        const z = (this.menu.isRightSide !== this.plt.isRTL ? slide.min : slide.max);
        const stepValue = (slide.distance / z);
        this.menu._swipeProgress(stepValue);
    }
    onSlideEnd(slide) {
        let z = (this.menu.isRightSide !== this.plt.isRTL ? slide.min : slide.max);
        const currentStepValue = (slide.distance / z);
        const velocity = slide.velocity;
        z = Math.abs(z * 0.5);
        const shouldCompleteRight = (velocity >= 0)
            && (velocity > 0.2 || slide.delta > z);
        const shouldCompleteLeft = (velocity <= 0)
            && (velocity < -0.2 || slide.delta < -z);
        console.debug('menu gesture, onSlideEnd', this.menu.side, 'distance', slide.distance, 'delta', slide.delta, 'velocity', velocity, 'min', slide.min, 'max', slide.max, 'shouldCompleteLeft', shouldCompleteLeft, 'shouldCompleteRight', shouldCompleteRight, 'currentStepValue', currentStepValue);
        this.menu._swipeEnd(shouldCompleteLeft, shouldCompleteRight, currentStepValue, velocity);
    }
    getElementStartPos(slide) {
        const menu = this.menu;
        if (menu.isRightSide !== this.plt.isRTL) {
            return menu.isOpen ? slide.min : slide.max;
        }
        // left menu
        return menu.isOpen ? slide.max : slide.min;
    }
    getSlideBoundaries() {
        const menu = this.menu;
        if (menu.isRightSide !== this.plt.isRTL) {
            return {
                min: -menu.width(),
                max: 0
            };
        }
        // left menu
        return {
            min: 0,
            max: menu.width()
        };
    }
}
exports.MenuContentGesture = MenuContentGesture;
//# sourceMappingURL=menu-gestures.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../util/util", "../gestures/gesture-controller", "../gestures/slide-edge-gesture"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = require("../util/util");
    var gesture_controller_1 = require("../gestures/gesture-controller");
    var slide_edge_gesture_1 = require("../gestures/slide-edge-gesture");
    /**
     * @hidden
     */
    var SwipeBackGesture = (function (_super) {
        __extends(SwipeBackGesture, _super);
        /**
         * @param {?} plt
         * @param {?} _nav
         * @param {?} gestureCtlr
         * @param {?} domCtrl
         */
        function SwipeBackGesture(plt, _nav, gestureCtlr, domCtrl) {
            var _this = _super.call(this, plt, plt.doc().body, {
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
            }) || this;
            _this._nav = _nav;
            return _this;
        }
        /**
         * @param {?} ev
         * @return {?}
         */
        SwipeBackGesture.prototype.canStart = function (ev) {
            // the gesture swipe angle must be mainly horizontal and the
            // gesture distance would be relatively short for a swipe back
            // and swipe back must be possible on this nav controller
            return (this._nav.canSwipeBack() &&
                _super.prototype.canStart.call(this, ev));
        };
        /**
         * @param {?} _ev
         * @return {?}
         */
        SwipeBackGesture.prototype.onSlideBeforeStart = function (_ev) {
            this._nav.swipeBackStart();
        };
        /**
         * @param {?} slide
         * @param {?} ev
         * @return {?}
         */
        SwipeBackGesture.prototype.onSlide = function (slide, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            var /** @type {?} */ stepValue = (slide.distance / slide.max);
            this._nav.swipeBackProgress(stepValue);
        };
        /**
         * @param {?} slide
         * @param {?} _ev
         * @return {?}
         */
        SwipeBackGesture.prototype.onSlideEnd = function (slide, _ev) {
            var /** @type {?} */ velocity = slide.velocity;
            var /** @type {?} */ currentStepValue = (slide.distance / slide.max);
            var /** @type {?} */ isResetDirecction = velocity < 0;
            var /** @type {?} */ isMovingFast = Math.abs(slide.velocity) > 0.4;
            var /** @type {?} */ isInResetZone = Math.abs(slide.delta) < Math.abs(slide.max) * 0.5;
            var /** @type {?} */ shouldComplete = !util_1.swipeShouldReset(isResetDirecction, isMovingFast, isInResetZone);
            this._nav.swipeBackEnd(shouldComplete, currentStepValue, velocity);
        };
        return SwipeBackGesture;
    }(slide_edge_gesture_1.SlideEdgeGesture));
    exports.SwipeBackGesture = SwipeBackGesture;
    function SwipeBackGesture_tsickle_Closure_declarations() {
        /** @type {?} */
        SwipeBackGesture.prototype._nav;
    }
});
//# sourceMappingURL=swipe-back.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util/util");
const app_constants_1 = require("../app/app-constants");
const toast_component_1 = require("./toast-component");
const toast_transitions_1 = require("./toast-transitions");
const view_controller_1 = require("../../navigation/view-controller");
/**
 * @hidden
 */
class Toast extends view_controller_1.ViewController {
    constructor(app, opts = {}, config) {
        opts.dismissOnPageChange = util_1.isPresent(opts.dismissOnPageChange) ? !!opts.dismissOnPageChange : false;
        super(toast_component_1.ToastCmp, opts, null);
        this._app = app;
        // set the position to the bottom if not provided
        if (!opts.position || !this.isValidPosition(opts.position)) {
            opts.position = TOAST_POSITION_BOTTOM;
        }
        this.isOverlay = true;
        config.setTransition('toast-slide-in', toast_transitions_1.ToastSlideIn);
        config.setTransition('toast-slide-out', toast_transitions_1.ToastSlideOut);
        config.setTransition('toast-md-slide-in', toast_transitions_1.ToastMdSlideIn);
        config.setTransition('toast-md-slide-out', toast_transitions_1.ToastMdSlideOut);
        config.setTransition('toast-wp-slide-out', toast_transitions_1.ToastWpPopOut);
        config.setTransition('toast-wp-slide-in', toast_transitions_1.ToastWpPopIn);
    }
    /**
    * @hidden
    */
    getTransitionName(direction) {
        let key = 'toast' + (direction === 'back' ? 'Leave' : 'Enter');
        return this._nav && this._nav.config.get(key);
    }
    /**
    * @hidden
    */
    isValidPosition(position) {
        return position === TOAST_POSITION_TOP || position === TOAST_POSITION_MIDDLE || position === TOAST_POSITION_BOTTOM;
    }
    /**
     * @param {string} message  Toast message content
     */
    setMessage(message) {
        this.data.message = message;
        return this;
    }
    /**
     * @param {number} dur  Toast message duration
     */
    setDuration(dur) {
        this.data.duration = dur;
        return this;
    }
    /**
     * @param {'top'|'middle'|'bottom'} pos  Toast message position
     */
    setPosition(pos) {
        this.data.position = pos;
        return this;
    }
    /**
     * @param {string} cssClass  Toast message CSS class
     */
    setCssClass(cssClass) {
        this.data.cssClass = cssClass;
        return this;
    }
    /**
     * @param {boolean} closeButton  Toast message close button
     */
    setShowCloseButton(closeButton) {
        this.data.showCloseButton = closeButton;
        return this;
    }
    /**
     * Present the toast instance.
     *
     * @param {NavOptions} [navOptions={}] Nav options to go with this transition.
     * @returns {Promise} Returns a promise which is resolved when the transition has completed.
     */
    present(navOptions = {}) {
        navOptions.disableApp = false;
        navOptions.keyboardClose = false;
        return this._app.present(this, navOptions, app_constants_1.PORTAL_TOAST);
    }
    /**
     * Dismiss all toast components which have been presented.
     */
    dismissAll() {
        this._nav && this._nav.popAll();
    }
}
exports.Toast = Toast;
const TOAST_POSITION_TOP = 'top';
const TOAST_POSITION_MIDDLE = 'middle';
const TOAST_POSITION_BOTTOM = 'bottom';
//# sourceMappingURL=toast.js.map
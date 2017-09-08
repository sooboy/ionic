"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util/util");
const app_constants_1 = require("../app/app-constants");
const loading_component_1 = require("./loading-component");
const loading_transitions_1 = require("./loading-transitions");
const view_controller_1 = require("../../navigation/view-controller");
/**
 * @hidden
 */
class Loading extends view_controller_1.ViewController {
    constructor(app, opts = {}, config) {
        opts.showBackdrop = util_1.isPresent(opts.showBackdrop) ? !!opts.showBackdrop : true;
        opts.enableBackdropDismiss = util_1.isPresent(opts.enableBackdropDismiss) ? !!opts.enableBackdropDismiss : false;
        opts.dismissOnPageChange = util_1.isPresent(opts.dismissOnPageChange) ? !!opts.dismissOnPageChange : false;
        super(loading_component_1.LoadingCmp, opts, null);
        this._app = app;
        this.isOverlay = true;
        config.setTransition('loading-pop-in', loading_transitions_1.LoadingPopIn);
        config.setTransition('loading-pop-out', loading_transitions_1.LoadingPopOut);
        config.setTransition('loading-md-pop-in', loading_transitions_1.LoadingMdPopIn);
        config.setTransition('loading-md-pop-out', loading_transitions_1.LoadingMdPopOut);
        config.setTransition('loading-wp-pop-in', loading_transitions_1.LoadingWpPopIn);
        config.setTransition('loading-wp-pop-out', loading_transitions_1.LoadingWpPopOut);
    }
    /**
     * @hidden
     */
    getTransitionName(direction) {
        let key = (direction === 'back' ? 'loadingLeave' : 'loadingEnter');
        return this._nav && this._nav.config.get(key);
    }
    /**
     * @param {string} content sets the html content for the loading indicator.
     */
    setContent(content) {
        this.data.content = content;
        return this;
    }
    /**
     * @param {string} spinner sets the name of the SVG spinner for the loading indicator.
     */
    setSpinner(spinner) {
        this.data.spinner = spinner;
        return this;
    }
    /**
     * @param {string} cssClass sets additional classes for custom styles, separated by spaces.
     */
    setCssClass(cssClass) {
        this.data.cssClass = cssClass;
        return this;
    }
    /**
     * @param {boolean} showBackdrop sets whether to show the backdrop.
     */
    setShowBackdrop(showBackdrop) {
        this.data.showBackdrop = showBackdrop;
        return this;
    }
    /**
     * @param {number} dur how many milliseconds to wait before hiding the indicator.
     */
    setDuration(dur) {
        this.data.duration = dur;
        return this;
    }
    /**
     * Present the loading instance.
     *
     * @param {NavOptions} [navOptions={}] Nav options to go with this transition.
     * @returns {Promise} Returns a promise which is resolved when the transition has completed.
     */
    present(navOptions = {}) {
        return this._app.present(this, navOptions, app_constants_1.PORTAL_LOADING);
    }
    /**
     * Dismiss all loading components which have been presented.
     */
    dismissAll() {
        this._nav && this._nav.popAll();
    }
}
exports.Loading = Loading;
//# sourceMappingURL=loading.js.map
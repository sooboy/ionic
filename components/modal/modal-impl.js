"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util/util");
const app_constants_1 = require("../app/app-constants");
const modal_component_1 = require("./modal-component");
const modal_transitions_1 = require("./modal-transitions");
const view_controller_1 = require("../../navigation/view-controller");
/**
 * @hidden
 */
class ModalImpl extends view_controller_1.ViewController {
    constructor(app, component, data, opts = {}, config) {
        data = data || {};
        data.component = component;
        opts.showBackdrop = util_1.isPresent(opts.showBackdrop) ? !!opts.showBackdrop : true;
        opts.enableBackdropDismiss = util_1.isPresent(opts.enableBackdropDismiss) ? !!opts.enableBackdropDismiss : true;
        data.opts = opts;
        super(modal_component_1.ModalCmp, data, null);
        this._app = app;
        this._enterAnimation = opts.enterAnimation;
        this._leaveAnimation = opts.leaveAnimation;
        this.isOverlay = true;
        config.setTransition('modal-slide-in', modal_transitions_1.ModalSlideIn);
        config.setTransition('modal-slide-out', modal_transitions_1.ModalSlideOut);
        config.setTransition('modal-md-slide-in', modal_transitions_1.ModalMDSlideIn);
        config.setTransition('modal-md-slide-out', modal_transitions_1.ModalMDSlideOut);
    }
    /**
     * @hidden
     */
    getTransitionName(direction) {
        let key;
        if (direction === 'back') {
            if (this._leaveAnimation) {
                return this._leaveAnimation;
            }
            key = 'modalLeave';
        }
        else {
            if (this._enterAnimation) {
                return this._enterAnimation;
            }
            key = 'modalEnter';
        }
        return this._nav && this._nav.config.get(key);
    }
    /**
     * Present the action sheet instance.
     *
     * @param {NavOptions} [navOptions={}] Nav options to go with this transition.
     * @returns {Promise} Returns a promise which is resolved when the transition has completed.
     */
    present(navOptions = {}) {
        navOptions.minClickBlockDuration = navOptions.minClickBlockDuration || 400;
        return this._app.present(this, navOptions, app_constants_1.PORTAL_MODAL);
    }
}
exports.ModalImpl = ModalImpl;
//# sourceMappingURL=modal-impl.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util/util");
const popover_component_1 = require("./popover-component");
const popover_transitions_1 = require("./popover-transitions");
const view_controller_1 = require("../../navigation/view-controller");
/**
 * @hidden
 */
class PopoverImpl extends view_controller_1.ViewController {
    constructor(app, component, data = {}, opts = {}, config) {
        opts.showBackdrop = util_1.isPresent(opts.showBackdrop) ? !!opts.showBackdrop : true;
        opts.enableBackdropDismiss = util_1.isPresent(opts.enableBackdropDismiss) ? !!opts.enableBackdropDismiss : true;
        data.component = component;
        data.opts = opts;
        super(popover_component_1.PopoverCmp, data, null);
        this._app = app;
        this.isOverlay = true;
        config.setTransition('popover-pop-in', popover_transitions_1.PopoverPopIn);
        config.setTransition('popover-pop-out', popover_transitions_1.PopoverPopOut);
        config.setTransition('popover-md-pop-in', popover_transitions_1.PopoverMdPopIn);
        config.setTransition('popover-md-pop-out', popover_transitions_1.PopoverMdPopOut);
    }
    /**
     * @hidden
     */
    getTransitionName(direction) {
        let key = (direction === 'back' ? 'popoverLeave' : 'popoverEnter');
        return this._nav && this._nav.config.get(key);
    }
    /**
     * Present the popover instance.
     *
     * @param {NavOptions} [navOptions={}] Nav options to go with this transition.
     * @returns {Promise} Returns a promise which is resolved when the transition has completed.
     */
    present(navOptions = {}) {
        return this._app.present(this, navOptions);
    }
}
exports.PopoverImpl = PopoverImpl;
//# sourceMappingURL=popover-impl.js.map
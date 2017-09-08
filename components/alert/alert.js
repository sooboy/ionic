"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alert_component_1 = require("./alert-component");
const alert_transitions_1 = require("./alert-transitions");
const util_1 = require("../../util/util");
const view_controller_1 = require("../../navigation/view-controller");
/**
 * @hidden
 */
class Alert extends view_controller_1.ViewController {
    constructor(app, opts = {}, config) {
        opts.inputs = opts.inputs || [];
        opts.buttons = opts.buttons || [];
        opts.enableBackdropDismiss = util_1.isPresent(opts.enableBackdropDismiss) ? !!opts.enableBackdropDismiss : true;
        super(alert_component_1.AlertCmp, opts, null);
        this._app = app;
        this.isOverlay = true;
        config.setTransition('alert-pop-in', alert_transitions_1.AlertPopIn);
        config.setTransition('alert-pop-out', alert_transitions_1.AlertPopOut);
        config.setTransition('alert-md-pop-in', alert_transitions_1.AlertMdPopIn);
        config.setTransition('alert-md-pop-out', alert_transitions_1.AlertMdPopOut);
        config.setTransition('alert-wp-pop-in', alert_transitions_1.AlertWpPopIn);
        config.setTransition('alert-wp-pop-out', alert_transitions_1.AlertWpPopOut);
    }
    /**
    * @hidden
    */
    getTransitionName(direction) {
        let key = (direction === 'back' ? 'alertLeave' : 'alertEnter');
        return this._nav && this._nav.config.get(key);
    }
    /**
     * @param {string} title Alert title
     */
    setTitle(title) {
        this.data.title = title;
        return this;
    }
    /**
     * @param {string} subTitle Alert subtitle
     */
    setSubTitle(subTitle) {
        this.data.subTitle = subTitle;
        return this;
    }
    /**
     * @param {string} message  Alert message content
     */
    setMessage(message) {
        this.data.message = message;
        return this;
    }
    /**
     * @param {object} input Alert input
     */
    addInput(input) {
        this.data.inputs.push(input);
        return this;
    }
    /**
     * @param {any} button Alert button
     */
    addButton(button) {
        this.data.buttons.push(button);
        return this;
    }
    /**
     * @param {string} cssClass Set the CSS class names on the alert's outer wrapper.
     */
    setCssClass(cssClass) {
        this.data.cssClass = cssClass;
        return this;
    }
    /**
     * @param {string} mode Set the mode of the alert (ios, md, wp).
     */
    setMode(mode) {
        this.data.mode = mode;
    }
    /**
     * Present the alert instance.
     *
     * @param {NavOptions} [navOptions={}] Nav options to go with this transition.
     * @returns {Promise} Returns a promise which is resolved when the transition has completed.
     */
    present(navOptions = {}) {
        navOptions.minClickBlockDuration = navOptions.minClickBlockDuration || 400;
        return this._app.present(this, navOptions);
    }
}
exports.Alert = Alert;
//# sourceMappingURL=alert.js.map
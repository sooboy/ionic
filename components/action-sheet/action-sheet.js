"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_sheet_component_1 = require("./action-sheet-component");
const action_sheet_transitions_1 = require("./action-sheet-transitions");
const util_1 = require("../../util/util");
const view_controller_1 = require("../../navigation/view-controller");
/**
 * @hidden
 */
class ActionSheet extends view_controller_1.ViewController {
    constructor(app, opts, config) {
        opts.buttons = opts.buttons || [];
        opts.enableBackdropDismiss = util_1.isPresent(opts.enableBackdropDismiss) ? !!opts.enableBackdropDismiss : true;
        super(action_sheet_component_1.ActionSheetCmp, opts, null);
        this._app = app;
        this.isOverlay = true;
        config.setTransition('action-sheet-slide-in', action_sheet_transitions_1.ActionSheetSlideIn);
        config.setTransition('action-sheet-slide-out', action_sheet_transitions_1.ActionSheetSlideOut);
        config.setTransition('action-sheet-md-slide-in', action_sheet_transitions_1.ActionSheetMdSlideIn);
        config.setTransition('action-sheet-md-slide-out', action_sheet_transitions_1.ActionSheetMdSlideOut);
        config.setTransition('action-sheet-wp-slide-in', action_sheet_transitions_1.ActionSheetWpSlideIn);
        config.setTransition('action-sheet-wp-slide-out', action_sheet_transitions_1.ActionSheetWpSlideOut);
    }
    /**
     * @hidden
     */
    getTransitionName(direction) {
        const key = 'actionSheet' + (direction === 'back' ? 'Leave' : 'Enter');
        return this._nav && this._nav.config.get(key);
    }
    /**
     * @param {string} title Action sheet title
     */
    setTitle(title) {
        this.data.title = title;
        return this;
    }
    /**
     * @param {string} subTitle Action sheet subtitle
     */
    setSubTitle(subTitle) {
        this.data.subTitle = subTitle;
        return this;
    }
    /**
     * @param {object} button Action sheet button
     */
    addButton(button) {
        this.data.buttons.push(button);
        return this;
    }
    /**
     * Present the action sheet instance.
     *
     * @param {NavOptions} [navOptions={}] Nav options to go with this transition.
     * @returns {Promise} Returns a promise which is resolved when the transition has completed.
     */
    present(navOptions = {}) {
        navOptions.minClickBlockDuration = navOptions.minClickBlockDuration || 400;
        return this._app.present(this, navOptions);
    }
}
exports.ActionSheet = ActionSheet;
//# sourceMappingURL=action-sheet.js.map
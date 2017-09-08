"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ion_1 = require("../ion");
/**
 * @hidden
 */
class ToolbarBase extends ion_1.Ion {
    constructor(config, elementRef, renderer) {
        super(config, elementRef, renderer, 'toolbar');
    }
    /**
     * @hidden
     */
    _setTitle(titleCmp) {
        this._title = titleCmp;
    }
    /**
     * @hidden
     * Returns the toolbar title text if it exists or an empty string
     */
    getTitleText() {
        return (this._title && this._title.getTitleText()) || '';
    }
}
exports.ToolbarBase = ToolbarBase;
//# sourceMappingURL=toolbar-base.js.map
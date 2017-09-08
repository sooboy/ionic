"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const overlay_proxy_1 = require("../../navigation/overlay-proxy");
const popover_impl_1 = require("./popover-impl");
/**
 * @hidden
 */
class Popover extends overlay_proxy_1.OverlayProxy {
    constructor(app, component, data, opts = {}, config, deepLinker) {
        super(app, component, config, deepLinker);
        this.data = data;
        this.opts = opts;
        this.isOverlay = true;
    }
    getImplementation() {
        return new popover_impl_1.PopoverImpl(this._app, this._component, this.data, this.opts, this._config);
    }
}
exports.Popover = Popover;
//# sourceMappingURL=popover.js.map
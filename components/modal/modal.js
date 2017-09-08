"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const overlay_proxy_1 = require("../../navigation/overlay-proxy");
const modal_impl_1 = require("./modal-impl");
/**
 * @hidden
 */
class Modal extends overlay_proxy_1.OverlayProxy {
    constructor(app, component, data, opts = {}, config, deepLinker) {
        super(app, component, config, deepLinker);
        this.data = data;
        this.opts = opts;
        this.isOverlay = true;
    }
    getImplementation() {
        return new modal_impl_1.ModalImpl(this._app, this._component, this.data, this.opts, this._config);
    }
}
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map
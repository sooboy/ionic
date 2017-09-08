"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pointer_events_1 = require("./pointer-events");
/**
 * @hidden
 */
class UIEventManager {
    constructor(plt) {
        this.plt = plt;
        this.evts = [];
    }
    pointerEvents(config) {
        if (!config.element || !config.pointerDown) {
            console.error('PointerEvents config is invalid');
            return;
        }
        const eventListnerOpts = {
            capture: config.capture,
            passive: config.passive,
            zone: config.zone
        };
        const pointerEvents = new pointer_events_1.PointerEvents(this.plt, config.element, config.pointerDown, config.pointerMove, config.pointerUp, eventListnerOpts);
        const removeFunc = () => pointerEvents.destroy();
        this.evts.push(removeFunc);
        return pointerEvents;
    }
    listen(ele, eventName, callback, opts) {
        if (ele) {
            var removeFunc = this.plt.registerListener(ele, eventName, callback, opts);
            this.evts.push(removeFunc);
            return removeFunc;
        }
    }
    unlistenAll() {
        this.evts.forEach(unRegEvent => {
            unRegEvent();
        });
        this.evts.length = 0;
    }
    destroy() {
        this.unlistenAll();
        this.evts = null;
    }
}
exports.UIEventManager = UIEventManager;
//# sourceMappingURL=ui-event-manager.js.map
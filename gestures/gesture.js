"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util/util");
const hammer_1 = require("./hammer");
/**
 * @hidden
 * A gesture recognizer class.
 *
 * TODO(mlynch): Re-enable the DOM event simulation that was causing issues (or verify hammer does this already, it might);
 */
class Gesture {
    constructor(element, opts = {}) {
        this._callbacks = {};
        this.isListening = false;
        util_1.defaults(opts, {
            domEvents: true
        });
        this.element = element;
        // Map 'x' or 'y' string to hammerjs opts
        this.direction = opts.direction || 'x';
        opts.direction = this.direction === 'x' ?
            hammer_1.DIRECTION_HORIZONTAL :
            hammer_1.DIRECTION_VERTICAL;
        this._options = opts;
    }
    options(opts) {
        Object.assign(this._options, opts);
    }
    on(type, cb) {
        if (type === 'pinch' || type === 'rotate') {
            this._hammer.get(type).set({ enable: true });
        }
        this._hammer.on(type, cb);
        (this._callbacks[type] || (this._callbacks[type] = [])).push(cb);
    }
    off(type, cb) {
        this._hammer.off(type, this._callbacks[type] ? cb : null);
    }
    listen() {
        if (!this.isListening) {
            this._hammer = hammer_1.Hammer(this.element, this._options);
        }
        this.isListening = true;
    }
    unlisten() {
        let eventType;
        let i;
        if (this._hammer && this.isListening) {
            for (eventType in this._callbacks) {
                for (i = 0; i < this._callbacks[eventType].length; i++) {
                    this._hammer.off(eventType, this._callbacks[eventType]);
                }
            }
            this._hammer.destroy();
        }
        this._callbacks = {};
        this._hammer = null;
        this.isListening = false;
    }
    destroy() {
        this.unlisten();
        this.element = this._options = null;
    }
}
exports.Gesture = Gesture;
//# sourceMappingURL=gesture.js.map
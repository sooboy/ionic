"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util/util");
const recognizers_1 = require("./recognizers");
const dom_1 = require("../util/dom");
const ui_event_manager_1 = require("./ui-event-manager");
/**
 * @hidden
 */
class PanGesture {
    constructor(plt, element, opts = {}) {
        this.plt = plt;
        this.element = element;
        util_1.defaults(opts, {
            threshold: 20,
            maxAngle: 40,
            direction: 'x',
            zone: true,
            capture: false,
            passive: false,
        });
        this.events = new ui_event_manager_1.UIEventManager(plt);
        if (opts.domController) {
            this.debouncer = opts.domController.debouncer();
        }
        this.gestute = opts.gesture;
        this.direction = opts.direction;
        this.eventsConfig = {
            element: this.element,
            pointerDown: this.pointerDown.bind(this),
            pointerMove: this.pointerMove.bind(this),
            pointerUp: this.pointerUp.bind(this),
            zone: opts.zone,
            capture: opts.capture,
            passive: opts.passive
        };
        if (opts.threshold > 0) {
            this.detector = new recognizers_1.PanRecognizer(opts.direction, opts.threshold, opts.maxAngle);
        }
    }
    listen() {
        if (!this.isListening) {
            this.pointerEvents = this.events.pointerEvents(this.eventsConfig);
            this.isListening = true;
        }
    }
    unlisten() {
        if (this.isListening) {
            this.gestute && this.gestute.release();
            this.events.unlistenAll();
            this.isListening = false;
        }
    }
    destroy() {
        this.gestute && this.gestute.destroy();
        this.gestute = null;
        this.unlisten();
        this.events.destroy();
        this.events = this.element = this.gestute = null;
    }
    pointerDown(ev) {
        if (this.started) {
            return;
        }
        if (!this.canStart(ev)) {
            return false;
        }
        if (this.gestute) {
            // Release fallback
            this.gestute.release();
            // Start gesture
            if (!this.gestute.start()) {
                return false;
            }
        }
        this.started = true;
        this.captured = false;
        const coord = dom_1.pointerCoord(ev);
        if (this.detector) {
            this.detector.start(coord);
        }
        else {
            if (!this.tryToCapture(ev)) {
                this.started = false;
                this.captured = false;
                this.gestute.release();
                return false;
            }
        }
        return true;
    }
    pointerMove(ev) {
        util_1.assert(this.started === true, 'started must be true');
        if (this.captured) {
            this.debouncer.write(() => {
                this.onDragMove(ev);
            });
            return;
        }
        util_1.assert(this.detector, 'detector has to be valid');
        const coord = dom_1.pointerCoord(ev);
        if (this.detector.detect(coord)) {
            if (this.detector.pan() !== 0) {
                if (!this.tryToCapture(ev)) {
                    this.abort(ev);
                }
            }
        }
    }
    pointerUp(ev) {
        util_1.assert(this.started, 'started failed');
        this.debouncer.cancel();
        this.gestute && this.gestute.release();
        if (this.captured) {
            this.onDragEnd(ev);
        }
        else {
            this.notCaptured(ev);
        }
        this.captured = false;
        this.started = false;
    }
    tryToCapture(ev) {
        util_1.assert(this.started === true, 'started has be true');
        util_1.assert(this.captured === false, 'captured has be false');
        if (this.gestute && !this.gestute.capture()) {
            return false;
        }
        this.onDragStart(ev);
        this.captured = true;
        return true;
    }
    abort(ev) {
        this.started = false;
        this.captured = false;
        this.gestute.release();
        this.pointerEvents.stop();
        this.notCaptured(ev);
    }
    getNativeElement() {
        return this.element;
    }
    // Implemented in a subclass
    canStart(_ev) { return true; }
    onDragStart(_ev) { }
    onDragMove(_ev) { }
    onDragEnd(_ev) { }
    notCaptured(_ev) { }
}
exports.PanGesture = PanGesture;
//# sourceMappingURL=pan-gesture.js.map
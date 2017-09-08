"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animation_1 = require("../animations/animation");
/**
 * @hidden
 *
 * - play
 * - Add before classes - DOM WRITE
 * - Remove before classes - DOM WRITE
 * - Add before inline styles - DOM WRITE
 * - set inline FROM styles - DOM WRITE
 * - RAF
 * - read toolbar dimensions - DOM READ
 * - write content top/bottom padding - DOM WRITE
 * - set css transition duration/easing - DOM WRITE
 * - RAF
 * - set inline TO styles - DOM WRITE
 */
class Transition extends animation_1.Animation {
    constructor(plt, enteringView, leavingView, opts) {
        super(plt, null, opts);
        this.enteringView = enteringView;
        this.leavingView = leavingView;
    }
    init() { }
    registerStart(trnsStart) {
        this._trnsStart = trnsStart;
    }
    start() {
        this._trnsStart && this._trnsStart();
        this._trnsStart = null;
        // bubble up start
        this.parent && this.parent.start();
    }
    destroy() {
        super.destroy();
        this.parent = this.enteringView = this.leavingView = this._trnsStart = null;
    }
}
exports.Transition = Transition;
//# sourceMappingURL=transition.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pan_gesture_1 = require("./pan-gesture");
const util_1 = require("../util/util");
const dom_1 = require("../util/dom");
/**
 * @hidden
 */
class SlideGesture extends pan_gesture_1.PanGesture {
    constructor(plt, element, opts = {}) {
        super(plt, element, opts);
        this.slide = null;
    }
    /*
     * Get the min and max for the slide. pageX/pageY.
     * Only called on dragstart.
     */
    getSlideBoundaries(_slide, _ev) {
        return {
            min: 0,
            max: this.getNativeElement().offsetWidth
        };
    }
    /*
     * Get the element's pos when the drag starts.
     * For example, an open side menu starts at 100% and a closed
     * sidemenu starts at 0%.
     */
    getElementStartPos(_slide, _ev) {
        return 0;
    }
    onDragStart(ev) {
        this.onSlideBeforeStart(ev);
        let coord = dom_1.pointerCoord(ev);
        let pos = coord[this.direction];
        this.slide = {
            min: 0,
            max: 0,
            pointerStartPos: pos,
            pos: pos,
            timestamp: Date.now(),
            elementStartPos: 0,
            started: true,
            delta: 0,
            distance: 0,
            velocity: 0,
        };
        // TODO: we should run this in the next frame
        let { min, max } = this.getSlideBoundaries(this.slide, ev);
        this.slide.min = min;
        this.slide.max = max;
        this.slide.elementStartPos = this.getElementStartPos(this.slide, ev);
        this.onSlideStart(this.slide, ev);
    }
    onDragMove(ev) {
        let slide = this.slide;
        util_1.assert(slide.min !== slide.max, 'slide data must be properly initialized');
        let coord = dom_1.pointerCoord(ev);
        let newPos = coord[this.direction];
        let newTimestamp = Date.now();
        let velocity = (this.plt.isRTL ? (slide.pos - newPos) : (newPos - slide.pos)) / (newTimestamp - slide.timestamp);
        slide.pos = newPos;
        slide.timestamp = newTimestamp;
        slide.distance = util_1.clamp(slide.min, (this.plt.isRTL ? slide.pointerStartPos - newPos : newPos - slide.pointerStartPos) + slide.elementStartPos, slide.max);
        slide.velocity = velocity;
        slide.delta = (this.plt.isRTL ? slide.pointerStartPos - newPos : newPos - slide.pointerStartPos);
        this.onSlide(slide, ev);
    }
    onDragEnd(ev) {
        this.onSlideEnd(this.slide, ev);
        this.slide = null;
    }
    onSlideBeforeStart(_ev) { }
    onSlideStart(_slide, _ev) { }
    onSlide(_slide, _ev) { }
    onSlideEnd(_slide, _ev) { }
}
exports.SlideGesture = SlideGesture;
//# sourceMappingURL=slide-gesture.js.map
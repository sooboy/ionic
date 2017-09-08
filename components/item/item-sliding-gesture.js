"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gesture_controller_1 = require("../../gestures/gesture-controller");
const pan_gesture_1 = require("../../gestures/pan-gesture");
const dom_1 = require("../../util/dom");
/**
 * @hidden
 */
class ItemSlidingGesture extends pan_gesture_1.PanGesture {
    constructor(plt, list, gestureCtrl, domCtrl) {
        super(plt, list.getNativeElement(), {
            maxAngle: 20,
            threshold: 5,
            zone: false,
            domController: domCtrl,
            gesture: gestureCtrl.createGesture({
                name: gesture_controller_1.GESTURE_ITEM_SWIPE,
                priority: gesture_controller_1.GESTURE_PRIORITY_SLIDING_ITEM,
                disableScroll: true
            })
        });
        this.list = list;
        this.preSelectedContainer = null;
        this.selectedContainer = null;
        this.openContainer = null;
    }
    canStart(ev) {
        if (this.selectedContainer) {
            return false;
        }
        // Get swiped sliding container
        let container = getContainer(ev);
        if (!container) {
            this.closeOpened();
            return false;
        }
        // Close open container if it is not the selected one.
        if (container !== this.openContainer) {
            this.closeOpened();
        }
        let coord = dom_1.pointerCoord(ev);
        this.preSelectedContainer = container;
        this.firstCoordX = coord.x;
        this.firstTimestamp = Date.now();
        return true;
    }
    onDragStart(ev) {
        ev.preventDefault();
        let coord = dom_1.pointerCoord(ev);
        this.selectedContainer = this.openContainer = this.preSelectedContainer;
        this.selectedContainer.startSliding(coord.x);
    }
    onDragMove(ev) {
        ev.preventDefault();
        this.selectedContainer.moveSliding(dom_1.pointerCoord(ev).x);
    }
    onDragEnd(ev) {
        ev.preventDefault();
        let coordX = dom_1.pointerCoord(ev).x;
        let deltaX = (coordX - this.firstCoordX);
        let deltaT = (Date.now() - this.firstTimestamp);
        this.selectedContainer.endSliding(deltaX / deltaT);
        this.selectedContainer = null;
        this.preSelectedContainer = null;
    }
    notCaptured(ev) {
        if (!clickedOptionButton(ev)) {
            this.closeOpened();
        }
    }
    closeOpened() {
        this.selectedContainer = null;
        if (this.openContainer) {
            this.openContainer.close();
            this.openContainer = null;
            return true;
        }
        return false;
    }
    destroy() {
        super.destroy();
        this.closeOpened();
        this.list = null;
        this.preSelectedContainer = null;
        this.selectedContainer = null;
        this.openContainer = null;
    }
}
exports.ItemSlidingGesture = ItemSlidingGesture;
function getContainer(ev) {
    let ele = ev.target.closest('ion-item-sliding');
    if (ele) {
        return ele['$ionComponent'];
    }
    return null;
}
function clickedOptionButton(ev) {
    let ele = ev.target.closest('ion-item-options>button');
    return !!ele;
}
//# sourceMappingURL=item-sliding-gesture.js.map
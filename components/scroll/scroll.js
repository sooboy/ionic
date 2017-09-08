"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const util_1 = require("../../util/util");
/**
 * @name Scroll
 * @description
 * Scroll is a non-flexboxed scroll area that can scroll horizontally or vertically. `ion-Scroll` Can be used in places where you may not need a full page scroller, but a highly customized one, such as image scubber or comment scroller.
 * @usage
 * ```html
 * <ion-scroll scrollX="true">
 * </ion-scroll>
 *
 * <ion-scroll scrollY="true">
 * </ion-scroll>
 *
 * <ion-scroll scrollX="true" scrollY="true">
 * </ion-scroll>
 * ```
 * @demo /docs/demos/src/scroll/
 */
let Scroll = class Scroll {
    constructor() {
        this._scrollX = false;
        this._scrollY = false;
        this._zoom = false;
        this._maxZoom = 1;
        /**
         * @hidden
         */
        this.maxScale = 3;
        /**
         * @hidden
         */
        this.zoomDuration = 250;
    }
    /**
     * @input {boolean} If true, scrolling along the X axis is enabled.
     */
    get scrollX() {
        return this._scrollX;
    }
    set scrollX(val) {
        this._scrollX = util_1.isTrueProperty(val);
    }
    /**
     * @input {boolean} If true, scrolling along the Y axis is enabled; requires the following CSS declaration: ion-scroll { white-space: nowrap; }
     */
    get scrollY() {
        return this._scrollY;
    }
    set scrollY(val) {
        this._scrollY = util_1.isTrueProperty(val);
    }
    /**
     * @input {boolean} If true, zooming is enabled.
     */
    get zoom() {
        return this._zoom;
    }
    set zoom(val) {
        this._zoom = util_1.isTrueProperty(val);
    }
    /**
     * @input {number} Set the max zoom amount.
     */
    get maxZoom() {
        return this._maxZoom;
    }
    set maxZoom(val) {
        this._maxZoom = val;
    }
    /**
     * @hidden
     * Add a scroll event handler to the scroll element if it exists.
     * @param {Function} handler  The scroll handler to add to the scroll element.
     * @returns {?Function} a function to remove the specified handler, otherwise
     * undefined if the scroll element doesn't exist.
     */
    addScrollEventListener(handler) {
        util_1.assert(this._scrollContent, 'scroll element is missing');
        const ele = this._scrollContent.nativeElement;
        ele.addEventListener('scroll', handler);
        return () => {
            ele.removeEventListener('scroll', handler);
        };
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Scroll.prototype, "scrollX", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Scroll.prototype, "scrollY", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Scroll.prototype, "zoom", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Scroll.prototype, "maxZoom", null);
__decorate([
    core_1.ViewChild('scrollContent', { read: core_1.ElementRef }),
    __metadata("design:type", core_1.ElementRef)
], Scroll.prototype, "_scrollContent", void 0);
Scroll = __decorate([
    core_1.Component({
        selector: 'ion-scroll',
        template: '<div class="scroll-content" #scrollContent>' +
            '<div class="scroll-zoom-wrapper">' +
            '<ng-content></ng-content>' +
            '</div>' +
            '</div>',
        host: {
            '[class.scroll-x]': 'scrollX',
            '[class.scroll-y]': 'scrollY'
        },
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [])
], Scroll);
exports.Scroll = Scroll;
//# sourceMappingURL=scroll.js.map
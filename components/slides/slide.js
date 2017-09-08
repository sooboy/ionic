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
const slides_1 = require("./slides");
/**
 * @name Slide
 * @description
 * The Slide component is a child component of [Slides](../Slides). The template
 * should be written as `ion-slide`. Any slide content should be written
 * in this component and it should be used in conjunction with [Slides](../Slides).
 *
 * See the [Slides API Docs](../Slides) for more usage information.
 *
 * @demo /docs/demos/src/slides/
 * @see {@link /docs/api/components/slides/Slides/ Slides API Docs}
 */
let Slide = class Slide {
    constructor(elementRef, renderer, _slides) {
        this._slides = _slides;
        renderer.setElementClass(elementRef.nativeElement, 'swiper-slide', true);
        _slides.update(10);
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        this._slides.update(10);
    }
};
Slide = __decorate([
    core_1.Component({
        selector: 'ion-slide',
        template: '<div class="slide-zoom">' +
            '<ng-content></ng-content>' +
            '</div>',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer,
        slides_1.Slides])
], Slide);
exports.Slide = Slide;
//# sourceMappingURL=slide.js.map
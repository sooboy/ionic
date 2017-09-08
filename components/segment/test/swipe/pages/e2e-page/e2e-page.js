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
const __1 = require("../../../../../..");
let E2EPage = class E2EPage {
    constructor() {
        this.selectedSegment = 'first';
        this.slides = [
            {
                id: 'first',
                title: 'First Slide'
            },
            {
                id: 'second',
                title: 'Second Slide'
            },
            {
                id: 'third',
                title: 'Third Slide'
            }
        ];
    }
    onSegmentChanged(segmentButton) {
        console.log('Segment changed to', segmentButton.value);
        const selectedIndex = this.slides.findIndex((slide) => {
            return slide.id === segmentButton.value;
        });
        this.sliderComponent.slideTo(selectedIndex);
    }
    onSlideChanged(s) {
        console.log('Slide changed', s);
        const currentSlide = this.slides[s.getActiveIndex()];
        this.selectedSegment = currentSlide.id;
    }
};
__decorate([
    core_1.ViewChild('loopSlider'),
    __metadata("design:type", __1.Slides)
], E2EPage.prototype, "sliderComponent", void 0);
E2EPage = __decorate([
    core_1.Component({
        templateUrl: 'main.html',
    }),
    __metadata("design:paramtypes", [])
], E2EPage);
exports.E2EPage = E2EPage;
//# sourceMappingURL=e2e-page.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swiper_classes_1 = require("./swiper-classes");
function updateActiveIndex(s) {
    var translate = s._rtl ? s._translate : -s._translate;
    var newActiveIndex;
    var i;
    var snapIndex;
    for (i = 0; i < s._slidesGrid.length; i++) {
        if (typeof s._slidesGrid[i + 1] !== 'undefined') {
            if (translate >= s._slidesGrid[i] && translate < s._slidesGrid[i + 1] - (s._slidesGrid[i + 1] - s._slidesGrid[i]) / 2) {
                newActiveIndex = i;
            }
            else if (translate >= s._slidesGrid[i] && translate < s._slidesGrid[i + 1]) {
                newActiveIndex = i + 1;
            }
        }
        else {
            if (translate >= s._slidesGrid[i]) {
                newActiveIndex = i;
            }
        }
    }
    snapIndex = Math.floor(newActiveIndex / s.slidesPerGroup);
    if (snapIndex >= s._snapGrid.length)
        snapIndex = s._snapGrid.length - 1;
    if (newActiveIndex === s._activeIndex) {
        return;
    }
    s._snapIndex = snapIndex;
    s._previousIndex = s._activeIndex;
    s._activeIndex = newActiveIndex;
    swiper_classes_1.updateClasses(s);
    updateRealIndex(s);
}
exports.updateActiveIndex = updateActiveIndex;
function updateRealIndex(s) {
    var activeSlide = s._slides[s._activeIndex];
    if (activeSlide) {
        s.realIndex = parseInt(activeSlide.getAttribute('data-swiper-slide-index') || s._activeIndex, 10);
    }
}
exports.updateRealIndex = updateRealIndex;
//# sourceMappingURL=swiper-index.js.map
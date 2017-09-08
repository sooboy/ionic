"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swiper_utils_1 = require("./swiper-utils");
/*=========================
  Parallax
  ===========================*/
function setParallaxTransform(s, el, progress) {
    var p;
    var pX;
    var pY;
    var rtlFactor = s._rtl ? -1 : 1;
    p = el.getAttribute('data-swiper-parallax') || '0';
    pX = el.getAttribute('data-swiper-parallax-x');
    pY = el.getAttribute('data-swiper-parallax-y');
    if (pX || pY) {
        pX = pX || '0';
        pY = pY || '0';
    }
    else {
        if (swiper_utils_1.isHorizontal(s)) {
            pX = p;
            pY = '0';
        }
        else {
            pY = p;
            pX = '0';
        }
    }
    if ((pX).indexOf('%') >= 0) {
        pX = parseInt(pX, 10) * progress * rtlFactor + '%';
    }
    else {
        pX = pX * progress * rtlFactor + 'px';
    }
    if ((pY).indexOf('%') >= 0) {
        pY = parseInt(pY, 10) * progress + '%';
    }
    else {
        pY = pY * progress + 'px';
    }
    swiper_utils_1.transform(el, 'translate3d(' + pX + ', ' + pY + ',0px)');
}
function parallaxSetTranslate(s) {
    swiper_utils_1.eachChild(s.container, '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]', (el) => {
        setParallaxTransform(s, el, s.progress);
    });
    for (var i = 0; i < s._slides.length; i++) {
        var slide = s._slides[i];
        swiper_utils_1.eachChild(slide, '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]', () => {
            var progress = Math.min(Math.max(slide.progress, -1), 1);
            setParallaxTransform(s, slide, progress);
        });
    }
}
exports.parallaxSetTranslate = parallaxSetTranslate;
function parallaxSetTransition(s, duration) {
    if (typeof duration === 'undefined')
        duration = s.speed;
    swiper_utils_1.eachChild(s.container, '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]', (el) => {
        var parallaxDuration = parseInt(el.getAttribute('data-swiper-parallax-duration'), 10) || duration;
        if (duration === 0)
            parallaxDuration = 0;
        swiper_utils_1.transition(el, parallaxDuration);
    });
}
exports.parallaxSetTransition = parallaxSetTransition;
//# sourceMappingURL=swiper-parallax.js.map
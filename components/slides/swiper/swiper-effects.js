"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swiper_utils_1 = require("./swiper-utils");
const platform_utils_1 = require("../../../platform/platform-utils");
/*=========================
  Effects
  ===========================*/
exports.SWIPER_EFFECTS = {
    'fade': {
        setTranslate: function (s) {
            for (var i = 0; i < s._slides.length; i++) {
                var slide = s._slides[i];
                var offset = slide.swiperSlideOffset;
                var tx = -offset;
                if (!s.virtualTranslate) {
                    tx = tx - s._translate;
                }
                var ty = 0;
                if (!swiper_utils_1.isHorizontal(s)) {
                    ty = tx;
                    tx = 0;
                }
                var slideOpacity = s.fade.crossFade ?
                    Math.max(1 - Math.abs(slide.progress), 0) :
                    1 + Math.min(Math.max(slide.progress, -1), 0);
                slide.style.opacity = slideOpacity;
                swiper_utils_1.transform(slide, 'translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
            }
        },
        setTransition: function (s, plt, duration) {
            var slides = s._slides;
            for (var i = 0; i < slides.length; i++) {
                swiper_utils_1.transition(slides[i], duration);
            }
            if (s.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                for (let i = 0; i < slides.length; i++) {
                    plt.transitionEnd(slides[i], () => {
                        if (eventTriggered || !s)
                            return;
                        eventTriggered = true;
                        s._animating = false;
                        swiper_utils_1.triggerTransitionEnd(plt, s._wrapper);
                    });
                }
            }
        }
    },
    'flip': {
        setTranslate: function (s, plt) {
            for (var i = 0; i < s._slides.length; i++) {
                var slide = s._slides[i];
                var progress = slide.progress;
                if (s.flip.limitRotation) {
                    progress = Math.max(Math.min(slide.progress, 1), -1);
                }
                var offset = slide.swiperSlideOffset;
                var rotate = -180 * progress, rotateY = rotate, rotateX = 0, tx = -offset, ty = 0;
                if (!swiper_utils_1.isHorizontal(s)) {
                    ty = tx;
                    tx = 0;
                    rotateX = -rotateY;
                    rotateY = 0;
                }
                else if (s._rtl) {
                    rotateY = -rotateY;
                }
                slide.style.zIndex = -Math.abs(Math.round(progress)) + s._slides.length;
                if (s.flip.slideShadows) {
                    // Set shadows
                    var shadowBefore = (swiper_utils_1.isHorizontal(s) ? slide.querySelector('.swiper-slide-shadow-left') : slide.querySelector('.swiper-slide-shadow-top'));
                    var shadowAfter = (swiper_utils_1.isHorizontal(s) ? slide.querySelector('.swiper-slide-shadow-right') : slide.querySelector('.swiper-slide-shadow-bottom'));
                    if (!shadowBefore) {
                        shadowBefore = plt.doc().createElement('div');
                        shadowBefore.className = 'swiper-slide-shadow-' + (swiper_utils_1.isHorizontal(s) ? 'left' : 'top');
                        slide.appendChild(shadowBefore);
                    }
                    if (!shadowAfter) {
                        shadowAfter = plt.doc().createElement('div');
                        shadowAfter.className = 'swiper-slide-shadow-' + (swiper_utils_1.isHorizontal(s) ? 'right' : 'bottom');
                        slide.appendChild(shadowAfter);
                    }
                    if (shadowBefore) {
                        shadowBefore.style.opacity = Math.max(-progress, 0);
                    }
                    if (shadowAfter) {
                        shadowAfter.style.opacity = Math.max(progress, 0);
                    }
                }
                swiper_utils_1.transform(slide, 'translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
            }
        },
        setTransition: function (s, plt, duration) {
            for (var i = 0; i < s._slides.length; i++) {
                var slide = s._slides[i];
                swiper_utils_1.transition(slide, duration);
                swiper_utils_1.eachChild(slide, '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left', el => {
                    swiper_utils_1.transition(el, duration);
                });
            }
            if (s.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                plt.transitionEnd(s._slides[s._activeIndex], (ev) => {
                    if (eventTriggered || !s)
                        return;
                    if (!ev.target.classList.contains(swiper_utils_1.CLS.slideActive)) {
                        return;
                    }
                    eventTriggered = true;
                    s._animating = false;
                    swiper_utils_1.triggerTransitionEnd(plt, s._wrapper);
                });
            }
        }
    },
    'cube': {
        setTranslate: function (s, plt) {
            var wrapperRotate = 0;
            var cubeShadow;
            if (s.cube.shadow) {
                if (swiper_utils_1.isHorizontal(s)) {
                    cubeShadow = s._wrapper.querySelector('.swiper-cube-shadow');
                    if (!cubeShadow) {
                        cubeShadow = plt.doc().createElement('div');
                        cubeShadow.className = 'swiper-cube-shadow';
                        s._wrapper.appendChild(cubeShadow);
                    }
                    cubeShadow.style.height = s.renderedWidth + 'px';
                }
                else {
                    cubeShadow = s.container.querySelector('.swiper-cube-shadow');
                    if (!cubeShadow) {
                        cubeShadow = plt.doc().createElement('div');
                        cubeShadow.className = 'swiper-cube-shadow';
                        s._wrapper.appendChild(cubeShadow);
                    }
                }
            }
            for (var i = 0; i < s._slides.length; i++) {
                var slide = s._slides[i];
                var slideAngle = i * 90;
                var round = Math.floor(slideAngle / 360);
                if (s._rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                }
                var progress = Math.max(Math.min(slide.progress, 1), -1);
                var tx = 0, ty = 0, tz = 0;
                if (i % 4 === 0) {
                    tx = -round * 4 * s._renderedSize;
                    tz = 0;
                }
                else if ((i - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * s._renderedSize;
                }
                else if ((i - 2) % 4 === 0) {
                    tx = s._renderedSize + round * 4 * s._renderedSize;
                    tz = s._renderedSize;
                }
                else if ((i - 3) % 4 === 0) {
                    tx = -s._renderedSize;
                    tz = 3 * s._renderedSize + s._renderedSize * 4 * round;
                }
                if (s._rtl) {
                    tx = -tx;
                }
                if (!swiper_utils_1.isHorizontal(s)) {
                    ty = tx;
                    tx = 0;
                }
                var transformStr = 'rotateX(' + (swiper_utils_1.isHorizontal(s) ? 0 : -slideAngle) + 'deg) rotateY(' + (swiper_utils_1.isHorizontal(s) ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
                if (progress <= 1 && progress > -1) {
                    wrapperRotate = i * 90 + progress * 90;
                    if (s._rtl)
                        wrapperRotate = -i * 90 - progress * 90;
                }
                swiper_utils_1.transform(slide, transformStr);
                if (s.cube.slideShadows) {
                    // Set shadows
                    var shadowBefore = (swiper_utils_1.isHorizontal(s) ? slide.querySelector('.swiper-slide-shadow-left') : slide.querySelector('.swiper-slide-shadow-top'));
                    var shadowAfter = (swiper_utils_1.isHorizontal(s) ? slide.querySelector('.swiper-slide-shadow-right') : slide.querySelector('.swiper-slide-shadow-bottom'));
                    if (!shadowBefore) {
                        shadowBefore = plt.doc().createElement('div');
                        shadowBefore.className = 'swiper-slide-shadow-' + (swiper_utils_1.isHorizontal(s) ? 'left' : 'top');
                        slide.appendChild(shadowBefore);
                    }
                    if (!shadowAfter) {
                        shadowAfter = plt.doc().createElement('div');
                        shadowAfter.className = 'swiper-slide-shadow-' + (swiper_utils_1.isHorizontal(s) ? 'right' : 'bottom');
                        slide.appendChild(shadowAfter);
                    }
                    if (shadowBefore)
                        shadowBefore.style.opacity = Math.max(-progress, 0);
                    if (shadowAfter)
                        shadowAfter.style.opacity = Math.max(progress, 0);
                }
            }
            s._wrapper.style.transformOrigin = s._wrapper.style.webkitTransformOrigin = '50% 50% -' + (s._renderedSize / 2) + 'px';
            if (s.cube.shadow) {
                if (swiper_utils_1.isHorizontal(s)) {
                    swiper_utils_1.transform(cubeShadow, 'translate3d(0px, ' + (s.renderedWidth / 2 + s.cube.shadowOffset) + 'px, ' + (-s.renderedWidth / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.cube.shadowScale) + ')');
                }
                else {
                    var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                    var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                    var scale1 = s.cube.shadowScale;
                    var scale2 = s.cube.shadowScale / multiplier;
                    var offset = s.cube.shadowOffset;
                    swiper_utils_1.transform(cubeShadow, 'scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.renderedHeight / 2 + offset) + 'px, ' + (-s.renderedHeight / 2 / scale2) + 'px) rotateX(-90deg)');
                }
            }
            var zFactor = (platform_utils_1.isSafari(plt) || platform_utils_1.isIosUIWebView(plt)) ? (-s._renderedSize / 2) : 0;
            swiper_utils_1.transform(s._wrapper, 'translate3d(0px,0,' + zFactor + 'px) rotateX(' + (swiper_utils_1.isHorizontal(s) ? 0 : wrapperRotate) + 'deg) rotateY(' + (swiper_utils_1.isHorizontal(s) ? -wrapperRotate : 0) + 'deg)');
        },
        setTransition: function (s, _plt, duration) {
            for (var i = 0; i < s._slides.length; i++) {
                var slide = s._slides[i];
                swiper_utils_1.transition(slide, duration);
                swiper_utils_1.eachChild(slide, '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left', el => {
                    swiper_utils_1.transition(el, duration);
                });
            }
            if (s.cube.shadow && !swiper_utils_1.isHorizontal(s)) {
                swiper_utils_1.eachChild(s.container, '.swiper-cube-shadow', el => {
                    swiper_utils_1.transition(el, duration);
                });
            }
        }
    },
    'coverflow': {
        setTranslate: function (s, plt) {
            var transformStr = s._translate;
            var center = swiper_utils_1.isHorizontal(s) ? -transformStr + s.renderedWidth / 2 : -transformStr + s.renderedHeight / 2;
            var rotate = swiper_utils_1.isHorizontal(s) ? s.coverflow.rotate : -s.coverflow.rotate;
            var translate = s.coverflow.depth;
            // Each slide offset from center
            for (var i = 0, length = s._slides.length; i < length; i++) {
                var slide = s._slides[i];
                var slideSize = s._slidesSizesGrid[i];
                var slideOffset = slide.swiperSlideOffset;
                var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.coverflow.modifier;
                var rotateY = swiper_utils_1.isHorizontal(s) ? rotate * offsetMultiplier : 0;
                var rotateX = swiper_utils_1.isHorizontal(s) ? 0 : rotate * offsetMultiplier;
                // var rotateZ = 0
                var translateZ = -translate * Math.abs(offsetMultiplier);
                var translateY = swiper_utils_1.isHorizontal(s) ? 0 : s.coverflow.stretch * (offsetMultiplier);
                var translateX = swiper_utils_1.isHorizontal(s) ? s.coverflow.stretch * (offsetMultiplier) : 0;
                // Fix for ultra small values
                if (Math.abs(translateX) < 0.001)
                    translateX = 0;
                if (Math.abs(translateY) < 0.001)
                    translateY = 0;
                if (Math.abs(translateZ) < 0.001)
                    translateZ = 0;
                if (Math.abs(rotateY) < 0.001)
                    rotateY = 0;
                if (Math.abs(rotateX) < 0.001)
                    rotateX = 0;
                var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
                swiper_utils_1.transform(slide, slideTransform);
                slide.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                if (s.coverflow.slideShadows) {
                    // Set shadows
                    var shadowBefore = (swiper_utils_1.isHorizontal(s) ? slide.querySelector('.swiper-slide-shadow-left') : slide.querySelector('.swiper-slide-shadow-top'));
                    var shadowAfter = (swiper_utils_1.isHorizontal(s) ? slide.querySelector('.swiper-slide-shadow-right') : slide.querySelector('.swiper-slide-shadow-bottom'));
                    if (!shadowBefore) {
                        shadowBefore = plt.doc().createElement('div');
                        shadowBefore.className = 'swiper-slide-shadow-' + (swiper_utils_1.isHorizontal(s) ? 'left' : 'top');
                        slide.appendChild(shadowBefore);
                    }
                    if (!shadowAfter) {
                        shadowAfter = plt.doc().createElement('div');
                        shadowAfter.className = 'swiper-slide-shadow-' + (swiper_utils_1.isHorizontal(s) ? 'right' : 'bottom');
                        slide.appendChild(shadowAfter);
                    }
                    if (shadowBefore) {
                        shadowBefore.style.opacity = (offsetMultiplier > 0 ? offsetMultiplier : 0);
                    }
                    if (shadowAfter) {
                        shadowAfter.style.opacity = ((-offsetMultiplier) > 0 ? -offsetMultiplier : 0);
                    }
                }
            }
        },
        setTransition: function (s, _plt, duration) {
            for (var i = 0; i < s._slides.length; i++) {
                var slide = s._slides[i];
                swiper_utils_1.transition(slide, duration);
                swiper_utils_1.eachChild(slide, '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left', (el) => {
                    swiper_utils_1.transition(el, duration);
                });
            }
        }
    }
};
//# sourceMappingURL=swiper-effects.js.map
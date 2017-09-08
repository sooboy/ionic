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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const config_1 = require("../../config/config");
const swiper_keyboard_1 = require("./swiper/swiper-keyboard");
const ion_1 = require("../ion");
const util_1 = require("../../util/util");
const swiper_events_1 = require("./swiper/swiper-events");
const swiper_zoom_1 = require("./swiper/swiper-zoom");
const platform_1 = require("../../platform/platform");
const swiper_1 = require("./swiper/swiper");
const swiper_effects_1 = require("./swiper/swiper-effects");
const view_controller_1 = require("../../navigation/view-controller");
/**
 * @name Slides
 * @description
 * The Slides component is a multi-section container. Each section can be swiped
 * or dragged between. It contains any number of [Slide](../Slide) components.
 *
 *
 * ### Creating
 * You should use a template to create slides and listen to slide events. The template
 * should contain the slide container, an `<ion-slides>` element, and any number of
 * [Slide](../Slide) components, written as `<ion-slide>`. Basic configuration
 * values can be set as input properties, which are listed below. Slides events
 * can also be listened to such as the slide changing by placing the event on the
 * `<ion-slides>` element. See [Usage](#usage) below for more information.
 *
 *
 * ### Navigating
 * After creating and configuring the slides, you can navigate between them
 * by swiping or calling methods on the `Slides` instance. You can call `slideTo()` to
 * navigate to a specific slide, or `slideNext()` to change to the slide that follows
 * the active slide. All of the [methods](#instance-members) provided by the `Slides`
 * instance are listed below. See [Usage](#usage) below for more information on
 * navigating between slides.
 *
 *
 * @usage
 *
 * You can add slides to a `@Component` using the following template:
 *
 * ```html
 * <ion-slides>
 *   <ion-slide>
 *     <h1>Slide 1</h1>
 *   </ion-slide>
 *   <ion-slide>
 *     <h1>Slide 2</h1>
 *   </ion-slide>
 *   <ion-slide>
 *     <h1>Slide 3</h1>
 *   </ion-slide>
 * </ion-slides>
 * ```
 *
 * Next, we can use `ViewChild` to assign the Slides instance to
 * your `slides` property. Now we can call any of the `Slides`
 * [methods](#instance-members), for example we can use the Slide's
 * `slideTo()` method in order to navigate to a specific slide on
 * a button click. Below we call the `goToSlide()` method and it
 * navigates to the 3rd slide:
 *
 * ```ts
 * import { ViewChild } from '@angular/core';
 * import { Slides } from 'ionic-angular';
 *
 * class MyPage {
 *   @ViewChild(Slides) slides: Slides;
 *
 *   goToSlide() {
 *     this.slides.slideTo(2, 500);
 *   }
 * }
 * ```
 *
 * We can also add events to listen to on the `<ion-slides>` element.
 * Let's add the `ionSlideDidChange` event and call a method when the slide changes:
 *
 * ```html
 * <ion-slides (ionSlideDidChange)="slideChanged()">
 * ```
 *
 * In our class, we add the `slideChanged()` method which gets the active
 * index and prints it:
 *
 * ```ts
 * class MyPage {
 *   ...
 *
 *   slideChanged() {
 *     let currentIndex = this.slides.getActiveIndex();
 *     console.log('Current index is', currentIndex);
 *   }
 * }
 * ```
 *
 * @advanced
 *
 * There are several options available to create customized slides. Ionic exposes
 * the most commonly used options as [inputs](http://learnangular2.com/inputs/).
 * In order to use an option that isn't exposed as an input the following code
 * should be used, where `freeMode` is the option to change:
 *
 * ```ts
 * import { ViewChild } from '@angular/core';
 * import { Slides } from 'ionic-angular';

 * class MyPage {
 *   @ViewChild(Slides) slides: Slides;
 *
 *   ngAfterViewInit() {
 *     this.slides.freeMode = true;
 *   }
 * }
 *
 * ```
 *
 * To see all of the available options, take a look at the
 * [source for slides](https://github.com/ionic-team/ionic/blob/master/src/components/slides/slides.ts).
 *
 * @demo /docs/demos/src/slides/
 * @see {@link /docs/components#slides Slides Component Docs}
 *
 * Adopted from Swiper.js:
 * The most modern mobile touch slider and framework with
 * hardware accelerated transitions.
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 */
let Slides = Slides_1 = class Slides extends ion_1.Ion {
    constructor(config, _plt, zone, viewCtrl, elementRef, renderer) {
        super(config, elementRef, renderer, 'slides');
        this._plt = _plt;
        this._control = null;
        this._effectName = 'slide';
        this._direction = 'horizontal';
        this._initialSlide = 0;
        this._isLoop = false;
        this._pager = false;
        this._paginationType = 'bullets';
        /** @hidden */
        this.paginationBulletRender = null;
        this._isParallax = false;
        this._speedMs = 300;
        this._isZoom = false;
        /**
         * @hidden
         * Enabled this option and swiper will be operated as usual except it will
         * not move, real translate values on wrapper will not be set. Useful when
         * you may need to create custom slide transition.
         */
        this.virtualTranslate = false;
        /**
         * @hidden
         * Set to true to round values of slides width and height to prevent blurry
         * texts on usual resolution screens (if you have such)
         */
        this.roundLengths = false;
        this._spaceBetween = 0;
        this._slidesPerView = 1;
        this._centeredSlides = false;
        /**
         * @hidden
         */
        this.slidesPerColumn = 1;
        /**
         * @hidden
         */
        this.slidesPerColumnFill = 'column';
        /**
         * @hidden
         */
        this.slidesPerGroup = 1;
        /**
         * @hidden
         */
        this.slidesOffsetBefore = 0;
        /**
         * @hidden
         */
        this.slidesOffsetAfter = 0;
        // autoplay
        /**
         * @hidden
         */
        this.autoplayDisableOnInteraction = true;
        /**
         * @hidden
         */
        this.autoplayStopOnLast = false;
        // Free mode
        /**
         * @hidden
         */
        this.freeMode = false;
        /**
         * @hidden
         */
        this.freeModeMomentum = true;
        /**
         * @hidden
         */
        this.freeModeMomentumRatio = 1;
        /**
         * @hidden
         */
        this.freeModeMomentumBounce = true;
        /**
         * @hidden
         */
        this.freeModeMomentumBounceRatio = 1;
        /**
         * @hidden
         */
        this.freeModeMomentumVelocityRatio = 1;
        /**
         * @hidden
         */
        this.freeModeSticky = false;
        /**
         * @hidden
         */
        this.freeModeMinimumVelocity = 0.02;
        // Autoheight
        /**
         * @hidden
         */
        this.autoHeight = false;
        // Set wrapper width
        /**
         * @hidden
         */
        this.setWrapperSize = false;
        // Zoom
        /**
         * @hidden
         */
        this.zoomMax = 3;
        /**
         * @hidden
         */
        this.zoomMin = 1;
        /**
         * @hidden
         */
        this.zoomToggle = true;
        // Touches
        /**
         * @hidden
         */
        this.touchRatio = 1;
        /**
         * @hidden
         */
        this.touchAngle = 45;
        /**
         * @hidden
         */
        this.simulateTouch = true;
        /**
         * @hidden
         */
        this.shortSwipes = true;
        /**
         * @hidden
         */
        this.longSwipes = true;
        /**
         * @hidden
         */
        this.longSwipesRatio = 0.5;
        /**
         * @hidden
         */
        this.longSwipesMs = 300;
        /**
         * @hidden
         */
        this.followFinger = true;
        /**
         * @hidden
         */
        this.onlyExternal = false;
        /**
         * @hidden
         */
        this.threshold = 0;
        /**
         * @hidden
         */
        this.touchMoveStopPropagation = true;
        /**
         * @hidden
         */
        this.touchReleaseOnEdges = false;
        // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
        /**
         * @hidden
         */
        this.iOSEdgeSwipeDetection = false;
        /**
         * @hidden
         */
        this.iOSEdgeSwipeThreshold = 20;
        // Pagination
        /**
         * @hidden
         */
        this.paginationClickable = false;
        /**
         * @hidden
         */
        this.paginationHide = false;
        // Resistance
        /** @hidden */
        this.resistance = true;
        /** @hidden */
        this.resistanceRatio = 0.85;
        // Progress
        /** @hidden */
        this.watchSlidesProgress = false;
        /** @hidden */
        this.watchSlidesVisibility = false;
        // Clicks
        /**
         * @hidden
         */
        this.preventClicks = true;
        /**
         * @hidden
         */
        this.preventClicksPropagation = true;
        /**
         * @hidden
         */
        this.slideToClickedSlide = false;
        // loop
        /**
         * @hidden
         */
        this.loopAdditionalSlides = 0;
        /**
         * @hidden
         */
        this.loopedSlides = null;
        // Swiping/no swiping
        /**
         * @hidden
         */
        this.swipeHandler = null;
        /**
         * @hidden
         */
        this.noSwiping = true;
        // Callbacks
        /** @hidden */
        this.runCallbacksOnInit = true;
        // Controller
        this.controlBy = 'slide';
        this.controlInverse = false;
        // Keyboard
        /**
         * @hidden
         */
        this.keyboardControl = true;
        // Effects
        /**
         * @hidden
         */
        this.coverflow = {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        };
        /**
         * @hidden
         */
        this.flip = {
            slideShadows: true,
            limitRotation: true
        };
        /**
         * @hidden
         */
        this.cube = {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
        };
        /**
         * @hidden
         */
        this.fade = {
            crossFade: false
        };
        // Accessibility
        /**
         * @hidden
         */
        this.prevSlideMessage = 'Previous slide';
        /**
         * @hidden
         */
        this.nextSlideMessage = 'Next slide';
        /**
         * @hidden
         */
        this.firstSlideMessage = 'This is the first slide';
        /**
         * @hidden
         */
        this.lastSlideMessage = 'This is the last slide';
        /**
         * @output {Slides} Emitted when a slide change starts.
         */
        this.ionSlideWillChange = new core_1.EventEmitter();
        /**
         * @output {Slides} Emitted when a slide change ends.
         */
        this.ionSlideDidChange = new core_1.EventEmitter();
        /**
         * @output {Slides} Emitted when a slide moves.
         */
        this.ionSlideDrag = new core_1.EventEmitter();
        /**
         * @output {Slides} Emitted when slides reaches its beginning (initial position).
         */
        this.ionSlideReachStart = new core_1.EventEmitter();
        /**
         * @output {Slides} Emitted when slides reaches its last slide.
         */
        this.ionSlideReachEnd = new core_1.EventEmitter();
        /**
         * @output {Slides} Emitted when a slide moves.
         */
        this.ionSlideAutoplay = new core_1.EventEmitter();
        /**
         * @output {Slides} Emitted when a autoplay starts.
         */
        this.ionSlideAutoplayStart = new core_1.EventEmitter();
        /**
         * @output {Slides} Emitted when a autoplay stops.
         */
        this.ionSlideAutoplayStop = new core_1.EventEmitter();
        /**
         * @output {Slides} Emitted when a slide change starts with the "forward" direction.
         */
        this.ionSlideNextStart = new core_1.EventEmitter();
        /**
         * @output {Slides} Emitted when a slide change starts with the "backward" direction.
         */
        this.ionSlidePrevStart = new core_1.EventEmitter();
        /**
         * @output {Slides} Emitted when a slide change ends with the "forward" direction.
         */
        this.ionSlideNextEnd = new core_1.EventEmitter();
        /**
         * @output {Slides} Emitted when a slide change ends with the "backward" direction.
         */
        this.ionSlidePrevEnd = new core_1.EventEmitter();
        /**
         * @output {Slides} Emitted when the user taps/clicks on the slide's container.
         */
        this.ionSlideTap = new core_1.EventEmitter();
        /**
         * @output {Slides} Emitted when the user double taps on the slide's container.
         */
        this.ionSlideDoubleTap = new core_1.EventEmitter();
        /** @hidden */
        this.ionSlideProgress = new core_1.EventEmitter();
        /** @hidden */
        this.ionSlideTransitionStart = new core_1.EventEmitter();
        /** @hidden */
        this.ionSlideTransitionEnd = new core_1.EventEmitter();
        /** @hidden */
        this.ionSlideTouchStart = new core_1.EventEmitter();
        /** @hidden */
        this.ionSlideTouchEnd = new core_1.EventEmitter();
        this._unregs = [];
        /** @internal */
        this._allowSwipeToNext = true;
        /** @internal */
        this._allowSwipeToPrev = true;
        this._zone = zone;
        this.id = ++slidesId;
        this.slideId = 'slides-' + this.id;
        this.setElementClass(this.slideId, true);
        // only initialize the slides whent the content is ready
        if (viewCtrl) {
            var subscription = viewCtrl.readReady.subscribe(() => {
                subscription.unsubscribe();
                this._initSlides();
            });
        }
    }
    /**
     * @input {number} Delay between transitions (in milliseconds). If this
     * parameter is not passed, autoplay is disabled. Default does
     * not have a value and does not autoplay.
     * Default: `null`.
     */
    get autoplay() {
        return this._autoplayMs;
    }
    set autoplay(val) {
        this._autoplayMs = parseInt(val, 10);
    }
    /**
     * @input {Slides} Pass another Slides instance or array of Slides instances
     * that should be controlled by this Slides instance.
     * Default: `null`.
     */
    get control() {
        return this._control;
    }
    set control(val) {
        if (val instanceof Slides_1 || Array.isArray(val)) {
            this._control = val;
        }
    }
    /**
     * @input {string} The animation effect of the slides.
     * Possible values are: `slide`, `fade`, `cube`, `coverflow` or `flip`.
     * Default: `slide`.
     */
    get effect() {
        return this._effectName;
    }
    set effect(effectName) {
        if (swiper_effects_1.SWIPER_EFFECTS[effectName]) {
            this._effectName = effectName;
        }
    }
    /**
     * @input {string}  Swipe direction: 'horizontal' or 'vertical'.
     * Default: `horizontal`.
     */
    get direction() {
        return this._direction;
    }
    set direction(val) {
        if (val === 'horizontal' || val === 'vertical') {
            this._direction = val;
        }
    }
    /**
     * @input {number}  Index number of initial slide. Default: `0`.
     */
    get initialSlide() {
        return this._initialSlide;
    }
    set initialSlide(val) {
        this._initialSlide = parseInt(val, 10);
    }
    /**
     * @input {boolean} If true, continuously loop from the last slide to the
     * first slide.
     */
    get loop() {
        return this._isLoop;
    }
    set loop(val) {
        this._isLoop = util_1.isTrueProperty(val);
    }
    /**
     * @input {boolean}  If true, show the pager.
     */
    get pager() {
        return this._pager;
    }
    set pager(val) {
        this._pager = util_1.isTrueProperty(val);
    }
    /**
     * @input {string} If dir attribute is equal to rtl, set interal _rtl to true;
     */
    set dir(val) {
        this._rtl = (val.toLowerCase() === 'rtl');
    }
    /**
     * @input {string}  Type of pagination. Possible values are:
     * `bullets`, `fraction`, `progress`. Default: `bullets`.
     * (Note that the pager will not show unless `pager` input
     * is set to true).
     */
    get paginationType() {
        return this._paginationType;
    }
    set paginationType(val) {
        if (val === 'bullets' || val === 'fraction' || val === 'progress') {
            this._paginationType = val;
        }
    }
    /**
     * @input {boolean} If true, allows you to use "parallaxed" elements inside of
     * slider.
     */
    get parallax() {
        return this._isParallax;
    }
    set parallax(val) {
        this._isParallax = util_1.isTrueProperty(val);
    }
    /**
     * @input {number} Duration of transition between slides
     * (in milliseconds). Default: `300`.
     */
    get speed() {
        return this._speedMs;
    }
    set speed(val) {
        this._speedMs = parseInt(val, 10);
    }
    /**
     * @input {boolean} If true, enables zooming functionality.
     */
    get zoom() {
        return this._isZoom;
    }
    set zoom(val) {
        this._isZoom = util_1.isTrueProperty(val);
    }
    // Slides grid
    /**
     * @input {number} Distance between slides in px. Default: `0`.
     */
    get spaceBetween() {
        return this._spaceBetween;
    }
    set spaceBetween(val) {
        this._spaceBetween = parseInt(val, 10);
    }
    /**
     * @input {number} Slides per view. Slides visible at the same time. Default: `1`.
     */
    get slidesPerView() {
        return this._slidesPerView;
    }
    set slidesPerView(val) {
        this._slidesPerView = val === 'auto' ? 'auto' : parseFloat(val);
    }
    /**
     * @input {boolean} Center a slide in the middle of the screen.
     */
    get centeredSlides() {
        return this._centeredSlides;
    }
    set centeredSlides(val) {
        this._centeredSlides = util_1.isTrueProperty(val);
    }
    _initSlides() {
        if (!this._init) {
            console.debug(`ion-slides, init`);
            var s = this;
            var plt = s._plt;
            s.container = this.getNativeElement().children[0];
            // init swiper core
            swiper_1.initSwiper(s, plt);
            // init core event listeners
            this._unregs.push(swiper_events_1.initEvents(s, plt));
            if (this.zoom) {
                // init zoom event listeners
                this._unregs.push(swiper_zoom_1.initZoom(s, plt));
            }
            if (this.keyboardControl) {
                // init keyboard event listeners
                s.enableKeyboardControl(true);
            }
            this._init = true;
        }
    }
    /**
     * @hidden
     */
    ngAfterContentInit() {
        this._plt.timeout(() => {
            this._initSlides();
        }, 300);
    }
    /**
     * Update the underlying slider implementation. Call this if you've added or removed
     * child slides.
     */
    update(debounce = 300) {
        if (this._init) {
            this._plt.cancelTimeout(this._tmr);
            this._tmr = this._plt.timeout(() => {
                swiper_1.update(this, this._plt);
                // Don't allow pager to show with > 10 slides
                if (this.length() > 10) {
                    this.paginationType = undefined;
                }
            }, debounce);
        }
    }
    resize() {
        if (this._init) {
        }
    }
    /**
     * Transition to the specified slide.
     *
     * @param {number} index  The index number of the slide.
     * @param {number} [speed]  Transition duration (in ms).
     * @param {boolean} [runCallbacks] Whether or not to emit the `ionSlideWillChange`/`ionSlideDidChange` events. Default true.
     */
    slideTo(index, speed, runCallbacks) {
        swiper_1.slideTo(this, this._plt, index, speed, runCallbacks);
    }
    /**
     * Transition to the next slide.
     *
     * @param {number} [speed]  Transition duration (in ms).
     * @param {boolean} [runCallbacks]  Whether or not to emit the `ionSlideWillChange`/`ionSlideDidChange` events. Default true.
     */
    slideNext(speed, runCallbacks) {
        swiper_1.slideNext(this, this._plt, runCallbacks, speed, true);
    }
    /**
     * Transition to the previous slide.
     *
     * @param {number} [speed]  Transition duration (in ms).
     * @param {boolean} [runCallbacks]  Whether or not to emit the `ionSlideWillChange`/`ionSlideDidChange` events. Default true.
     */
    slidePrev(speed, runCallbacks) {
        swiper_1.slidePrev(this, this._plt, runCallbacks, speed, true);
    }
    /**
     * Get the index of the active slide.
     *
     * @returns {number} The index number of the current slide.
     */
    getActiveIndex() {
        return this._activeIndex;
    }
    /**
     * Get the index of the previous slide.
     *
     * @returns {number} The index number of the previous slide.
     */
    getPreviousIndex() {
        return this._previousIndex;
    }
    /**
     * Get the total number of slides.
     *
     * @returns {number} The total number of slides.
     */
    length() {
        return this._slides.length;
    }
    /**
     * Get whether or not the current slide is the last slide.
     *
     * @returns {boolean} If the slide is the last slide or not.
     */
    isEnd() {
        return this._isEnd;
    }
    /**
     * Get whether or not the current slide is the first slide.
     *
     * @returns {boolean} If the slide is the first slide or not.
     */
    isBeginning() {
        return this._isBeginning;
    }
    /**
     * Start auto play.
     */
    startAutoplay() {
        swiper_1.startAutoplay(this, this._plt);
    }
    /**
     * Stop auto play.
     */
    stopAutoplay() {
        swiper_1.stopAutoplay(this);
    }
    /**
     * Lock or unlock the ability to slide to the next slides.
     * @param {boolean} shouldLockSwipeToNext If set to true the user will not be able to swipe to the next slide.
     * Set to false to unlock this behaviour.
     */
    lockSwipeToNext(shouldLockSwipeToNext) {
        this._allowSwipeToNext = !shouldLockSwipeToNext;
    }
    /**
     * Lock or unlock the ability to slide to the previous slides.
     * @param {boolean} shouldLockSwipeToPrev If set to true the user will not be able to swipe to the previous slide.
     * Set to false to unlock this behaviour.
     */
    lockSwipeToPrev(shouldLockSwipeToPrev) {
        this._allowSwipeToPrev = !shouldLockSwipeToPrev;
    }
    /**
     * Lock or unlock the ability to slide to change slides.
     * @param {boolean} shouldLockSwipes If set to true user can not swipe in either direction on slide.
     * False allows swiping in both directions.
     */
    lockSwipes(shouldLockSwipes) {
        this._allowSwipeToNext = this._allowSwipeToPrev = !shouldLockSwipes;
    }
    /**
     * Enable or disable keyboard control.
     * @param {boolean} shouldEnableKeyboard If set to true the slider can be controled by a keyboard.
     */
    enableKeyboardControl(shouldEnableKeyboard) {
        swiper_keyboard_1.enableKeyboardControl(this, this._plt, shouldEnableKeyboard);
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        this._init = false;
        this._unregs.forEach(unReg => {
            unReg();
        });
        this._unregs.length = 0;
        swiper_1.destroySwiper(this);
        this.enableKeyboardControl(false);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Slides.prototype, "autoplay", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Slides.prototype, "control", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], Slides.prototype, "effect", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], Slides.prototype, "direction", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Slides.prototype, "initialSlide", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], Slides.prototype, "loop", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], Slides.prototype, "pager", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Slides.prototype, "dir", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], Slides.prototype, "paginationType", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], Slides.prototype, "parallax", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Slides.prototype, "speed", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], Slides.prototype, "zoom", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Slides.prototype, "spaceBetween", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Slides.prototype, "slidesPerView", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], Slides.prototype, "centeredSlides", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Slides.prototype, "ionSlideWillChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Slides.prototype, "ionSlideDidChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Slides.prototype, "ionSlideDrag", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Slides.prototype, "ionSlideReachStart", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Slides.prototype, "ionSlideReachEnd", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Slides.prototype, "ionSlideAutoplay", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Slides.prototype, "ionSlideAutoplayStart", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Slides.prototype, "ionSlideAutoplayStop", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Slides.prototype, "ionSlideNextStart", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Slides.prototype, "ionSlidePrevStart", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Slides.prototype, "ionSlideNextEnd", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Slides.prototype, "ionSlidePrevEnd", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Slides.prototype, "ionSlideTap", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Slides.prototype, "ionSlideDoubleTap", void 0);
Slides = Slides_1 = __decorate([
    core_1.Component({
        selector: 'ion-slides',
        template: '<div class="swiper-container" [attr.dir]="_rtl? \'rtl\' : null">' +
            '<div class="swiper-wrapper">' +
            '<ng-content></ng-content>' +
            '</div>' +
            '<div [class.hide]="!pager" class="swiper-pagination"></div>' +
            '</div>',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __param(3, core_1.Optional()),
    __metadata("design:paramtypes", [config_1.Config,
        platform_1.Platform,
        core_1.NgZone,
        view_controller_1.ViewController,
        core_1.ElementRef,
        core_1.Renderer])
], Slides);
exports.Slides = Slides;
let slidesId = -1;
var Slides_1;
//# sourceMappingURL=slides.js.map
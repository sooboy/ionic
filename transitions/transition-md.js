"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animation_1 = require("../animations/animation");
const util_1 = require("../util/util");
const page_transition_1 = require("./page-transition");
const TRANSLATEY = 'translateY';
const OFF_BOTTOM = '40px';
const CENTER = '0px';
const SHOW_BACK_BTN_CSS = 'show-back-button';
class MDTransition extends page_transition_1.PageTransition {
    init() {
        super.init();
        const plt = this.plt;
        const enteringView = this.enteringView;
        const leavingView = this.leavingView;
        const opts = this.opts;
        // what direction is the transition going
        const backDirection = (opts.direction === 'back');
        if (enteringView) {
            if (backDirection) {
                this.duration(util_1.isPresent(opts.duration) ? opts.duration : 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
            }
            else {
                this.duration(util_1.isPresent(opts.duration) ? opts.duration : 280).easing('cubic-bezier(0.36,0.66,0.04,1)');
                this.enteringPage
                    .fromTo(TRANSLATEY, OFF_BOTTOM, CENTER, true)
                    .fromTo('opacity', 0.01, 1, true);
            }
            if (enteringView.hasNavbar()) {
                const enteringPageEle = enteringView.pageRef().nativeElement;
                const enteringNavbarEle = enteringPageEle.querySelector('ion-navbar');
                const enteringNavBar = new animation_1.Animation(plt, enteringNavbarEle);
                this.add(enteringNavBar);
                const enteringBackButton = new animation_1.Animation(plt, enteringNavbarEle.querySelector('.back-button'));
                this.add(enteringBackButton);
                if (enteringView.enableBack()) {
                    enteringBackButton.beforeAddClass(SHOW_BACK_BTN_CSS);
                }
                else {
                    enteringBackButton.beforeRemoveClass(SHOW_BACK_BTN_CSS);
                }
            }
        }
        // setup leaving view
        if (leavingView && backDirection) {
            // leaving content
            this.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
            const leavingPage = new animation_1.Animation(plt, leavingView.pageRef());
            this.add(leavingPage.fromTo(TRANSLATEY, CENTER, OFF_BOTTOM).fromTo('opacity', 1, 0));
        }
    }
}
exports.MDTransition = MDTransition;
//# sourceMappingURL=transition-md.js.map
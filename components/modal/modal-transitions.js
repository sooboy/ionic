"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animation_1 = require("../../animations/animation");
const page_transition_1 = require("../../transitions/page-transition");
/**
 * Animations for modals
 */
class ModalSlideIn extends page_transition_1.PageTransition {
    init() {
        super.init();
        const ele = this.enteringView.pageRef().nativeElement;
        const backdropEle = ele.querySelector('ion-backdrop');
        const backdrop = new animation_1.Animation(this.plt, backdropEle);
        const wrapper = new animation_1.Animation(this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 1 });
        wrapper.fromTo('translateY', '100%', '0%');
        backdrop.fromTo('opacity', 0.01, 0.4);
        this
            .element(this.enteringView.pageRef())
            .easing('cubic-bezier(0.36,0.66,0.04,1)')
            .duration(400)
            .add(backdrop)
            .add(wrapper);
    }
}
exports.ModalSlideIn = ModalSlideIn;
class ModalSlideOut extends page_transition_1.PageTransition {
    init() {
        super.init();
        const ele = this.leavingView.pageRef().nativeElement;
        let backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        let wrapperEle = ele.querySelector('.modal-wrapper');
        let wrapperEleRect = wrapperEle.getBoundingClientRect();
        let wrapper = new animation_1.Animation(this.plt, wrapperEle);
        // height of the screen - top of the container tells us how much to scoot it down
        // so it's off-screen
        wrapper.fromTo('translateY', '0px', `${this.plt.height() - wrapperEleRect.top}px`);
        backdrop.fromTo('opacity', 0.4, 0.0);
        this
            .element(this.leavingView.pageRef())
            .easing('ease-out')
            .duration(250)
            .add(backdrop)
            .add(wrapper);
    }
}
exports.ModalSlideOut = ModalSlideOut;
class ModalMDSlideIn extends page_transition_1.PageTransition {
    init() {
        super.init();
        const ele = this.enteringView.pageRef().nativeElement;
        const backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        const wrapper = new animation_1.Animation(this.plt, ele.querySelector('.modal-wrapper'));
        backdrop.fromTo('opacity', 0.01, 0.4);
        wrapper.fromTo('translateY', '40px', '0px');
        wrapper.fromTo('opacity', 0.01, 1);
        const DURATION = 280;
        const EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
        this.element(this.enteringView.pageRef()).easing(EASING).duration(DURATION)
            .add(backdrop)
            .add(wrapper);
    }
}
exports.ModalMDSlideIn = ModalMDSlideIn;
class ModalMDSlideOut extends page_transition_1.PageTransition {
    init() {
        super.init();
        const ele = this.leavingView.pageRef().nativeElement;
        const backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        const wrapper = new animation_1.Animation(this.plt, ele.querySelector('.modal-wrapper'));
        backdrop.fromTo('opacity', 0.4, 0.0);
        wrapper.fromTo('translateY', '0px', '40px');
        wrapper.fromTo('opacity', 0.99, 0);
        this
            .element(this.leavingView.pageRef())
            .duration(200)
            .easing('cubic-bezier(0.47,0,0.745,0.715)')
            .add(wrapper)
            .add(backdrop);
    }
}
exports.ModalMDSlideOut = ModalMDSlideOut;
//# sourceMappingURL=modal-transitions.js.map
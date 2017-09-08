"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animation_1 = require("../../animations/animation");
const transition_1 = require("../../transitions/transition");
class ToastSlideIn extends transition_1.Transition {
    init() {
        // DOM READS
        let ele = this.enteringView.pageRef().nativeElement;
        const wrapperEle = ele.querySelector('.toast-wrapper');
        let wrapper = new animation_1.Animation(this.plt, wrapperEle);
        if (this.enteringView.data && this.enteringView.data.position === TOAST_POSITION_TOP) {
            // top
            // by default, it is -100% hidden (above the screen)
            // so move from that to 10px below top: 0px;
            wrapper.fromTo('translateY', '-100%', `${10}px`);
        }
        else if (this.enteringView.data && this.enteringView.data.position === TOAST_POSITION_MIDDLE) {
            // Middle
            // just center it and fade it in
            let topPosition = Math.floor(ele.clientHeight / 2 - wrapperEle.clientHeight / 2);
            // DOM WRITE
            wrapperEle.style.top = `${topPosition}px`;
            wrapper.fromTo('opacity', 0.01, 1);
        }
        else {
            // bottom
            // by default, it is 100% hidden (below the screen),
            // so move from that to 10 px above bottom: 0px
            wrapper.fromTo('translateY', '100%', `${0 - 10}px`);
        }
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(400).add(wrapper);
    }
}
exports.ToastSlideIn = ToastSlideIn;
class ToastSlideOut extends transition_1.Transition {
    init() {
        let ele = this.leavingView.pageRef().nativeElement;
        const wrapperEle = ele.querySelector('.toast-wrapper');
        let wrapper = new animation_1.Animation(this.plt, wrapperEle);
        if (this.leavingView.data && this.leavingView.data.position === TOAST_POSITION_TOP) {
            // top
            // reverse arguments from enter transition
            wrapper.fromTo('translateY', `${10}px`, '-100%');
        }
        else if (this.leavingView.data && this.leavingView.data.position === TOAST_POSITION_MIDDLE) {
            // Middle
            // just fade it out
            wrapper.fromTo('opacity', 0.99, 0);
        }
        else {
            // bottom
            // reverse arguments from enter transition
            wrapper.fromTo('translateY', `${0 - 10}px`, '100%');
        }
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(300).add(wrapper);
    }
}
exports.ToastSlideOut = ToastSlideOut;
class ToastMdSlideIn extends transition_1.Transition {
    init() {
        // DOM reads
        let ele = this.enteringView.pageRef().nativeElement;
        const wrapperEle = ele.querySelector('.toast-wrapper');
        let wrapper = new animation_1.Animation(this.plt, wrapperEle);
        if (this.enteringView.data && this.enteringView.data.position === TOAST_POSITION_TOP) {
            // top
            // by default, it is -100% hidden (above the screen)
            // so move from that to top: 0px;
            wrapper.fromTo('translateY', '-100%', `0%`);
        }
        else if (this.enteringView.data && this.enteringView.data.position === TOAST_POSITION_MIDDLE) {
            // Middle
            // just center it and fade it in
            let topPosition = Math.floor(ele.clientHeight / 2 - wrapperEle.clientHeight / 2);
            // DOM WRITE
            wrapperEle.style.top = `${topPosition}px`;
            wrapper.fromTo('opacity', 0.01, 1);
        }
        else {
            // bottom
            // by default, it is 100% hidden (below the screen),
            // so move from that to bottom: 0px
            wrapper.fromTo('translateY', '100%', `0%`);
        }
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(400).add(wrapper);
    }
}
exports.ToastMdSlideIn = ToastMdSlideIn;
class ToastMdSlideOut extends transition_1.Transition {
    init() {
        let ele = this.leavingView.pageRef().nativeElement;
        const wrapperEle = ele.querySelector('.toast-wrapper');
        let wrapper = new animation_1.Animation(this.plt, wrapperEle);
        if (this.leavingView.data && this.leavingView.data.position === TOAST_POSITION_TOP) {
            // top
            // reverse arguments from enter transition
            wrapper.fromTo('translateY', `${0}%`, '-100%');
        }
        else if (this.leavingView.data && this.leavingView.data.position === TOAST_POSITION_MIDDLE) {
            // Middle
            // just fade it out
            wrapper.fromTo('opacity', 0.99, 0);
        }
        else {
            // bottom
            // reverse arguments from enter transition
            wrapper.fromTo('translateY', `${0}%`, '100%');
        }
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(450).add(wrapper);
    }
}
exports.ToastMdSlideOut = ToastMdSlideOut;
class ToastWpPopIn extends transition_1.Transition {
    init() {
        let ele = this.enteringView.pageRef().nativeElement;
        const wrapperEle = ele.querySelector('.toast-wrapper');
        let wrapper = new animation_1.Animation(this.plt, wrapperEle);
        if (this.enteringView.data && this.enteringView.data.position === TOAST_POSITION_TOP) {
            // top
            wrapper.fromTo('opacity', 0.01, 1);
            wrapper.fromTo('scale', 1.3, 1);
        }
        else if (this.enteringView.data && this.enteringView.data.position === TOAST_POSITION_MIDDLE) {
            // Middle
            // just center it and fade it in
            let topPosition = Math.floor(ele.clientHeight / 2 - wrapperEle.clientHeight / 2);
            // DOM WRITE
            wrapperEle.style.top = `${topPosition}px`;
            wrapper.fromTo('opacity', 0.01, 1);
            wrapper.fromTo('scale', 1.3, 1);
        }
        else {
            // bottom
            wrapper.fromTo('opacity', 0.01, 1);
            wrapper.fromTo('scale', 1.3, 1);
        }
        this.easing('cubic-bezier(0,0,0.05,1)').duration(200).add(wrapper);
    }
}
exports.ToastWpPopIn = ToastWpPopIn;
class ToastWpPopOut extends transition_1.Transition {
    init() {
        // DOM reads
        let ele = this.leavingView.pageRef().nativeElement;
        const wrapperEle = ele.querySelector('.toast-wrapper');
        let wrapper = new animation_1.Animation(this.plt, wrapperEle);
        if (this.leavingView.data && this.leavingView.data.position === TOAST_POSITION_TOP) {
            // top
            // reverse arguments from enter transition
            wrapper.fromTo('opacity', 0.99, 0);
            wrapper.fromTo('scale', 1, 1.3);
        }
        else if (this.leavingView.data && this.leavingView.data.position === TOAST_POSITION_MIDDLE) {
            // Middle
            // just fade it out
            wrapper.fromTo('opacity', 0.99, 0);
            wrapper.fromTo('scale', 1, 1.3);
        }
        else {
            // bottom
            // reverse arguments from enter transition
            wrapper.fromTo('opacity', 0.99, 0);
            wrapper.fromTo('scale', 1, 1.3);
        }
        // DOM writes
        const EASE = 'ease-out';
        const DURATION = 150;
        this.easing(EASE).duration(DURATION).add(wrapper);
    }
}
exports.ToastWpPopOut = ToastWpPopOut;
const TOAST_POSITION_TOP = 'top';
const TOAST_POSITION_MIDDLE = 'middle';
//# sourceMappingURL=toast-transitions.js.map
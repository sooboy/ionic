"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animation_1 = require("../../animations/animation");
const transition_1 = require("../../transitions/transition");
/**
 * Animations for alerts
 */
class AlertPopIn extends transition_1.Transition {
    init() {
        const ele = this.enteringView.pageRef().nativeElement;
        const backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        const wrapper = new animation_1.Animation(this.plt, ele.querySelector('.alert-wrapper'));
        wrapper.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
        backdrop.fromTo('opacity', 0.01, 0.3);
        this
            .easing('ease-in-out')
            .duration(200)
            .add(backdrop)
            .add(wrapper);
    }
}
exports.AlertPopIn = AlertPopIn;
class AlertPopOut extends transition_1.Transition {
    init() {
        const ele = this.leavingView.pageRef().nativeElement;
        const backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        const wrapper = new animation_1.Animation(this.plt, ele.querySelector('.alert-wrapper'));
        wrapper.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
        backdrop.fromTo('opacity', 0.3, 0);
        this
            .easing('ease-in-out')
            .duration(200)
            .add(backdrop)
            .add(wrapper);
    }
}
exports.AlertPopOut = AlertPopOut;
class AlertMdPopIn extends transition_1.Transition {
    init() {
        const ele = this.enteringView.pageRef().nativeElement;
        const backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        const wrapper = new animation_1.Animation(this.plt, ele.querySelector('.alert-wrapper'));
        wrapper.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
        backdrop.fromTo('opacity', 0.01, 0.5);
        this
            .easing('ease-in-out')
            .duration(200)
            .add(backdrop)
            .add(wrapper);
    }
}
exports.AlertMdPopIn = AlertMdPopIn;
class AlertMdPopOut extends transition_1.Transition {
    init() {
        const ele = this.leavingView.pageRef().nativeElement;
        const backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        const wrapper = new animation_1.Animation(this.plt, ele.querySelector('.alert-wrapper'));
        wrapper.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
        backdrop.fromTo('opacity', 0.5, 0);
        this
            .easing('ease-in-out')
            .duration(200)
            .add(backdrop)
            .add(wrapper);
    }
}
exports.AlertMdPopOut = AlertMdPopOut;
class AlertWpPopIn extends transition_1.Transition {
    init() {
        const ele = this.enteringView.pageRef().nativeElement;
        const backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        const wrapper = new animation_1.Animation(this.plt, ele.querySelector('.alert-wrapper'));
        wrapper.fromTo('opacity', 0.01, 1).fromTo('scale', 1.3, 1);
        backdrop.fromTo('opacity', 0.01, 0.5);
        this
            .easing('cubic-bezier(0,0,0.05,1)')
            .duration(200)
            .add(backdrop)
            .add(wrapper);
    }
}
exports.AlertWpPopIn = AlertWpPopIn;
class AlertWpPopOut extends transition_1.Transition {
    init() {
        const ele = this.leavingView.pageRef().nativeElement;
        const backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        const wrapper = new animation_1.Animation(this.plt, ele.querySelector('.alert-wrapper'));
        wrapper.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 1.3);
        backdrop.fromTo('opacity', 0.5, 0);
        this
            .easing('ease-out')
            .duration(150)
            .add(backdrop)
            .add(wrapper);
    }
}
exports.AlertWpPopOut = AlertWpPopOut;
//# sourceMappingURL=alert-transitions.js.map
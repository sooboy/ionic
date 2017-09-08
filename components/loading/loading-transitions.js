"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animation_1 = require("../../animations/animation");
const transition_1 = require("../../transitions/transition");
/**
 * Animations for loading
 */
class LoadingPopIn extends transition_1.Transition {
    init() {
        let ele = this.enteringView.pageRef().nativeElement;
        let backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        let wrapper = new animation_1.Animation(this.plt, ele.querySelector('.loading-wrapper'));
        wrapper.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
        backdrop.fromTo('opacity', 0.01, 0.3);
        this
            .easing('ease-in-out')
            .duration(200)
            .add(backdrop)
            .add(wrapper);
    }
}
exports.LoadingPopIn = LoadingPopIn;
class LoadingPopOut extends transition_1.Transition {
    init() {
        let ele = this.leavingView.pageRef().nativeElement;
        let backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        let wrapper = new animation_1.Animation(this.plt, ele.querySelector('.loading-wrapper'));
        wrapper.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
        backdrop.fromTo('opacity', 0.3, 0);
        this
            .easing('ease-in-out')
            .duration(200)
            .add(backdrop)
            .add(wrapper);
    }
}
exports.LoadingPopOut = LoadingPopOut;
class LoadingMdPopIn extends transition_1.Transition {
    init() {
        let ele = this.enteringView.pageRef().nativeElement;
        let backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        let wrapper = new animation_1.Animation(this.plt, ele.querySelector('.loading-wrapper'));
        wrapper.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
        backdrop.fromTo('opacity', 0.01, 0.5);
        this
            .easing('ease-in-out')
            .duration(200)
            .add(backdrop)
            .add(wrapper);
    }
}
exports.LoadingMdPopIn = LoadingMdPopIn;
class LoadingMdPopOut extends transition_1.Transition {
    init() {
        let ele = this.leavingView.pageRef().nativeElement;
        let backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        let wrapper = new animation_1.Animation(this.plt, ele.querySelector('.loading-wrapper'));
        wrapper.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
        backdrop.fromTo('opacity', 0.5, 0);
        this
            .easing('ease-in-out')
            .duration(200)
            .add(backdrop)
            .add(wrapper);
    }
}
exports.LoadingMdPopOut = LoadingMdPopOut;
class LoadingWpPopIn extends transition_1.Transition {
    init() {
        let ele = this.enteringView.pageRef().nativeElement;
        let backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        let wrapper = new animation_1.Animation(this.plt, ele.querySelector('.loading-wrapper'));
        wrapper.fromTo('opacity', 0.01, 1).fromTo('scale', 1.3, 1);
        backdrop.fromTo('opacity', 0.01, 0.16);
        this
            .easing('cubic-bezier(0,0,0.05,1)')
            .duration(200)
            .add(backdrop)
            .add(wrapper);
    }
}
exports.LoadingWpPopIn = LoadingWpPopIn;
class LoadingWpPopOut extends transition_1.Transition {
    init() {
        let ele = this.leavingView.pageRef().nativeElement;
        let backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        let wrapper = new animation_1.Animation(this.plt, ele.querySelector('.loading-wrapper'));
        wrapper.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 1.3);
        backdrop.fromTo('opacity', 0.16, 0);
        this
            .easing('ease-out')
            .duration(150)
            .add(backdrop)
            .add(wrapper);
    }
}
exports.LoadingWpPopOut = LoadingWpPopOut;
//# sourceMappingURL=loading-transitions.js.map
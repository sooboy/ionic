"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animation_1 = require("../../animations/animation");
const transition_1 = require("../../transitions/transition");
class ActionSheetSlideIn extends transition_1.Transition {
    init() {
        const ele = this.enteringView.pageRef().nativeElement;
        const backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        const wrapper = new animation_1.Animation(this.plt, ele.querySelector('.action-sheet-wrapper'));
        backdrop.fromTo('opacity', 0.01, 0.4);
        wrapper.fromTo('translateY', '100%', '0%');
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(400).add(backdrop).add(wrapper);
    }
}
exports.ActionSheetSlideIn = ActionSheetSlideIn;
class ActionSheetSlideOut extends transition_1.Transition {
    init() {
        const ele = this.leavingView.pageRef().nativeElement;
        const backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        const wrapper = new animation_1.Animation(this.plt, ele.querySelector('.action-sheet-wrapper'));
        backdrop.fromTo('opacity', 0.4, 0);
        wrapper.fromTo('translateY', '0%', '100%');
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(300).add(backdrop).add(wrapper);
    }
}
exports.ActionSheetSlideOut = ActionSheetSlideOut;
class ActionSheetMdSlideIn extends transition_1.Transition {
    init() {
        const ele = this.enteringView.pageRef().nativeElement;
        const backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        const wrapper = new animation_1.Animation(this.plt, ele.querySelector('.action-sheet-wrapper'));
        backdrop.fromTo('opacity', 0.01, 0.26);
        wrapper.fromTo('translateY', '100%', '0%');
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(400).add(backdrop).add(wrapper);
    }
}
exports.ActionSheetMdSlideIn = ActionSheetMdSlideIn;
class ActionSheetMdSlideOut extends transition_1.Transition {
    init() {
        const ele = this.leavingView.pageRef().nativeElement;
        const backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        const wrapper = new animation_1.Animation(this.plt, ele.querySelector('.action-sheet-wrapper'));
        backdrop.fromTo('opacity', 0.26, 0);
        wrapper.fromTo('translateY', '0%', '100%');
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(450).add(backdrop).add(wrapper);
    }
}
exports.ActionSheetMdSlideOut = ActionSheetMdSlideOut;
class ActionSheetWpSlideIn extends transition_1.Transition {
    init() {
        const ele = this.enteringView.pageRef().nativeElement;
        const backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        const wrapper = new animation_1.Animation(this.plt, ele.querySelector('.action-sheet-wrapper'));
        backdrop.fromTo('opacity', 0.01, 0.16);
        wrapper.fromTo('translateY', '100%', '0%');
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(400).add(backdrop).add(wrapper);
    }
}
exports.ActionSheetWpSlideIn = ActionSheetWpSlideIn;
class ActionSheetWpSlideOut extends transition_1.Transition {
    init() {
        const ele = this.leavingView.pageRef().nativeElement;
        const backdrop = new animation_1.Animation(this.plt, ele.querySelector('ion-backdrop'));
        const wrapper = new animation_1.Animation(this.plt, ele.querySelector('.action-sheet-wrapper'));
        backdrop.fromTo('opacity', 0.1, 0);
        wrapper.fromTo('translateY', '0%', '100%');
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(450).add(backdrop).add(wrapper);
    }
}
exports.ActionSheetWpSlideOut = ActionSheetWpSlideOut;
//# sourceMappingURL=action-sheet-transitions.js.map
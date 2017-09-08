"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animation_1 = require("../animations/animation");
const transition_1 = require("./transition");
/**
 * @hidden
 */
class PageTransition extends transition_1.Transition {
    init() {
        if (this.enteringView) {
            this.enteringPage = new animation_1.Animation(this.plt, this.enteringView.pageRef());
            this.add(this.enteringPage.beforeAddClass('show-page'));
            // Resize content before transition starts
            this.beforeAddRead(() => {
                this.enteringView.readReady.emit();
            });
            this.beforeAddWrite(() => {
                this.enteringView.writeReady.emit();
            });
        }
    }
    destroy() {
        super.destroy();
        this.enteringPage && this.enteringPage.destroy();
        this.enteringPage = null;
    }
}
exports.PageTransition = PageTransition;
//# sourceMappingURL=page-transition.js.map
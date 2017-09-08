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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const dom_controller_1 = require("../../platform/dom-controller");
/**
 * @hidden
 */
let TabHighlight = class TabHighlight {
    constructor(_elementRef, _dom) {
        this._elementRef = _elementRef;
        this._dom = _dom;
    }
    select(tab) {
        if (!tab) {
            return;
        }
        const dom = this._dom;
        dom.read(() => {
            const btnEle = tab.btn.getNativeElement();
            const transform = `translate3d(${btnEle.offsetLeft}px,0,0) scaleX(${btnEle.offsetWidth})`;
            dom.write(() => {
                const ele = this._elementRef.nativeElement;
                ele.style[dom.plt.Css.transform] = transform;
                if (!this._init) {
                    this._init = true;
                    dom.write(() => {
                        ele.classList.add('animate');
                    }, 80);
                }
            });
        }, 32);
    }
};
TabHighlight = __decorate([
    core_1.Directive({
        selector: '.tab-highlight'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, dom_controller_1.DomController])
], TabHighlight);
exports.TabHighlight = TabHighlight;
//# sourceMappingURL=tab-highlight.js.map
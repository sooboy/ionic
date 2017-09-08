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
const app_1 = require("../app/app");
const config_1 = require("../../config/config");
const platform_1 = require("../../platform/platform");
/**
 * @hidden
 */
let ClickBlock = class ClickBlock {
    constructor(app, config, plt, elementRef, renderer) {
        this.plt = plt;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._showing = false;
        app._clickBlock = this;
        const enabled = this.isEnabled = config.getBoolean('clickBlock', true);
        if (enabled) {
            this._setElementClass('click-block-enabled', true);
        }
    }
    activate(shouldShow, expire = 100, minDuration = 0) {
        if (this.isEnabled) {
            this.plt.cancelTimeout(this._tmr);
            if (shouldShow) {
                // remember when we started the click block
                this._start = Date.now();
                // figure out the minimum time it should be showing until
                // this is useful for transitions that are less than 300ms
                this._minEnd = this._start + (minDuration || 0);
                this._activate(true);
            }
            this._tmr = this.plt.timeout(this._activate.bind(this, false), expire);
        }
    }
    /** @internal */
    _activate(shouldShow) {
        if (this._showing !== shouldShow) {
            if (!shouldShow) {
                // check if it was enabled before the minimum duration
                // this is useful for transitions that are less than 300ms
                var now = Date.now();
                if (now < this._minEnd) {
                    this._tmr = this.plt.timeout(this._activate.bind(this, false), this._minEnd - now);
                    return;
                }
            }
            this._setElementClass('click-block-active', shouldShow);
            this._showing = shouldShow;
        }
    }
    _setElementClass(className, add) {
        this.renderer.setElementClass(this.elementRef.nativeElement, className, add);
    }
};
ClickBlock = __decorate([
    core_1.Directive({
        selector: '.click-block'
    }),
    __param(0, core_1.Inject(core_1.forwardRef(() => app_1.App))),
    __metadata("design:paramtypes", [app_1.App,
        config_1.Config,
        platform_1.Platform,
        core_1.ElementRef,
        core_1.Renderer])
], ClickBlock);
exports.ClickBlock = ClickBlock;
//# sourceMappingURL=click-block.js.map
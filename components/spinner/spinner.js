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
const config_1 = require("../../config/config");
const ion_1 = require("../ion");
const util_1 = require("../../util/util");
/**
 * @name Spinner
 * @description
 * The `ion-spinner` component provides a variety of animated SVG spinners.
 * Spinners enables you to give users feedback that the app is actively
 * processing/thinking/waiting/chillin’ out, or whatever you’d like it to indicate.
 * By default, the `ion-refresher` feature uses this spinner component while it's
 * the refresher is in the `refreshing` state.
 *
 * Ionic offers a handful of spinners out of the box, and by default, it will use
 * the appropriate spinner for the platform on which it’s running.
 *
 * <table class="table spinner-table">
 *  <tr>
 *    <th>
 *      <code>ios</code>
 *    </th>
 *    <td>
 *      <ion-spinner name="ios"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>ios-small</code>
 *    </th>
 *    <td>
 *      <ion-spinner name="ios-small"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>bubbles</code>
 *    </th>
 *    <td>
 *      <ion-spinner name="bubbles"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>circles</code>
 *    </th>
 *    <td>
 *      <ion-spinner name="circles"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>crescent</code>
 *    </th>
 *    <td>
 *      <ion-spinner name="crescent"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>dots</code>
 *    </th>
 *    <td>
 *      <ion-spinner name="dots"></ion-spinner>
 *    </td>
 *  </tr>
 * </table>
 *
 * @usage
 * The following code would use the default spinner for the platform it's
 * running from. If it's neither iOS or Android, it'll default to use `ios`.
 *
 * ```html
 * <ion-spinner></ion-spinner>
 * ```
 *
 * By setting the `name` property, you can specify which predefined spinner to
 * use, no matter what the platform is.
 *
 * ```html
 * <ion-spinner name="bubbles"></ion-spinner>
 * ```
 *
 * ## Styling SVG with CSS
 * One cool thing about SVG is its ability to be styled with CSS! One thing to note
 * is that some of the CSS properties on an SVG element have different names. For
 * example, SVG uses the term `stroke` instead of `border`, and `fill` instead
 * of `background-color`.
 *
 * ```css
 * ion-spinner * {
 *   width: 28px;
 *   height: 28px;
 *   stroke: #444;
 *   fill: #222;
 * }
 * ```
 */
let Spinner = class Spinner extends ion_1.Ion {
    constructor(config, elementRef, renderer) {
        super(config, elementRef, renderer, 'spinner');
        this._dur = null;
        this._paused = false;
    }
    /**
     * @input {string} SVG spinner name.
     */
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
        this.load();
    }
    /**
     * @input {string} How long it takes it to do one loop.
     */
    get duration() {
        return this._dur;
    }
    set duration(val) {
        this._dur = val;
        this.load();
    }
    /**
     * @input {boolean} If true, pause the animation.
     */
    get paused() {
        return this._paused;
    }
    set paused(val) {
        this._paused = util_1.isTrueProperty(val);
    }
    /**
     * @hidden
     */
    ngOnInit() {
        this._init = true;
        this.load();
    }
    /**
     * @hidden
     */
    load() {
        if (this._init) {
            this._l = [];
            this._c = [];
            var name = this._name || this._config.get('spinner', 'ios');
            const spinner = SPINNERS[name];
            if (spinner) {
                if (spinner.lines) {
                    for (let i = 0, l = spinner.lines; i < l; i++) {
                        this._l.push(this._loadEle(spinner, i, l));
                    }
                }
                else if (spinner.circles) {
                    for (let i = 0, l = spinner.circles; i < l; i++) {
                        this._c.push(this._loadEle(spinner, i, l));
                    }
                }
                this.setElementClass(`spinner-${name}`, true);
                this.setElementClass(`spinner-${this._mode}-${name}`, true);
            }
        }
    }
    _loadEle(spinner, index, total) {
        let duration = this._dur || spinner.dur;
        let data = spinner.fn(duration, index, total);
        data.style.animationDuration = duration + 'ms';
        return data;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Spinner.prototype, "name", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Spinner.prototype, "duration", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Spinner.prototype, "paused", null);
Spinner = __decorate([
    core_1.Component({
        selector: 'ion-spinner',
        template: '<svg viewBox="0 0 64 64" *ngFor="let i of _c" [ngStyle]="i.style">' +
            '<circle [attr.r]="i.r" transform="translate(32,32)"></circle>' +
            '</svg>' +
            '<svg viewBox="0 0 64 64" *ngFor="let i of _l" [ngStyle]="i.style">' +
            '<line [attr.y1]="i.y1" [attr.y2]="i.y2" transform="translate(32,32)"></line>' +
            '</svg>',
        host: {
            '[class.spinner-paused]': '_paused'
        },
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [config_1.Config, core_1.ElementRef, core_1.Renderer])
], Spinner);
exports.Spinner = Spinner;
const SPINNERS = {
    ios: {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            const transform = 'rotate(' + (30 * index + (index < 6 ? 180 : -180)) + 'deg)';
            const animationDelay = -(dur - ((dur / total) * index)) + 'ms';
            return {
                y1: 17,
                y2: 29,
                style: {
                    transform: transform,
                    webkitTransform: transform,
                    animationDelay: animationDelay,
                    webkitAnimationDelay: animationDelay
                }
            };
        }
    },
    'ios-small': {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            const transform = 'rotate(' + (30 * index + (index < 6 ? 180 : -180)) + 'deg)';
            const animationDelay = -(dur - ((dur / total) * index)) + 'ms';
            return {
                y1: 12,
                y2: 20,
                style: {
                    transform: transform,
                    webkitTransform: transform,
                    animationDelay: animationDelay,
                    webkitAnimationDelay: animationDelay
                }
            };
        }
    },
    bubbles: {
        dur: 1000,
        circles: 9,
        fn: function (dur, index, total) {
            const animationDelay = -(dur - ((dur / total) * index)) + 'ms';
            return {
                r: 5,
                style: {
                    top: (9 * Math.sin(2 * Math.PI * index / total)) + 'px',
                    left: (9 * Math.cos(2 * Math.PI * index / total)) + 'px',
                    animationDelay: animationDelay,
                    webkitAnimationDelay: animationDelay
                }
            };
        }
    },
    circles: {
        dur: 1000,
        circles: 8,
        fn: function (dur, index, total) {
            const animationDelay = -(dur - ((dur / total) * index)) + 'ms';
            return {
                r: 5,
                style: {
                    top: (9 * Math.sin(2 * Math.PI * index / total)) + 'px',
                    left: (9 * Math.cos(2 * Math.PI * index / total)) + 'px',
                    animationDelay: animationDelay,
                    webkitAnimationDelay: animationDelay
                }
            };
        }
    },
    crescent: {
        dur: 750,
        circles: 1,
        fn: function () {
            return {
                r: 26,
                style: {}
            };
        }
    },
    dots: {
        dur: 750,
        circles: 3,
        fn: function (_dur, index) {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    left: (9 - (9 * index)) + 'px',
                    animationDelay: animationDelay,
                    webkitAnimationDelay: animationDelay
                }
            };
        }
    }
};
//# sourceMappingURL=spinner.js.map
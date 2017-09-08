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
const forms_1 = require("@angular/forms");
const config_1 = require("../../config/config");
const base_input_1 = require("../../util/base-input");
const util_1 = require("../../util/util");
const segment_button_1 = require("./segment-button");
/**
 * @name Segment
 * @description
 * A Segment is a group of buttons, sometimes known as Segmented Controls, that allow the user to interact with a compact group of a number of controls.
 * Segments provide functionality similar to tabs, selecting one will unselect all others. You should use a tab bar instead of a segmented control when you want to let the user move back and forth between distinct pages in your app.
 * You could use Angular's `ngModel` or `FormBuilder` API. For an overview on how `FormBuilder` works, checkout [Angular Forms](http://learnangular2.com/forms/), or [Angular FormBuilder](https://angular.io/docs/ts/latest/api/forms/index/FormBuilder-class.html)
 *
 *
 * ```html
 * <!-- Segment in a header -->
 * <ion-header>
 *   <ion-toolbar>
 *     <ion-segment [(ngModel)]="icons" color="secondary">
 *       <ion-segment-button value="camera">
 *         <ion-icon name="camera"></ion-icon>
 *       </ion-segment-button>
 *       <ion-segment-button value="bookmark">
 *         <ion-icon name="bookmark"></ion-icon>
 *       </ion-segment-button>
 *     </ion-segment>
 *   </ion-toolbar>
 * </ion-header>
 *
 * <ion-content>
 *   <!-- Segment in content -->
 *   <ion-segment [(ngModel)]="relationship" color="primary" (ionChange)="segmentChanged($event)">
 *     <ion-segment-button value="friends">
 *       Friends
 *     </ion-segment-button>
 *     <ion-segment-button value="enemies">
 *       Enemies
 *     </ion-segment-button>
 *   </ion-segment>
 *
 *   <!-- Segment in a form -->
 *   <form [formGroup]="myForm">
 *     <ion-segment formControlName="mapStyle" color="danger">
 *       <ion-segment-button value="standard">
 *         Standard
 *       </ion-segment-button>
 *       <ion-segment-button value="hybrid">
 *         Hybrid
 *       </ion-segment-button>
 *       <ion-segment-button value="sat">
 *         Satellite
 *       </ion-segment-button>
 *     </ion-segment>
 *   </form>
 * </ion-content>
 * ```
 *
 *
 * @demo /docs/demos/src/segment/
 * @see {@link /docs/components#segment Segment Component Docs}
 * @see [Angular Forms](http://learnangular2.com/forms/)
 */
let Segment = class Segment extends base_input_1.BaseInput {
    constructor(config, elementRef, renderer, ngControl) {
        super(config, elementRef, renderer, 'segment', null, null, null, ngControl);
    }
    /**
     * @hidden
     */
    ngAfterContentInit() {
        this._initialize();
        this._buttons.forEach(button => {
            button.ionSelect.subscribe((selectedButton) => this.value = selectedButton.value);
        });
    }
    /**
     * @hidden
     * Write a new value to the element.
     */
    _inputUpdated() {
        if (!this._buttons) {
            util_1.assert(false, 'buttons are undefined');
            return;
        }
        const buttons = this._buttons.toArray();
        const value = this.value;
        for (var button of buttons) {
            button.isActive = (button.value === value);
        }
    }
};
__decorate([
    core_1.ContentChildren(segment_button_1.SegmentButton),
    __metadata("design:type", core_1.QueryList)
], Segment.prototype, "_buttons", void 0);
Segment = __decorate([
    core_1.Directive({
        selector: 'ion-segment',
        host: {
            '[class.segment-disabled]': '_disabled'
        }
    }),
    __param(3, core_1.Optional()),
    __metadata("design:paramtypes", [config_1.Config,
        core_1.ElementRef,
        core_1.Renderer,
        forms_1.NgControl])
], Segment);
exports.Segment = Segment;
//# sourceMappingURL=segment.js.map
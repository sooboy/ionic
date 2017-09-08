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
const platform_1 = require("../../platform/platform");
const util_1 = require("../../util/util");
/**
 * @name ItemOptions
 * @description
 * The option buttons for an `ion-item-sliding`. These buttons can be placed either on the left or right side.
 * You can combine the `(ionSwipe)` event plus the `expandable` directive to create a full swipe action for the item.
 *
 * @usage
 *
 * ```html
 * <ion-item-sliding>
 *   <ion-item>
 *     Item 1
 *   </ion-item>
 *   <ion-item-options side="right" (ionSwipe)="saveItem(item)">
 *     <button ion-button expandable (click)="saveItem(item)">
 *       <ion-icon name="star"></ion-icon>
 *     </button>
 *   </ion-item-options>
 * </ion-item-sliding>
 *```
 */
let ItemOptions = class ItemOptions {
    constructor(_elementRef, _plt) {
        this._elementRef = _elementRef;
        this._plt = _plt;
        /**
         * @output {event} Emitted when the item has been fully swiped.
         */
        this.ionSwipe = new core_1.EventEmitter();
    }
    /**
     * @hidden
     */
    isRightSide() {
        return util_1.isRightSide(this.side, this._plt.isRTL, true);
    }
    /**
     * @hidden
     */
    width() {
        return this._elementRef.nativeElement.offsetWidth;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ItemOptions.prototype, "side", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ItemOptions.prototype, "ionSwipe", void 0);
ItemOptions = __decorate([
    core_1.Directive({
        selector: 'ion-item-options',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        platform_1.Platform])
], ItemOptions);
exports.ItemOptions = ItemOptions;
//# sourceMappingURL=item-options.js.map
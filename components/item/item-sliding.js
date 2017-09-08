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
const util_1 = require("../../util/util");
const item_1 = require("./item");
const list_1 = require("../list/list");
const platform_1 = require("../../platform/platform");
const item_options_1 = require("./item-options");
const SWIPE_MARGIN = 30;
const ELASTIC_FACTOR = 0.55;
const ITEM_SIDE_FLAG_NONE = 0;
const ITEM_SIDE_FLAG_LEFT = 1 << 0;
const ITEM_SIDE_FLAG_RIGHT = 1 << 1;
const ITEM_SIDE_FLAG_BOTH = ITEM_SIDE_FLAG_LEFT | ITEM_SIDE_FLAG_RIGHT;
/**
 * @name ItemSliding
 * @description
 * A sliding item is a list item that can be swiped to reveal buttons. It requires
 * an [Item](../Item) component as a child and a [List](../../list/List) component as
 * a parent. All buttons to reveal can be placed in the `<ion-item-options>` element.
 *
 * @usage
 * ```html
 * <ion-list>
 *   <ion-item-sliding #item>
 *     <ion-item>
 *       Item
 *     </ion-item>
 *     <ion-item-options side="left">
 *       <button ion-button (click)="favorite(item)">Favorite</button>
 *       <button ion-button color="danger" (click)="share(item)">Share</button>
 *     </ion-item-options>
 *
 *     <ion-item-options side="right">
 *       <button ion-button (click)="unread(item)">Unread</button>
 *     </ion-item-options>
 *   </ion-item-sliding>
 * </ion-list>
 * ```
 *
 * ### Swipe Direction
 * By default, the buttons are revealed when the sliding item is swiped from right to left,
 * so the buttons are placed in the right side. But it's also possible to reveal them
 * in the right side (sliding from left to right) by setting the `side` attribute
 * on the `ion-item-options` element. Up to 2 `ion-item-options` can used at the same time
 * in order to reveal two different sets of buttons depending the swipping direction.
 *
 * ```html
 * <ion-item-options side="right">
 *   <button ion-button (click)="archive(item)">
 *     <ion-icon name="archive"></ion-icon>
 *     Archive
 *   </button>
 * </ion-item-options>
 *
 * <ion-item-options side="left">
 *   <button ion-button (click)="archive(item)">
 *     <ion-icon name="archive"></ion-icon>
 *     Archive
 *   </button>
 * </ion-item-options>
 * ```
 *
 * ### Listening for events (ionDrag) and (ionSwipe)
 * It's possible to know the current relative position of the sliding item by subscribing
 * to the (ionDrag)` event.
 *
 * ```html
 * <ion-item-sliding (ionDrag)="logDrag($event)">
 *   <ion-item>Item</ion-item>
 *   <ion-item-options>
 *     <button ion-button>Favorite</button>
 *   </ion-item-options>
 * </ion-item-sliding>
 * ```
 *
 * ### Button Layout
 * If an icon is placed with text in the option button, by default it will
 * display the icon on top of the text. This can be changed to display the icon
 * to the left of the text by setting `icon-start` as an attribute on the
 * `<ion-item-options>` element.
 *
 * ```html
 * <ion-item-options icon-start>
 *    <button ion-button (click)="archive(item)">
 *      <ion-icon name="archive"></ion-icon>
 *      Archive
 *    </button>
 *  </ion-item-options>
 *
 * ```
 *
 * ### Expandable Options
 *
 * Options can be expanded to take up the full width of the item if you swipe past
 * a certain point. This can be combined with the `ionSwipe` event to call methods
 * on the class.
 *
 * ```html
 *
 * <ion-item-sliding (ionSwipe)="delete(item)">
 *   <ion-item>Item</ion-item>
 *   <ion-item-options>
 *     <button ion-button expandable (click)="delete(item)">Delete</button>
 *   </ion-item-options>
 * </ion-item-sliding>
 * ```
 *
 * We can call `delete` by either clicking the button, or by doing a full swipe on the item.
 *
 * @demo /docs/demos/src/item-sliding/
 * @see {@link /docs/components#lists List Component Docs}
 * @see {@link ../Item Item API Docs}
 * @see {@link ../../list/List List API Docs}
 */
let ItemSliding = class ItemSliding {
    constructor(list, _plt, _renderer, _elementRef, _zone) {
        this._plt = _plt;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._zone = _zone;
        this._openAmount = 0;
        this._startX = 0;
        this._optsWidthRightSide = 0;
        this._optsWidthLeftSide = 0;
        this._tmr = null;
        this._optsDirty = true;
        this._state = 2 /* Disabled */;
        /**
         * @output {event} Emitted when the sliding position changes.
         * It reports the relative position.
         *
         * ```ts
         * ondrag(item) {
         *   let percent = item.getSlidingPercent();
         *   if (percent > 0) {
         *     // positive
         *     console.log('right side');
         *   } else {
         *     // negative
         *     console.log('left side');
         *   }
         *   if (Math.abs(percent) > 1) {
         *     console.log('overscroll');
         *   }
         * }
         * ```
         *
         */
        this.ionDrag = new core_1.EventEmitter();
        list && list.containsSlidingItem(true);
        _elementRef.nativeElement.$ionComponent = this;
        this.setElementClass('item-wrapper', true);
    }
    set _itemOptions(itemOptions) {
        let sides = 0;
        // Reset left and right options in case they were removed
        this._leftOptions = this._rightOptions = null;
        for (var item of itemOptions.toArray()) {
            if (item.isRightSide()) {
                this._rightOptions = item;
                sides |= ITEM_SIDE_FLAG_RIGHT;
            }
            else {
                this._leftOptions = item;
                sides |= ITEM_SIDE_FLAG_LEFT;
            }
        }
        this._optsDirty = true;
        this._sides = sides;
    }
    /**
     * @hidden
     */
    getOpenAmount() {
        return this._openAmount;
    }
    /**
     * @hidden
     */
    getSlidingPercent() {
        const openAmount = this._openAmount;
        if (openAmount > 0) {
            return openAmount / this._optsWidthRightSide;
        }
        else if (openAmount < 0) {
            return openAmount / this._optsWidthLeftSide;
        }
        else {
            return 0;
        }
    }
    /**
     * @hidden
     */
    startSliding(startX) {
        if (this._tmr) {
            this._plt.cancelTimeout(this._tmr);
            this._tmr = null;
        }
        if (this._openAmount === 0) {
            this._optsDirty = true;
            this._setState(4 /* Enabled */);
        }
        this._startX = startX + this._openAmount;
        this.item.setElementStyle(this._plt.Css.transition, 'none');
    }
    /**
     * @hidden
     */
    moveSliding(x) {
        if (this._optsDirty) {
            this.calculateOptsWidth();
            return;
        }
        let openAmount = (this._startX - x);
        switch (this._sides) {
            case ITEM_SIDE_FLAG_RIGHT:
                openAmount = Math.max(0, openAmount);
                break;
            case ITEM_SIDE_FLAG_LEFT:
                openAmount = Math.min(0, openAmount);
                break;
            case ITEM_SIDE_FLAG_BOTH: break;
            case ITEM_SIDE_FLAG_NONE: return;
            default:
                util_1.assert(false, 'invalid ItemSideFlags value');
                break;
        }
        if (openAmount > this._optsWidthRightSide) {
            const optsWidth = this._optsWidthRightSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        else if (openAmount < -this._optsWidthLeftSide) {
            const optsWidth = -this._optsWidthLeftSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        this._setOpenAmount(openAmount, false);
        return openAmount;
    }
    /**
     * @hidden
     */
    endSliding(velocity) {
        let restingPoint = (this._openAmount > 0)
            ? this._optsWidthRightSide
            : -this._optsWidthLeftSide;
        // Check if the drag didn't clear the buttons mid-point
        // and we aren't moving fast enough to swipe open
        const isResetDirection = (this._openAmount > 0) === !(velocity < 0);
        const isMovingFast = Math.abs(velocity) > 0.3;
        const isOnCloseZone = Math.abs(this._openAmount) < Math.abs(restingPoint / 2);
        if (util_1.swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
            restingPoint = 0;
        }
        this.fireSwipeEvent();
        this._setOpenAmount(restingPoint, true);
        return restingPoint;
    }
    /**
     * @hidden
     */
    fireSwipeEvent() {
        if (this._state & 32 /* SwipeRight */) {
            this._zone.run(() => this._rightOptions.ionSwipe.emit(this));
        }
        else if (this._state & 64 /* SwipeLeft */) {
            this._zone.run(() => this._leftOptions.ionSwipe.emit(this));
        }
    }
    /**
     * @hidden
     */
    calculateOptsWidth() {
        if (!this._optsDirty) {
            return;
        }
        this._optsWidthRightSide = 0;
        if (this._rightOptions) {
            this._optsWidthRightSide = this._rightOptions.width();
            util_1.assert(this._optsWidthRightSide > 0, '_optsWidthRightSide should not be zero');
        }
        this._optsWidthLeftSide = 0;
        if (this._leftOptions) {
            this._optsWidthLeftSide = this._leftOptions.width();
            util_1.assert(this._optsWidthLeftSide > 0, '_optsWidthLeftSide should not be zero');
        }
        this._optsDirty = false;
    }
    _setOpenAmount(openAmount, isFinal) {
        const platform = this._plt;
        if (this._tmr) {
            platform.cancelTimeout(this._tmr);
            this._tmr = null;
        }
        this._openAmount = openAmount;
        if (isFinal) {
            this.item.setElementStyle(platform.Css.transition, '');
        }
        if (openAmount > 0) {
            var state = (openAmount >= (this._optsWidthRightSide + SWIPE_MARGIN))
                ? 8 /* Right */ | 32 /* SwipeRight */
                : 8 /* Right */;
            this._setState(state);
        }
        else if (openAmount < 0) {
            const state = (openAmount <= (-this._optsWidthLeftSide - SWIPE_MARGIN))
                ? 16 /* Left */ | 64 /* SwipeLeft */
                : 16 /* Left */;
            this._setState(state);
        }
        else {
            util_1.assert(openAmount === 0, 'bad internal state');
            this._tmr = platform.timeout(() => {
                this._setState(2 /* Disabled */);
                this._tmr = null;
            }, 600);
            this.item.setElementStyle(platform.Css.transform, '');
            return;
        }
        this.item.setElementStyle(platform.Css.transform, `translate3d(${-openAmount}px,0,0)`);
        const ionDrag = this.ionDrag;
        if (ionDrag.observers.length > 0) {
            ionDrag.emit(this);
        }
    }
    _setState(state) {
        if (state === this._state) {
            return;
        }
        this.setElementClass('active-slide', (state !== 2 /* Disabled */));
        this.setElementClass('active-options-right', !!(state & 8 /* Right */));
        this.setElementClass('active-options-left', !!(state & 16 /* Left */));
        this.setElementClass('active-swipe-right', !!(state & 32 /* SwipeRight */));
        this.setElementClass('active-swipe-left', !!(state & 64 /* SwipeLeft */));
        this._state = state;
    }
    /**
     * Close the sliding item. Items can also be closed from the [List](../../list/List).
     *
     * The sliding item can be closed by grabbing a reference to `ItemSliding`. In the
     * below example, the template reference variable `slidingItem` is placed on the element
     * and passed to the `share` method.
     *
     * ```html
     * <ion-list>
     *   <ion-item-sliding #slidingItem>
     *     <ion-item>
     *       Item
     *     </ion-item>
     *     <ion-item-options>
     *       <button ion-button (click)="share(slidingItem)">Share</button>
     *     </ion-item-options>
     *   </ion-item-sliding>
     * </ion-list>
     * ```
     *
     * ```ts
     * import { Component } from '@angular/core';
     * import { ItemSliding } from 'ionic-angular';
     *
     * @Component({...})
     * export class MyClass {
     *   constructor() { }
     *
     *   share(slidingItem: ItemSliding) {
     *     slidingItem.close();
     *   }
     * }
     * ```
     */
    close() {
        this._setOpenAmount(0, true);
    }
    /**
     * @hidden
     */
    setElementClass(cssClass, shouldAdd) {
        this._renderer.setElementClass(this._elementRef.nativeElement, cssClass, shouldAdd);
    }
};
__decorate([
    core_1.ContentChild(item_1.Item),
    __metadata("design:type", item_1.Item)
], ItemSliding.prototype, "item", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ItemSliding.prototype, "ionDrag", void 0);
__decorate([
    core_1.ContentChildren(core_1.forwardRef(() => item_options_1.ItemOptions)),
    __metadata("design:type", core_1.QueryList),
    __metadata("design:paramtypes", [core_1.QueryList])
], ItemSliding.prototype, "_itemOptions", null);
ItemSliding = __decorate([
    core_1.Component({
        selector: 'ion-item-sliding',
        template: `
    <ng-content select="ion-item,[ion-item]"></ng-content>
    <ng-content select="ion-item-options"></ng-content>
  `,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [list_1.List,
        platform_1.Platform,
        core_1.Renderer,
        core_1.ElementRef,
        core_1.NgZone])
], ItemSliding);
exports.ItemSliding = ItemSliding;
//# sourceMappingURL=item-sliding.js.map
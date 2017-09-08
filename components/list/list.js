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
const dom_controller_1 = require("../../platform/dom-controller");
const gesture_controller_1 = require("../../gestures/gesture-controller");
const ion_1 = require("../ion");
const util_1 = require("../../util/util");
const item_sliding_gesture_1 = require("../item/item-sliding-gesture");
const platform_1 = require("../../platform/platform");
/**
 * The List is a widely used interface element in almost any mobile app,
 * and can include content ranging from basic text all the way to
 * buttons, toggles, icons, and thumbnails.
 *
 * Both the list, which contains items, and the list items themselves
 * can be any HTML element.
 *
 * Using the List and Item components make it easy to support various
 * interaction modes such as swipe to edit, drag to reorder, and
 * removing items.
 *
 * @demo /docs/demos/src/list/
 * @see {@link /docs/components#lists List Component Docs}
 * @advanced
 *
 * Enable the sliding items.
 *
 * ```ts
 * import { Component, ViewChild } from '@angular/core';
 * import { List } from 'ionic-angular';
 *
 * @Component({...})
 * export class MyClass {
 *   @ViewChild(List) list: List;
 *
 *   constructor() { }
 *
 *   stopSliding() {
 *     this.list.enableSlidingItems(false);
 *   }
 * }
 * ```
 *
 */
let List = class List extends ion_1.Ion {
    constructor(config, elementRef, renderer, _plt, _gestureCtrl, _domCtrl) {
        super(config, elementRef, renderer, 'list');
        this._plt = _plt;
        this._gestureCtrl = _gestureCtrl;
        this._domCtrl = _domCtrl;
        this._enableSliding = true;
        this._containsSlidingItems = false;
    }
    /**
     * @input {boolean} If true, the sliding items will be enabled.
     */
    get sliding() {
        return this._enableSliding;
    }
    set sliding(val) {
        this._enableSliding = util_1.isTrueProperty(val);
        this._updateSlidingState();
    }
    /**
     * @hidden
     */
    containsSlidingItem(contains) {
        this._containsSlidingItems = contains;
        this._updateSlidingState();
    }
    _updateSlidingState() {
        let shouldSlide = this._enableSliding && this._containsSlidingItems;
        if (!shouldSlide) {
            this._slidingGesture && this._slidingGesture.destroy();
            this._slidingGesture = null;
        }
        else if (!this._slidingGesture) {
            console.debug('enableSlidingItems');
            this._slidingGesture = new item_sliding_gesture_1.ItemSlidingGesture(this._plt, this, this._gestureCtrl, this._domCtrl);
            this._slidingGesture.listen();
        }
    }
    /**
     * Close any sliding items that are open.
     */
    closeSlidingItems() {
        this._slidingGesture && this._slidingGesture.closeOpened();
    }
    /**
     * @hidden
     */
    destroy() {
        this._slidingGesture && this._slidingGesture.destroy();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], List.prototype, "sliding", null);
List = __decorate([
    core_1.Directive({
        selector: 'ion-list',
    }),
    __metadata("design:paramtypes", [config_1.Config,
        core_1.ElementRef,
        core_1.Renderer,
        platform_1.Platform,
        gesture_controller_1.GestureController,
        dom_controller_1.DomController])
], List);
exports.List = List;
//# sourceMappingURL=list.js.map
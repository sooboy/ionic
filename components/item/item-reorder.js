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
const content_1 = require("../content/content");
const dom_controller_1 = require("../../platform/dom-controller");
const util_1 = require("../../util/util");
const item_reorder_gesture_1 = require("./item-reorder-gesture");
const platform_1 = require("../../platform/platform");
class ReorderIndexes {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    applyTo(array) {
        util_1.reorderArray(array, this);
    }
}
exports.ReorderIndexes = ReorderIndexes;
/**
 * @name ItemReorder
 * @description
 * Item reorder adds the ability to change an item's order in a group.
 * It can be used within an `ion-list` or `ion-item-group` to provide a
 * visual drag and drop interface.
 *
 * ## Grouping Items
 *
 * All reorderable items must be grouped in the same element. If an item
 * should not be reordered, it shouldn't be included in this group. For
 * example, the following code works because the items are grouped in the
 * `<ion-list>`:
 *
 *  ```html
 *  <ion-list reorder="true">
 *    <ion-item *ngFor="let item of items">{% raw %}{{ item }}{% endraw %}</ion-item>
 *  </ion-list>
 *  ```
 *
 * However, the below list includes a header that shouldn't be reordered:
 *
 *  ```html
 *  <ion-list reorder="true">
 *    <ion-list-header>Header</ion-list-header>
 *    <ion-item *ngFor="let item of items">{% raw %}{{ item }}{% endraw %}</ion-item>
 *  </ion-list>
 *  ```
 *
 * In order to mix different sets of items, `ion-item-group` should be used to
 * group the reorderable items:
 *
 *  ```html
 *  <ion-list>
 *    <ion-list-header>Header</ion-list-header>
 *    <ion-item-group reorder="true">
 *      <ion-item *ngFor="let item of items">{% raw %}{{ item }}{% endraw %}</ion-item>
 *    </ion-item-group>
 *  </ion-list>
 *  ```
 *
 * It's important to note that in this example, the `[reorder]` directive is applied to
 * the `<ion-item-group>` instead of the `<ion-list>`. This way makes it possible to
 * mix items that should and shouldn't be reordered.
 *
 *
 * ## Implementing the Reorder Function
 *
 * When the item is dragged and dropped into the new position, the `(ionItemReorder)` event is
 * emitted. This event provides the initial index (from) and the new index (to) of the reordered
 * item. For example, if the first item is dragged to the fifth position, the event will emit
 * `{from: 0, to: 4}`. Note that the index starts at zero.
 *
 * A function should be called when the event is emitted that handles the reordering of the items.
 * See [usage](#usage) below for some examples.
 *
 *
 * @usage
 *
 * ```html
 * <ion-list>
 *   <ion-list-header>Header</ion-list-header>
 *   <ion-item-group reorder="true" (ionItemReorder)="reorderItems($event)">
 *     <ion-item *ngFor="let item of items">{% raw %}{{ item }}{% endraw %}</ion-item>
 *   </ion-item-group>
 * </ion-list>
 * ```
 *
 * ```ts
 * class MyComponent {
 *   items = [];
 *
 *   constructor() {
 *     for (let x = 0; x < 5; x++) {
 *       this.items.push(x);
 *     }
 *   }
 *
 *   reorderItems(indexes) {
 *     let element = this.items[indexes.from];
 *     this.items.splice(indexes.from, 1);
 *     this.items.splice(indexes.to, 0, element);
 *   }
 * }
 * ```
 *
 * Ionic also provides a helper function called `reorderArray` to
 * reorder the array of items. This can be used instead:
 *
 * ```ts
 * import { reorderArray } from 'ionic-angular';
 *
 * class MyComponent {
 *   items = [];
 *
 *   constructor() {
 *     for (let x = 0; x < 5; x++) {
 *       this.items.push(x);
 *     }
 *   }
 *
 *   reorderItems(indexes) {
 *     this.items = reorderArray(this.items, indexes);
 *   }
 * }
 * ```
 * Alternatevely you can execute helper function inside template:
 *
 * ```html
 * <ion-list>
 *   <ion-list-header>Header</ion-list-header>
 *   <ion-item-group reorder="true" (ionItemReorder)="$event.applyTo(items)">
 *     <ion-item *ngFor="let item of items">{% raw %}{{ item }}{% endraw %}</ion-item>
 *   </ion-item-group>
 * </ion-list>
 * ```
 *
 * @demo /docs/demos/src/item-reorder/
 * @see {@link /docs/components#lists List Component Docs}
 * @see {@link ../../list/List List API Docs}
 * @see {@link ../Item Item API Docs}
 */
let ItemReorder = class ItemReorder {
    constructor(_plt, _dom, elementRef, _rendered, _zone, _content) {
        this._plt = _plt;
        this._dom = _dom;
        this._rendered = _rendered;
        this._zone = _zone;
        this._content = _content;
        this._enableReorder = false;
        this._visibleReorder = false;
        this._isStart = false;
        this._lastToIndex = -1;
        /**
         * @output {object} Emitted when the item is reordered. Emits an object
         * with `from` and `to` properties.
         */
        this.ionItemReorder = new core_1.EventEmitter();
        this._element = elementRef.nativeElement;
    }
    /**
     * @input {string} Which side of the view the ion-reorder should be placed. Default `"end"`.
     */
    set side(side) {
        this._isStart = side === 'start';
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        this._element = null;
        this._reorderGesture && this._reorderGesture.destroy();
    }
    /**
     * @hidden
     */
    get reorder() {
        return this._enableReorder;
    }
    set reorder(val) {
        let enabled = util_1.isTrueProperty(val);
        if (!enabled && this._reorderGesture) {
            this._reorderGesture.destroy();
            this._reorderGesture = null;
            this._visibleReorder = false;
            setTimeout(() => this._enableReorder = false, 400);
        }
        else if (enabled && !this._reorderGesture) {
            console.debug('enableReorderItems');
            this._reorderGesture = new item_reorder_gesture_1.ItemReorderGesture(this._plt, this);
            this._enableReorder = true;
            this._dom.write(() => {
                this._zone.run(() => {
                    this._visibleReorder = true;
                });
            }, 16);
        }
    }
    _reorderPrepare() {
        let ele = this._element;
        let children = ele.children;
        for (let i = 0, ilen = children.length; i < ilen; i++) {
            var child = children[i];
            child.$ionIndex = i;
            child.$ionReorderList = ele;
        }
    }
    _reorderStart() {
        this.setElementClass('reorder-list-active', true);
    }
    _reorderEmit(fromIndex, toIndex) {
        this._reorderReset();
        if (fromIndex !== toIndex) {
            this._zone.run(() => {
                const indexes = new ReorderIndexes(fromIndex, toIndex);
                this.ionItemReorder.emit(indexes);
            });
        }
    }
    _scrollContent(scroll) {
        const scrollTop = this._content.scrollTop + scroll;
        if (scroll !== 0) {
            this._content.scrollTo(0, scrollTop, 0);
        }
        return scrollTop;
    }
    _reorderReset() {
        let children = this._element.children;
        let len = children.length;
        this.setElementClass('reorder-list-active', false);
        let transform = this._plt.Css.transform;
        for (let i = 0; i < len; i++) {
            children[i].style[transform] = '';
        }
        this._lastToIndex = -1;
    }
    _reorderMove(fromIndex, toIndex, itemHeight) {
        if (this._lastToIndex === -1) {
            this._lastToIndex = fromIndex;
        }
        let lastToIndex = this._lastToIndex;
        this._lastToIndex = toIndex;
        // TODO: I think both loops can be merged into a single one
        // but I had no luck last time I tried
        /********* DOM READ ********** */
        let children = this._element.children;
        /********* DOM WRITE ********* */
        let transform = this._plt.Css.transform;
        if (toIndex >= lastToIndex) {
            for (let i = lastToIndex; i <= toIndex; i++) {
                if (i !== fromIndex) {
                    children[i].style[transform] = (i > fromIndex)
                        ? `translateY(${-itemHeight}px)` : '';
                }
            }
        }
        if (toIndex <= lastToIndex) {
            for (let i = toIndex; i <= lastToIndex; i++) {
                if (i !== fromIndex) {
                    children[i].style[transform] = (i < fromIndex)
                        ? `translateY(${itemHeight}px)` : '';
                }
            }
        }
    }
    /**
     * @hidden
     */
    setElementClass(classname, add) {
        this._rendered.setElementClass(this._element, classname, add);
    }
    /**
     * @hidden
     */
    getNativeElement() {
        return this._element;
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ItemReorder.prototype, "ionItemReorder", void 0);
__decorate([
    core_1.Input('side'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ItemReorder.prototype, "side", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ItemReorder.prototype, "reorder", null);
ItemReorder = __decorate([
    core_1.Directive({
        selector: 'ion-list[reorder],ion-item-group[reorder]',
        host: {
            '[class.reorder-enabled]': '_enableReorder',
            '[class.reorder-visible]': '_visibleReorder',
            '[class.reorder-side-start]': '_isStart'
        }
    }),
    __param(5, core_1.Optional()),
    __metadata("design:paramtypes", [platform_1.Platform,
        dom_controller_1.DomController,
        core_1.ElementRef,
        core_1.Renderer,
        core_1.NgZone,
        content_1.Content])
], ItemReorder);
exports.ItemReorder = ItemReorder;
//# sourceMappingURL=item-reorder.js.map
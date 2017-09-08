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
const ui_event_manager_1 = require("../../gestures/ui-event-manager");
const fab_1 = require("./fab");
const fab_list_1 = require("./fab-list");
/**
  * @name FabContainer
  * @module ionic
  *
  * @description
  * `<ion-fab>` is not a FAB button by itself but a container that assist the fab button (`<button ion-fab>`) allowing it
  * to be placed in fixed position that does not scroll with the content. It is also used to implement "material design speed dial",
  * ie. a FAB buttons displays a small lists of related actions when clicked.
  *
  * @property [top] - Places the container on the top of the content
  * @property [bottom] - Places the container on the bottom  of the content
  * @property [left] - Places the container on the left
  * @property [right] - Places the container on the right
  * @property [middle] - Places the container on the middle vertically
  * @property [center] - Places the container on the center horizontally
  * @property [edge] - Used to place the container between the content and the header/footer
  *
  * @usage
  *
  * ```html
  * <!-- this fab is placed at top right -->
  * <ion-content>
  *  <ion-fab top right>
  *    <button ion-fab>Button</button>
  *  </ion-fab>
  *
  *  <!-- this fab is placed at the center of the content viewport -->
  *  <ion-fab center middle>
  *    <button ion-fab>Button</button>
  *  </ion-fab>
  * </ion-content>
  * ```
  *
  * Ionic's FAB also supports "material design's fab speed dial". It is a normal fab button
  * that shows a list of related actions when clicked.
  *
  * The same `ion-fab` container can contain several `ion-fab-list` with different side values:
  * `top`, `bottom`, `left` and `right`. For example, if you want to have a list of button that are
  * on the top of the main button, you should use `side="top"` and so on. By default, if side is ommited, `side="bottom"`.
  *
  * ```html
  * <ion-content>
  *  <!-- this fab is placed at bottom right -->
  *  <ion-fab bottom right >
  *    <button ion-fab>Share</button>
  *    <ion-fab-list side="top">
  *      <button ion-fab>Facebook</button>
  *      <button ion-fab>Twitter</button>
  *      <button ion-fab>Youtube</button>
  *    </ion-fab-list>
  *    <ion-fab-list side="left">
  *      <button ion-fab>Vimeo</button>
  *    </ion-fab-list>
  *  </ion-fab>
  * </ion-content>
  * ```
  *
  * A FAB speed dial can also be closed programatically.
  *
  * ```html
  * <ion-content>
  *  <ion-fab bottom right #fab>
  *    <button ion-fab>Share</button>
  *    <ion-fab-list side="top">
  *      <button ion-fab (click)="share('facebook', fab)">Facebook</button>
  *      <button ion-fab (click)="share('twitter', fab)">Twitter</button>
  *    </ion-fab-list>
  *  </ion-fab>
  * </ion-content>
  * ```
  *
  * ```ts
  * share(socialNet: string, fab: FabContainer) {
  *   fab.close();
  *   console.log("Sharing in", socialNet);
  * }
  * ```
  *
  * @demo /docs/demos/src/fab/
  * @see {@link /docs/components#fabs FAB Component Docs}
 */
let FabContainer = class FabContainer {
    constructor(plt) {
        /**
         * @hidden
         */
        this._listsActive = false;
        this._events = new ui_event_manager_1.UIEventManager(plt);
    }
    /**
     * @hidden
     */
    ngAfterContentInit() {
        const mainButton = this._mainButton;
        if (!mainButton || !mainButton.getNativeElement()) {
            console.error('FAB container needs a main <button ion-fab>');
            return;
        }
        this._events.listen(mainButton.getNativeElement(), 'click', this.clickHandler.bind(this), { zone: true });
    }
    /**
     * @hidden
     */
    clickHandler(ev) {
        if (this.canActivateList(ev)) {
            this.toggleList();
        }
    }
    /**
     * @hidden
     */
    canActivateList(ev) {
        if (this._fabLists.length > 0 && this._mainButton && ev.target) {
            let ele = ev.target.closest('ion-fab>[ion-fab]');
            return (ele && ele === this._mainButton.getNativeElement());
        }
        return false;
    }
    /**
     * @hidden
     */
    toggleList() {
        this.setActiveLists(!this._listsActive);
    }
    /**
     * @hidden
     */
    setActiveLists(isActive) {
        if (isActive === this._listsActive) {
            return;
        }
        let lists = this._fabLists.toArray();
        for (let list of lists) {
            list.setVisible(isActive);
        }
        this._mainButton.setActiveClose(isActive);
        this._listsActive = isActive;
    }
    /**
     * Close an active FAB list container
     */
    close() {
        this.setActiveLists(false);
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        this._events.destroy();
    }
};
__decorate([
    core_1.ContentChild(fab_1.FabButton),
    __metadata("design:type", fab_1.FabButton)
], FabContainer.prototype, "_mainButton", void 0);
__decorate([
    core_1.ContentChildren(fab_list_1.FabList),
    __metadata("design:type", core_1.QueryList)
], FabContainer.prototype, "_fabLists", void 0);
FabContainer = __decorate([
    core_1.Component({
        selector: 'ion-fab',
        template: '<ng-content></ng-content>'
    }),
    __metadata("design:paramtypes", [platform_1.Platform])
], FabContainer);
exports.FabContainer = FabContainer;
//# sourceMappingURL=fab-container.js.map
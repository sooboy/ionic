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
const util_1 = require("../../util/util");
const platform_1 = require("../../platform/platform");
const fab_1 = require("./fab");
/**
  * @name FabList
  * @description
  * `ion-fab-list` is a container for multiple FAB buttons. They are components of `ion-fab` and allow you to specificy the buttons position, left, right, top, bottom.
  * @usage
  *
  * ```html
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
  * ```
  * @module ionic
  *
  * @demo /docs/demos/src/fab/
  * @see {@link /docs/components#fab Fab Component Docs}
 */
let FabList = class FabList {
    constructor(_elementRef, _renderer, config, _plt) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._plt = _plt;
        this._visible = false;
        this._fabs = [];
        this._mode = config.get('mode');
    }
    set _setbuttons(query) {
        const fabs = this._fabs = query.toArray();
        const className = `fab-${this._mode}-in-list`;
        for (var fab of fabs) {
            fab.setElementClass('fab-in-list', true);
            fab.setElementClass(className, true);
        }
    }
    /**
     * @hidden
     */
    setVisible(val) {
        let visible = util_1.isTrueProperty(val);
        if (visible === this._visible) {
            return;
        }
        this._visible = visible;
        let fabs = this._fabs;
        let i = 1;
        if (visible) {
            fabs.forEach(fab => {
                this._plt.timeout(() => fab.setElementClass('show', true), i * 30);
                i++;
            });
        }
        else {
            fabs.forEach(fab => fab.setElementClass('show', false));
        }
        this.setElementClass('fab-list-active', visible);
    }
    /**
     * @internal
     */
    setElementClass(className, add) {
        this._renderer.setElementClass(this._elementRef.nativeElement, className, add);
    }
};
__decorate([
    core_1.ContentChildren(fab_1.FabButton),
    __metadata("design:type", core_1.QueryList),
    __metadata("design:paramtypes", [core_1.QueryList])
], FabList.prototype, "_setbuttons", null);
FabList = __decorate([
    core_1.Directive({
        selector: 'ion-fab-list',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer,
        config_1.Config,
        platform_1.Platform])
], FabList);
exports.FabList = FabList;
//# sourceMappingURL=fab-list.js.map
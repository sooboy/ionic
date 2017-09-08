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
const ion_1 = require("../ion");
const util_1 = require("../../util/util");
const config_1 = require("../../config/config");
const platform_1 = require("../../platform/platform");
const QUERY = {
    xs: '(min-width: 0px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    never: ''
};
/**
 * @hidden
 */
class RootNode {
}
exports.RootNode = RootNode;
/**
 * @name SplitPane
 *
 * @description
 * SplitPane is a component that makes it possible to create multi-view layout.
 * Similar to iPad apps, SplitPane allows UI elements, like Menus, to be
 * displayed as the viewport increases.
 *
 * If the devices screen size is below a certain size, the SplitPane will
 * collapse and the menu will become hidden again. This is especially useful when
 * creating an app that will be served over a browser or deployed through the app
 * store to phones and tablets.
 *
 * @usage
 * To use SplitPane, simply add the component around your root component.
 * In this example, we'll be using a sidemenu layout, similar to what is
 * provided from the sidemenu starter template.
 *
 *  ```html
 *  <ion-split-pane>
 *    <!--  our side menu  -->
 *    <ion-menu [content]="content">
 *      <ion-header>
 *        <ion-toolbar>
 *          <ion-title>Menu</ion-title>
 *        </ion-toolbar>
 *      </ion-header>
 *    </ion-menu>
 *
 *    <!-- the main content -->
 *    <ion-nav [root]="root" main #content></ion-nav>
 *  </ion-split-pane>
 *  ```
 *
 *  Here, SplitPane will look for the element with the `main` attribute and make
 *  that the central component on larger screens. The `main` component can be any
 *  Ionic component (`ion-nav` or `ion-tabs`) except `ion-menu`.
 *
 *  ### Setting breakpoints
 *
 *  By default, SplitPane will expand when the screen is larger than 768px.
 *  If you want to customize this, use the `when` input. The `when` input can
 *  accept any valid media query, as it uses `matchMedia()` underneath.
 *
 *  ```
 *  <ion-split-pane when="(min-width: 475px)">
 *
 *    <!--  our side menu  -->
 *    <ion-menu [content]="content">
 *    ....
 *    </ion-menu>
 *
 *    <!-- the main content -->
 *    <ion-nav [root]="root" main #content></ion-nav>
 *  </ion-split-pane>
 *  ```
 *
 *  SplitPane also provides some predefined media queries that can be used.
 *
 *  ```html
 *  <!-- could be "xs", "sm", "md", "lg", or "xl" -->
 *  <ion-split-pane when="lg">
 *  ...
 *  </ion-split-pane>
 *  ```
 *
 *
 *  | Size | Value                 | Description                                                           |
 *  |------|-----------------------|-----------------------------------------------------------------------|
 *  | `xs` | `(min-width: 0px)`    | Show the split-pane when the min-width is 0px (meaning, always)       |
 *  | `sm` | `(min-width: 576px)`  | Show the split-pane when the min-width is 576px                       |
 *  | `md` | `(min-width: 768px)`  | Show the split-pane when the min-width is 768px (default break point) |
 *  | `lg` | `(min-width: 992px)`  | Show the split-pane when the min-width is 992px                       |
 *  | `xl` | `(min-width: 1200px)` | Show the split-pane when the min-width is 1200px                      |
 *
 *  You can also pass in boolean values that will trigger SplitPane when the value
 *  or expression evaluates to true.
 *
 *
 *  ```html
 *  <ion-split-pane [when]="isLarge">
 *  ...
 *  </ion-split-pane>
 *  ```
 *
 *  ```ts
 *  class MyClass {
 *    public isLarge = false;
 *    constructor(){}
 *  }
 *  ```
 *
 *  Or
 *
 *  ```html
 *  <ion-split-pane [when]="shouldShow()">
 *  ...
 *  </ion-split-pane>
 *  ```
 *
 *  ```ts
 *  class MyClass {
 *    constructor(){}
 *    shouldShow(){
 *      if(conditionA){
 *        return true
 *      } else {
 *        return false
 *      }
 *    }
 *  }
 *  ```
 *
 */
let SplitPane = SplitPane_1 = class SplitPane extends ion_1.Ion {
    constructor(_zone, _plt, config, elementRef, renderer) {
        super(config, elementRef, renderer, 'split-pane');
        this._zone = _zone;
        this._plt = _plt;
        this._init = false;
        this._visible = false;
        this._isEnabled = true;
        this._mediaQuery = QUERY['md'];
        /**
         * @hidden
         */
        this.sideContent = null;
        /**
         * @hidden
         */
        this.mainContent = null;
        /**
         * @output {any} Expression to be called when the split-pane visibility has changed
         */
        this.ionChange = new core_1.EventEmitter();
    }
    /**
     * @hidden
     */
    set _setchildren(query) {
        const children = this._children = query.filter((child => child !== this));
        children.forEach(child => {
            var isMain = child.initPane();
            this._setPaneCSSClass(child.getElementRef(), isMain);
        });
    }
    /**
     * @input {string | boolean} When the split-pane should be shown.
     * Can be a CSS media query expression, or a shortcut expression.
     * Can also be a boolean expression.
     */
    set when(query) {
        if (typeof query === 'boolean') {
            this._mediaQuery = query;
        }
        else {
            const defaultQuery = QUERY[query];
            this._mediaQuery = (defaultQuery)
                ? defaultQuery
                : query;
        }
        this._update();
    }
    get when() {
        return this._mediaQuery;
    }
    /**
     * @input {boolean} If `false`, the split-pane is disabled, ie. the side pane will
     * never be displayed. Default `true`.
     */
    set enabled(val) {
        this._isEnabled = util_1.isTrueProperty(val);
        this._update();
    }
    get enabled() {
        return this._isEnabled;
    }
    /**
     * @hidden
     */
    _register(node, isMain, callback) {
        if (this.getElementRef().nativeElement !== node.getElementRef().nativeElement.parentNode) {
            return false;
        }
        this._setPaneCSSClass(node.getElementRef(), isMain);
        if (callback) {
            this.ionChange.subscribe(callback);
        }
        if (isMain) {
            if (this.mainContent) {
                console.error('split pane: main content was already set');
            }
            this.mainContent = node;
        }
        return true;
    }
    /**
     * @hidden
     */
    ngAfterViewInit() {
        this._init = true;
        this._update();
    }
    /**
     * @hidden
     */
    _update() {
        if (!this._init) {
            return;
        }
        // Unlisten
        this._rmListener && this._rmListener();
        this._rmListener = null;
        // Check if the split-pane is disabled
        if (!this._isEnabled) {
            this._setVisible(false);
            return;
        }
        const query = this._mediaQuery;
        if (typeof query === 'boolean') {
            this._setVisible(query);
            return;
        }
        if (query && query.length > 0) {
            // Listen
            const callback = (query) => this._setVisible(query.matches);
            const mediaList = this._plt.win().matchMedia(query);
            mediaList.addListener(callback);
            this._setVisible(mediaList.matches);
            this._rmListener = function () {
                mediaList.removeListener(callback);
            };
        }
        else {
            this._setVisible(false);
        }
    }
    /**
     * @hidden
     */
    _updateChildren() {
        this.mainContent = null;
        this.sideContent = null;
        const visible = this._visible;
        this._children.forEach(child => child.paneChanged && child.paneChanged(visible));
    }
    /**
     * @hidden
     */
    _setVisible(visible) {
        if (this._visible === visible) {
            return;
        }
        this._visible = visible;
        this.setElementClass('split-pane-visible', visible);
        this._updateChildren();
        this._zone.run(() => {
            this.ionChange.emit(this);
        });
    }
    /**
     * @hidden
     */
    isVisible() {
        return this._visible;
    }
    /**
     * @hidden
     */
    setElementClass(className, add) {
        this._renderer.setElementClass(this._elementRef.nativeElement, className, add);
    }
    /**
     * @hidden
     */
    _setPaneCSSClass(elementRef, isMain) {
        const ele = elementRef.nativeElement;
        this._renderer.setElementClass(ele, 'split-pane-main', isMain);
        this._renderer.setElementClass(ele, 'split-pane-side', !isMain);
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        util_1.assert(this._rmListener, 'at this point _rmListerner should be valid');
        this._rmListener && this._rmListener();
        this._rmListener = null;
    }
    /**
     * @hidden
     */
    initPane() {
        return true;
    }
};
__decorate([
    core_1.ContentChildren(RootNode, { descendants: false }),
    __metadata("design:type", core_1.QueryList),
    __metadata("design:paramtypes", [core_1.QueryList])
], SplitPane.prototype, "_setchildren", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SplitPane.prototype, "when", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SplitPane.prototype, "enabled", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SplitPane.prototype, "ionChange", void 0);
SplitPane = SplitPane_1 = __decorate([
    core_1.Directive({
        selector: 'ion-split-pane',
        providers: [{ provide: RootNode, useExisting: core_1.forwardRef(() => SplitPane_1) }]
    }),
    __metadata("design:paramtypes", [core_1.NgZone,
        platform_1.Platform,
        config_1.Config,
        core_1.ElementRef,
        core_1.Renderer])
], SplitPane);
exports.SplitPane = SplitPane;
var SplitPane_1;
//# sourceMappingURL=split-pane.js.map
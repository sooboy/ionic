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
const app_1 = require("../app/app");
const config_1 = require("../../config/config");
const loading_1 = require("./loading");
/**
 * @name LoadingController
 * @description
 * An overlay that can be used to indicate activity while blocking user
 * interaction. The loading indicator appears on top of the app's content,
 * and can be dismissed by the app to resume user interaction with
 * the app. It includes an optional backdrop, which can be disabled
 * by setting `showBackdrop: false` upon creation.
 *
 * ### Creating
 * You can pass all of the loading options in the first argument of
 * the create method: `create(opts)`. The spinner name should be
 * passed in the `spinner` property, and any optional HTML can be passed
 * in the `content` property. If you do not pass a value to `spinner`
 * the loading indicator will use the spinner specified by the mode. To
 * set the spinner name across the app, set the value of `loadingSpinner`
 * in your app's config. To hide the spinner, set `loadingSpinner: 'hide'`
 * in the app's config or pass `spinner: 'hide'` in the loading
 * options. See the [create](#create) method below for all available options.
 *
 * ### Dismissing
 * The loading indicator can be dismissed automatically after a specific
 * amount of time by passing the number of milliseconds to display it in
 * the `duration` of the loading options. By default the loading indicator
 * will show even during page changes, but this can be disabled by setting
 * `dismissOnPageChange` to `true`. To dismiss the loading indicator after
 * creation, call the `dismiss()` method on the Loading instance. The
 * `onDidDismiss` function can be called to perform an action after the loading
 * indicator is dismissed.
 *
 * >Note that after the component is dismissed, it will not be usable anymore
 * and another one must be created. This can be avoided by wrapping the
 * creation and presentation of the component in a reusable function as shown
 * in the `usage` section below.
 *
 * ### Limitations
 * The element is styled to appear on top of other content by setting its
 * `z-index` property. You must ensure no element has a stacking context with
 * a higher `z-index` than this element.
 *
 * @usage
 * ```ts
 * constructor(public loadingCtrl: LoadingController) {
 *
 * }
 *
 * presentLoadingDefault() {
 *   let loading = this.loadingCtrl.create({
 *     content: 'Please wait...'
 *   });
 *
 *   loading.present();
 *
 *   setTimeout(() => {
 *     loading.dismiss();
 *   }, 5000);
 * }
 *
 * presentLoadingCustom() {
 *   let loading = this.loadingCtrl.create({
 *     spinner: 'hide',
 *     content: `
 *       <div class="custom-spinner-container">
 *         <div class="custom-spinner-box"></div>
 *       </div>`,
 *     duration: 5000
 *   });
 *
 *   loading.onDidDismiss(() => {
 *     console.log('Dismissed loading');
 *   });
 *
 *   loading.present();
 * }
 *
 * presentLoadingText() {
 *   let loading = this.loadingCtrl.create({
 *     spinner: 'hide',
 *     content: 'Loading Please Wait...'
 *   });
 *
 *   loading.present();
 *
 *   setTimeout(() => {
 *     this.nav.push(Page2);
 *   }, 1000);
 *
 *   setTimeout(() => {
 *     loading.dismiss();
 *   }, 5000);
 * }
 * ```
 * @advanced
 *
 * Loading options
 *
 * | Option                | Type       | Description                                                                                                      |
 * |-----------------------|------------|------------------------------------------------------------------------------------------------------------------|
 * | spinner               |`string`    | The name of the SVG spinner for the loading indicator.                                                           |
 * | content               |`string`    | The html content for the loading indicator.                                                                      |
 * | cssClass              |`string`    | Additional classes for custom styles, separated by spaces.                                                       |
 * | showBackdrop          |`boolean`   | Whether to show the backdrop. Default true.                                                                      |
 * | enableBackdropDismiss | `boolean`  | Whether the loading indicator should be dismissed by tapping the backdrop. Default false.                        |
 * | dismissOnPageChange   |`boolean`   | Whether to dismiss the indicator when navigating to a new page. Default false.                                   |
 * | duration              |`number`    | How many milliseconds to wait before hiding the indicator. By default, it will show until `dismiss()` is called. |
 *
 * @demo /docs/demos/src/loading/
 * @see {@link /docs/api/components/spinner/Spinner Spinner API Docs}
 */
let LoadingController = class LoadingController {
    constructor(_app, config) {
        this._app = _app;
        this.config = config;
    }
    /**
     * Create a loading indicator. See below for options.
     * @param {LoadingOptions} [opts] Loading options
     * @returns {Loading} Returns a Loading Instance
     */
    create(opts = {}) {
        return new loading_1.Loading(this._app, opts, this.config);
    }
};
LoadingController = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [app_1.App, config_1.Config])
], LoadingController);
exports.LoadingController = LoadingController;
//# sourceMappingURL=loading-controller.js.map
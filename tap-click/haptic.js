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
const platform_1 = require("../platform/platform");
/**
 * @name Haptic
 * @description
 * The `Haptic` class interacts with a haptic engine on the device, if
 * available. Generally, Ionic components use this under the hood, but you're
 * welcome to get a bit crazy with it if you fancy.
 *
 * Currently, this uses the Taptic engine on iOS.
 *
 * @usage
 * ```ts
 * export class MyClass{
 *  constructor(haptic: Haptic){
 *    haptic.selection();
 *  }
 * }
 *
 * ```
 */
let Haptic = class Haptic {
    constructor(plt) {
        if (plt) {
            plt.ready().then(() => {
                this._p = plt.win().TapticEngine;
            });
        }
    }
    /**
     * Check to see if the Haptic Plugin is available
     * @return {boolean} Returns true or false if the plugin is available
     *
     */
    available() {
        return !!this._p;
    }
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */
    selection() {
        this._p && this._p.selection();
    }
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */
    gestureSelectionStart() {
        this._p && this._p.gestureSelectionStart();
    }
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */
    gestureSelectionChanged() {
        this._p && this._p.gestureSelectionChanged();
    }
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */
    gestureSelectionEnd() {
        this._p && this._p.gestureSelectionEnd();
    }
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ type: 'success' }` (or `warning`/`error`)
     */
    notification(options) {
        this._p && this._p.notification(options);
    }
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */
    impact(options) {
        this._p && this._p.impact(options);
    }
};
Haptic = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [platform_1.Platform])
], Haptic);
exports.Haptic = Haptic;
//# sourceMappingURL=haptic.js.map
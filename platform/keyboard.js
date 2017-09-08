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
const config_1 = require("../config/config");
const dom_controller_1 = require("./dom-controller");
const dom_1 = require("../util/dom");
const key_1 = require("./key");
const platform_1 = require("./platform");
/**
 * @name Keyboard
 * @description
 * The `Keyboard` class allows you to work with the keyboard events provided
 * by the Ionic keyboard plugin.
 *
 * @usage
 * ```ts
 * export class MyClass {
 *   constructor(public keyboard: Keyboard) {
 *
 *   }
 * }
 * ```
 */
let Keyboard = class Keyboard {
    constructor(config, _plt, _zone, _dom) {
        this._plt = _plt;
        this._zone = _zone;
        this._dom = _dom;
        this.willShow = new core_1.EventEmitter();
        this.willHide = new core_1.EventEmitter();
        this.didShow = new core_1.EventEmitter();
        this.didHide = new core_1.EventEmitter();
        this.eventsAvailable = false;
        this.focusOutline(config.get('focusOutline'));
        const win = _plt.win();
        if (config.getBoolean('keyboardResizes', false)) {
            this.listenV2(win);
        }
        else {
            this.listenV1(win);
        }
    }
    listenV2(win) {
        const platform = this._plt;
        platform.registerListener(win, 'keyboardWillShow', () => {
            this._zone.run(() => {
                this.willShow.emit();
            });
        }, { zone: false, passive: true });
        platform.registerListener(win, 'keyboardWillHide', () => {
            this._zone.run(() => {
                this.willHide.emit();
            });
        }, { zone: false, passive: true });
        platform.registerListener(win, 'keyboardDidShow', () => {
            this._zone.run(() => {
                this.didShow.emit();
            });
        }, { zone: false, passive: true });
        platform.registerListener(win, 'keyboardDidHide', () => {
            this._zone.run(() => {
                this.didHide.emit();
            });
        }, { zone: false, passive: true });
        this.eventsAvailable = true;
    }
    listenV1(win) {
        const platform = this._plt;
        platform.registerListener(win, 'native.keyboardhide', () => {
            this.blurActiveInput(true);
        }, { zone: false, passive: true });
        platform.registerListener(win, 'native.keyboardshow', () => {
            this.blurActiveInput(false);
        }, { zone: false, passive: true });
    }
    blurActiveInput(shouldBlur) {
        const platform = this._plt;
        platform.cancelTimeout(this._tmr);
        if (shouldBlur) {
            this._tmr = platform.timeout(() => {
                // this custom cordova plugin event fires when the keyboard will hide
                // useful when the virtual keyboard is closed natively
                // https://github.com/ionic-team/ionic-plugin-keyboard
                if (this.isOpen()) {
                    platform.focusOutActiveElement();
                }
            }, 80);
        }
    }
    /**
     * Check to see if the keyboard is open or not.
     *
     * ```ts
     * export class MyClass {
     *   constructor(public keyboard: Keyboard) {
     *
     *   }
     *
     *   keyboardCheck() {
     *     console.log('The keyboard is open:', this.keyboard.isOpen());
     *   }
     * }
     * ```
     *
     * @return {boolean} returns a true or false value if the keyboard is open or not.
     */
    isOpen() {
        return this.hasFocusedTextInput();
    }
    /**
     * When the keyboard is closed, call any methods you want.
     *
     * ```ts
     * export class MyClass {
     *   constructor(public keyboard: Keyboard) {
     *     this.keyboard.onClose(this.closeCallback);
     *   }
     *   closeCallback() {
     *     // call what ever functionality you want on keyboard close
     *     console.log('Closing time');
     *   }
     * }
     * ```
     *
     * @param {function} callback method you want to call when the keyboard has been closed.
     * @return {function} returns a callback that gets fired when the keyboard is closed.
     */
    onClose(callback, pollingInternval = KEYBOARD_CLOSE_POLLING, pollingChecksMax = KEYBOARD_POLLING_CHECKS_MAX) {
        console.debug(`keyboard, onClose created`);
        const self = this;
        let checks = 0;
        let promise = null;
        if (!callback) {
            // a callback wasn't provided, so let's return a promise instead
            promise = new Promise(resolve => { callback = resolve; });
        }
        function checkKeyboard() {
            console.debug(`keyboard, isOpen: ${self.isOpen()}`);
            if (!self.isOpen() || checks > pollingChecksMax) {
                self._plt.timeout(function () {
                    self._zone.run(function () {
                        console.debug(`keyboard, closed`);
                        callback();
                    });
                }, 400);
            }
            else {
                self._plt.timeout(checkKeyboard, pollingInternval);
            }
            checks++;
        }
        self._plt.timeout(checkKeyboard, pollingInternval);
        return promise;
    }
    /**
     * Programmatically close the keyboard.
     */
    close() {
        this._dom.read(() => {
            if (this.isOpen()) {
                // only focus out when a text input has focus
                console.debug(`keyboard, close()`);
                this._dom.write(() => {
                    this._plt.focusOutActiveElement();
                });
            }
        });
    }
    /**
     * @hidden
     */
    focusOutline(setting) {
        /* Focus Outline
         * --------------------------------------------------
         * By default, when a keydown event happens from a tab key, then
         * the 'focus-outline' css class is added to the body element
         * so focusable elements have an outline. On a mousedown or
         * touchstart event, then the 'focus-outline' css class is removed.
         *
         * Config default overrides:
         * focusOutline: true     - Always add the focus-outline
         * focusOutline: false    - Do not add the focus-outline
         */
        const self = this;
        const platform = self._plt;
        const doc = platform.doc();
        let isKeyInputEnabled = false;
        let unRegMouse;
        let unRegTouch;
        const evOpts = { passive: true, zone: false };
        function cssClass() {
            self._dom.write(() => {
                platform.doc().body.classList[isKeyInputEnabled ? 'add' : 'remove']('focus-outline');
            });
        }
        if (setting === true) {
            isKeyInputEnabled = true;
            return cssClass();
        }
        else if (setting === false) {
            return;
        }
        // default is to add the focus-outline when the tab key is used
        function keyDown(ev) {
            if (!isKeyInputEnabled && ev.keyCode === key_1.KEY_TAB) {
                isKeyInputEnabled = true;
                enableKeyInput();
            }
        }
        function pointerDown() {
            isKeyInputEnabled = false;
            enableKeyInput();
        }
        function enableKeyInput() {
            cssClass();
            unRegMouse && unRegMouse();
            unRegTouch && unRegTouch();
            if (isKeyInputEnabled) {
                // listen for when a mousedown or touchstart event happens
                unRegMouse = platform.registerListener(doc, 'mousedown', pointerDown, evOpts);
                unRegTouch = platform.registerListener(doc, 'touchstart', pointerDown, evOpts);
            }
        }
        // always listen for tab keydown events
        platform.registerListener(platform.doc(), 'keydown', keyDown, evOpts);
    }
    hasFocusedTextInput() {
        const activeEle = this._plt.getActiveElement();
        if (dom_1.isTextInput(activeEle)) {
            return (activeEle.parentElement.querySelector(':focus') === activeEle);
        }
        return false;
    }
};
Keyboard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [config_1.Config,
        platform_1.Platform,
        core_1.NgZone,
        dom_controller_1.DomController])
], Keyboard);
exports.Keyboard = Keyboard;
const KEYBOARD_CLOSE_POLLING = 150;
const KEYBOARD_POLLING_CHECKS_MAX = 100;
//# sourceMappingURL=keyboard.js.map
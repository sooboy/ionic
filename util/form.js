"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const util_1 = require("./util");
/**
 * @hidden
 */
let Form = class Form {
    /**
     * @hidden
     */
    constructor() {
        this._focused = null;
        this._ids = -1;
        this._inputs = [];
    }
    register(input) {
        this._inputs.push(input);
    }
    deregister(input) {
        util_1.removeArrayItem(this._inputs, input);
        this.unsetAsFocused(input);
    }
    setAsFocused(input) {
        this._focused = input;
    }
    unsetAsFocused(input) {
        if (input === this._focused) {
            this._focused = null;
        }
    }
    /**
     * Focuses the next input element, if it exists.
     */
    tabFocus(currentInput) {
        const inputs = this._inputs;
        let index = inputs.indexOf(currentInput) + 1;
        if (index > 0 && index < inputs.length) {
            var nextInput = inputs[index];
            if (nextInput !== this._focused) {
                console.debug('tabFocus, next');
                return nextInput.initFocus();
            }
        }
        index = inputs.indexOf(this._focused);
        if (index > 0) {
            var previousInput = inputs[index - 1];
            if (previousInput) {
                console.debug('tabFocus, previous');
                previousInput.initFocus();
            }
        }
    }
    nextId() {
        return ++this._ids;
    }
};
Form = __decorate([
    core_1.Injectable()
], Form);
exports.Form = Form;
/**
 * @hidden
 */
class IonicTapInput {
}
exports.IonicTapInput = IonicTapInput;
/**
 * @hidden
 */
class IonicFormInput {
}
exports.IonicFormInput = IonicFormInput;
//# sourceMappingURL=form.js.map
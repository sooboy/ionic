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
/**
 * Adopted from FastDom
 * https://github.com/wilsonpage/fastdom
 * MIT License
 */
const core_1 = require("@angular/core");
const platform_1 = require("./platform");
const util_1 = require("../util/util");
/**
 * @hidden
 */
class DomDebouncer {
    constructor(dom) {
        this.dom = dom;
        this.writeTask = null;
        this.readTask = null;
    }
    read(fn) {
        if (this.readTask) {
            return;
        }
        return this.readTask = this.dom.read((t) => {
            this.readTask = null;
            fn(t);
        });
    }
    write(fn) {
        if (this.writeTask) {
            return;
        }
        return this.writeTask = this.dom.write((t) => {
            this.writeTask = null;
            fn(t);
        });
    }
    cancel() {
        const writeTask = this.writeTask;
        writeTask && this.dom.cancel(writeTask);
        const readTask = this.readTask;
        readTask && this.dom.cancel(readTask);
        this.readTask = this.writeTask = null;
    }
}
exports.DomDebouncer = DomDebouncer;
/**
 * @hidden
 */
let DomController = class DomController {
    constructor(plt) {
        this.plt = plt;
        this.r = [];
        this.w = [];
    }
    debouncer() {
        return new DomDebouncer(this);
    }
    read(fn, timeout) {
        if (timeout) {
            fn.timeoutId = this.plt.timeout(() => {
                this.r.push(fn);
                this._queue();
            }, timeout);
        }
        else {
            this.r.push(fn);
            this._queue();
        }
        return fn;
    }
    write(fn, timeout) {
        if (timeout) {
            fn.timeoutId = this.plt.timeout(() => {
                this.w.push(fn);
                this._queue();
            }, timeout);
        }
        else {
            this.w.push(fn);
            this._queue();
        }
        return fn;
    }
    cancel(fn) {
        if (fn) {
            if (fn.timeoutId) {
                this.plt.cancelTimeout(fn.timeoutId);
            }
            util_1.removeArrayItem(this.r, fn) || util_1.removeArrayItem(this.w, fn);
        }
    }
    _queue() {
        const self = this;
        if (!self.q) {
            self.q = true;
            self.plt.raf(function rafCallback(timeStamp) {
                self._flush(timeStamp);
            });
        }
    }
    _flush(timeStamp) {
        let err;
        try {
            dispatch(timeStamp, this.r, this.w);
        }
        catch (e) {
            err = e;
        }
        this.q = false;
        if (this.r.length || this.w.length) {
            this._queue();
        }
        if (err) {
            throw err;
        }
    }
};
DomController = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [platform_1.Platform])
], DomController);
exports.DomController = DomController;
function dispatch(timeStamp, r, w) {
    let fn;
    // ******** DOM READS ****************
    while (fn = r.shift()) {
        fn(timeStamp);
    }
    // ******** DOM WRITES ****************
    while (fn = w.shift()) {
        fn(timeStamp);
    }
}
//# sourceMappingURL=dom-controller.js.map
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
const util_1 = require("../util/util");
const platform_1 = require("../platform/platform");
/**
 * @hidden
 */
let TransitionController = class TransitionController {
    constructor(plt, _config) {
        this.plt = plt;
        this._config = _config;
        this._ids = 0;
        this._trns = {};
    }
    getRootTrnsId(nav) {
        nav = nav.parent;
        while (nav) {
            if (util_1.isPresent(nav._trnsId)) {
                return nav._trnsId;
            }
            nav = nav.parent;
        }
        return null;
    }
    nextId() {
        return this._ids++;
    }
    get(trnsId, enteringView, leavingView, opts) {
        let TransitionClass = this._config.getTransition(opts.animation);
        if (!TransitionClass) {
            // didn't find a transition animation, default to ios-transition
            TransitionClass = this._config.getTransition('ios-transition');
        }
        const trns = new TransitionClass(this.plt, enteringView, leavingView, opts);
        trns.trnsId = trnsId;
        if (!this._trns[trnsId]) {
            // we haven't created the root transition yet
            this._trns[trnsId] = trns;
        }
        else {
            // we already have a root transition created
            // add this new transition as a child to the root
            this._trns[trnsId].add(trns);
        }
        return trns;
    }
    destroy(trnsId) {
        const trans = this._trns[trnsId];
        if (trans) {
            trans.destroy();
            delete this._trns[trnsId];
        }
    }
};
TransitionController = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [platform_1.Platform, config_1.Config])
], TransitionController);
exports.TransitionController = TransitionController;
//# sourceMappingURL=transition-controller.js.map
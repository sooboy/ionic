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
const deep_linker_1 = require("../../navigation/deep-linker");
const view_controller_1 = require("../../navigation/view-controller");
const nav_pop_1 = require("./nav-pop");
/**
 * @hidden
 */
let NavPopAnchor = class NavPopAnchor {
    constructor(host, linker, viewCtrl) {
        this.host = host;
        this.linker = linker;
        this.viewCtrl = viewCtrl;
    }
    updateHref() {
        if (this.host && this.viewCtrl) {
            const previousView = this.host._nav.getPrevious(this.viewCtrl);
            this._href = (previousView && this.linker.createUrl(this.host._nav, this.viewCtrl.component, this.viewCtrl.data)) || '#';
        }
        else {
            this._href = '#';
        }
    }
    ngAfterContentInit() {
        this.updateHref();
    }
};
NavPopAnchor = __decorate([
    core_1.Directive({
        selector: 'a[navPop]',
        host: {
            '[attr.href]': '_href'
        }
    }),
    __param(0, core_1.Optional()),
    __param(2, core_1.Optional()),
    __metadata("design:paramtypes", [nav_pop_1.NavPop,
        deep_linker_1.DeepLinker,
        view_controller_1.ViewController])
], NavPopAnchor);
exports.NavPopAnchor = NavPopAnchor;
//# sourceMappingURL=nav-pop-anchor.js.map
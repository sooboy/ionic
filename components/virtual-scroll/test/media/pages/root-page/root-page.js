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
const _1 = require("../../../../../../");
let RootPage = class RootPage {
    constructor(plt) {
        this.items = [];
        this.webview = '';
        this.type = 'range';
        for (var i = 0; i < 200; i++) {
            if (i % 2 === 0) {
                this.changeType();
            }
            this.items.push({
                value: i,
                type: this.type,
                class: `item-${i}`
            });
        }
        if (plt.is('ios')) {
            if (plt.testUserAgent('Safari')) {
                this.webview = ': iOS Safari';
            }
            else if (!!window['webkit']) {
                this.webview = ': iOS WKWebView';
            }
            else {
                this.webview = ': iOS UIWebView';
            }
        }
    }
    changeType() {
        if (this.type === 'range') {
            this.type = 'checkbox';
        }
        else if (this.type === 'checkbox') {
            this.type = 'toggle';
        }
        else if (this.type === 'toggle') {
            this.type = 'radio';
        }
        else {
            this.type = 'range';
        }
    }
    reload() {
        window.location.reload(true);
    }
};
RootPage = __decorate([
    core_1.Component({
        templateUrl: 'root-page.html'
    }),
    __metadata("design:paramtypes", [_1.Platform])
], RootPage);
exports.RootPage = RootPage;
//# sourceMappingURL=root-page.js.map
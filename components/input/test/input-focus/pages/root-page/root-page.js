"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let RootPage = class RootPage {
    reload() {
        window.location.reload();
    }
};
RootPage = __decorate([
    core_1.Component({
        templateUrl: 'root-page.html'
    })
], RootPage);
exports.RootPage = RootPage;
document.addEventListener('click', (ev) => {
    console.log(`CLICK, ${ev.target.localName}.${ev.target.className}, time: ${Date.now()}`);
});
document.addEventListener('touchstart', (ev) => {
    console.log(`TOUCH START, ${ev.target.localName}.${ev.target.className}, time: ${Date.now()}`);
});
document.addEventListener('touchend', (ev) => {
    console.log(`TOUCH END, ${ev.target.localName}.${ev.target.className}, time: ${Date.now()}`);
});
document.addEventListener('focusin', (ev) => {
    console.log(`CLICK, ${ev.target.localName}.${ev.target.className}, time: ${Date.now()}`);
    console.log(`FOCUS IN, ${ev.target.localName}.${ev.target.className}, time: ${Date.now()}`);
});
document.addEventListener('focusout', (ev) => {
    console.log(`CLICK, ${ev.target.localName}.${ev.target.className}, time: ${Date.now()}`);
    console.log(`FOCUS OUT, ${ev.target.localName}.${ev.target.className}, time: ${Date.now()}`);
});
//# sourceMappingURL=root-page.js.map
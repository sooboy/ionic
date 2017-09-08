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
const __1 = require("../../../../../../..");
let TabsTwoPage = class TabsTwoPage {
    constructor(nav) {
        this.nav = nav;
        this.tabs2Tab1 = 'TabsTwoTabOnePageOne';
        this.tabs2Tab2 = 'TabsTwoTabTwoPageOne';
    }
};
TabsTwoPage = __decorate([
    __1.IonicPage({
        segment: 'TabsTwoPage'
    }),
    core_1.Component({
        template: `
<ion-tabs>
    <ion-tab tabIcon="aperture" [root]="tabs2Tab1" tabTitle="Aperture"></ion-tab>
    <ion-tab tabIcon="apps" [root]="tabs2Tab2" tabTitle="Apps"></ion-tab>
  </ion-tabs>
  `
    }),
    __metadata("design:paramtypes", [__1.NavController])
], TabsTwoPage);
exports.TabsTwoPage = TabsTwoPage;
//# sourceMappingURL=tabs-two-page.js.map
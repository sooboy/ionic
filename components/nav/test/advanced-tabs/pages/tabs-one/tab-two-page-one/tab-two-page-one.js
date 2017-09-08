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
let TabsOneTabTwoPageOne = class TabsOneTabTwoPageOne {
    constructor(nav) {
        this.nav = nav;
    }
    nextPage() {
        this.nav.push('TabsOneTabTwoPageTwo', { userId: '456', name: 'Stanley Hudson' });
    }
};
TabsOneTabTwoPageOne = __decorate([
    __1.IonicPage({
        segment: 'TabsOneTabTwoPageOne'
    }),
    core_1.Component({
        template: `
<ion-header>
  <ion-navbar>
    <ion-title>Tabs 1 Tab 2 Page 1</ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
  Tabs 1 Tab 2 Page 1
  <button ion-button (click)="nextPage()">Go to Next Page</button>
</ion-content>
  `
    }),
    __metadata("design:paramtypes", [__1.NavController])
], TabsOneTabTwoPageOne);
exports.TabsOneTabTwoPageOne = TabsOneTabTwoPageOne;
//# sourceMappingURL=tab-two-page-one.js.map
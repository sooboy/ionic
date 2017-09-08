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
let TabsTwoTabTwoPageTwo = class TabsTwoTabTwoPageTwo {
    constructor(nav, navParams) {
        this.nav = nav;
        this.userId = navParams.data.userId;
        this.name = navParams.data.name;
    }
    next() {
        this.nav.push('TabsTwoTabTwoPageThree', { paramOne: 'Albany', paramTwo: 'NY' });
    }
};
TabsTwoTabTwoPageTwo = __decorate([
    __1.IonicPage({
        segment: 'TabsTwoTabTwoPageTwo/userId/:userId/name/:name'
    }),
    core_1.Component({
        template: `
<ion-header>
  <ion-navbar>
    <ion-title>Tabs 2 Tab 2 Page 2</ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
  Tabs 2 Tab 2 Page 2
  <div>
  User ID: {{userId}}
  </div>
  <div>
  Name: {{name}}
  </div>
  <button ion-button (click)="next()">Next</button>
</ion-content>
  `
    }),
    __metadata("design:paramtypes", [__1.NavController, __1.NavParams])
], TabsTwoTabTwoPageTwo);
exports.TabsTwoTabTwoPageTwo = TabsTwoTabTwoPageTwo;
//# sourceMappingURL=tab-two-page-two.js.map
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
const __1 = require("../../../../../..");
let NonTabOne = class NonTabOne {
    constructor(nav) {
        this.nav = nav;
    }
    goToTabs() {
        this.nav.push('TabsOnePage');
    }
};
NonTabOne = __decorate([
    __1.IonicPage(),
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Nav One</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
      Nav 1 Page 1
      <button ion-button (click)="goToTabs()">Go to Tabs 1</button>
    </ion-content>
  `
    }),
    __metadata("design:paramtypes", [__1.NavController])
], NonTabOne);
exports.NonTabOne = NonTabOne;
//# sourceMappingURL=non-tab-one.js.map
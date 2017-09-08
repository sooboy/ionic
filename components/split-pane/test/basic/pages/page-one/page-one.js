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
let PageOne = class PageOne {
    constructor(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    push() {
        this.navCtrl.push('PageTwo');
    }
    menu() {
        this.menuCtrl.enable(!this.menuCtrl.isEnabled());
    }
};
PageOne = __decorate([
    core_1.Component({
        template: `
  <ion-header>
    <ion-navbar>
      <button ion-button menuToggle>
        <ion-icon name="menu"></ion-icon>
      </button>
      <ion-title>Navigation</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content padding>
    <h1>Page 1</h1>
    <button ion-button (click)="push()">Push</button>
    <button ion-button (click)="menu()">Disable/enable menu</button>
    <div f></div>
    <div f></div>
    <div f></div>
    <div f></div>

  </ion-content>
  `
    }),
    __metadata("design:paramtypes", [__1.NavController,
        __1.MenuController])
], PageOne);
exports.PageOne = PageOne;
//# sourceMappingURL=page-one.js.map
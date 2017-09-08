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
let SidePage = SidePage_1 = class SidePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    push() {
        this.navCtrl.push(SidePage_1);
    }
};
SidePage = SidePage_1 = __decorate([
    core_1.Component({
        template: `
  <ion-header>
  <ion-navbar><ion-title>Navigation</ion-title></ion-navbar>
  </ion-header>
  <ion-content>
  <ion-list>
    <ion-item>Hola 1</ion-item>
    <ion-item>Hola 2</ion-item>
    <ion-item>Hola 3</ion-item>
    <button ion-item (click)="push()">Push</button>
    <ion-item>Hola</ion-item>
    <ion-item>Hola</ion-item>
    <ion-item>Hola</ion-item>

  </ion-list>
  </ion-content>
  `
    }),
    __metadata("design:paramtypes", [__1.NavController])
], SidePage);
exports.SidePage = SidePage;
var SidePage_1;
//# sourceMappingURL=side-page.js.map
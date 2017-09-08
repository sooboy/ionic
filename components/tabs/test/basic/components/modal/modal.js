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
let MyModal = class MyModal {
    constructor(viewCtrl, app) {
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.items = [];
        for (var i = 1; i <= 10; i++) {
            this.items.push(i);
        }
    }
    dismiss() {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss();
    }
    appNavPop() {
        this.app.navPop();
    }
};
MyModal = __decorate([
    core_1.Component({
        template: `
  <ion-header>
    <ion-toolbar>
      <ion-buttons start>
        <button ion-button (click)="dismiss()">Cancel</button>
      </ion-buttons>

      <ion-title>
        Filter Sessions
      </ion-title>

      <ion-buttons end>
        <button ion-button (click)="dismiss()">Done</button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content class="outer-content">
    <ion-list>
      <ion-list-header>Tracks</ion-list-header>

      <ion-item *ngFor="let i of items">
        <ion-label>Toggle {{i}}</ion-label>
        <ion-toggle color="secondary"></ion-toggle>
      </ion-item>
    </ion-list>

    <ion-list>
      <button ion-item color="danger" detail-none>
        Reset All Filters
      </button>
      <button ion-item color="danger" detail-none (click)="appNavPop()">
        App Nav Pop
      </button>
    </ion-list>
  </ion-content>
  `
    }),
    __metadata("design:paramtypes", [__1.ViewController, __1.App])
], MyModal);
exports.MyModal = MyModal;
//# sourceMappingURL=modal.js.map
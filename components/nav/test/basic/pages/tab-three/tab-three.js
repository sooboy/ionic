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
let Tab3 = class Tab3 {
    constructor(alertCtrl, tabs, app) {
        this.alertCtrl = alertCtrl;
        this.tabs = tabs;
        this.app = app;
    }
    presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Alert Title!',
            buttons: ['Dismiss']
        });
        alert.present();
    }
    presentModal() {
        console.debug('modal was commented out');
        // this.modalCtrl.create(MyModal).present();
    }
    selectPrevious() {
        this.tabs.select(this.tabs.previousTab());
    }
    appNavPop() {
        this.app.navPop();
    }
};
Tab3 = __decorate([
    __1.IonicPage({
        name: 'tab-three'
    }),
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Stopwatch</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <h2>Tab 3</h2>
      <p>
        <button ion-button (click)="presentAlert()">Present Alert</button>
        <button ion-button (click)="presentModal()">Present Modal</button>
      </p>
      <p>
        <button ion-button (click)="selectPrevious()">Select Previous Tab</button>
      </p>
      <p>
        <button ion-button (click)="appNavPop()">App Nav Pop</button>
      </p>
    </ion-content>
    `
    }),
    __metadata("design:paramtypes", [__1.AlertController, __1.Tabs, __1.App])
], Tab3);
exports.Tab3 = Tab3;
//# sourceMappingURL=tab-three.js.map
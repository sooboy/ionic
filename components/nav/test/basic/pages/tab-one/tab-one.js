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
let Tab1 = class Tab1 {
    constructor(tabs, app, nav) {
        this.tabs = tabs;
        this.app = app;
        this.nav = nav;
        this.items = [];
        for (var i = 1; i <= 250; i++) {
            this.items.push(i);
        }
    }
    goBack() {
        this.nav.parent.parent.pop();
    }
    goTo() {
        this.nav.push('tab-item-page');
    }
    selectPrevious() {
        this.tabs.select(this.tabs.previousTab());
    }
    appNavPop() {
        this.app.navPop();
    }
};
Tab1 = __decorate([
    __1.IonicPage({
        name: 'tab-one'
    }),
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Heart</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header>
          Tab 1
        </ion-list-header>
        <ion-item>
          <button ion-button (click)="goBack()">Back</button>
        </ion-item>
        <ion-item (click)="goTo()" *ngFor="let i of items">Item {{i}} {{i}} {{i}} {{i}}</ion-item>
      </ion-list>
      <p>
        <button ion-button (click)="selectPrevious()">Select Previous Tab</button>
      </p>
      <p>
        <button ion-button (click)="appNavPop()">App Nav Pop</button>
      </p>
    </ion-content>
    `
    }),
    __metadata("design:paramtypes", [__1.Tabs, __1.App, __1.NavController])
], Tab1);
exports.Tab1 = Tab1;
//# sourceMappingURL=tab-one.js.map
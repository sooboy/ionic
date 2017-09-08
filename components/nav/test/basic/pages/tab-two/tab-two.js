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
let Tab2 = class Tab2 {
    constructor(tabs, app) {
        this.tabs = tabs;
        this.app = app;
        this.sessions = [];
        for (var i = 1; i <= 250; i++) {
            this.sessions.push({
                name: 'Name ' + i,
                location: 'Location: ' + i
            });
        }
    }
    selectPrevious() {
        this.tabs.select(this.tabs.previousTab());
    }
    appNavPop() {
        this.app.navPop();
    }
};
Tab2 = __decorate([
    __1.IonicPage({
        name: 'tab-two'
    }),
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Schedule</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item-sliding *ngFor="let session of sessions" #slidingItem>
          <ion-item>
            <h3>{{session.name}} {{session.name}} {{session.name}}</h3>
            <p>{{session.location}} {{session.location}} {{session.location}}</p>
          </ion-item>
          <ion-item-options>
            <button ion-button color="primary">Speaker<br>Info</button>
            <button ion-button color="secondary">Add to<br>Favorites</button>
          </ion-item-options>
        </ion-item-sliding>
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
    __metadata("design:paramtypes", [__1.Tabs, __1.App])
], Tab2);
exports.Tab2 = Tab2;
//# sourceMappingURL=tab-two.js.map
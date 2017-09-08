"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const __1 = require("../../../../../..");
let TabsPage = class TabsPage {
    constructor() {
        this.root1 = 'tab-one';
        this.root2 = 'tab-two';
        this.root3 = 'tab-three';
    }
    onChange(ev) {
        console.log('Changed tab', ev);
    }
    onSelect(ev) {
        console.log('Selected tab', ev);
    }
};
TabsPage = __decorate([
    __1.IonicPage({
        name: 'tabs'
    }),
    core_1.Component({
        template: `
    <ion-menu [content]="content">
      <ion-header>
        <ion-toolbar color="secondary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <button ion-item menuClose detail-none>
            Close Menu
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-tabs #content (ionChange)="onChange($event)">
      <ion-tab tabUrlPath="plain" tabTitle="Plain List" tabIcon="star" [root]="root1" (ionSelect)="onSelect($event)"></ion-tab>
      <ion-tab tabTitle="Schedule" tabIcon="globe" [root]="root2"></ion-tab>
      <ion-tab tabTitle="Stopwatch" tabIcon="logo-facebook" [root]="root3"></ion-tab>
      <ion-tab tabTitle="Messages" tabIcon="chatboxes" [root]="root1"></ion-tab>
      <ion-tab tabTitle="My Profile" tabIcon="person" [root]="root2"></ion-tab>
    </ion-tabs>
  `
    })
], TabsPage);
exports.TabsPage = TabsPage;
//# sourceMappingURL=tabs.js.map
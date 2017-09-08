"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let AppComponent = class AppComponent {
    constructor() {
        this.tabs1Tab1 = 'TabsOneTabOnePageOne';
        this.tabs1Tab2 = 'TabsOneTabTwoPageOne';
        this.tabs2Tab1 = 'TabsTwoTabOnePageOne';
        this.tabs2Tab2 = 'TabsTwoTabTwoPageOne';
    }
};
AppComponent = __decorate([
    core_1.Component({
        template: `
<ion-split-pane>
  <ion-tabs>
    <ion-tab tabIcon="heart" [root]="tabs1Tab1" tabTitle="Heart"></ion-tab>
    <ion-tab tabIcon="star" [root]="tabs1Tab2" tabTitle="Star"></ion-tab>
  </ion-tabs>
  <ion-tabs>
    <ion-tab tabIcon="aperture" [root]="tabs2Tab1" tabTitle="Aperture"></ion-tab>
    <ion-tab tabIcon="apps" [root]="tabs2Tab2" tabTitle="Apps"></ion-tab>
  </ion-tabs>
</ion-split-pane>
  `
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
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
const platform_browser_1 = require("@angular/platform-browser");
const __1 = require("../../../..");
//
// Tab 1
//
let Tab1 = class Tab1 {
    constructor() {
        this.items = [];
        for (var i = 1; i <= 250; i++) {
            this.items.push(i);
        }
    }
};
Tab1 = __decorate([
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Speakers</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header>
          Tab 1
        </ion-list-header>
        <ion-item *ngFor="let i of items">Item {{i}} {{i}} {{i}} {{i}}</ion-item>
      </ion-list>
    </ion-content>
    `
    }),
    __metadata("design:paramtypes", [])
], Tab1);
exports.Tab1 = Tab1;
//
// Tab 2
//
let Tab2 = class Tab2 {
    constructor() {
        this.sessions = [];
        for (var i = 1; i <= 250; i++) {
            this.sessions.push({
                name: 'Name ' + i,
                location: 'Location: ' + i
            });
        }
    }
};
Tab2 = __decorate([
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Schedule</ion-title>
      </ion-navbar>
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
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
    </ion-content>
  `
    }),
    __metadata("design:paramtypes", [])
], Tab2);
exports.Tab2 = Tab2;
//
// Tab 3
//
let Tab3 = class Tab3 {
    constructor() { }
};
Tab3 = __decorate([
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Map</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <h2>Tab 3</h2>
    </ion-content>
    `
    }),
    __metadata("design:paramtypes", [])
], Tab3);
exports.Tab3 = Tab3;
let TabsPage = class TabsPage {
    constructor() {
        this.root1 = Tab1;
        this.root2 = Tab2;
        this.root3 = Tab3;
    }
};
TabsPage = __decorate([
    core_1.Component({
        template: `
    <ion-tabs>
      <ion-tab tabTitle="Speakers" tabIcon="person" [root]="root1"></ion-tab>
      <ion-tab tabTitle="Schedule" tabIcon="globe" [root]="root2"></ion-tab>
      <ion-tab tabTitle="Map" tabIcon="map" [root]="root3"></ion-tab>
    </ion-tabs>
  `
    })
], TabsPage);
exports.TabsPage = TabsPage;
let AppComponent = class AppComponent {
    constructor() {
        this.root = TabsPage;
    }
};
AppComponent = __decorate([
    core_1.Component({
        template: `<ion-nav [root]="root"></ion-nav>`
    })
], AppComponent);
exports.AppComponent = AppComponent;
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            AppComponent,
            Tab1,
            Tab2,
            Tab3,
            TabsPage
        ],
        imports: [
            platform_browser_1.BrowserModule,
            __1.IonicModule.forRoot(AppComponent, {
                tabsPlacement: 'top'
            })
        ],
        bootstrap: [__1.IonicApp],
        entryComponents: [
            AppComponent,
            Tab1,
            Tab2,
            Tab3,
            TabsPage
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
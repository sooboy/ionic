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
    constructor(events) {
        this.events = events;
        this.datatest = 'old';
        this.called = 0;
        this.events.subscribe('data:changed', this.change.bind(this));
    }
    change() {
        console.log(this.datatest);
        console.log('data changed!');
        this.called++;
        this.datatest = 'new!';
    }
};
Tab1 = __decorate([
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Home</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <p>Tap the third tab below to fire broken events</p>
      <p>Then change to Tab 2 and back to Home</p>
      <p>{{datatest}} called: {{called}}</p>
      <button ion-button (click)="change()">Fire events correctly</button>
    </ion-content>
    `
    }),
    __metadata("design:paramtypes", [__1.Events])
], Tab1);
exports.Tab1 = Tab1;
//
// Tab 2
//
let Tab2 = class Tab2 {
};
Tab2 = __decorate([
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Tab 2</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
    Change back to home
    </ion-content>
  `
    })
], Tab2);
exports.Tab2 = Tab2;
let TabsPage = class TabsPage {
    constructor(events) {
        this.events = events;
        this.root1 = Tab1;
        this.root2 = Tab2;
    }
    takePhoto() {
        this.events.publish('data:changed');
    }
};
TabsPage = __decorate([
    core_1.Component({
        template: `
    <ion-tabs>
      <ion-tab tabTitle="Home" tabIcon="star" [root]="root1" ></ion-tab>
      <ion-tab tabTitle="Tab 2" tabIcon="globe" [root]="root2"></ion-tab>
      <ion-tab tabTitle="Break events" tabIcon="camera" (ionSelect)="takePhoto()"></ion-tab>
    </ion-tabs>
  `
    }),
    __metadata("design:paramtypes", [__1.Events])
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
            TabsPage
        ],
        imports: [
            platform_browser_1.BrowserModule,
            __1.IonicModule.forRoot(AppComponent, {
                tabsHighlight: true,
            })
        ],
        bootstrap: [__1.IonicApp],
        entryComponents: [
            AppComponent,
            Tab1,
            Tab2,
            TabsPage
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
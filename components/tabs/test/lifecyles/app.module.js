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
let Tab1 = Tab1_1 = class Tab1 {
    constructor(alertCtrl, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.called = {
            ionViewCanEnter: 0,
            ionViewCanLeave: 0,
            ionViewWillLoad: 0,
            ionViewDidLoad: 0,
            ionViewWillEnter: 0,
            ionViewDidEnter: 0,
            ionViewWillLeave: 0,
            ionViewDidLeave: 0
        };
    }
    push() {
        this.navCtrl.push(Tab1_1);
    }
    openAlert() {
        this.alertCtrl.create({
            title: 'Example'
        }).present();
    }
    ionViewCanEnter() {
        this.called.ionViewCanEnter++;
        return true;
    }
    ionViewCanLeave() {
        this.called.ionViewCanLeave++;
        return true;
    }
    ionViewWillLoad() {
        this.called.ionViewWillLoad++;
    }
    ionViewDidLoad() {
        this.called.ionViewDidLoad++;
    }
    ionViewWillEnter() {
        this.called.ionViewWillEnter++;
    }
    ionViewDidEnter() {
        this.called.ionViewDidEnter++;
    }
    ionViewWillLeave() {
        this.called.ionViewWillLeave++;
    }
    ionViewDidLeave() {
        this.called.ionViewDidLeave++;
    }
};
Tab1 = Tab1_1 = __decorate([
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Lifecyles</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <p>ionViewCanEnter ({{called.ionViewCanEnter}})</p>
      <p>ionViewCanLeave ({{called.ionViewCanLeave}})</p>
      <p>ionViewWillLoad ({{called.ionViewWillLoad}})</p>
      <p>ionViewDidLoad ({{called.ionViewDidLoad}})</p>
      <p>ionViewWillEnter ({{called.ionViewWillEnter}})</p>
      <p>ionViewDidEnter ({{called.ionViewDidEnter}})</p>
      <p>ionViewWillLeave ({{called.ionViewWillLeave}})</p>
      <p>ionViewDidLeave ({{called.ionViewDidLeave}})</p>

      <button ion-button (click)="push()">push()</button>
      <button ion-button (click)="openAlert()">open alert</button>
    </ion-content>
    `
    }),
    __metadata("design:paramtypes", [__1.AlertController, __1.NavController])
], Tab1);
exports.Tab1 = Tab1;
let TabsPage = class TabsPage {
    constructor() {
        this.root = Tab1;
    }
};
TabsPage = __decorate([
    core_1.Component({
        template: `
    <ion-tabs>
      <ion-tab tabTitle="Plain List" tabIcon="star" [root]="root"></ion-tab>
      <ion-tab tabTitle="Schedule" tabIcon="globe" [root]="root"></ion-tab>
      <ion-tab tabTitle="Stopwatch" tabIcon="logo-facebook" [root]="root"></ion-tab>
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
            TabsPage
        ]
    })
], AppModule);
exports.AppModule = AppModule;
var Tab1_1;
//# sourceMappingURL=app.module.js.map
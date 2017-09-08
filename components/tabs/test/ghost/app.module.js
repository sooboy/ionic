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
};
Tab1 = __decorate([
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Heart</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <h2>Tab 1</h2>
    </ion-content>
    `
    })
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
        <ion-title>Star</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <h2>Tab 2</h2>
    </ion-content>
    `
    })
], Tab2);
exports.Tab2 = Tab2;
//
// Tab 3
//
let Tab3 = class Tab3 {
};
Tab3 = __decorate([
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
    </ion-content>
    `
    })
], Tab3);
exports.Tab3 = Tab3;
//
// Tab 3
//
let QuesaritoPage = class QuesaritoPage {
};
QuesaritoPage = __decorate([
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Quesarito</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <h2>Quesarito</h2>
    </ion-content>
    `
    })
], QuesaritoPage);
exports.QuesaritoPage = QuesaritoPage;
let TabsPage = class TabsPage {
    constructor() {
        this.root1 = Tab1;
        this.root2 = Tab2;
        this.root3 = Tab3;
    }
    ngAfterViewInit() {
        console.log('Tab', this.tab);
        console.log(this.tab.first.setRoot);
    }
    openPage(which) {
        let pages = {
            'quesarito': QuesaritoPage
        };
        this.tab.first.setRoot(pages[which]);
    }
};
__decorate([
    core_1.ViewChildren(__1.Tab),
    __metadata("design:type", core_1.QueryList)
], TabsPage.prototype, "tab", void 0);
TabsPage = __decorate([
    core_1.Component({
        template: `
    <ion-menu [content]="content">
      <ion-header>
        <ion-toolbar color="secondary">
          <ion-title>Secret Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <button ion-item menuClose detail-none (click)="openPage('quesarito')">
            Quesarito
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-tabs #content>
      <ion-tab tabTitle="Heart" tabIcon="heart" [root]="root1" #tab1></ion-tab>
      <ion-tab tabTitle="Star" tabIcon="star" [root]="root2"></ion-tab>
      <ion-tab tabTitle="Stopwatch" tabIcon="stopwatch" [root]="root3"></ion-tab>
    </ion-tabs>
  `
    })
], TabsPage);
exports.TabsPage = TabsPage;
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            Tab1,
            Tab2,
            Tab3,
            QuesaritoPage,
            TabsPage
        ],
        imports: [
            platform_browser_1.BrowserModule,
            __1.IonicModule.forRoot(TabsPage)
        ],
        bootstrap: [__1.IonicApp],
        entryComponents: [
            Tab1,
            Tab2,
            Tab3,
            QuesaritoPage,
            TabsPage
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
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
let FirstPage = class FirstPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    pushPage() {
        this.navCtrl.push(SecondPage);
    }
};
FirstPage = __decorate([
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Root</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <button ion-button block (click)="pushPage()">Push Page</button>
    </ion-content>`,
    }),
    __metadata("design:paramtypes", [__1.NavController])
], FirstPage);
exports.FirstPage = FirstPage;
let SecondPage = class SecondPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this._index = 0;
    }
    insertPage() {
        this.navCtrl.insert(1, InsertPage, {
            index: this._index++
        }).then(() => {
            console.log('INSERTED! Stack:\n', this.navCtrl.getViews());
        });
    }
    removePage() {
        this.navCtrl.remove(1, 1).then(() => {
            console.log('REMOVED! Stack:\n', this.navCtrl.getViews());
        });
    }
    removeTwoPages() {
        this.navCtrl.remove(this.navCtrl.length() - 2, 2).then(() => {
            console.log('REMOVED TWO! Stack:\n', this.navCtrl.getViews());
        });
    }
    testThing() {
        console.log('TEST THING');
        this.navCtrl.push(InsertPage).then(() => {
            console.log('Pushed', this.navCtrl.getViews());
            console.log('Removing', this.navCtrl.getActive().index - 1);
            this.navCtrl.remove(this.navCtrl.getActive().index - 1, 1);
            console.log('REMOVED! Stack:\n', this.navCtrl.getViews());
        });
    }
};
SecondPage = __decorate([
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Root</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <h1>Second page</h1>
      <button ion-button block (click)="insertPage()">Insert Page</button>
      <button ion-button block (click)="removePage()">Remove Page</button>
      <button ion-button block (click)="removeTwoPages()">Remove Two Pages</button>
      <button ion-button block (click)="testThing()">Test Thing</button>
    </ion-content>
  `
    }),
    __metadata("design:paramtypes", [__1.NavController])
], SecondPage);
exports.SecondPage = SecondPage;
let InsertPage = class InsertPage {
    constructor(params) {
        this.index = params.get('index');
    }
};
InsertPage = __decorate([
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Inserted Paged {{index}}</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      Inserted Page
    </ion-content>
  `
    }),
    __metadata("design:paramtypes", [__1.NavParams])
], InsertPage);
exports.InsertPage = InsertPage;
let AppComponent = class AppComponent {
    constructor() {
        this.root = FirstPage;
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
            FirstPage,
            SecondPage,
            InsertPage
        ],
        imports: [
            platform_browser_1.BrowserModule,
            __1.IonicModule.forRoot(AppComponent)
        ],
        bootstrap: [__1.IonicApp],
        entryComponents: [
            AppComponent,
            FirstPage,
            SecondPage,
            InsertPage
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
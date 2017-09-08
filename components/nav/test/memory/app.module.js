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
let delay = 100;
let animate = false;
let count = 0;
let Page1 = class Page1 {
    constructor(nav) {
        this.nav = nav;
    }
    play() {
        this.tmr = setTimeout(() => {
            count++;
            console.log('push', count);
            this.nav.push(Page2, null, {
                animate: animate
            });
        }, delay);
    }
    ionViewDidEnter() {
        this.play();
    }
    stop() {
        clearTimeout(this.tmr);
    }
};
Page1 = __decorate([
    core_1.Component({
        template: `
    <ion-content padding text-center>
      <p>Page 1</p>
      <button ion-button (click)="stop()">Stop</button>
      <button ion-button (click)="play()">Play</button>
    </ion-content>
  `
    }),
    __metadata("design:paramtypes", [__1.NavController])
], Page1);
exports.Page1 = Page1;
let Page2 = class Page2 {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    play() {
        this.tmr = setTimeout(() => {
            count++;
            console.log('pop', count);
            this.navCtrl.pop({
                animate: animate
            });
        }, delay);
    }
    ionViewDidEnter() {
        this.play();
    }
    stop() {
        clearTimeout(this.tmr);
    }
};
Page2 = __decorate([
    core_1.Component({
        template: `
    <ion-content padding text-center>
      <p>Page 2</p>
      <button ion-button (click)="stop()">Stop</button>
      <button ion-button (click)="play()">Play</button>
    </ion-content>
  `
    }),
    __metadata("design:paramtypes", [__1.NavController])
], Page2);
exports.Page2 = Page2;
let AppComponent = class AppComponent {
    constructor() {
        this.root = Page1;
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
            Page1,
            Page2
        ],
        imports: [
            platform_browser_1.BrowserModule,
            __1.IonicModule.forRoot(AppComponent)
        ],
        bootstrap: [__1.IonicApp],
        entryComponents: [
            AppComponent,
            Page1,
            Page2
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
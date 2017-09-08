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
let MyContent = class MyContent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [];
        this.enabled = true;
        for (var i = 0; i < 30; i++) {
            this.items.push(this.items.length);
        }
    }
    doInfinite() {
        console.log('Begin async operation');
        return getAsyncData().then(newData => {
            for (var i = 0; i < newData.length; i++) {
                this.items.push(this.items.length);
            }
            console.log('Finished receiving data, async operation complete');
            if (this.items.length > 90) {
                this.enabled = false;
            }
        });
    }
    goToPage2() {
        this.navCtrl.push(E2EPage2);
    }
    toggleInfiniteScroll() {
        this.enabled = !this.enabled;
    }
};
__decorate([
    core_1.ViewChild(__1.InfiniteScroll),
    __metadata("design:type", __1.InfiniteScroll)
], MyContent.prototype, "infiniteScroll", void 0);
MyContent = __decorate([
    core_1.Component({
        selector: 'my-content',
        templateUrl: 'main.html'
    }),
    __metadata("design:paramtypes", [__1.NavController])
], MyContent);
exports.MyContent = MyContent;
let E2EPage1 = class E2EPage1 {
};
E2EPage1 = __decorate([
    core_1.Component({
        template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>Infinite Scroll</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <my-content></my-content>
  </ion-content>
`
    })
], E2EPage1);
exports.E2EPage1 = E2EPage1;
let E2EPage2 = class E2EPage2 {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
};
E2EPage2 = __decorate([
    core_1.Component({
        template: '<ion-content><button ion-button (click)="navCtrl.pop()">Pop</button></ion-content>'
    }),
    __metadata("design:paramtypes", [__1.NavController])
], E2EPage2);
exports.E2EPage2 = E2EPage2;
let AppComponent = class AppComponent {
    constructor() {
        this.root = E2EPage1;
    }
};
AppComponent = __decorate([
    core_1.Component({
        template: '<ion-nav [root]="root"></ion-nav>'
    })
], AppComponent);
exports.AppComponent = AppComponent;
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            AppComponent,
            E2EPage1,
            E2EPage2,
            MyContent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            __1.IonicModule.forRoot(AppComponent)
        ],
        bootstrap: [__1.IonicApp],
        entryComponents: [
            AppComponent,
            E2EPage1,
            E2EPage2,
            MyContent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
function getAsyncData() {
    // async return mock data
    return new Promise(resolve => {
        setTimeout(() => {
            let data = [];
            for (var i = 0; i < 30; i++) {
                data.push(i);
            }
            resolve(data);
        }, 500);
    });
}
//# sourceMappingURL=app.module.js.map
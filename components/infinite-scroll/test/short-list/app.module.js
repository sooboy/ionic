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
let E2EPage = class E2EPage {
    constructor() {
        this.items = [];
        for (var i = 0; i < 5; i++) {
            this.items.push(this.items.length);
        }
    }
    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        getAsyncData().then(newData => {
            for (var i = 0; i < newData.length; i++) {
                this.items.push(this.items.length);
            }
            console.log('Finished receiving data, async operation complete');
            infiniteScroll.complete();
            if (this.items.length > 90) {
                infiniteScroll.enable(false);
            }
        });
    }
};
E2EPage = __decorate([
    core_1.Component({
        templateUrl: 'main.html'
    }),
    __metadata("design:paramtypes", [])
], E2EPage);
exports.E2EPage = E2EPage;
let AppComponent = class AppComponent {
    constructor() {
        this.rootPage = E2EPage;
    }
};
AppComponent = __decorate([
    core_1.Component({
        template: '<ion-nav [root]="rootPage"></ion-nav>'
    })
], AppComponent);
exports.AppComponent = AppComponent;
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            AppComponent,
            E2EPage
        ],
        imports: [
            platform_browser_1.BrowserModule,
            __1.IonicModule.forRoot(AppComponent)
        ],
        bootstrap: [__1.IonicApp],
        entryComponents: [
            E2EPage
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
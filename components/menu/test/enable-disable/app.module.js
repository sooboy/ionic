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
let Page1 = class Page1 {
};
Page1 = __decorate([
    core_1.Component({
        templateUrl: 'page1.html'
    })
], Page1);
exports.Page1 = Page1;
let Page2 = class Page2 {
};
Page2 = __decorate([
    core_1.Component({
        templateUrl: 'page2.html'
    })
], Page2);
exports.Page2 = Page2;
let AppComponent = class AppComponent {
    constructor(app, menuCtrl) {
        this.app = app;
        this.menuCtrl = menuCtrl;
        this.page1 = Page1;
        this.page2 = Page2;
        this.rootPage = Page1;
        this.menu1Active();
    }
    openPage(p) {
        // Get the <ion-nav> by id
        this.nav.setRoot(p);
    }
    menu1Active() {
        this.menuCtrl.enable(true, 'menu1');
    }
    menu2Active() {
        this.menuCtrl.enable(true, 'menu2');
    }
    menu3Active() {
        this.menuCtrl.enable(true, 'menu3');
    }
};
__decorate([
    core_1.ViewChild(__1.Nav),
    __metadata("design:type", __1.Nav)
], AppComponent.prototype, "nav", void 0);
AppComponent = __decorate([
    core_1.Component({
        templateUrl: 'main.html'
    }),
    __metadata("design:paramtypes", [__1.App, __1.MenuController])
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
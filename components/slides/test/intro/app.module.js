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
let IntroPage = class IntroPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.continueText = 'Skip';
        this.showSlide = true;
    }
    ngOnInit() {
        this.slider.initialSlide = 1;
        this.slider.paginationClickable = true;
    }
    onSlideChanged(slider) {
        console.log('Slide changed', slider);
    }
    onSlideChangeStart(slider) {
        console.log('Slide change start', slider);
        slider.isEnd ? this.continueText = 'Continue' : this.continueText = 'Skip';
    }
    onSlideMove(slider) {
        console.log('Slide move', slider);
    }
    toggleLastSlide() {
        this.showSlide = !this.showSlide;
    }
    skip() {
        this.navCtrl.push(MainPage);
    }
};
__decorate([
    core_1.ViewChild(__1.Slides),
    __metadata("design:type", __1.Slides)
], IntroPage.prototype, "slider", void 0);
IntroPage = __decorate([
    core_1.Component({
        templateUrl: 'main.html'
    }),
    __metadata("design:paramtypes", [__1.NavController])
], IntroPage);
exports.IntroPage = IntroPage;
let MainPage = class MainPage {
};
MainPage = __decorate([
    core_1.Component({
        template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Slides</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content padding>
    <h1>Another Page</h1>
  </ion-content>
  `
    })
], MainPage);
exports.MainPage = MainPage;
let AppComponent = class AppComponent {
    constructor() {
        this.root = IntroPage;
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
            IntroPage,
            MainPage
        ],
        imports: [
            platform_browser_1.BrowserModule,
            __1.IonicModule.forRoot(AppComponent)
        ],
        bootstrap: [__1.IonicApp],
        entryComponents: [
            AppComponent,
            IntroPage,
            MainPage
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
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
let MyPage = class MyPage {
    onSlideChanged() {
        let previousIndex = this.slider.getPreviousIndex();
        let currentIndex = this.slider.getActiveIndex();
        console.log('Previous index is', previousIndex, 'Current index is', currentIndex);
    }
    onSlideMove(ev) {
        console.log('Slide moving', ev);
    }
    goToPrevSlide() {
        this.slider.slidePrev();
    }
    goToNextSlide() {
        this.slider.slideNext();
    }
    goToSlide(index) {
        this.slider.slideTo(index);
    }
    getIndex() {
        let index = this.slider.getActiveIndex();
        console.log('Current Index is', index);
    }
    getLength() {
        let length = this.slider.length();
        console.log('Current Length is', length);
    }
};
__decorate([
    core_1.ViewChild('mySlider'),
    __metadata("design:type", __1.Slides)
], MyPage.prototype, "slider", void 0);
MyPage = __decorate([
    core_1.Component({
        templateUrl: 'main.html'
    })
], MyPage);
exports.MyPage = MyPage;
let AppComponent = class AppComponent {
    constructor() {
        this.root = MyPage;
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
            MyPage
        ],
        imports: [
            platform_browser_1.BrowserModule,
            __1.IonicModule.forRoot(AppComponent)
        ],
        bootstrap: [__1.IonicApp],
        entryComponents: [
            AppComponent,
            MyPage
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
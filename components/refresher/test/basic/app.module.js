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
    constructor() {
        this.items = [];
        for (var i = 0; i < 15; i++) {
            this.items.push(getRandomData());
        }
    }
    doRefresh(refresher) {
        console.info('Begin async operation');
        getAsyncData().then((newData) => {
            for (var i = 0; i < newData.length; i++) {
                this.items.unshift(newData[i]);
            }
            console.info('Finished receiving data, async operation complete');
            refresher.complete();
        });
    }
    doStart() {
        console.info('Refresher, start');
    }
    doPulling(refresher) {
        console.info('Pulling', refresher.progress);
    }
};
Page1 = __decorate([
    core_1.Component({
        templateUrl: 'main.html'
    }),
    __metadata("design:paramtypes", [])
], Page1);
exports.Page1 = Page1;
function getAsyncData() {
    // async return mock data
    return new Promise(resolve => {
        setTimeout(() => {
            let data = [];
            for (var i = 0; i < 3; i++) {
                data.push(getRandomData());
            }
            resolve(data);
        }, 1000);
    });
}
function getRandomData() {
    let i = Math.floor(Math.random() * data.length);
    return data[i];
}
const data = [
    'Fast Times at Ridgemont High',
    'Peggy Sue Got Married',
    'Raising Arizona',
    'Moonstruck',
    'Fire Birds',
    'Honeymoon in Vegas',
    'Amos & Andrew',
    'It Could Happen to You',
    'Trapped in Paradise',
    'Leaving Las Vegas',
    'The Rock',
    'Con Air',
    'Face/Off',
    'City of Angels',
    'Gone in Sixty Seconds',
    'The Family Man',
    'Windtalkers',
    'Matchstick Men',
    'National Treasure',
    'Ghost Rider',
    'Grindhouse',
    'Next',
    'Kick-Ass',
    'Drive Angry'
];
let AppComponent = class AppComponent {
    constructor() {
        this.rootPage = Page1;
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
            Page1
        ],
        imports: [
            platform_browser_1.BrowserModule,
            __1.IonicModule.forRoot(AppComponent)
        ],
        bootstrap: [__1.IonicApp],
        entryComponents: [
            AppComponent,
            Page1
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
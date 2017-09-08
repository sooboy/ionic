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
        var utcSeconds = 787523438; // Dec 15, 1994
        var d = new Date(0);
        d.setUTCSeconds(utcSeconds);
        for (var i = 0; i < 1000; i++) {
            this.items.push({
                index: i,
                date: d,
                imgSrc: `../../img/img/${images[rotateImg]}.jpg?${Math.random()}`,
            });
            rotateImg++;
            if (rotateImg === images.length)
                rotateImg = 0;
            if (i < 100) {
                utcSeconds += 237600; // 2.75 days
            }
            else {
                utcSeconds += (Math.random() * 237600) + 86400;
            }
            d = new Date(0);
            d.setUTCSeconds(utcSeconds);
        }
    }
    headerFn(record) {
        if (this.lastMonth !== record.date.getMonth()) {
            this.lastMonth = record.date.getMonth();
            return {
                date: monthNames[this.lastMonth] + ' ' + record.date.getFullYear()
            };
        }
        return null;
    }
    footerFn(_record, recordIndex, records) {
        if (recordIndex === records.length - 1) {
            return true;
        }
        else {
            if (records[recordIndex + 1].date.getMonth() !== this.lastMonth) {
                return true;
            }
        }
        return null;
    }
    ngDoCheck() {
        console.log('DoCheck');
    }
    reload() {
        window.location.reload(true);
    }
};
E2EPage = __decorate([
    core_1.Component({
        templateUrl: 'main.html',
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], E2EPage);
exports.E2EPage = E2EPage;
let AppComponent = class AppComponent {
    constructor() {
        this.root = E2EPage;
    }
};
AppComponent = __decorate([
    core_1.Component({
        template: '<ion-nav [root]="root"></ion-nav>',
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
            AppComponent,
            E2EPage
        ]
    })
], AppModule);
exports.AppModule = AppModule;
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const images = [
    'bandit',
    'batmobile',
    'blues-brothers',
    'bueller',
    'delorean',
    'eleanor',
    'general-lee',
    'ghostbusters',
    'knight-rider',
    'mirth-mobile',
];
let rotateImg = 0;
//# sourceMappingURL=app.module.js.map
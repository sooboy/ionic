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
let E2EPage = E2EPage_1 = class E2EPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [];
        this.webview = '';
        this.counter = 0;
    }
    addItems() {
        if (this.items.length === 0) {
            for (var i = 0; i < 200; i++) {
                this.addItem();
            }
        }
    }
    headerFn(_record, index, _records) {
        if (index % 4 === 0) {
            return index + ' is divisible by 4';
        }
        return null;
    }
    pushPage() {
        this.navCtrl.push(E2EPage_1);
    }
    addItem() {
        this.items.push({
            value: this.counter,
            someMethod: function () {
                return '!!';
            }
        });
        this.counter++;
    }
    addRandomItem() {
        const index = Math.floor(Math.random() * this.items.length);
        console.log('Adding to index: ', index);
        this.items.splice(index, 0, {
            value: Math.floor(Math.random() * 10000),
            someMethod: function () {
                return '!!';
            }
        });
    }
    changeItem() {
        const index = Math.floor(Math.random() * this.items.length);
        console.log('Change to index: ', index);
        this.items[index] = { value: Math.floor(Math.random() * 10000), someMethod: () => '!!' };
    }
    trackByFn(_index, item) {
        return item.value;
    }
};
E2EPage = E2EPage_1 = __decorate([
    core_1.Component({
        templateUrl: 'main.html'
    }),
    __metadata("design:paramtypes", [__1.NavController])
], E2EPage);
exports.E2EPage = E2EPage;
let AppComponent = class AppComponent {
    constructor() {
        this.root = E2EPage;
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
var E2EPage_1;
//# sourceMappingURL=app.module.js.map
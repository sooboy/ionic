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
const __1 = require("../../../..");
let E2EPage = class E2EPage {
    constructor() {
        this.counter = 1;
        this.items = [];
        this.enabled = true;
        for (let i = 0; i < 100; i++) {
            this.addItem();
        }
    }
    addItem() {
        this.items.push(this.counter);
        this.counter++;
    }
    doInfinite() {
        console.log('Begin async operation');
        return getAsyncData().then(newData => {
            for (var i = 0; i < newData.length; i++) {
                this.items.push(this.items.length);
            }
            console.log('Finished receiving data, async operation complete');
            if (this.items.length > 900) {
                this.enabled = false;
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
let E2EApp = class E2EApp {
    constructor() {
        this.root = E2EPage;
    }
};
E2EApp = __decorate([
    core_1.Component({
        template: '<ion-nav [root]="root"></ion-nav>'
    })
], E2EApp);
exports.E2EApp = E2EApp;
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            E2EApp,
            E2EPage
        ],
        imports: [
            __1.IonicModule.forRoot(E2EApp)
        ],
        bootstrap: [__1.IonicApp],
        entryComponents: [
            E2EApp,
            E2EPage
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
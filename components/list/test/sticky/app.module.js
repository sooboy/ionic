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
        this.groups = [];
        var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        for (var i = 0; i < letters.length; i++) {
            var group = [];
            for (var j = 0; j < 10; j++) {
                group.push({
                    title: letters[i] + j
                });
            }
            this.groups.push({
                title: letters[i].toUpperCase(),
                items: group
            });
        }
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
            AppComponent,
            E2EPage
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const __1 = require("../../../..");
let E2EPage = class E2EPage {
    constructor() {
        this.stackedCtrl = new forms_1.FormControl('1994-12-15T13:47:20.789');
        this.floatingCtrl = new forms_1.FormControl('1995-04-15');
        this.floatingCtrl2 = new forms_1.FormControl('');
        this.fixedCtrl = new forms_1.FormControl({ value: '2002-09-23T15:03:46.789', disabled: true });
        this.inlineCtrl = new forms_1.FormControl({ value: '2005-06-17T11:06Z', disabled: true });
        this.datetimeForm = new forms_1.FormGroup({
            'stacked': this.stackedCtrl,
            'floating': this.floatingCtrl,
            'floating2': this.floatingCtrl2,
            'fixed': this.fixedCtrl,
            'inline': this.inlineCtrl
        });
    }
};
E2EPage = __decorate([
    core_1.Component({
        templateUrl: 'main.html'
    })
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
            E2EPage
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
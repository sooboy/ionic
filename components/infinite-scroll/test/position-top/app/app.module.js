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
const __1 = require("../../../../..");
const app_component_1 = require("./app.component");
const root_page_1 = require("../pages/root-page/root-page");
const page_two_1 = require("../pages/page-two/page-two");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            root_page_1.RootPage,
            page_two_1.PageTwo
        ],
        imports: [
            platform_browser_1.BrowserModule,
            __1.IonicModule.forRoot(app_component_1.AppComponent)
        ],
        bootstrap: [__1.IonicApp],
        entryComponents: [
            root_page_1.RootPage,
            page_two_1.PageTwo
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
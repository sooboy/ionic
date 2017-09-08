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
const modal_page_module_1 = require("../pages/modal-page/modal-page.module");
const page_one_module_1 = require("../pages/page-one/page-one.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            __1.IonicModule.forRoot(app_component_1.AppComponent, {}),
            modal_page_module_1.ModalPageModule,
            page_one_module_1.PageOneModule
        ],
        bootstrap: [__1.IonicApp]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
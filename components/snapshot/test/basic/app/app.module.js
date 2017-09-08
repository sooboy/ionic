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
const _1 = require("../../../../../");
const app_component_1 = require("./app.component");
const components_module_1 = require("../pages/components/components.module");
const assistive_touch_module_1 = require("../components/assistive-touch/assistive-touch.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            _1.IonicModule.forRoot(app_component_1.AppComponent, {}),
            components_module_1.ComponentsModule,
            assistive_touch_module_1.AssistiveTouchComponentModule
        ],
        bootstrap: [_1.IonicApp]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
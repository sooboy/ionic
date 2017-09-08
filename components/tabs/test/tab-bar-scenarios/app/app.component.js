"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const root_page_1 = require("../pages/root-page/root-page");
let AppComponent = class AppComponent {
    constructor() {
        this.root = root_page_1.RootPage;
    }
};
AppComponent = __decorate([
    core_1.Component({
        templateUrl: 'app.component.html',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [
            `
    ion-tabs {
      margin-bottom: 20px;
      contain: none;
    }
    `,
            `
    ion-tabs,
    ion-tabs ion-tabbar {
      position: relative;
      top: auto;
      height: auto;
      visibility: visible;
      opacity: 1;
    }
    `
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
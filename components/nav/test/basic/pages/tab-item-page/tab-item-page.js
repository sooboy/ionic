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
const __1 = require("../../../../../..");
let TabItemPage = class TabItemPage {
    constructor() {
        this.items = [];
    }
};
TabItemPage = __decorate([
    __1.IonicPage({
        name: 'tab-item-page'
    }),
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Tab Item</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <h2>Hello moto</h2>
    </ion-content>
    `
    }),
    __metadata("design:paramtypes", [])
], TabItemPage);
exports.TabItemPage = TabItemPage;
//# sourceMappingURL=tab-item-page.js.map
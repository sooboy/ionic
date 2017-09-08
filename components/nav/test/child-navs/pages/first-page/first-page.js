"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const __1 = require("../../../../../..");
let FirstPage = class FirstPage {
    constructor() {
        this.root = 'SecondPage';
    }
};
FirstPage = __decorate([
    __1.IonicPage(),
    core_1.Component({
        template: `
  <ion-header>
    <ion-navbar>
      <ion-title>
        First Page Comp
      </ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content>
    <h3>Sub Header First Page</h3>
    <ion-nav [root]="root"></ion-nav>
  </ion-content>
  `
    })
], FirstPage);
exports.FirstPage = FirstPage;
//# sourceMappingURL=first-page.js.map
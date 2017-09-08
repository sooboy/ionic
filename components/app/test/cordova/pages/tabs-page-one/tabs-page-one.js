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
let TabsPageOne = class TabsPageOne {
};
TabsPageOne = __decorate([
    __1.IonicPage({
        name: 'tabs-page-one'
    }),
    core_1.Component({
        template: `
  <ion-header>
    <ion-navbar>
      <ion-title>This is a tab page</ion-title>
      <button ion-button menuToggle>
        <ion-icon name="menu"></ion-icon>
      </button>
      <ion-buttons end>
        <button ion-button>
          <ion-icon name="funnel"></ion-icon>
        </button>
      </ion-buttons>
    </ion-navbar>
  </ion-header>
  <ion-content padding>
    <p>The toolbar should have status bar padding.</p>
  </ion-content>
  `
    })
], TabsPageOne);
exports.TabsPageOne = TabsPageOne;
//# sourceMappingURL=tabs-page-one.js.map
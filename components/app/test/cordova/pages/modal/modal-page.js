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
let ModalPage = class ModalPage {
    constructor(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    dismissModal() {
        this.viewCtrl.dismiss();
    }
};
ModalPage = __decorate([
    __1.IonicPage({
        name: 'modal-page'
    }),
    core_1.Component({
        template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>This is a modal</ion-title>
      <ion-buttons left>
        <button ion-button icon-only (click)="dismissModal()" class="e2eCordovaCloseModal">
          <ion-icon name="close"></ion-icon>
        </button>
      </ion-buttons>
      <ion-buttons end>
        <button ion-button icon-only>
          <ion-icon name="funnel"></ion-icon>
        </button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content padding>
    <p>The modal toolbar should have status bar padding.</p>
    <button ion-button block (click)="dismissModal()">Close modal</button>
  </ion-content>
  `
    }),
    __metadata("design:paramtypes", [__1.ViewController])
], ModalPage);
exports.ModalPage = ModalPage;
//# sourceMappingURL=modal-page.js.map
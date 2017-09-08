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
    constructor(viewCtrl, app) {
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.items = [];
        for (var i = 1; i <= 10; i++) {
            this.items.push(i);
        }
    }
    dismiss() {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss();
    }
    appNavPop() {
        this.app.navPop();
    }
};
ModalPage = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'modal-page.html'
    }),
    __metadata("design:paramtypes", [__1.ViewController, __1.App])
], ModalPage);
exports.ModalPage = ModalPage;
//# sourceMappingURL=modal-page.js.map
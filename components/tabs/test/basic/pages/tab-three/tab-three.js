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
let TabThree = class TabThree {
    constructor(alertCtrl, modalCtrl, tabs, app) {
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.tabs = tabs;
        this.app = app;
        this.items = [];
        for (var i = 0; i < 100; i++) {
            this.items.push(i);
        }
    }
    presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Alert Title!',
            buttons: ['Dismiss']
        });
        alert.present();
    }
    presentModal() {
        this.modalCtrl.create('ModalPage').present();
    }
    selectPrevious() {
        this.tabs.select(this.tabs.previousTab());
    }
    appNavPop() {
        this.app.navPop();
    }
};
TabThree = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'tab-three.html'
    }),
    __metadata("design:paramtypes", [__1.AlertController, __1.ModalController, __1.Tabs, __1.App])
], TabThree);
exports.TabThree = TabThree;
//# sourceMappingURL=tab-three.js.map
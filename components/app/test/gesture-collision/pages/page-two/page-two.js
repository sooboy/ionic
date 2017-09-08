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
let PageTwo = class PageTwo {
    constructor(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'New Friend!',
            message: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            cssClass: 'my-alert',
            buttons: ['Ok']
        });
        alert.present();
    }
    goToPageTwo() {
        this.navCtrl.push('page-two');
    }
    doRefresh(refresher) {
        setTimeout(() => {
            refresher.complete();
        }, 1000);
    }
};
PageTwo = __decorate([
    __1.IonicPage({
        name: 'page-two'
    }),
    core_1.Component({
        templateUrl: 'page-two.html'
    }),
    __metadata("design:paramtypes", [__1.NavController, __1.AlertController])
], PageTwo);
exports.PageTwo = PageTwo;
//# sourceMappingURL=page-two.js.map
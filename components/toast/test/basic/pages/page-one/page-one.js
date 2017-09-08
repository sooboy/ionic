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
let PageOne = class PageOne {
    constructor(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
    showToast() {
        const toast = this.toastCtrl.create({
            message: 'User was created successfully'
        });
        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });
        toast.present();
        setTimeout(() => {
            this.navCtrl.push('PageTwo');
        }, 1000);
        setTimeout(() => {
            toast.dismiss();
        }, 2000);
    }
    showLongToast() {
        const toast = this.toastCtrl.create()
            .setMessage('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.')
            .setDuration(5000)
            .setCssClass('custom-class my-toast');
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    }
    showDismissDurationToast() {
        const toast = this.toastCtrl.create({
            message: 'I am dismissed after 1.5 seconds',
            duration: 1500
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    }
    showToastWithCloseButton(positionString) {
        const toast = this.toastCtrl.create({
            message: 'Your internet connection appears to be offline. Data integrity is not gauranteed.',
            showCloseButton: true,
            closeButtonText: 'Ok',
            position: positionString
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    }
    showDismissPageChangeToast() {
        const toast = this.toastCtrl.create({
            message: 'I am dismissed on page change',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
        setTimeout(() => {
            this.navCtrl.push('PageTwo');
        }, 1000);
    }
    dismissHandler() {
        console.info('Toast onDidDismiss()');
    }
};
PageOne = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'page-one.html'
    }),
    __metadata("design:paramtypes", [__1.NavController, __1.ToastController])
], PageOne);
exports.PageOne = PageOne;
//# sourceMappingURL=page-one.js.map
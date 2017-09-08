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
    constructor(navCtrl, app, actionSheetCtrl, toastCtrl, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.items = [];
        for (let i = 0; i < 50; i++) {
            this.items.push({
                value: (i + 1)
            });
        }
        this.called = {
            ionViewCanEnter: 0,
            ionViewCanLeave: 0,
            ionViewWillLoad: 0,
            ionViewDidLoad: 0,
            ionViewWillEnter: 0,
            ionViewDidEnter: 0,
            ionViewWillLeave: 0,
            ionViewDidLeave: 0
        };
    }
    push() {
        this.toastCtrl.create({
            message: 'Will push a page in a moment...',
            duration: 1000,
        }).present();
        setTimeout(() => {
            this.navCtrl.push('PageThree', {
                id: 8675309,
                myData: [1, 2, 3, 4]
            });
        }, 500);
    }
    dismiss() {
        this.navCtrl.parent.pop();
    }
    ionViewCanEnter() {
        console.log('PageTwo ionViewCanEnter fired');
        this.called.ionViewCanEnter++;
        return true;
    }
    ionViewCanLeave() {
        console.log('PageTwo ionViewCanLeave fired');
        this.called.ionViewCanLeave++;
        return true;
    }
    ionViewWillLoad() {
        console.log('PageTwo ionViewWillLoad fired');
        this.called.ionViewWillLoad++;
    }
    ionViewDidLoad() {
        console.log('PageTwo ionViewDidLoad fired');
        this.called.ionViewDidLoad++;
    }
    ionViewWillEnter() {
        console.log('PageTwo ionViewWillEnter fired');
        this.called.ionViewWillEnter++;
    }
    ionViewDidEnter() {
        console.log('PageTwo ionViewDidEnter fired');
        let alert = this.alertCtrl.create({
            title: 'Test',
            buttons: [
                {
                    text: 'Something',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
        this.called.ionViewDidEnter++;
    }
    ionViewWillLeave() {
        console.log('PageTwo ionViewWillLeave fired');
        this.called.ionViewWillLeave++;
    }
    ionViewDidLeave() {
        console.log('PageTwo ionViewDidLeave fired');
        this.called.ionViewDidLeave++;
    }
    openModal() {
        this.modalCtrl.create('ContactUs').present();
    }
    openActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'Archive',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Go To Root',
                    handler: () => {
                        actionSheet.dismiss().then(() => {
                            this.navCtrl.parent.pop();
                        });
                        // by default an alert will dismiss itself
                        // however, we don't want to use the default
                        // but rather fire off our own pop navigation
                        // return false so it doesn't pop automatically
                        return false;
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('cancel this clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }
};
PageTwo = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'page-two.html'
    }),
    __metadata("design:paramtypes", [__1.NavController,
        __1.App,
        __1.ActionSheetController,
        __1.ToastController,
        __1.AlertController,
        __1.ModalController])
], PageTwo);
exports.PageTwo = PageTwo;
//# sourceMappingURL=page-two.js.map
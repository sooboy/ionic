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
const modal_page_1 = require("../modal-page/modal-page");
let PageOne = class PageOne {
    constructor(actionSheetCtrl, alertCtrl, modalCtrl, plt) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.plt = plt;
        this.result = '';
    }
    presentActionSheet1() {
        this.result = '';
        this.actionSheetCtrl.create()
            .setTitle('Albums')
            .addButton({
            text: 'Delete',
            role: 'destructive',
            icon: 'trash',
            handler: () => {
                console.log('Delete clicked');
                this.result = 'Deleted';
            }
        })
            .addButton({
            text: 'Share',
            icon: 'share',
            handler: () => {
                console.log('Share clicked');
                this.result = 'Shared';
            }
        })
            .addButton({
            text: 'Play (open modal)',
            icon: 'arrow-dropright-circle',
            handler: () => {
                this.result = 'Play (open modal)';
                let modal = this.modalCtrl.create(modal_page_1.ModalPage);
                modal.present();
                // returning false does not allow the actionsheet to be closed
                return false;
            }
        })
            .addButton({
            text: 'Favorite',
            icon: !this.plt.is('ios') ? 'heart' : null,
            handler: () => {
                console.log('Favorite clicked');
                this.result = 'Favorited';
            }
        })
            .addButton({
            text: 'Cancel',
            role: 'cancel',
            icon: !this.plt.is('ios') ? 'close' : null,
            handler: () => {
                console.log('Cancel clicked');
                this.result = 'Canceled';
            }
        })
            .present();
    }
    presentActionSheet2() {
        this.result = '';
        let actionSheet = this.actionSheetCtrl.create({
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Archive',
                    handler: () => {
                        console.log('Archive clicked');
                        this.result = 'Archived';
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('cancel this clicked');
                        this.result = 'Canceled';
                    }
                },
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: () => {
                        console.log('Destructive clicked');
                        this.result = 'Destructive';
                    }
                }
            ],
            cssClass: 'my-action-sheet another-action-sheet-class'
        });
        actionSheet.present(actionSheet);
    }
    presentActionSheet3() {
        this.result = '';
        let actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Open Alert',
                    handler: () => {
                        this.result = 'Opened alert';
                        let alert = this.alertCtrl.create();
                        alert.setTitle('Alert!');
                        alert.setMessage('Alert opened from an action sheet');
                        alert.addButton({
                            text: 'Cancel',
                            role: 'cancel',
                            handler: () => {
                                this.result = 'pressed Cancel button in alert from action sheet';
                            }
                        });
                        alert.addButton({
                            text: 'Okay',
                            handler: () => {
                                this.result = 'pressed Okay button in alert from action sheet';
                            }
                        });
                        alert.present().then(() => {
                            this.result = 'Alert from action sheet opened';
                        });
                        // do not close the action sheet yet
                        return false;
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        this.result = 'Canceled';
                    }
                }
            ]
        });
        actionSheet.present();
    }
};
PageOne = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'page-one.html'
    }),
    __metadata("design:paramtypes", [__1.ActionSheetController, __1.AlertController, __1.ModalController, __1.Platform])
], PageOne);
exports.PageOne = PageOne;
//# sourceMappingURL=page-one.js.map
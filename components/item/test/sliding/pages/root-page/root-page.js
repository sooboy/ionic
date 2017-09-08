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
const _1 = require("../../../../../../");
let RootPage = class RootPage {
    constructor(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.items = [];
        this.slidingEnabled = true;
        this.moreText = 'Dynamic More';
        this.archiveText = 'Dynamic Archive';
        this.showOptions = false;
        for (let x = 0; x < 5; x++) {
            this.items.push(x);
        }
    }
    toggleSliding() {
        this.slidingEnabled = !this.slidingEnabled;
    }
    changeDynamic() {
        if (this.moreText.includes('Dynamic')) {
            this.moreText = 'Changed More';
            this.archiveText = 'Changed Archive';
            this.showOptions = true;
        }
        else {
            this.moreText = 'Dynamic More';
            this.archiveText = 'Dynamic Archive';
            this.showOptions = false;
        }
    }
    closeOpened() {
        this.list.closeSlidingItems();
    }
    noclose(item) {
        console.log('no close', item);
    }
    unread(item) {
        if (item) {
            item.close();
        }
        console.log('UNREAD', item);
    }
    didClick(_) {
        console.log('Clicked, ion-item');
        let alert = this.alertCtrl.create({
            title: 'Clicked ion-item!',
            buttons: ['Ok']
        });
        alert.present();
    }
    archive(item) {
        console.log('Archive, ion-item-options button', item);
        let alert = this.alertCtrl.create({
            title: 'Archived!',
            buttons: [{
                    text: 'Ok',
                    handler: () => {
                        item.close();
                    }
                }]
        });
        alert.present();
    }
    del(item) {
        console.log('Delete ion-item-options button', item);
        let alert = this.alertCtrl.create({
            title: 'Deleted!',
            buttons: [{
                    text: 'Ok',
                    handler: () => {
                        item.close();
                    }
                }]
        });
        alert.present();
    }
    download(item) {
        item.setElementClass('downloading', true);
        setTimeout(() => {
            const toast = this.toastCtrl.create({
                message: 'Item was downloaded!'
            });
            toast.present();
            item.setElementClass('downloading', false);
            item.close();
            setTimeout(() => {
                toast.dismiss();
            }, 2000);
        }, 1500);
    }
    reload() {
        window.location.reload();
    }
};
__decorate([
    core_1.ViewChild('myList', { read: _1.List }),
    __metadata("design:type", _1.List)
], RootPage.prototype, "list", void 0);
RootPage = __decorate([
    core_1.Component({
        templateUrl: 'root-page.html'
    }),
    __metadata("design:paramtypes", [_1.AlertController, _1.ToastController])
], RootPage);
exports.RootPage = RootPage;
//# sourceMappingURL=root-page.js.map
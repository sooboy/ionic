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
let FullPage = class FullPage {
    constructor(navCtrl, viewCtrl, app, alertCtrl, params) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.params = params;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad, FullPage', this.viewCtrl.id);
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter, FullPage', this.viewCtrl.id);
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter, FullPage', this.viewCtrl.id);
    }
    ionViewWillLeave() {
        console.log('ionViewWillLeave, FullPage', this.viewCtrl.id);
    }
    ionViewDidLeave() {
        console.log('ionViewDidLeave, FullPage', this.viewCtrl.id);
    }
    ionViewWillUnload() {
        console.log('ionViewWillUnload, FullPage', this.viewCtrl.id);
    }
    setPages() {
        let items = [
            { page: 'first-page' },
            { page: 'primary-header-page' }
        ];
        this.navCtrl.setPages(items);
    }
    pushPrimaryHeaderPage() {
        this.navCtrl.push('primary-header-page');
    }
    pushAnother() {
        this.navCtrl.push('another-page');
    }
    pushFirstPage() {
        this.navCtrl.push('first-page');
    }
    presentAlert() {
        let alert = this.alertCtrl.create();
        alert.setTitle('Hello Alert');
        alert.setMessage('Dismiss this alert, then pop one page');
        alert.addButton({
            text: 'Dismiss',
            role: 'cancel',
            handler: () => {
                // overlays are added and removed from the app root's portal
                // in the example below, alert.dismiss() dismisses the alert
                // from the app root portal, and once it's done transitioning out,
                // this the active page is popped from the nav
                alert.dismiss().then(() => {
                    this.navCtrl.pop();
                });
                // by default an alert will dismiss itself
                // however, we don't want to use the default
                // but rather fire off our own pop navigation
                // return false so it doesn't pop automatically
                return false;
            }
        });
        alert.present();
    }
};
FullPage = __decorate([
    __1.IonicPage({
        name: 'full-page'
    }),
    core_1.Component({
        template: `
    <ion-content padding>
      <h1>Full page</h1>
      <p>This page does not have a nav bar!</p>
      <p><button ion-button (click)="navCtrl.pop()">Pop</button></p>
      <p><button ion-button class="e2eFrom2To3" (click)="pushPrimaryHeaderPage()">Push to PrimaryHeaderPage</button></p>
      <p><button ion-button (click)="pushAnother()">Push to AnotherPage</button></p>
      <p><button ion-button (click)="pushFirstPage()">Push to FirstPage</button></p>
      <p><button ion-button class="e2eFrom2To1" navPop>Pop with NavPop (Go back to 1st)</button></p>
      <p><button ion-button (click)="setPages()">setPages() (Go to PrimaryHeaderPage, FirstPage 1st in history)</button></p>
      <p><button ion-button (click)="presentAlert()">Present Alert</button></p>
    </ion-content>
  `
    }),
    __metadata("design:paramtypes", [__1.NavController,
        __1.ViewController,
        __1.App,
        __1.AlertController,
        __1.NavParams])
], FullPage);
exports.FullPage = FullPage;
//# sourceMappingURL=full-page.js.map
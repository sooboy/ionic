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
let PrimaryHeaderPage = class PrimaryHeaderPage {
    constructor(navCtrl, alertCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad, PrimaryHeaderPage', this.viewCtrl.id);
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter, PrimaryHeaderPage', this.viewCtrl.id);
        this.viewCtrl.setBackButtonText('Previous');
        this.subheader = 'I\'m a sub header!';
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter, PrimaryHeaderPage', this.viewCtrl.id);
    }
    ionViewWillLeave() {
        console.log('ionViewWillLeave, PrimaryHeaderPage', this.viewCtrl.id);
    }
    ionViewDidLeave() {
        console.log('ionViewDidLeave, PrimaryHeaderPage', this.viewCtrl.id);
    }
    ionViewWillUnload() {
        console.log('ionViewWillUnload, PrimaryHeaderPage', this.viewCtrl.id);
    }
    pushAnother() {
        this.navCtrl.push('another-page');
    }
    pushFullPage() {
        this.navCtrl.push('full-page', { id: 8675309, myData: [1, 2, 3, 4] });
    }
    insert() {
        this.navCtrl.insert(2, 'first-page');
    }
    removeSecond() {
        this.navCtrl.remove(1);
    }
    setRoot() {
        this.navCtrl.setRoot('another-page');
    }
    presentAlert() {
        let alert = this.alertCtrl.create();
        alert.setTitle('Hello Alert');
        alert.addButton({ text: 'Dismiss', role: 'cancel', });
        alert.present();
    }
};
PrimaryHeaderPage = __decorate([
    __1.IonicPage({
        name: 'primary-header-page'
    }),
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar color="primary">
        <ion-title>Primary Color Page Header</ion-title>
        <ion-buttons end>
          <button ion-button>S1g</button>
        </ion-buttons>
      </ion-navbar>
      <ion-toolbar>
        <ion-title>{{subheader}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding fullscreen>
      <p><button ion-button class="e2eFrom3To2" (click)="navCtrl.pop()">Pop</button></p>
      <p><button ion-button (click)="pushAnother()">Push to AnotherPage</button></p>
      <p><button ion-button (click)="pushFullPage()">Push to FullPage</button></p>
      <p><button ion-button (click)="setRoot()">setRoot(AnotherPage)</button></p>
      <p><button ion-button (click)="navCtrl.popToRoot()">Pop to root</button></p>
      <p><button ion-button id="insert" (click)="insert()">Insert first page into history before this</button></p>
      <p><button ion-button id="remove" (click)="removeSecond()">Remove second page in history</button></p>
      <div class="yellow"><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div></div>

      <button ion-button ion-fixed no-margin color="danger" (click)="presentAlert()">fixed button (alert)</button>
      <div ion-fixed style="position: absolute; pointer-events: none; top:0; bottom:0; right:0; width:50%; background: rgba(0,0,0,0.5);"></div>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        I'm a sub footer!
      </ion-toolbar>
      <ion-toolbar>
        <ion-title>Footer</ion-title>
      </ion-toolbar>
    </ion-footer>
  `
    }),
    __metadata("design:paramtypes", [__1.NavController,
        __1.AlertController,
        __1.ViewController])
], PrimaryHeaderPage);
exports.PrimaryHeaderPage = PrimaryHeaderPage;
//# sourceMappingURL=primary-header-page.js.map
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
let AnotherPage = class AnotherPage {
    constructor(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.bbHideToggleVal = false;
        this.bbCount = 0;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad, AnotherPage', this.viewCtrl.id);
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter, AnotherPage', this.viewCtrl.id);
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter, AnotherPage', this.viewCtrl.id);
    }
    ionViewWillLeave() {
        console.log('ionViewWillLeave, AnotherPage', this.viewCtrl.id);
    }
    ionViewDidLeave() {
        console.log('ionViewDidLeave, AnotherPage', this.viewCtrl.id);
    }
    ionViewWillUnload() {
        console.log('ionViewWillUnload, AnotherPage', this.viewCtrl.id);
    }
    pushFullPage() {
        this.navCtrl.push('full-page');
    }
    pushPrimaryHeaderPage() {
        this.navCtrl.push('primary-header-page');
    }
    pushFirstPage() {
        this.navCtrl.push('first-page');
    }
    setRoot() {
        this.navCtrl.setRoot('first-page');
    }
    toggleBackButton() {
        this.bbHideToggleVal = !this.bbHideToggleVal;
        this.viewCtrl.showBackButton(this.bbHideToggleVal);
    }
    setBackButtonText() {
        let backButtonText = 'Messages';
        if (this.bbCount > 0) {
            backButtonText += ` (${this.bbCount})`;
        }
        this.viewCtrl.setBackButtonText(backButtonText);
        ++this.bbCount;
    }
};
AnotherPage = __decorate([
    __1.IonicPage({
        name: 'another-page'
    }),
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar hideBackButton>
        <ion-title>Another Page Header</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
      <ion-toolbar>
        I'm a sub header in the content!
      </ion-toolbar>
      <ion-list>
        <ion-item>
          <ion-label>Text Input</ion-label>
          <ion-textarea></ion-textarea>
        </ion-item>
        <ion-item>Back button hidden w/ <code>ion-navbar hideBackButton</code></ion-item>
        <button ion-item (click)="navCtrl.pop()">Pop</button>
        <button ion-item (click)="pushFullPage()">Push to FullPage</button>
        <button ion-item (click)="pushPrimaryHeaderPage()">Push to PrimaryHeaderPage</button>
        <button ion-item (click)="pushFirstPage()">Push to FirstPage</button>
        <button ion-item (click)="setRoot()">setRoot(FirstPage)</button>
        <button ion-item (click)="toggleBackButton()">Toggle hideBackButton</button>
        <button ion-item (click)="setBackButtonText()">Set Back Button Text</button>
        <div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div>
      </ion-list>
      <ion-toolbar>
        I'm a sub footer in the content!
      </ion-toolbar>
      <ion-toolbar>
        And I'm a sub footer in the content too!
      </ion-toolbar>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        Another Page Footer
      </ion-toolbar>
    </ion-footer>
  `
    }),
    __metadata("design:paramtypes", [__1.NavController,
        __1.ViewController])
], AnotherPage);
exports.AnotherPage = AnotherPage;
//# sourceMappingURL=another-page.js.map
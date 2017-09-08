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
let TabsPage = class TabsPage {
    constructor(navCtrl, modalCtrl, params, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.alertCtrl = alertCtrl;
        this.showTab = false;
        this.rootPage1 = 'tab1-page1';
        this.rootPage2 = 'tab2-page1';
        this.rootPage3 = 'tab3-page1';
    }
    ngAfterViewInit() {
        this.tabs.ionChange.subscribe((tab) => {
            console.log('tabs.ionChange.subscribe', tab.index);
        });
    }
    onTabChange(tab) {
        this.showTab = tab.index !== 1;
        // wired up through the template
        // <ion-tabs (ionChange)="onTabChange()">
        console.log('onTabChange');
    }
    logout() {
        this.navCtrl.pop();
    }
    ionViewCanLeave() {
        return new Promise((resolve, reject) => {
            let alert = this.alertCtrl.create({
                title: 'Log out',
                subTitle: 'Are you sure you want to log out?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                            reject();
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            alert.dismiss().then(() => {
                                resolve();
                            });
                            return false;
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    chat() {
        console.log('Chat clicked!');
        this.modalCtrl.create('modal-chat-page').present();
    }
    ionViewWillEnter() {
        console.log('TabsPage, ionViewWillEnter');
    }
    ionViewDidEnter() {
        console.log('TabsPage, ionViewDidEnter');
    }
    ionViewWillLeave() {
        console.log('TabsPage, ionViewWillLeave');
    }
    ionViewDidLeave() {
        console.log('TabsPage, ionViewDidLeave');
    }
    ionViewWillUnload() {
        console.log('TabsPage, ionViewWillUnload');
    }
};
__decorate([
    core_1.ViewChild(__1.Tabs),
    __metadata("design:type", __1.Tabs)
], TabsPage.prototype, "tabs", void 0);
TabsPage = __decorate([
    __1.IonicPage({
        name: 'tabs-page'
    }),
    core_1.Component({
        templateUrl: './tabs.html'
    }),
    __metadata("design:paramtypes", [__1.NavController,
        __1.ModalController,
        __1.NavParams,
        __1.AlertController])
], TabsPage);
exports.TabsPage = TabsPage;
//# sourceMappingURL=tabs.js.map
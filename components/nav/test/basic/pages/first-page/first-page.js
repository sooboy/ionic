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
const my_component_1 = require("./my-component");
let FirstPage = FirstPage_1 = class FirstPage {
    constructor(navCtrl, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.pushPage = 'another-page';
        this.firstPage = FirstPage_1;
        this.title = 'First Page';
        this.pages = [];
        this.canLeave = true;
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
    ionViewWillLoad() {
        console.log('ionViewWillLoad, FirstPage', this.viewCtrl.id);
        this.called.ionViewWillLoad++;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad, FirstPage');
        for (var i = 1; i <= 50; i++) {
            this.pages.push(i);
        }
        if (!this.myCmp || !this.content || !this.myCmp.label) {
            throw new Error('children are not loaded');
        }
        this.myCmp.value = '👍 self test passed!';
        this.myCmp.label.value = '👍 children test passed!';
        this.called.ionViewDidLoad++;
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter, FirstPage', this.viewCtrl.id);
        this.called.ionViewWillEnter++;
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter, FirstPage', this.viewCtrl.id);
        this.called.ionViewDidEnter++;
    }
    ionViewWillLeave() {
        console.log('ionViewWillLeave, FirstPage', this.viewCtrl.id);
        this.called.ionViewWillLeave++;
    }
    ionViewDidLeave() {
        console.log('ionViewDidLeave, FirstPage', this.viewCtrl.id);
        this.called.ionViewDidLeave++;
    }
    ionViewWillUnload() {
        console.log('ionViewWillUnload, FirstPage', this.viewCtrl.id);
        this.called.ionViewWillUnload++;
    }
    ionViewCanLeave() {
        this.called.ionViewCanLeave++;
        if (this.canLeave) {
            return true;
        }
        let alert = this.alertCtrl.create();
        alert.setMessage('You can check-out any time you like, but you can never leave.');
        alert.addButton({ text: 'Umm, ok', role: 'cancel', });
        alert.present();
        return false;
    }
    ionViewCanEnter() {
        this.called.ionViewCanEnter++;
        return true;
    }
    setPages() {
        let items = [
            { page: 'primary-header-page' }
        ];
        this.navCtrl.setPages(items);
    }
    setRoot() {
        this.navCtrl.setRoot('primary-header-page');
    }
    pushPrimaryHeaderPage() {
        this.navCtrl.push('primary-header-page', null, {
            animate: true,
            animation: 'ios-transition'
        }).then(() => { }, () => { });
    }
    pushRedirect() {
        this.navCtrl.push('redirect-page').then(() => { }, () => { });
    }
    pushFullPage() {
        this.navCtrl.push('full-page', { id: 8675309, myData: [1, 2, 3, 4] }, {
            animate: true,
            animation: 'md-transition'
        });
    }
    pushAnother() {
        this.navCtrl.push('another-page', null, {
            animate: true,
            animation: 'wp-transition'
        });
    }
    pushTabsPage() {
        this.navCtrl.push('tabs');
    }
    quickPush() {
        this.navCtrl.push('another-page');
        setTimeout(() => {
            this.navCtrl.push('primary-header-page');
        }, 150);
    }
    quickPop() {
        this.navCtrl.push('another-page');
        setTimeout(() => {
            this.navCtrl.remove(1, 1);
        }, 250);
    }
    pop() {
        this.navCtrl.pop();
    }
    viewDismiss() {
        this.viewCtrl.dismiss();
    }
    reload() {
        window.location.reload();
    }
    scrollToTop() {
        this.content.scrollToTop();
    }
    scrollToBottom() {
        this.content.scrollToBottom(1000);
    }
};
__decorate([
    core_1.ViewChild(__1.Content),
    __metadata("design:type", __1.Content)
], FirstPage.prototype, "content", void 0);
__decorate([
    core_1.ViewChild(my_component_1.MyCmpTest),
    __metadata("design:type", my_component_1.MyCmpTest)
], FirstPage.prototype, "myCmp", void 0);
FirstPage = FirstPage_1 = __decorate([
    __1.IonicPage({
        name: 'first-page'
    }),
    core_1.Component({
        templateUrl: 'first-page.html'
    }),
    __metadata("design:paramtypes", [__1.NavController,
        __1.ViewController,
        __1.AlertController])
], FirstPage);
exports.FirstPage = FirstPage;
var FirstPage_1;
//# sourceMappingURL=first-page.js.map
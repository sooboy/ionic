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
let PageOne = PageOne_1 = class PageOne {
    constructor(navCtrl, modalCtrl, toastCtrl, config, plt) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        console.log('platforms', plt.platforms());
        console.log('mode', config.get('mode'));
        console.log('isRTL', plt.isRTL);
        console.log('core', plt.is('core'));
        console.log('cordova', plt.is('cordova'));
        console.log('mobile', plt.is('mobile'));
        console.log('mobileweb', plt.is('mobileweb'));
        console.log('ipad', plt.is('ipad'));
        console.log('iphone', plt.is('iphone'));
        console.log('phablet', plt.is('phablet'));
        console.log('tablet', plt.is('tablet'));
        console.log('ios', plt.is('ios'));
        console.log('android', plt.is('android'));
        console.log('windows phone', plt.is('windows'));
        plt.ready().then((readySource) => {
            console.log('platform.ready, readySource:', readySource);
        });
        this.platforms = plt.platforms();
    }
    push() {
        this.navCtrl.push(PageOne_1);
    }
    presentModal() {
        let modal = this.modalCtrl.create('ModalPassData', { userId: 8675309 }, {
            enterAnimation: 'modal-slide-in',
            leaveAnimation: 'modal-slide-out',
            cssClass: 'my-modal my-blue-modal'
        });
        modal.present();
        modal.onWillDismiss((data) => {
            console.log('WILL DISMISS with data', data);
            console.timeEnd('modal');
        });
        modal.onDidDismiss((data) => {
            console.log('DID DISMISS modal data', data);
            console.timeEnd('modal');
        });
    }
    presentModalChildNav() {
        this.modalCtrl.create('ContactUs', null, {
            enableBackdropDismiss: false
        }).present();
    }
    presentToolbarModal() {
        this.modalCtrl.create('ToolbarModal', null, {
            enterAnimation: 'modal-md-slide-in',
            leaveAnimation: 'modal-md-slide-out'
        }).present();
    }
    presentModalWithInputs() {
        let modal = this.modalCtrl.create('ModalWithInputs');
        modal.onDidDismiss((data) => {
            console.log('Modal with inputs data:', data);
        });
        modal.present();
    }
    presentNavModalWithToast() {
        this.toastCtrl.create({
            message: 'Will present a modal with child nav...',
            duration: 1000,
        }).present();
        setTimeout(() => {
            this.modalCtrl.create('ContactUs').present();
        }, 500);
    }
    presentToolbarModalWithToast() {
        this.toastCtrl.create({
            message: 'Will present a modal with toolbars...',
            duration: 1000,
        }).present();
        setTimeout(() => {
            this.modalCtrl.create('ToolbarModal').present();
        }, 500);
    }
    ionViewDidLoad() {
        console.log('E2EPage ionViewDidLoad fired');
    }
    ionViewWillEnter() {
        console.log('E2EPage ionViewWillEnter fired');
    }
    ionViewDidEnter() {
        console.log('E2EPage ionViewDidEnter fired');
    }
    ionViewWillLeave() {
        console.log('E2EPage ionViewWillLeave fired');
    }
    ionViewDidLeave() {
        console.log('E2EPage ionViewDidLeave fired');
    }
};
PageOne = PageOne_1 = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'page-one.html'
    }),
    __metadata("design:paramtypes", [__1.NavController,
        __1.ModalController,
        __1.ToastController,
        __1.Config, __1.Platform])
], PageOne);
exports.PageOne = PageOne;
var PageOne_1;
//# sourceMappingURL=page-one.js.map
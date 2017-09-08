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
const some_app_provider_1 = require("../../services/some-app-provider");
const provider_1 = require("./provider");
let ModalPassData = class ModalPassData {
    constructor(viewCtrl, toastCtrl, alertCtrl, params, someComponentProvider, someAppProvider) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.data = {
            userId: params.get('userId'),
            name: someComponentProvider.getName()
        };
        console.log('SomeAppProvider Data', someAppProvider.getData());
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
    submit() {
        console.time('modal');
        this.viewCtrl.dismiss(this.data);
    }
    ionViewCanEnter() {
        console.log('ModalPassData ionViewCanEnter fired');
        this.called.ionViewCanEnter++;
        return true;
    }
    ionViewCanLeave() {
        console.log('ModalPassData ionViewCanLeave fired');
        this.called.ionViewCanLeave++;
        return new Promise((resolve, reject) => {
            this.alertCtrl.create()
                .setTitle('Do you want to submit?')
                .addButton({ text: 'Submit', handler: resolve })
                .addButton({ text: 'Cancel', role: 'cancel', handler: reject })
                .present();
        });
    }
    ionViewWillLoad() {
        console.log('ModalPassData ionViewWillLoad fired');
        this.called.ionViewWillLoad++;
    }
    ionViewDidLoad() {
        console.log('ModalPassData ionViewDidLoad fired');
        this.called.ionViewDidLoad++;
    }
    ionViewWillEnter() {
        console.log('ModalPassData ionViewWillEnter fired');
        this.called.ionViewWillEnter++;
    }
    ionViewDidEnter() {
        console.log('ModalPassData ionViewDidEnter fired');
        this.toastCtrl.create({
            message: 'test toast',
            duration: 1000
        }).present();
        this.called.ionViewDidEnter++;
    }
    ionViewWillLeave() {
        console.log('ModalPassData ionViewWillLeave fired');
        this.called.ionViewWillLeave++;
    }
    ionViewDidLeave() {
        console.log('ModalPassData ionViewDidLeave fired');
        this.called.ionViewDidLeave++;
    }
};
ModalPassData = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'modal-pass-data.html',
        providers: [
            provider_1.SomeComponentProvider
        ]
    }),
    __metadata("design:paramtypes", [__1.ViewController,
        __1.ToastController,
        __1.AlertController,
        __1.NavParams,
        provider_1.SomeComponentProvider,
        some_app_provider_1.SomeAppProvider])
], ModalPassData);
exports.ModalPassData = ModalPassData;
//# sourceMappingURL=modal-pass-data.js.map
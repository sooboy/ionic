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
const platform_browser_1 = require("@angular/platform-browser");
const __1 = require("../../../..");
const forms_1 = require("@angular/forms");
let E2EPage = class E2EPage {
    constructor(alertCtrl, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
    }
    ionViewDidEnter() {
        let alert = this.alertCtrl.create({
            title: 'Alert!',
            message: 'I was opened in ionViewDidEnter',
            buttons: ['Ok']
        });
        alert.present();
    }
    submit() {
        var alert = this.alertCtrl.create({
            title: 'Not logged in',
            message: 'Sign in to continue.',
            buttons: [
                {
                    text: 'Sign in',
                    handler: () => {
                        console.log('Sign in');
                    }
                }
            ]
        });
        alert.onDidDismiss(() => {
            console.log('dismiss');
            this.navCtrl.push(AnotherPage);
        });
        alert.present();
    }
};
E2EPage = __decorate([
    core_1.Component({
        templateUrl: 'main.html'
    }),
    __metadata("design:paramtypes", [__1.AlertController, __1.NavController])
], E2EPage);
exports.E2EPage = E2EPage;
let AnotherPage = class AnotherPage {
    constructor(navCtrl, alertCtrl, loadingCtrl, builder) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.builder = builder;
        this.form = builder.group({
            firstName: builder.control('', forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.minLength(5)
            ]))
        });
    }
    submit(value) {
        if (this.form.valid) {
            console.log(value);
        }
        else {
            this.alertCtrl.create({
                title: 'Invalid input data',
                subTitle: 'Please correct the errors and resubmit the data.',
                buttons: ['OK']
            }).present();
        }
    }
    ionViewDidEnter() {
        this.showConfirm();
    }
    showConfirm() {
        const alert = this.alertCtrl.create({
            title: `Hi there`,
            buttons: [
                {
                    text: 'Go Back',
                    role: 'cancel',
                    handler: () => {
                        alert.dismiss().then(() => {
                            this.navCtrl.pop();
                        });
                        return false;
                    }
                },
                {
                    text: 'Stay Here',
                    handler: () => {
                        console.log('Stay Here');
                    }
                }
            ]
        });
        alert.present();
    }
    doFastPop() {
        let alert = this.alertCtrl.create({
            title: 'Async Nav Transition',
            message: 'This is an example of dismissing an alert, then quickly starting another transition on the same nav controller.',
            buttons: [{
                    text: 'Ok',
                    handler: () => {
                        // present a loading indicator
                        let loading = this.loadingCtrl.create({
                            content: 'Loading...'
                        });
                        loading.present();
                        // start an async operation
                        setTimeout(() => {
                            // the async operation has completed
                            // dismiss the loading indicator
                            loading.dismiss();
                            // begin dismissing the alert
                            alert.dismiss().then(() => {
                                // after the alert has been dismissed
                                // then you can do another nav transition
                                this.navCtrl.pop();
                            });
                        }, 100);
                        // return false so the alert doesn't automatically
                        // dismissed itself. Instead we're manually
                        // handling the dismiss logic above so that we
                        // can wait for the alert to finish it's dismiss
                        // transition before starting another nav transition
                        // on the same nav controller
                        return false;
                    }
                }]
        });
        alert.present();
    }
};
AnotherPage = __decorate([
    core_1.Component({
        template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Another Page</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <form [formGroup]="form" (ngSubmit)="submit(form.value)">
        <ion-list>
          <ion-item>
            <ion-label>Name</ion-label>
            <ion-input name="firstName" type="text"></ion-input>
          </ion-item>
        </ion-list>
        <div padding style="padding-top: 0 !important;">
          <button ion-button list-item color="primary" block>
            Submit
          </button>
        </div>
      </form>
      <p>
        <button ion-button block (click)="doFastPop()">Fast Loading Dismiss, Nav Pop</button>
      </p>
    </ion-content>
  `
    }),
    __metadata("design:paramtypes", [__1.NavController, __1.AlertController, __1.LoadingController, forms_1.FormBuilder])
], AnotherPage);
exports.AnotherPage = AnotherPage;
let AppComponent = class AppComponent {
    constructor() {
        this.root = E2EPage;
    }
};
AppComponent = __decorate([
    core_1.Component({
        template: '<ion-nav [root]="root"></ion-nav>'
    })
], AppComponent);
exports.AppComponent = AppComponent;
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            AppComponent,
            E2EPage,
            AnotherPage
        ],
        imports: [
            platform_browser_1.BrowserModule,
            __1.IonicModule.forRoot(AppComponent)
        ],
        bootstrap: [__1.IonicApp],
        entryComponents: [
            E2EPage,
            AnotherPage
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
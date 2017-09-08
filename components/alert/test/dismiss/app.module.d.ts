import { AlertController, LoadingController, NavController } from '../../../..';
import { FormBuilder } from '@angular/forms';
export declare class E2EPage {
    alertCtrl: AlertController;
    navCtrl: NavController;
    constructor(alertCtrl: AlertController, navCtrl: NavController);
    ionViewDidEnter(): void;
    submit(): void;
}
export declare class AnotherPage {
    navCtrl: NavController;
    alertCtrl: AlertController;
    loadingCtrl: LoadingController;
    builder: FormBuilder;
    form: any;
    constructor(navCtrl: NavController, alertCtrl: AlertController, loadingCtrl: LoadingController, builder: FormBuilder);
    submit(value: any): void;
    ionViewDidEnter(): void;
    showConfirm(): void;
    doFastPop(): void;
}
export declare class AppComponent {
    root: typeof E2EPage;
}
export declare class AppModule {
}

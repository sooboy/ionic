import { Config, ModalController, NavController, Platform, ToastController } from '../../../../../..';
export declare class PageOne {
    navCtrl: NavController;
    modalCtrl: ModalController;
    toastCtrl: ToastController;
    platforms: string[];
    constructor(navCtrl: NavController, modalCtrl: ModalController, toastCtrl: ToastController, config: Config, plt: Platform);
    push(): void;
    presentModal(): void;
    presentModalChildNav(): void;
    presentToolbarModal(): void;
    presentModalWithInputs(): void;
    presentNavModalWithToast(): void;
    presentToolbarModalWithToast(): void;
    ionViewDidLoad(): void;
    ionViewWillEnter(): void;
    ionViewDidEnter(): void;
    ionViewWillLeave(): void;
    ionViewDidLeave(): void;
}

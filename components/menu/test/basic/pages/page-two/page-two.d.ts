import { AlertController, ModalController, NavController } from '../../../../../..';
export declare class PageTwo {
    navCtrl: NavController;
    alertCtrl: AlertController;
    modalCtrl: ModalController;
    constructor(navCtrl: NavController, alertCtrl: AlertController, modalCtrl: ModalController);
    myMenu: string;
    presentAlert(): void;
    presentModal(): void;
    goToPage2(): void;
}

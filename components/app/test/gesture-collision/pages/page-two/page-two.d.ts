import { AlertController, NavController, Refresher } from '../../../../../..';
export declare class PageTwo {
    navCtrl: NavController;
    alertCtrl: AlertController;
    constructor(navCtrl: NavController, alertCtrl: AlertController);
    presentAlert(): void;
    goToPageTwo(): void;
    doRefresh(refresher: Refresher): void;
}

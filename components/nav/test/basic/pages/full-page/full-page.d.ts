import { AlertController, App, NavController, NavParams, ViewController } from '../../../../../..';
export declare class FullPage {
    navCtrl: NavController;
    viewCtrl: ViewController;
    app: App;
    alertCtrl: AlertController;
    params: NavParams;
    constructor(navCtrl: NavController, viewCtrl: ViewController, app: App, alertCtrl: AlertController, params: NavParams);
    ionViewDidLoad(): void;
    ionViewWillEnter(): void;
    ionViewDidEnter(): void;
    ionViewWillLeave(): void;
    ionViewDidLeave(): void;
    ionViewWillUnload(): void;
    setPages(): void;
    pushPrimaryHeaderPage(): void;
    pushAnother(): void;
    pushFirstPage(): void;
    presentAlert(): void;
}

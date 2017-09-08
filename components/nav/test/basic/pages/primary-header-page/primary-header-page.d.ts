import { AlertController, NavController, ViewController } from '../../../../../..';
export declare class PrimaryHeaderPage {
    navCtrl: NavController;
    alertCtrl: AlertController;
    viewCtrl: ViewController;
    subheader: string;
    constructor(navCtrl: NavController, alertCtrl: AlertController, viewCtrl: ViewController);
    ionViewDidLoad(): void;
    ionViewWillEnter(): void;
    ionViewDidEnter(): void;
    ionViewWillLeave(): void;
    ionViewDidLeave(): void;
    ionViewWillUnload(): void;
    pushAnother(): void;
    pushFullPage(): void;
    insert(): void;
    removeSecond(): void;
    setRoot(): void;
    presentAlert(): void;
}

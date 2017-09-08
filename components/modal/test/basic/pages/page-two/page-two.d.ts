import { ActionSheetController, AlertController, App, ModalController, NavController, ToastController } from '../../../../../..';
export declare class PageTwo {
    navCtrl: NavController;
    app: App;
    actionSheetCtrl: ActionSheetController;
    toastCtrl: ToastController;
    alertCtrl: AlertController;
    modalCtrl: ModalController;
    items: any[];
    called: any;
    constructor(navCtrl: NavController, app: App, actionSheetCtrl: ActionSheetController, toastCtrl: ToastController, alertCtrl: AlertController, modalCtrl: ModalController);
    push(): void;
    dismiss(): void;
    ionViewCanEnter(): boolean;
    ionViewCanLeave(): boolean;
    ionViewWillLoad(): void;
    ionViewDidLoad(): void;
    ionViewWillEnter(): void;
    ionViewDidEnter(): void;
    ionViewWillLeave(): void;
    ionViewDidLeave(): void;
    openModal(): void;
    openActionSheet(): void;
}

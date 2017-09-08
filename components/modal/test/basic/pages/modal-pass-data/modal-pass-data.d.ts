import { AlertController, NavParams, ToastController, ViewController } from '../../../../../..';
import { SomeAppProvider } from '../../services/some-app-provider';
import { SomeComponentProvider } from './provider';
export declare class ModalPassData {
    viewCtrl: ViewController;
    toastCtrl: ToastController;
    alertCtrl: AlertController;
    data: any;
    called: any;
    constructor(viewCtrl: ViewController, toastCtrl: ToastController, alertCtrl: AlertController, params: NavParams, someComponentProvider: SomeComponentProvider, someAppProvider: SomeAppProvider);
    submit(): void;
    ionViewCanEnter(): boolean;
    ionViewCanLeave(): Promise<{}>;
    ionViewWillLoad(): void;
    ionViewDidLoad(): void;
    ionViewWillEnter(): void;
    ionViewDidEnter(): void;
    ionViewWillLeave(): void;
    ionViewDidLeave(): void;
}

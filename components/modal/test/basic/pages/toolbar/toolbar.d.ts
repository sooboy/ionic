import { AlertController, ViewController } from '../../../../../..';
export declare class ToolbarModal {
    viewCtrl: ViewController;
    alertCtrl: AlertController;
    constructor(viewCtrl: ViewController, alertCtrl: AlertController);
    ionViewDidEnter(): void;
    dismiss(): void;
}

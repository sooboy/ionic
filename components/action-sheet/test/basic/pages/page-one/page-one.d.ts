import { ActionSheetController, AlertController, ModalController, Platform } from '../../../../../..';
export declare class PageOne {
    actionSheetCtrl: ActionSheetController;
    alertCtrl: AlertController;
    modalCtrl: ModalController;
    plt: Platform;
    result: string;
    constructor(actionSheetCtrl: ActionSheetController, alertCtrl: AlertController, modalCtrl: ModalController, plt: Platform);
    presentActionSheet1(): void;
    presentActionSheet2(): void;
    presentActionSheet3(): void;
}

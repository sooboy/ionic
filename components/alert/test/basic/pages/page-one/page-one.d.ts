import { AlertController, ModalController } from '../../../../../..';
export declare class PageOne {
    private alertCtrl;
    private modalCtrl;
    testConfirmOpen: boolean;
    testPromptOpen: boolean;
    testConfirmResult: string;
    testPromptResult: string;
    testRadioOpen: boolean;
    testRadioResult: string;
    testCheckboxOpen: boolean;
    testCheckboxResult: string;
    constructor(alertCtrl: AlertController, modalCtrl: ModalController);
    doAlert(): void;
    doConfirm(): void;
    doAlertLongMessage(): void;
    doAlertNoMessage(): void;
    doMultipleButtons(): void;
    doPrompt(): void;
    doRadio(): void;
    doCheckbox(): void;
    doFastClose(): void;
    doDisabledBackdropAlert(): void;
    doAlertWithMode(alertMode: string): void;
    ionViewDidLeave(): void;
    ionViewDidEnter(): void;
}

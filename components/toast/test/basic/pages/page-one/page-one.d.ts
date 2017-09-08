import { NavController, ToastController } from '../../../../../..';
export declare class PageOne {
    navCtrl: NavController;
    toastCtrl: ToastController;
    constructor(navCtrl: NavController, toastCtrl: ToastController);
    showToast(): void;
    showLongToast(): void;
    showDismissDurationToast(): void;
    showToastWithCloseButton(positionString: string): void;
    showDismissPageChangeToast(): void;
    private dismissHandler();
}

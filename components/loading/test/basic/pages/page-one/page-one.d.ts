import { LoadingController, NavController } from '../../../../../..';
export declare class PageOne {
    loadingCtrl: LoadingController;
    navCtrl: NavController;
    constructor(loadingCtrl: LoadingController, navCtrl: NavController);
    presentLoadingIos(): void;
    presentLoadingDots(): void;
    presentLoadingBubbles(): void;
    presentLoadingCircles(): void;
    presentLoadingCrescent(): void;
    presentLoadingDefault(): void;
    presentLoadingCustom(): void;
    presentLoadingText(): void;
    goToPage2(): void;
    presentLoadingMultiple(): void;
    presentLoadingMultipleNav(): void;
    presentLoadingDismissNav(): void;
    presentLoadingOpenDismiss(): void;
    presentLoadingBackdropDismiss(): void;
}

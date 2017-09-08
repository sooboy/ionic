import { LoadingController, NavController } from '../../../../../..';
export declare class PageOne {
    loadingCtrl: LoadingController;
    navCtrl: NavController;
    constructor(loadingCtrl: LoadingController, navCtrl: NavController);
    presentLoading(): void;
    presentLoadingNav(): void;
}

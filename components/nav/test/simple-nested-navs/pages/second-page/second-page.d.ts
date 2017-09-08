import { NavController, NavParams } from '../../../../../..';
export declare class SecondPage {
    navCtrl: NavController;
    params: NavParams;
    userId: string;
    name: string;
    constructor(navCtrl: NavController, params: NavParams);
    ionViewWillEnter(): void;
    goToNextPage(): void;
}

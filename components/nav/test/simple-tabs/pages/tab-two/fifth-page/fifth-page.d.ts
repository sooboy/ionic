import { NavController, NavParams } from '../../../../../../..';
export declare class FifthPage {
    nav: NavController;
    params: NavParams;
    userId: string;
    name: string;
    constructor(nav: NavController, params: NavParams);
    ionViewWillEnter(): void;
    goToNextPage(): void;
}
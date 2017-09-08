import { App, NavController, NavParams, Tabs } from '../../../../../..';
export declare class Tab1Page1 {
    navCtrl: NavController;
    app: App;
    tabs: Tabs;
    params: NavParams;
    tab1Page2: string;
    color: boolean;
    userId: string;
    constructor(navCtrl: NavController, app: App, tabs: Tabs, params: NavParams);
    goBack(): void;
    favoritesTab(): void;
    logout(): void;
    ionViewWillEnter(): void;
    ionViewDidEnter(): void;
    ionViewWillLeave(): void;
    ionViewDidLeave(): void;
    ionViewWillUnload(): void;
}

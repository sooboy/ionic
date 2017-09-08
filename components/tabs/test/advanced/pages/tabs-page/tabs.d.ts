import { AlertController, ModalController, NavController, NavParams, Tab, Tabs } from '../../../../../..';
export declare class TabsPage {
    navCtrl: NavController;
    modalCtrl: ModalController;
    params: NavParams;
    alertCtrl: AlertController;
    showTab: boolean;
    rootPage1: string;
    rootPage2: string;
    rootPage3: string;
    tabs: Tabs;
    constructor(navCtrl: NavController, modalCtrl: ModalController, params: NavParams, alertCtrl: AlertController);
    ngAfterViewInit(): void;
    onTabChange(tab: Tab): void;
    logout(): void;
    ionViewCanLeave(): Promise<{}>;
    chat(): void;
    ionViewWillEnter(): void;
    ionViewDidEnter(): void;
    ionViewWillLeave(): void;
    ionViewDidLeave(): void;
    ionViewWillUnload(): void;
}

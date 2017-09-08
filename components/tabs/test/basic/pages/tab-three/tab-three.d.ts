import { AlertController, App, ModalController, Tabs } from '../../../../../..';
export declare class TabThree {
    private alertCtrl;
    private modalCtrl;
    private tabs;
    private app;
    items: number[];
    constructor(alertCtrl: AlertController, modalCtrl: ModalController, tabs: Tabs, app: App);
    presentAlert(): void;
    presentModal(): void;
    selectPrevious(): void;
    appNavPop(): void;
}

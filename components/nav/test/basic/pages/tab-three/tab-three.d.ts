import { AlertController, App, Tabs } from '../../../../../..';
export declare class Tab3 {
    private alertCtrl;
    private tabs;
    private app;
    constructor(alertCtrl: AlertController, tabs: Tabs, app: App);
    presentAlert(): void;
    presentModal(): void;
    selectPrevious(): void;
    appNavPop(): void;
}

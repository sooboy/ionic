import { AlertController, NavController } from '../../../..';
export declare class Tab1 {
    private alertCtrl;
    private navCtrl;
    called: any;
    constructor(alertCtrl: AlertController, navCtrl: NavController);
    push(): void;
    openAlert(): void;
    ionViewCanEnter(): boolean;
    ionViewCanLeave(): boolean;
    ionViewWillLoad(): void;
    ionViewDidLoad(): void;
    ionViewWillEnter(): void;
    ionViewDidEnter(): void;
    ionViewWillLeave(): void;
    ionViewDidLeave(): void;
}
export declare class TabsPage {
    root: typeof Tab1;
}
export declare class AppComponent {
    root: typeof TabsPage;
}
export declare class AppModule {
}

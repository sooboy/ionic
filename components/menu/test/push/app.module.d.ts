import { AlertController, Nav } from '../../../..';
export declare class Page1 {
}
export declare class AppComponent {
    alertCtrl: AlertController;
    nav: Nav;
    rootView: typeof Page1;
    constructor(alertCtrl: AlertController);
    openPage(menu: any, page: any): void;
    showAlert(): void;
}
export declare class AppModule {
}

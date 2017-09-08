import { App, MenuController, Nav } from '../../../..';
export declare class Page1 {
}
export declare class Page2 {
}
export declare class AppComponent {
    app: App;
    menuCtrl: MenuController;
    nav: Nav;
    activeMenu: string;
    page1: typeof Page1;
    page2: typeof Page2;
    rootPage: typeof Page1;
    constructor(app: App, menuCtrl: MenuController);
    openPage(p: any): void;
    menu1Active(): void;
    menu2Active(): void;
    menu3Active(): void;
}
export declare class AppModule {
}

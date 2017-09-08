import { NavController } from '../../../..';
export declare class E2EPage {
    navCtrl: NavController;
    items: any[];
    webview: string;
    counter: number;
    constructor(navCtrl: NavController);
    addItems(): void;
    headerFn(_record: any, index: number, _records: any[]): string;
    pushPage(): void;
    addItem(): void;
    addRandomItem(): void;
    changeItem(): void;
    trackByFn(_index: number, item: any): any;
}
export declare class AppComponent {
    root: typeof E2EPage;
}
export declare class AppModule {
}

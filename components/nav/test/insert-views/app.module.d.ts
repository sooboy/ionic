import { NavController, NavParams } from '../../../..';
export declare class FirstPage {
    navCtrl: NavController;
    constructor(navCtrl: NavController);
    pushPage(): void;
}
export declare class SecondPage {
    navCtrl: NavController;
    _index: number;
    constructor(navCtrl: NavController);
    insertPage(): void;
    removePage(): void;
    removeTwoPages(): void;
    testThing(): void;
}
export declare class InsertPage {
    index: any;
    constructor(params: NavParams);
}
export declare class AppComponent {
    root: typeof FirstPage;
}
export declare class AppModule {
}

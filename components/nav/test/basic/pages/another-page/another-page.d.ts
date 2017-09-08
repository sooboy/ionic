import { NavController, ViewController } from '../../../../../..';
export declare class AnotherPage {
    navCtrl: NavController;
    viewCtrl: ViewController;
    bbHideToggleVal: boolean;
    bbCount: number;
    constructor(navCtrl: NavController, viewCtrl: ViewController);
    ionViewDidLoad(): void;
    ionViewWillEnter(): void;
    ionViewDidEnter(): void;
    ionViewWillLeave(): void;
    ionViewDidLeave(): void;
    ionViewWillUnload(): void;
    pushFullPage(): void;
    pushPrimaryHeaderPage(): void;
    pushFirstPage(): void;
    setRoot(): void;
    toggleBackButton(): void;
    setBackButtonText(): void;
}

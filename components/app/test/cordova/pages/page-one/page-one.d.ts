import { NavController } from '../../../../../..';
import { SomeData } from './provider-one';
import { OtherData } from './provider-two';
export declare class PageOne {
    navCtrl: NavController;
    someData: SomeData;
    otherData: OtherData;
    page2: string;
    sort: string;
    constructor(navCtrl: NavController, someData: SomeData, otherData: OtherData);
    goToTabs(): void;
}

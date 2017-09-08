import { NavController, PickerController } from '../../../../../..';
export declare class PageOne {
    navCtrl: NavController;
    private pickerCtrl;
    smoothie: string;
    timer: string;
    constructor(navCtrl: NavController, pickerCtrl: PickerController);
    push(): void;
    twoColumns(): void;
    prefixLabel(): void;
    suffixLabel(): void;
    columnSizes(): void;
}

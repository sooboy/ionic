import { ModalController, NavController } from '../../../../../..';
export declare class SearchPage {
    navCtrl: NavController;
    modalCtrl: ModalController;
    items: string[];
    value: string;
    constructor(navCtrl: NavController, modalCtrl: ModalController);
    showDetail(item: any): void;
    initializeItems(): void;
    getItems(q: string): void;
    openModal(): void;
}

import { AlertController, ItemSliding, List, ToastController } from '../../../../../../';
export declare class RootPage {
    private alertCtrl;
    private toastCtrl;
    list: List;
    items: number[];
    slidingEnabled: boolean;
    moreText: string;
    archiveText: string;
    showOptions: boolean;
    constructor(alertCtrl: AlertController, toastCtrl: ToastController);
    toggleSliding(): void;
    changeDynamic(): void;
    closeOpened(): void;
    noclose(item: ItemSliding): void;
    unread(item: ItemSliding): void;
    didClick(_: ItemSliding): void;
    archive(item: ItemSliding): void;
    del(item: ItemSliding): void;
    download(item: ItemSliding): void;
    reload(): void;
}

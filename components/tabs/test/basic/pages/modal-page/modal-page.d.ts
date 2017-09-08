import { App, ViewController } from '../../../../../..';
export declare class ModalPage {
    private viewCtrl;
    private app;
    items: any[];
    constructor(viewCtrl: ViewController, app: App);
    dismiss(): void;
    appNavPop(): void;
}

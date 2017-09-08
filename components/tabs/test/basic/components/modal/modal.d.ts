import { App, ViewController } from '../../../../../..';
export declare class MyModal {
    private viewCtrl;
    private app;
    items: any[];
    constructor(viewCtrl: ViewController, app: App);
    dismiss(): void;
    appNavPop(): void;
}

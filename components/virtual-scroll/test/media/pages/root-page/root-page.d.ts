import { Platform } from '../../../../../../';
export declare class RootPage {
    items: any[];
    webview: string;
    type: string;
    testCheck: boolean;
    constructor(plt: Platform);
    changeType(): void;
    reload(): void;
}

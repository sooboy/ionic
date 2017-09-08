import { ElementRef } from '@angular/core';
import { Platform } from '../../../..';
export declare class E2EPage {
    items: any[];
    webview: string;
    content: ElementRef;
    constructor(plt: Platform);
    headerFn(_record: any, index: number): string;
    reload(): void;
}
export declare class AppComponent {
    root: typeof E2EPage;
}
export declare class AppModule {
}

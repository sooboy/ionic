import { Platform } from '../../../..';
export declare class E2EPage {
    plt: Platform;
    duration: string;
    easing: string;
    constructor(plt: Platform);
    playGreen(): void;
    memoryCheck(): void;
}
export declare class AppComponent {
    root: typeof E2EPage;
}
export declare class AppModule {
}

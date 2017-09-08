export declare class E2EPage {
    items: Array<{
        id: number;
        url: string;
        gif: string;
    }>;
    imgDomain: string;
    responseDelay: number;
    itemCount: number;
    showGifs: boolean;
    constructor();
    fillList(): void;
    emptyList(): void;
    toggleGifs(): void;
    reload(): void;
}
export declare class AppComponent {
    root: typeof E2EPage;
}
export declare class AppModule {
}

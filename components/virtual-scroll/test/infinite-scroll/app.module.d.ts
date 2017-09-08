export declare class E2EPage {
    counter: number;
    items: any[];
    enabled: boolean;
    constructor();
    addItem(): void;
    doInfinite(): Promise<any>;
}
export declare class E2EApp {
    root: typeof E2EPage;
}
export declare class AppModule {
}

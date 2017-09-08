import { Http } from '@angular/http';
import { Slides } from '../../../..';
export declare class E2EPage {
    private http;
    images: string[];
    slider: Slides;
    constructor(http: Http);
    ngAfterViewInit(): void;
    getImageUrl(item: any): string;
}
export declare class AppComponent {
    root: typeof E2EPage;
}
export declare class AppModule {
}

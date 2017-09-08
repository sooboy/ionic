import { ChangeDetectorRef } from '@angular/core';
export declare class RootPage {
    private changeDetectorRef;
    defaultSearch: string;
    customPlaceholder: number;
    defaultCancel: string;
    isAutocorrect: string;
    isAutocomplete: string;
    isSpellcheck: boolean;
    activeTab: string;
    constructor(changeDetectorRef: ChangeDetectorRef);
    onClearSearchbar(ev: any): void;
    onCancelSearchbar(ev: any): void;
    triggerInput(ev: any): void;
    changedInput(ev: any): void;
    inputBlurred(ev: any): void;
    inputFocused(ev: any): void;
    ngAfterViewInit(): void;
    changeValue(): void;
}

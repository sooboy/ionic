import { ElementRef } from '@angular/core';
import { PopoverController } from '../../../../../..';
export declare class PageOne {
    private popoverCtrl;
    content: ElementRef;
    text: ElementRef;
    constructor(popoverCtrl: PopoverController);
    presentListPopover(ev: UIEvent): void;
    presentLongListPopover(ev: UIEvent): void;
    presentRadioPopover(ev: UIEvent): void;
    presentNoEventPopover(): void;
}

import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { DomController } from '../../../../../../platform/dom-controller';
import { PopoverController } from '../../../../../popover/popover-controller';
export declare class AssistiveTouchComponent implements AfterViewInit {
    private popoverCtrl;
    element: ElementRef;
    renderer: Renderer2;
    domCtrl: DomController;
    private sideX;
    private sideY;
    private currentX;
    private currentY;
    private elemWidthOffset;
    private elemHeightOffset;
    constructor(popoverCtrl: PopoverController, element: ElementRef, renderer: Renderer2, domCtrl: DomController);
    ngAfterViewInit(): void;
    private handlePan(ev);
    private panEnd();
    private updatePosition();
    openControl(): void;
}

import { FormBuilder } from '@angular/forms';
import { SegmentButton } from '../../../../../..';
export declare class HomePage {
    relationship: string;
    modelStyle: string;
    appType: string;
    icons: string;
    isDisabledB: boolean;
    isDisabledS: boolean;
    myForm: any;
    constructor(fb: FormBuilder);
    toggleBDisabled(): void;
    toggleSDisabled(): void;
    onSegmentChanged(segmentButton: SegmentButton): void;
    onSegmentSelected(segmentButton: SegmentButton): void;
    doSubmit(ev: UIEvent): void;
}

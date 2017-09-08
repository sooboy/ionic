import { FormControl, FormGroup } from '@angular/forms';
import { Toggle } from '../../../../../../';
export declare class RootPage {
    grapeDisabled: boolean;
    grapeChecked: boolean;
    kiwiValue: boolean;
    strawberryValue: boolean;
    formResults: string;
    appleCtrl: FormControl;
    bananaCtrl: FormControl;
    cherryCtrl: FormControl;
    grapeCtrl: FormControl;
    fruitsForm: FormGroup;
    constructor();
    toggleGrapeChecked(): void;
    toggleGrapeDisabled(): void;
    appleChange(toggle: Toggle): void;
    bananaChange(toggle: Toggle): void;
    kiwiChange(toggle: Toggle): void;
    strawberryChange(toggle: Toggle): void;
    doSubmit(ev: UIEvent): void;
}

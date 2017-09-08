import { AssistiveTouchProvider } from '../../../providers/assistive-touch/assistive-touch';
import { ViewController } from '../../../../../../../navigation/view-controller';
import { Platform } from '../../../../../../../platform/platform';
export declare class AssistivePopover {
    private assistive;
    private plt;
    private viewCtrl;
    constructor(assistive: AssistiveTouchProvider, plt: Platform, viewCtrl: ViewController);
    homeButton(): void;
    flipDirection(): void;
    private close();
}

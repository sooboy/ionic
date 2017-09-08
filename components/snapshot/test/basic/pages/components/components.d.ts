import { AssistiveTouchProvider } from '../../providers/assistive-touch/assistive-touch';
import { NavController } from '../../../../../../navigation/nav-controller';
export declare type ComponentsGroup = {
    name: string;
    components: Array<{
        name: string;
        component: any;
    }>;
};
export declare class ComponentsPage {
    private navCtrl;
    components: Array<ComponentsGroup>;
    constructor(navCtrl: NavController, assistive: AssistiveTouchProvider);
    open(component: any): void;
    close(): void;
}

import { SplitPane } from '../../../../..';
import { PageOne } from '../pages/page-one/page-one';
import { SidePage } from '../pages/side-page/side-page';
export declare class AppComponent {
    root: typeof PageOne;
    root2: typeof SidePage;
    splitPaneChanged(splitPane: SplitPane): void;
}

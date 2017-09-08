import { SegmentButton, Slides } from '../../../../../..';
export declare class E2EPage {
    sliderComponent: Slides;
    selectedSegment: string;
    slides: {
        id: string;
        title: string;
    }[];
    constructor();
    onSegmentChanged(segmentButton: SegmentButton): void;
    onSlideChanged(s: Slides): void;
}

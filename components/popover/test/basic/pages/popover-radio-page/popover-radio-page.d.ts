import { NavParams } from '../../../../../..';
export declare class PopoverRadioPage {
    private navParams;
    background: string;
    contentEle: any;
    textEle: any;
    fontFamily: any;
    colors: any;
    constructor(navParams: NavParams);
    ngOnInit(): void;
    getColorName(background: any): string;
    setFontFamily(): void;
    changeBackground(color: any): void;
    changeFontSize(direction: any): void;
    changeFontFamily(): void;
}

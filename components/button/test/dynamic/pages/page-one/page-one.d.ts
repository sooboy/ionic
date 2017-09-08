export declare class PageOne {
    isDestructive: boolean;
    isSecondary: boolean;
    isCustom: boolean;
    isSolid: boolean;
    isOutline: boolean;
    isClear: boolean;
    isClicked: boolean;
    myColor1: string;
    myColor2: string;
    multiColor: Array<string>;
    showIf: boolean;
    liked: boolean;
    value: string;
    buttons: {
        selected: boolean;
        value: string;
        text: string;
    }[];
    constructor();
    unify(): void;
    reset(): void;
    toggle(): void;
    reportLike(liked: boolean): void;
    setValue(value: any): void;
}

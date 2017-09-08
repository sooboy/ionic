import { Config } from '../../../../../..';
export declare class PageOne {
    dynamicColor: string;
    dynamicMode: string;
    constructor(config: Config);
    toggleColor(): void;
    toggleMode(): void;
    toggleBoth(): void;
}

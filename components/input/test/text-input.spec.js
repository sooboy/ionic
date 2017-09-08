"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = require("../input");
const mock_providers_1 = require("../../../util/mock-providers");
const input_tester_1 = require("../../../util/input-tester");
function newInput() {
    const platform = mock_providers_1.mockPlatform();
    const config = mock_providers_1.mockConfig();
    const app = mock_providers_1.mockApp(config, platform);
    const elementRef = mock_providers_1.mockElementRef();
    const renderer = mock_providers_1.mockRenderer();
    const item = mock_providers_1.mockItem();
    const form = mock_providers_1.mockForm();
    const dom = mock_providers_1.mockDomController(platform);
    const input = new input_1.TextInput(config, platform, form, app, elementRef, renderer, null, item, null, dom);
    input._native = mock_providers_1.mockElementRefEle(document.createElement('input'));
    return input;
}
describe('text input', () => {
    it('should pass common test', () => {
        const textInput = newInput();
        const ele = textInput._native.nativeElement;
        textInput._item._elementRef = mock_providers_1.mockElementRefEle(document.createElement('div'));
        input_tester_1.commonInputTest(textInput, {
            defaultValue: '',
            corpus: input_tester_1.TEXT_CORPUS,
            onValueChange: (value) => ele.value === value,
        });
    });
    describe('getScrollData', () => {
        it('should scroll, top and bottom below safe area, no room to scroll', () => {
            let inputOffsetTop = 350;
            let inputOffsetHeight = 35;
            let scrollViewDimensions = {
                contentTop: 100,
                contentHeight: 700,
                contentBottom: 0,
                contentWidth: 400,
                contentLeft: 0,
                scrollTop: 30,
                scrollHeight: 700,
                scrollWidth: 400,
                scrollLeft: 0,
            };
            let keyboardHeight = 400;
            let platformHeight = 800;
            let scrollData = input_1.getScrollData(inputOffsetTop, inputOffsetHeight, scrollViewDimensions, keyboardHeight, platformHeight);
            expect(scrollData.scrollAmount).toBe(-205);
            expect(scrollData.scrollTo).toBe(235);
            expect(scrollData.scrollPadding).toBe(400);
        });
        it('should scroll, top and bottom below safe area, room to scroll', () => {
            let inputOffsetTop = 350;
            let inputOffsetHeight = 35;
            let scrollViewDimensions = {
                contentTop: 100,
                contentHeight: 700,
                contentBottom: 0,
                contentWidth: 400,
                contentLeft: 0,
                scrollTop: 30,
                scrollHeight: 1000,
                scrollWidth: 400,
                scrollLeft: 0,
            };
            let keyboardHeight = 400;
            let platformHeight = 800;
            let scrollData = input_1.getScrollData(inputOffsetTop, inputOffsetHeight, scrollViewDimensions, keyboardHeight, platformHeight);
            expect(scrollData.scrollAmount).toBe(-205);
            expect(scrollData.scrollTo).toBe(235);
            expect(scrollData.scrollPadding).toBe(400);
        });
        it('should scroll, top above safe', () => {
            // TextInput top within safe area, bottom below safe area, room to scroll
            let inputOffsetTop = 100;
            let inputOffsetHeight = 33;
            let scrollViewDimensions = {
                contentTop: 100,
                contentHeight: 700,
                contentBottom: 0,
                contentWidth: 400,
                contentLeft: 0,
                scrollTop: 250,
                scrollHeight: 700,
                scrollWidth: 400,
                scrollLeft: 0,
            };
            let keyboardHeight = 400;
            let platformHeight = 800;
            let scrollData = input_1.getScrollData(inputOffsetTop, inputOffsetHeight, scrollViewDimensions, keyboardHeight, platformHeight);
            expect(scrollData.scrollAmount).toBe(33);
            expect(scrollData.scrollTo).toBe(217);
            expect(scrollData.scrollPadding).toBe(400);
        });
        it('should scroll, top in safe, bottom below safe, below more than top in, not enough padding', () => {
            // TextInput top within safe area, bottom below safe area, room to scroll
            let inputOffsetTop = 100;
            let inputOffsetHeight = 320;
            let scrollViewDimensions = {
                contentTop: 100,
                contentHeight: 700,
                contentBottom: 0,
                contentWidth: 400,
                contentLeft: 0,
                scrollTop: 20,
                scrollHeight: 700,
                scrollWidth: 400,
                scrollLeft: 0,
            };
            let keyboardHeight = 400;
            let platformHeight = 800;
            let scrollData = input_1.getScrollData(inputOffsetTop, inputOffsetHeight, scrollViewDimensions, keyboardHeight, platformHeight);
            expect(scrollData.scrollAmount).toBe(-80);
            expect(scrollData.scrollTo).toBe(100);
            expect(scrollData.scrollPadding).toBe(400);
        });
        it('should scroll, top in safe, bottom below safe, below more than top in, enough padding', () => {
            // TextInput top within safe area, bottom below safe area, room to scroll
            let inputOffsetTop = 20;
            let inputOffsetHeight = 330;
            let scrollViewDimensions = {
                contentTop: 100,
                contentHeight: 700,
                contentBottom: 0,
                contentWidth: 400,
                contentLeft: 0,
                scrollTop: 0,
                scrollHeight: 700,
                scrollWidth: 400,
                scrollLeft: 0,
            };
            let keyboardHeight = 400;
            let platformHeight = 800;
            let scrollData = input_1.getScrollData(inputOffsetTop, inputOffsetHeight, scrollViewDimensions, keyboardHeight, platformHeight);
            expect(scrollData.scrollAmount).toBe(-20);
            expect(scrollData.scrollTo).toBe(20);
            expect(scrollData.scrollPadding).toBe(400);
        });
        it('should scroll, top in safe, bottom below safe, below less than top in, enough padding', () => {
            // TextInput top within safe area, bottom below safe area, room to scroll
            let inputOffsetTop = 250;
            let inputOffsetHeight = 80; // goes 30px below safe area
            let scrollViewDimensions = {
                contentTop: 100,
                contentHeight: 700,
                contentBottom: 0,
                contentWidth: 400,
                contentLeft: 0,
                scrollTop: 0,
                scrollHeight: 700,
                scrollWidth: 400,
                scrollLeft: 0,
            };
            let keyboardHeight = 400;
            let platformHeight = 800;
            let scrollData = input_1.getScrollData(inputOffsetTop, inputOffsetHeight, scrollViewDimensions, keyboardHeight, platformHeight);
            expect(scrollData.scrollAmount).toBe(-180);
            expect(scrollData.scrollTo).toBe(180);
            expect(scrollData.scrollPadding).toBe(400);
        });
        it('should not scroll, top in safe, bottom in safe', () => {
            // TextInput top within safe area, bottom within safe area
            let inputOffsetTop = 100;
            let inputOffsetHeight = 50;
            let scrollViewDimensions = {
                contentTop: 100,
                contentBottom: 0,
                contentHeight: 700,
                contentWidth: 400,
                contentLeft: 0,
                scrollTop: 0,
                scrollHeight: 700,
                scrollWidth: 400,
                scrollLeft: 0,
            };
            let keyboardHeight = 400;
            let platformHeight = 800;
            let scrollData = input_1.getScrollData(inputOffsetTop, inputOffsetHeight, scrollViewDimensions, keyboardHeight, platformHeight);
            expect(scrollData.scrollAmount).toBe(0);
        });
    });
});
//# sourceMappingURL=text-input.spec.js.map
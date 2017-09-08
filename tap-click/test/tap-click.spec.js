"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tap_click_1 = require("../tap-click");
describe('TapClick', () => {
    describe('isActivatable', () => {
        it('should be activatable on <a> element', () => {
            let ele = document.createElement('a');
            expect(tap_click_1.isActivatable(ele)).toBe(true);
        });
        it('should be activatable on <button> element', () => {
            let ele = document.createElement('button');
            expect(tap_click_1.isActivatable(ele)).toBe(true);
        });
        it('should be activatable on <ion-item-sliding> element', () => {
            let ele = document.createElement('ion-item-sliding');
            expect(tap_click_1.isActivatable(ele)).toBe(false);
        });
        it('should be not activatable on <ion-item> element', () => {
            let ele = document.createElement('ion-item');
            expect(tap_click_1.isActivatable(ele)).toBe(false);
        });
        it('should be not activatable on <div> element', () => {
            let ele = document.createElement('div');
            expect(tap_click_1.isActivatable(ele)).toBe(false);
        });
        it('should be activatable with "tappable" attribute', () => {
            let ele = document.createElement('div');
            ele.setAttribute('tappable', 'true');
            expect(tap_click_1.isActivatable(ele)).toBe(true);
        });
        it('should be not activatable on element without "hasAttribute" function', () => {
            let doc = document.createDocumentFragment();
            expect(tap_click_1.isActivatable(doc)).toBe(false);
        });
    });
});
//# sourceMappingURL=tap-click.spec.js.map
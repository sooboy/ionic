"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const range_1 = require("../range");
const mock_providers_1 = require("../../../util/mock-providers");
const form_1 = require("../../../util/form");
const input_tester_1 = require("../../../util/input-tester");
describe('Range', () => {
    it('should pass common test', () => {
        // TODO, validate range inside bounds
        const range = createRange();
        range._slider = mock_providers_1.mockElementRef();
        input_tester_1.commonInputTest(range, {
            defaultValue: 0,
            corpus: input_tester_1.NUMBER_CORPUS
        });
    });
    describe('valueToRatio', () => {
        it('step=1', () => {
            let range = createRange();
            range.max = 5000;
            range.min = 2490;
            range.step = 1;
            range.snaps = true;
            expect(range._valueToRatio(5000)).toEqual(1);
            expect(range._valueToRatio(5100)).toEqual(1);
            expect(range._valueToRatio(2490)).toEqual(0);
            expect(range._valueToRatio(2000)).toEqual(0);
            let middle = (range.max - range.min) / 2 + range.min;
            expect(range._valueToRatio(middle)).toEqual(0.5);
        });
        it('step>range', () => {
            let range = createRange();
            range.max = 5000;
            range.min = 2490;
            range.step = 5900;
            range.snaps = true;
            expect(range._valueToRatio(7000)).toEqual(1);
            expect(range._valueToRatio(5000)).toEqual(0);
            expect(range._valueToRatio(2490)).toEqual(0);
            expect(range._valueToRatio(2000)).toEqual(0);
        });
    });
    describe('ratioToValue', () => {
        it('step=1', () => {
            let range = createRange();
            range.max = 5000;
            range.min = 2490;
            range.step = 1;
            range.snaps = true;
            expect(range._ratioToValue(0)).toEqual(2490);
            expect(range._ratioToValue(1)).toEqual(5000);
            let middle = (range.max - range.min) / 2 + range.min;
            expect(range._ratioToValue(0.5)).toEqual(middle);
        });
        it('step>range', () => {
            let range = createRange();
            range.max = 5000;
            range.min = 2490;
            range.step = 1;
            expect(range._ratioToValue(0)).toEqual(2490);
            expect(range._ratioToValue(1)).toEqual(5000);
            let middle = (range.max - range.min) / 2 + range.min;
            expect(range._ratioToValue(0.5)).toEqual(middle);
        });
    });
});
function createRange() {
    let form = new form_1.Form();
    return new range_1.Range(form, mock_providers_1.mockHaptic(), mock_providers_1.mockItem(), mock_providers_1.mockConfig(), mock_providers_1.mockPlatform(), mock_providers_1.mockElementRef(), mock_providers_1.mockRenderer(), mock_providers_1.mockDomController(), mock_providers_1.mockChangeDetectorRef());
}
//# sourceMappingURL=range.spec.js.map
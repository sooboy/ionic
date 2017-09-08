"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ion_1 = require("../../ion");
const mock_providers_1 = require("../../../util/mock-providers");
describe('Ion', () => {
    describe('color', () => {
        it('should set color when it hasnt been set yet', () => {
            ion._setMode('md');
            ion._setColor('primary');
            expect(className(ion)).toEqual('icon icon-md icon-md-primary');
        });
        it('should remove color when it has already been set', () => {
            ion._setMode('md');
            ion._setColor('primary');
            ion._setColor(null);
            expect(className(ion)).toEqual('icon icon-md');
        });
        it('should update color when it has already been set', () => {
            ion._setMode('md');
            ion._setColor('primary');
            ion._setColor('secondary');
            expect(className(ion)).toEqual('icon icon-md icon-md-secondary');
        });
        it('should not setElementClass if its the same value', () => {
            ion._setMode('ios');
            ion._setColor('primary');
            spyOn(ion, 'setElementClass');
            expect(ion.setElementClass).not.toHaveBeenCalled();
            ion._setColor('primary');
            expect(className(ion)).toEqual('icon icon-ios icon-ios-primary');
        });
    });
    var ion;
    beforeEach(() => {
        ion = new ion_1.Ion(mock_providers_1.mockConfig(), mock_providers_1.mockElementRef(), mock_providers_1.mockRenderer(), 'icon');
    });
    function className(ion) {
        return ion._elementRef.nativeElement.className;
    }
});
//# sourceMappingURL=ion.spec.js.map
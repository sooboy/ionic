"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_input_1 = require("../base-input");
const form_1 = require("../form");
const item_1 = require("../../components/item/item");
const input_tester_1 = require("../input-tester");
const mock_providers_1 = require("../mock-providers");
let platform;
let config;
let elementRef;
let renderer;
describe('BaseInput', () => {
    it('should initialize', () => {
        const input = mockInput(null, null, null);
        expect(input._init).toBeFalsy();
        expect(input._isFocus).toBeFalsy();
        expect(input._config).toEqual(config);
        expect(input._elementRef).toEqual(elementRef);
        expect(input._renderer).toEqual(renderer);
        expect(input._componentName).toEqual('input');
        expect(input.id).toBeUndefined();
        expect(input._labelId).toBeUndefined();
    });
    it('should configure with item', () => {
        const form = new form_1.Form();
        const item = new item_1.Item(form, config, elementRef, renderer, null);
        const input = mockInput(form, item, null);
        expect(input.id).toEqual('input-0-0');
        expect(input._labelId).toEqual('lbl-0');
    });
    it('should pass base test', () => {
        const input = mockInput(mock_providers_1.mockForm(), null, null);
        input_tester_1.commonInputTest(input, {
            defaultValue: null,
            corpus: input_tester_1.ANY_CORPUS
        });
    });
});
function mockInput(form, item, ngControl) {
    platform = mock_providers_1.mockPlatform();
    config = mock_providers_1.mockConfig(null, '/', platform);
    elementRef = mock_providers_1.mockElementRef();
    renderer = mock_providers_1.mockRenderer();
    return new base_input_1.BaseInput(config, elementRef, renderer, 'input', null, form, item, ngControl);
}
//# sourceMappingURL=base-input.spec.js.map
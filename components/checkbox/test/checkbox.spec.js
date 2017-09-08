"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkbox_1 = require("../checkbox");
const mock_providers_1 = require("../../../util/mock-providers");
const input_tester_1 = require("../../../util/input-tester");
describe('Checkbox', () => {
    it('should pass common test', () => {
        const config = mock_providers_1.mockConfig();
        const elementRef = mock_providers_1.mockElementRef();
        const renderer = mock_providers_1.mockRenderer();
        const item = mock_providers_1.mockItem();
        const checkbox = new checkbox_1.Checkbox(config, null, item, elementRef, renderer);
        input_tester_1.commonInputTest(checkbox, {
            defaultValue: false,
            corpus: input_tester_1.BOOLEAN_CORPUS
        });
    });
});
//# sourceMappingURL=checkbox.spec.js.map
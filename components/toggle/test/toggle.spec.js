"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toggle_1 = require("../toggle");
const mock_providers_1 = require("../../../util/mock-providers");
const input_tester_1 = require("../../../util/input-tester");
describe('Toggle', () => {
    it('should pass common test', () => {
        const platform = mock_providers_1.mockPlatform();
        const config = mock_providers_1.mockConfig();
        const elementRef = mock_providers_1.mockElementRef();
        const renderer = mock_providers_1.mockRenderer();
        const item = mock_providers_1.mockItem();
        const form = mock_providers_1.mockForm();
        const haptic = mock_providers_1.mockHaptic();
        const gesture = mock_providers_1.mockGestureController();
        const zone = mock_providers_1.mockZone();
        const toggle = new toggle_1.Toggle(form, config, platform, elementRef, renderer, haptic, item, gesture, null, zone);
        input_tester_1.commonInputTest(toggle, {
            defaultValue: false,
            corpus: input_tester_1.BOOLEAN_CORPUS,
        });
    });
});
//# sourceMappingURL=toggle.spec.js.map
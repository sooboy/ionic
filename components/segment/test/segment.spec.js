"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const segment_1 = require("../segment");
const mock_providers_1 = require("../../../util/mock-providers");
const input_tester_1 = require("../../../util/input-tester");
describe('Segment', () => {
    it('should pass common test', () => {
        const config = mock_providers_1.mockConfig();
        const elementRef = mock_providers_1.mockElementRef();
        const renderer = mock_providers_1.mockRenderer();
        const segment = new segment_1.Segment(config, elementRef, renderer, null);
        segment._buttons = new core_1.QueryList();
        input_tester_1.commonInputTest(segment, {
            defaultValue: null,
            corpus: [
                ['option1', 'option1'],
                ['option2', 'option2'],
                ['option3', 'option3'],
                ['option4', 'option4'],
                ['', ''],
            ]
        });
    });
});
//# sourceMappingURL=segment.spec.js.map
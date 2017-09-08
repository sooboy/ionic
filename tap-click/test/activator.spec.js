"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const activator_1 = require("../activator");
const config_1 = require("../../config/config");
const mock_providers_1 = require("../../util/mock-providers");
describe('Activator', () => {
    it('should config css', () => {
        let activator = mockActivator(true, null);
        expect(activator._css).toEqual('activated');
        activator = mockActivator(true, 'enabled');
        expect(activator._css).toEqual('enabled');
    });
    it('should async down/up/click action (normal flow)', (done) => {
        const { ev, ele, pos } = testValues();
        let activator = mockActivator(true, null);
        activator.activatedDelay = 80;
        activator.clearDelay = 80;
        activator.downAction(ev, ele, pos);
        expect(ele.classList.contains('activated')).toBeFalsy();
        done();
        // upAction
        // dom.flushUntil(100, () => {
        //   expect(ele.classList.contains('activated')).toBeTruthy();
        //   activator.upAction(ev, ele, pos);
        //   expect(ele.classList.contains('activated')).toBeTruthy();
        //   // clickAction
        //   expect(ele.classList.contains('activated')).toBeTruthy();
        //   activator.clickAction(ev, ele, pos);
        //   expect(ele.classList.contains('activated')).toBeTruthy();
        //   // Read final results
        //   dom.flushUntil(2000, () => {
        //     expect(ele.classList.contains('activated')).toBeFalsy();
        //     done();
        //   });
        // });
    });
    it('should async down then down', (done) => {
        const { ev, ele, pos } = testValues();
        let activator = mockActivator(true, null);
        activator.activatedDelay = 80;
        activator.clearDelay = 80;
        activator.downAction(ev, ele, pos);
        dom.flushUntil(100, () => {
            expect(ele.classList.contains('activated')).toBeTruthy();
            activator.downAction(ev, ele, pos);
            expect(ele.classList.contains('activated')).toBeFalsy();
            dom.flushUntil(100, () => {
                expect(ele.classList.contains('activated')).toBeTruthy();
                done();
            });
        });
    });
    it('should async down then click', (done) => {
        const { ev, ele, pos } = testValues();
        let activator = mockActivator(true, null);
        activator.activatedDelay = 80;
        activator.clearDelay = 80;
        activator.downAction(ev, ele, pos);
        dom.flushUntil(16, () => {
            expect(ele.classList.contains('activated')).toBeFalsy();
            activator.clickAction(ev, ele, pos);
            expect(ele.classList.contains('activated')).toBeTruthy();
            dom.flushUntil(100, () => {
                expect(ele.classList.contains('activated')).toBeFalsy();
                // Check the value is stable
                dom.flushUntil(2000, () => {
                    expect(ele.classList.contains('activated')).toBeFalsy();
                    done();
                });
            });
        });
    });
    it('should async down then click then down (fast clicking)', (done) => {
        const { ev, ele, pos } = testValues();
        let activator = mockActivator(true, null);
        activator.activatedDelay = 80;
        activator.clearDelay = 80;
        activator.downAction(ev, ele, pos);
        dom.flushUntil(16, () => {
            expect(ele.classList.contains('activated')).toBeFalsy();
            activator.clickAction(ev, ele, pos);
            expect(ele.classList.contains('activated')).toBeTruthy();
            dom.flushUntil(32, () => {
                expect(ele.classList.contains('activated')).toBeTruthy();
                activator.downAction(ev, ele, pos);
                expect(ele.classList.contains('activated')).toBeFalsy();
                done();
            });
        });
    });
});
function testValues() {
    let parent = document.createElement('div');
    let ele = document.createElement('a');
    parent.appendChild(ele);
    return {
        ev: null,
        ele: ele,
        pos: { x: 0, y: 0 },
    };
}
let dom;
function mockActivator(appEnabled, css) {
    dom = mock_providers_1.mockDomController();
    let app = {
        isEnabled: () => { return appEnabled; },
    };
    let config = new config_1.Config();
    if (css) {
        config.set('activatedClass', css);
    }
    return new activator_1.Activator(app, config, dom);
}
//# sourceMappingURL=activator.spec.js.map
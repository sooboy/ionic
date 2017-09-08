"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_providers_1 = require("../../../util/mock-providers");
describe('tab', () => {
    describe('load', () => {
        it('should measure and refresh the tabs', () => {
            // TODO - this test is super leaky but I cant come up with a better way short term
            const tabs = mock_providers_1.mockTabs();
            const tab = mock_providers_1.mockTab(tabs, false);
            const spy = jasmine.createSpy('done');
            spyOn(tab, 'push');
            spyOn(tab, 'popTo');
            tab.load({}, spy);
            expect(tab.push).not.toHaveBeenCalled();
            expect(tab.popTo).not.toHaveBeenCalled();
            expect(spy).toHaveBeenCalled();
        });
        it('should reuse the view if its the top view in the stack', () => {
            const tabs = mock_providers_1.mockTabs();
            const tab = mock_providers_1.mockTab(tabs, false);
            const spy = jasmine.createSpy('done');
            const mockViewOne = mock_providers_1.mockView('one');
            const mockViewTwo = mock_providers_1.mockView('two');
            mock_providers_1.mockViews(tab, [mockViewOne, mockViewTwo]);
            tab._lazyRootFromUrl = 'someValue';
            tab._lazyRootFromUrlData = {};
            mockViewTwo.id = tab._lazyRootFromUrl;
            spyOn(tab, 'push');
            spyOn(tab, 'popTo');
            tab.load({}, spy);
            expect(tab.push).not.toHaveBeenCalled();
            expect(tab.popTo).not.toHaveBeenCalled();
            expect(spy).toHaveBeenCalled();
        });
        it('should pop back to a previous view if ', () => {
            const tabs = mock_providers_1.mockTabs();
            const tab = mock_providers_1.mockTab(tabs, false);
            const spy = jasmine.createSpy('done');
            const mockViewOne = mock_providers_1.mockView('one');
            const mockViewTwo = mock_providers_1.mockView('two');
            mock_providers_1.mockViews(tab, [mockViewOne, mockViewTwo]);
            tab._lazyRootFromUrl = 'someValue';
            tab._lazyRootFromUrlData = {};
            mockViewOne.id = tab._lazyRootFromUrl;
            spyOn(tab, 'push');
            spyOn(tab, 'popTo');
            tab.load({}, spy);
            expect(tab.push).not.toHaveBeenCalled();
            expect(tab.popTo).toHaveBeenCalled();
            expect(spy).not.toHaveBeenCalled();
        });
        it('should push the view if it doesnt exist already', () => {
            const tabs = mock_providers_1.mockTabs();
            const tab = mock_providers_1.mockTab(tabs, false);
            const spy = jasmine.createSpy('done');
            const mockViewOne = mock_providers_1.mockView('one');
            const mockViewTwo = mock_providers_1.mockView('two');
            mock_providers_1.mockViews(tab, [mockViewOne, mockViewTwo]);
            tab._lazyRootFromUrl = 'someValue';
            tab._lazyRootFromUrlData = {};
            spyOn(tab, 'push');
            spyOn(tab, 'popTo');
            tab.load({}, spy);
            expect(tab.push).toHaveBeenCalled();
            expect(tab.popTo).not.toHaveBeenCalled();
            expect(spy).not.toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=tab.spec.js.map
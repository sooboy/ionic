"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const mock_providers_1 = require("../../../util/mock-providers");
describe('Tabs', () => {
    describe('initTabs', () => {
        it('should not select a hidden or disabled tab', () => {
            var tabs = mock_providers_1.mockTabs();
            var tab0 = mock_providers_1.mockTab(tabs);
            var tab1 = mock_providers_1.mockTab(tabs);
            tab0.root = SomePage;
            tab1.root = SomePage;
            tab1.enabled = false;
            tab1.show = false;
            tabs.selectedIndex = 1;
            tabs.initTabs();
            expect(tab0.isSelected).toEqual(true);
            expect(tab1.isSelected).toEqual(false);
        });
        it('should select the second tab from selectedIndex input', () => {
            var tabs = mock_providers_1.mockTabs();
            var tab0 = mock_providers_1.mockTab(tabs);
            var tab1 = mock_providers_1.mockTab(tabs);
            tab0.root = SomePage;
            tab1.root = SomePage;
            tabs.selectedIndex = 1;
            tabs.initTabs();
            expect(tab0.isSelected).toEqual(false);
            expect(tab1.isSelected).toEqual(true);
        });
        it('should select the first tab by default', () => {
            var tabs = mock_providers_1.mockTabs();
            var tab0 = mock_providers_1.mockTab(tabs);
            var tab1 = mock_providers_1.mockTab(tabs);
            tab0.root = SomePage;
            tab1.root = SomePage;
            tabs.initTabs();
            expect(tab0.isSelected).toEqual(true);
            expect(tab1.isSelected).toEqual(false);
        });
    });
    describe('previousTab', () => {
        it('should find the previous tab when there has been 3 selections', () => {
            var tabs = mock_providers_1.mockTabs();
            var tab0 = mock_providers_1.mockTab(tabs);
            var tab1 = mock_providers_1.mockTab(tabs);
            var tab2 = mock_providers_1.mockTab(tabs);
            tab0.root = SomePage;
            tab1.root = SomePage;
            tab2.root = SomePage;
            tabs.select(tab0);
            tabs.select(tab1);
            tabs.select(tab2);
            expect(tabs._selectHistory).toEqual([tab0.id, tab1.id, tab2.id]);
            expect(tabs.previousTab(true)).toEqual(tab1);
            expect(tabs._selectHistory).toEqual([tab0.id, tab1.id]);
            expect(tabs.previousTab(true)).toEqual(tab0);
            expect(tabs._selectHistory).toEqual([tab0.id]);
        });
        it('should not find a previous tab when there has only been one selection', () => {
            var tabs = mock_providers_1.mockTabs();
            var tab0 = mock_providers_1.mockTab(tabs);
            var tab1 = mock_providers_1.mockTab(tabs);
            tab0.root = SomePage;
            tab1.root = SomePage;
            tabs.select(tab0);
            expect(tabs.previousTab(true)).toEqual(null);
        });
        it('should not find a previous tab when theres no history', () => {
            var tabs = mock_providers_1.mockTabs();
            expect(tabs._selectHistory.length).toEqual(0);
            expect(tabs.previousTab(true)).toEqual(null);
        });
        it('should track tab selections', () => {
            var tabs = mock_providers_1.mockTabs();
            var tab0 = mock_providers_1.mockTab(tabs);
            var tab1 = mock_providers_1.mockTab(tabs);
            tab0.root = SomePage;
            tab1.root = SomePage;
            expect(tabs._selectHistory.length).toEqual(0);
            tabs.select(tab0);
            expect(tabs._selectHistory[0]).toEqual(tab0.id);
            expect(tabs._selectHistory.length).toEqual(1);
            tabs.select(tab1);
            expect(tabs._selectHistory[0]).toEqual(tab0.id);
            expect(tabs._selectHistory[1]).toEqual(tab1.id);
            expect(tabs._selectHistory.length).toEqual(2);
            tabs.select(tab0);
            expect(tabs._selectHistory[0]).toEqual(tab0.id);
            expect(tabs._selectHistory[1]).toEqual(tab1.id);
            expect(tabs._selectHistory[2]).toEqual(tab0.id);
            expect(tabs._selectHistory.length).toEqual(3);
        });
    });
    describe('select', () => {
        it('should select tab by tab instance', () => {
            var tabs = mock_providers_1.mockTabs();
            var tab0 = mock_providers_1.mockTab(tabs);
            var tab1 = mock_providers_1.mockTab(tabs);
            tab0.root = SomePage;
            tab1.root = SomePage;
            tabs.select(tab1);
            expect(tab0.isSelected).toEqual(false);
            expect(tab1.isSelected).toEqual(true);
        });
        it('should select tab by index', () => {
            var tabs = mock_providers_1.mockTabs();
            var tab0 = mock_providers_1.mockTab(tabs);
            var tab1 = mock_providers_1.mockTab(tabs);
            tab0.root = SomePage;
            tab1.root = SomePage;
            expect(tabs.length()).toEqual(2);
            expect(tab0.isSelected).toBeUndefined();
            expect(tab1.isSelected).toBeUndefined();
            tabs.select(0);
            expect(tab0.isSelected).toEqual(true);
            expect(tab1.isSelected).toEqual(false);
        });
    });
    describe('getByIndex', () => {
        it('should get the tab', () => {
            var tabs = mock_providers_1.mockTabs();
            var tab0 = mock_providers_1.mockTab(tabs);
            var tab1 = mock_providers_1.mockTab(tabs);
            expect(tabs.getIndex(tab0)).toEqual(0);
            expect(tabs.getIndex(tab1)).toEqual(1);
        });
    });
    describe('getSelectedTabIndex', () => {
        it('should select index from tab title', () => {
            let tabs = mock_providers_1.mockTabs();
            let tab1 = mock_providers_1.mockTab(tabs);
            let tab2 = mock_providers_1.mockTab(tabs);
            let tab3 = mock_providers_1.mockTab(tabs);
            tab1.tabTitle = 'My Account';
            tab2.tabTitle = 'My Contact';
            tab3.tabTitle = 'My Settings!!';
            let selectedIndex = tabs._getSelectedTabIndex('my-settings');
            expect(selectedIndex).toEqual(2);
        });
        it('should select index from tab url path', () => {
            let tabs = mock_providers_1.mockTabs();
            let tab1 = mock_providers_1.mockTab(tabs);
            let tab2 = mock_providers_1.mockTab(tabs);
            let tab3 = mock_providers_1.mockTab(tabs);
            tab1.tabUrlPath = 'account';
            tab2.tabUrlPath = 'contact';
            tab3.tabUrlPath = 'settings';
            let selectedIndex = tabs._getSelectedTabIndex('settings');
            expect(selectedIndex).toEqual(2);
        });
        it('should select index 2 from tab-2 format', () => {
            let tabs = mock_providers_1.mockTabs();
            mock_providers_1.mockTab(tabs);
            mock_providers_1.mockTab(tabs);
            mock_providers_1.mockTab(tabs);
            let selectedIndex = tabs._getSelectedTabIndex('tab-2');
            expect(selectedIndex).toEqual(2);
        });
        it('should select index 0 when not found', () => {
            let tabs = mock_providers_1.mockTabs();
            mock_providers_1.mockTab(tabs);
            mock_providers_1.mockTab(tabs);
            mock_providers_1.mockTab(tabs);
            let selectedIndex = tabs._getSelectedTabIndex('notfound');
            expect(selectedIndex).toEqual(0);
        });
    });
    describe('getSelected', () => {
        it('should get the selected tab', () => {
            var tabs = mock_providers_1.mockTabs();
            mock_providers_1.mockTab(tabs);
            var tab1 = mock_providers_1.mockTab(tabs);
            tab1.setSelected(true);
            expect(tabs.getSelected()).toEqual(tab1);
        });
        it('should get null if no selected tab', () => {
            var tabs = mock_providers_1.mockTabs();
            mock_providers_1.mockTab(tabs);
            mock_providers_1.mockTab(tabs);
            expect(tabs.getSelected()).toEqual(null);
        });
    });
    let SomePage = class SomePage {
    };
    SomePage = __decorate([
        core_1.Component({})
    ], SomePage);
});
//# sourceMappingURL=tabs.spec.js.map
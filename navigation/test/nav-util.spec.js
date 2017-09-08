"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nav_util_1 = require("../nav-util");
const mock_providers_1 = require("../../util/mock-providers");
const view_controller_1 = require("../view-controller");
describe('NavUtil', () => {
    describe('convertToViews', () => {
        it('should convert all page components', (done) => {
            let linker = mock_providers_1.mockDeepLinker();
            let pages = [{ page: mock_providers_1.MockView }, { page: mock_providers_1.MockView }, { page: mock_providers_1.MockView }];
            nav_util_1.convertToViews(linker, pages).then(views => {
                expect(views.length).toEqual(3);
                expect(views[0].component).toEqual(mock_providers_1.MockView);
                expect(views[1].component).toEqual(mock_providers_1.MockView);
                expect(views[2].component).toEqual(mock_providers_1.MockView);
                done();
            });
        });
        it('should convert all string names', (done) => {
            let linker = mock_providers_1.mockDeepLinker({
                links: [{ component: mock_providers_1.MockView, name: 'someName' }]
            });
            let pages = ['someName', 'someName', 'someName'];
            nav_util_1.convertToViews(linker, pages).then(views => {
                expect(views.length).toEqual(3);
                expect(views[0].component).toEqual(mock_providers_1.MockView);
                expect(views[1].component).toEqual(mock_providers_1.MockView);
                expect(views[2].component).toEqual(mock_providers_1.MockView);
                done();
            });
        });
        it('should convert all page string names', (done) => {
            let linker = mock_providers_1.mockDeepLinker({
                links: [{ component: mock_providers_1.MockView, name: 'someName' }]
            });
            let pages = [{ page: 'someName' }, { page: 'someName' }, { page: 'someName' }];
            nav_util_1.convertToViews(linker, pages).then(views => {
                expect(views.length).toEqual(3);
                expect(views[0].component).toEqual(mock_providers_1.MockView);
                expect(views[1].component).toEqual(mock_providers_1.MockView);
                expect(views[2].component).toEqual(mock_providers_1.MockView);
                done();
            });
        });
        it('should convert all ViewControllers', (done) => {
            let pages = [mock_providers_1.mockView(mock_providers_1.MockView), mock_providers_1.mockView(mock_providers_1.MockView), mock_providers_1.mockView(mock_providers_1.MockView)];
            let linker = mock_providers_1.mockDeepLinker();
            nav_util_1.convertToViews(linker, pages).then(views => {
                expect(views.length).toEqual(3);
                expect(views[0].component).toEqual(mock_providers_1.MockView);
                expect(views[1].component).toEqual(mock_providers_1.MockView);
                expect(views[2].component).toEqual(mock_providers_1.MockView);
                done();
            });
        });
    });
    describe('convertToView', () => {
        it('should return new ViewController instance from page component link config name', (done) => {
            let linker = mock_providers_1.mockDeepLinker({
                links: [{ component: mock_providers_1.MockView, name: 'someName' }]
            });
            nav_util_1.convertToView(linker, 'someName', null).then(view => {
                expect(view.component).toEqual(mock_providers_1.MockView);
                done();
            });
        });
        it('should return new ViewController instance from page component', (done) => {
            let linker = mock_providers_1.mockDeepLinker();
            nav_util_1.convertToView(linker, mock_providers_1.MockView, null).then(view => {
                expect(view.component).toEqual(mock_providers_1.MockView);
                done();
            });
        });
        it('should return existing ViewController instance', (done) => {
            let linker = mock_providers_1.mockDeepLinker();
            let inputView = new view_controller_1.ViewController(mock_providers_1.MockView);
            nav_util_1.convertToView(linker, inputView, null).then(outputView => {
                expect(outputView).toEqual(inputView);
                done();
            });
        });
        it('should return null for null', (done) => {
            let linker = mock_providers_1.mockDeepLinker();
            nav_util_1.convertToView(linker, null, null).then(view => {
                expect(view).toEqual(null);
                done();
            });
        });
        it('should return null for undefined', (done) => {
            let linker = mock_providers_1.mockDeepLinker();
            nav_util_1.convertToView(linker, undefined, undefined).then(view => {
                expect(view).toEqual(null);
                done();
            });
        });
        it('should return null for number', (done) => {
            let linker = mock_providers_1.mockDeepLinker();
            nav_util_1.convertToView(linker, 8675309, null).then(view => {
                expect(view).toEqual(null);
                done();
            });
        });
    });
    describe('setZIndex', () => {
        it('should set zIndex 100 when leaving view doesnt have a zIndex', () => {
            let leavingView = mock_providers_1.mockView();
            let enteringView = mock_providers_1.mockView();
            let nav = mock_providers_1.mockNavController();
            mock_providers_1.mockViews(nav, [leavingView, enteringView]);
            nav_util_1.setZIndex(nav, enteringView, leavingView, nav_util_1.DIRECTION_FORWARD, mock_providers_1.mockRenderer());
            expect(enteringView._zIndex).toEqual(100);
        });
        it('should set zIndex 100 on first entering view', () => {
            let enteringView = mock_providers_1.mockView();
            let nav = mock_providers_1.mockNavController();
            nav_util_1.setZIndex(nav, enteringView, null, nav_util_1.DIRECTION_FORWARD, mock_providers_1.mockRenderer());
            expect(enteringView._zIndex).toEqual(100);
        });
        it('should set zIndex 101 on second entering view', () => {
            let leavingView = mock_providers_1.mockView();
            leavingView._zIndex = 100;
            let enteringView = mock_providers_1.mockView();
            let nav = mock_providers_1.mockNavController();
            nav_util_1.setZIndex(nav, enteringView, leavingView, nav_util_1.DIRECTION_FORWARD, mock_providers_1.mockRenderer());
            expect(enteringView._zIndex).toEqual(101);
        });
        it('should set zIndex 100 on entering view going back', () => {
            let leavingView = mock_providers_1.mockView();
            leavingView._zIndex = 101;
            let enteringView = mock_providers_1.mockView();
            let nav = mock_providers_1.mockNavController();
            nav_util_1.setZIndex(nav, enteringView, leavingView, nav_util_1.DIRECTION_BACK, mock_providers_1.mockRenderer());
            expect(enteringView._zIndex).toEqual(100);
        });
        it('should set zIndex 9999 on first entering portal view', () => {
            let enteringView = mock_providers_1.mockView();
            let nav = mock_providers_1.mockNavController();
            nav._isPortal = true;
            nav_util_1.setZIndex(nav, enteringView, null, nav_util_1.DIRECTION_FORWARD, mock_providers_1.mockRenderer());
            expect(enteringView._zIndex).toEqual(9999);
        });
    });
});
//# sourceMappingURL=nav-util.spec.js.map
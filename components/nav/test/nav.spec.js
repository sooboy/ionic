"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nav_1 = require("../nav");
const gesture_controller_1 = require("../../../gestures/gesture-controller");
const mock_providers_1 = require("../../../util/mock-providers");
describe('Nav', () => {
    describe('ngAfterViewInit', () => {
        it('should call initViews when segment has a component', (done) => {
            const nav = getNav();
            const knownComponent = {};
            const knownSegment = {
                component: knownComponent
            };
            const knownViews = {};
            spyOn(nav._linker, 'getSegmentByNavIdOrName').and.returnValue(knownSegment);
            spyOn(nav._linker, 'initViews').and.returnValue(Promise.resolve(knownViews));
            spyOn(nav, 'setPages');
            const promise = nav.ngAfterViewInit();
            promise.then(() => {
                expect(nav._linker.getSegmentByNavIdOrName).toHaveBeenCalledWith(nav.id, nav.name);
                expect(nav.setPages).toHaveBeenCalledWith(knownViews, null, null);
                done();
            }).catch((err) => {
                fail(err);
                done(err);
            });
        });
        it('should call initViews when segment has a loadChildren string', (done) => {
            const nav = getNav();
            const knownLoadChildren = 'someString';
            const knownSegment = {
                loadChildren: knownLoadChildren
            };
            const knownViews = {};
            spyOn(nav._linker, 'getSegmentByNavIdOrName').and.returnValue(knownSegment);
            spyOn(nav._linker, 'initViews').and.returnValue(Promise.resolve(knownViews));
            spyOn(nav, 'setPages');
            const promise = nav.ngAfterViewInit();
            promise.then(() => {
                expect(nav._linker.initViews).toHaveBeenCalledWith(knownSegment);
                expect(nav.setPages).toHaveBeenCalledWith(knownViews, null, null);
                done();
            }).catch((err) => {
                fail(err);
                done(err);
            });
        });
        it('should call push when root is set', (done) => {
            const nav = getNav();
            const knownComponent = {};
            nav.root = knownComponent;
            spyOn(nav, 'push').and.returnValue(Promise.resolve());
            const promise = nav.ngAfterViewInit();
            promise.then(() => {
                expect(nav.push).toHaveBeenCalled();
                done();
            }).catch((err) => {
                fail(err);
                done(err);
            });
        });
    });
});
function getNav() {
    const platform = mock_providers_1.mockPlatform();
    const config = mock_providers_1.mockConfig(null, '/', platform);
    const app = mock_providers_1.mockApp(config, platform);
    const zone = mock_providers_1.mockZone();
    const dom = mock_providers_1.mockDomController(platform);
    const elementRef = mock_providers_1.mockElementRef();
    const renderer = mock_providers_1.mockRenderer();
    const componentFactoryResolver = null;
    const gestureCtrl = new gesture_controller_1.GestureController(app);
    const linker = mock_providers_1.mockDeepLinker(null, app);
    const trnsCtrl = mock_providers_1.mockTrasitionController(config);
    const nav = new nav_1.Nav(null, null, app, config, platform, elementRef, zone, renderer, componentFactoryResolver, gestureCtrl, trnsCtrl, linker, dom, null);
    return nav;
}
//# sourceMappingURL=nav.spec.js.map
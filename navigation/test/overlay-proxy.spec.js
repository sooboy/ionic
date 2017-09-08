"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const overlay_proxy_1 = require("../overlay-proxy");
const mock_providers_1 = require("../../util/mock-providers");
describe('Overlay Proxy', () => {
    describe('dismiss', () => {
        it('should call dismiss if overlay is loaded', (done) => {
            const instance = new overlay_proxy_1.OverlayProxy(mock_providers_1.mockApp(), 'my-component', mock_providers_1.mockConfig(), mock_providers_1.mockDeepLinker());
            instance.overlay = mock_providers_1.mockOverlay();
            spyOn(instance.overlay, instance.overlay.dismiss.name).and.returnValue(Promise.resolve());
            const promise = instance.dismiss();
            promise.then(() => {
                expect(instance.overlay.dismiss).toHaveBeenCalled();
                done();
            }).catch((err) => {
                fail(err);
                done(err);
            });
        });
    });
    describe('onWillDismiss', () => {
        it('should update the handler on the overlay object', () => {
            const instance = new overlay_proxy_1.OverlayProxy(mock_providers_1.mockApp(), 'my-component', mock_providers_1.mockConfig(), mock_providers_1.mockDeepLinker());
            instance.overlay = mock_providers_1.mockOverlay();
            spyOn(instance.overlay, instance.overlay.onWillDismiss.name);
            const handler = () => { };
            instance.onWillDismiss(handler);
            expect(instance.overlay.onWillDismiss).toHaveBeenCalledWith(handler);
        });
    });
    describe('onDidDismiss', () => {
        it('should update the handler on the overlay object', () => {
            const instance = new overlay_proxy_1.OverlayProxy(mock_providers_1.mockApp(), 'my-component', mock_providers_1.mockConfig(), mock_providers_1.mockDeepLinker());
            instance.overlay = mock_providers_1.mockOverlay();
            spyOn(instance.overlay, instance.overlay.onDidDismiss.name);
            const handler = () => { };
            instance.onDidDismiss(handler);
            expect(instance.overlay.onDidDismiss).toHaveBeenCalledWith(handler);
        });
    });
    describe('createAndPresentOverlay', () => {
        it('should set onWillDismiss and onDidDismiss handlers', (done) => {
            const instance = new overlay_proxy_1.OverlayProxy(mock_providers_1.mockApp(), 'my-component', mock_providers_1.mockConfig(), mock_providers_1.mockDeepLinker());
            const handler = () => { };
            instance.onWillDismiss(handler);
            instance.onDidDismiss(handler);
            const knownOptions = {};
            const knownOverlay = mock_providers_1.mockOverlay();
            spyOn(knownOverlay, knownOverlay.present.name).and.returnValue(Promise.resolve());
            spyOn(knownOverlay, knownOverlay.onDidDismiss.name);
            spyOn(knownOverlay, knownOverlay.onWillDismiss.name);
            spyOn(instance, 'getImplementation').and.returnValue(knownOverlay);
            const promise = instance.createAndPresentOverlay(knownOptions);
            promise.then(() => {
                expect(knownOverlay.present).toHaveBeenCalledWith(knownOptions);
                expect(knownOverlay.onDidDismiss).toHaveBeenCalledWith(handler);
                expect(knownOverlay.onWillDismiss).toHaveBeenCalledWith(handler);
                done();
            }).catch((err) => {
                fail(err);
                done(err);
            });
        });
    });
    describe('present', () => {
        it('should use present the overlay immediately if the component is not a string', (done) => {
            const knownComponent = {};
            const deepLinker = mock_providers_1.mockDeepLinker();
            const knownOverlay = mock_providers_1.mockOverlay();
            const instance = new overlay_proxy_1.OverlayProxy(mock_providers_1.mockApp(), knownComponent, mock_providers_1.mockConfig(), deepLinker);
            const knownOptions = {};
            spyOn(instance, 'getImplementation').and.returnValue(knownOverlay);
            spyOn(deepLinker, 'getComponentFromName');
            const promise = instance.present(knownOptions);
            promise.then(() => {
                expect(deepLinker.getComponentFromName).not.toHaveBeenCalled();
                done();
            }).catch((err) => {
                fail(err);
                done(err);
            });
        });
        it('should load the component if its a string before using it', (done) => {
            const knownComponent = {};
            const deepLinker = mock_providers_1.mockDeepLinker();
            const knownOverlay = mock_providers_1.mockOverlay();
            const componentName = 'my-component';
            const instance = new overlay_proxy_1.OverlayProxy(mock_providers_1.mockApp(), componentName, mock_providers_1.mockConfig(), deepLinker);
            const knownOptions = {};
            spyOn(instance, 'getImplementation').and.returnValue(knownOverlay);
            spyOn(deepLinker, 'getComponentFromName').and.returnValue(Promise.resolve(knownComponent));
            const promise = instance.present(knownOptions);
            promise.then(() => {
                expect(deepLinker.getComponentFromName).toHaveBeenCalledWith(componentName);
                done();
            }).catch((err) => {
                fail(err);
                done(err);
            });
        });
    });
});
//# sourceMappingURL=overlay-proxy.spec.js.map
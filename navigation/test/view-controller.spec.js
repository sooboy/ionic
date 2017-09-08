"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_providers_1 = require("../../util/mock-providers");
const nav_util_1 = require("../nav-util");
describe('ViewController', () => {
    describe('willEnter', () => {
        it('should emit LifeCycleEvent when called with component data', (done) => {
            // arrange
            let viewController = mock_providers_1.mockView();
            subscription = viewController.willEnter.subscribe((event) => {
                // assert
                expect(event).toEqual(null);
                done();
            }, (err) => {
                done(err);
            });
            // act
            viewController._state = nav_util_1.STATE_ATTACHED;
            viewController._willEnter();
        }, 10000);
    });
    describe('didEnter', () => {
        it('should emit LifeCycleEvent when called with component data', (done) => {
            // arrange
            let viewController = mock_providers_1.mockView();
            subscription = viewController.didEnter.subscribe((event) => {
                // assert
                expect(event).toEqual(null);
                done();
            }, (err) => {
                done(err);
            });
            // act
            viewController._state = nav_util_1.STATE_ATTACHED;
            viewController._didEnter();
        }, 10000);
    });
    describe('willLeave', () => {
        it('should emit LifeCycleEvent when called with component data', (done) => {
            // arrange
            let viewController = mock_providers_1.mockView();
            subscription = viewController.willLeave.subscribe((event) => {
                // assert
                expect(event).toEqual(null);
                done();
            }, (err) => {
                done(err);
            });
            // act
            viewController._state = nav_util_1.STATE_ATTACHED;
            viewController._willLeave(false);
        }, 10000);
    });
    describe('didLeave', () => {
        it('should emit LifeCycleEvent when called with component data', (done) => {
            // arrange
            let viewController = mock_providers_1.mockView();
            subscription = viewController.didLeave.subscribe((event) => {
                // assert
                expect(event).toEqual(null);
                done();
            }, (err) => {
                done(err);
            });
            // act
            viewController._didLeave();
        }, 10000);
    });
    describe('willUnload', () => {
        it('should emit LifeCycleEvent when called with component data', (done) => {
            // arrange
            let viewController = mock_providers_1.mockView();
            subscription = viewController.willUnload.subscribe((event) => {
                expect(event).toEqual(null);
                done();
            }, (err) => {
                done(err);
            });
            // act
            viewController._willUnload();
        }, 10000);
    });
    describe('willDismiss', () => {
        it('should have data in the willDismiss', (done) => {
            // arrange
            let viewController = mock_providers_1.mockView();
            let navControllerBase = mock_providers_1.mockNavController();
            navControllerBase._isPortal = true;
            mock_providers_1.mockViews(navControllerBase, [viewController]);
            viewController.onWillDismiss((data) => {
                expect(data).toEqual('willDismiss data');
                done();
            });
            viewController.dismiss('willDismiss data');
        }, 10000);
    });
    describe('didDismiss', () => {
        it('should have data in the didDismiss', (done) => {
            // arrange
            let viewController = mock_providers_1.mockView();
            let navControllerBase = mock_providers_1.mockNavController();
            navControllerBase._isPortal = true;
            mock_providers_1.mockViews(navControllerBase, [viewController]);
            viewController.onDidDismiss((data) => {
                expect(data).toEqual('didDismiss data');
                done();
            });
            viewController.dismiss('didDismiss data');
        }, 10000);
        it('should not crash when calling dismiss() twice', (done) => {
            // arrange
            let viewController = mock_providers_1.mockView();
            let navControllerBase = mock_providers_1.mockNavController();
            navControllerBase._isPortal = true;
            mock_providers_1.mockViews(navControllerBase, [viewController]);
            viewController.onDidDismiss((data) => {
                expect(data).toEqual('didDismiss data');
                setTimeout(() => {
                    viewController.dismiss(); // it should not crash
                    done();
                }, 100);
            });
            viewController.dismiss('didDismiss data');
        }, 10000);
    });
    afterEach(() => {
        if (subscription) {
            subscription.unsubscribe();
        }
    });
    let subscription = null;
});
//# sourceMappingURL=view-controller.spec.js.map
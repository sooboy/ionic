"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const app_1 = require("../components/app/app");
const config_1 = require("../config/config");
const content_1 = require("../components/content/content");
const deep_linker_1 = require("../navigation/deep-linker");
const dom_controller_1 = require("../platform/dom-controller");
const gesture_controller_1 = require("../gestures/gesture-controller");
const haptic_1 = require("../tap-click/haptic");
const app_root_1 = require("../components/app/app-root");
const menu_1 = require("../components/menu/menu");
const nav_controller_base_1 = require("../navigation/nav-controller-base");
const overlay_portal_1 = require("../components/app/overlay-portal");
const page_transition_1 = require("../transitions/page-transition");
const platform_1 = require("../platform/platform");
const query_params_1 = require("../platform/query-params");
const tab_1 = require("../components/tabs/tab");
const tabs_1 = require("../components/tabs/tabs");
const transition_controller_1 = require("../transitions/transition-controller");
const url_serializer_1 = require("../navigation/url-serializer");
const view_controller_1 = require("../navigation/view-controller");
const module_loader_1 = require("./module-loader");
const ng_module_loader_1 = require("./ng-module-loader");
const nav_util_1 = require("../navigation/nav-util");
const ion_1 = require("../components/ion");
const item_1 = require("../components/item/item");
const form_1 = require("./form");
function mockConfig(config, _url = '/', platform) {
    const c = new config_1.Config();
    const p = platform || mockPlatform();
    c.init(config, p);
    return c;
}
exports.mockConfig = mockConfig;
function mockQueryParams(url = '/') {
    const qp = new query_params_1.QueryParams();
    qp.parseUrl(url);
    return qp;
}
exports.mockQueryParams = mockQueryParams;
function mockPlatform() {
    return new MockPlatform();
}
exports.mockPlatform = mockPlatform;
class MockPlatform extends platform_1.Platform {
    constructor() {
        super();
        this.timeoutIds = 0;
        this.timeouts = [];
        this.rafIds = 0;
        this.timeStamps = 0;
        this.rafs = [];
        const doc = document.implementation.createHTMLDocument('');
        this.setWindow(window);
        this.setDocument(doc);
        this.setCssProps(doc.documentElement);
    }
    timeout(callback, timeout) {
        const timeoutId = ++this.timeoutIds;
        this.timeouts.push({
            callback: callback,
            timeout: timeout,
            timeoutId: timeoutId
        });
        return timeoutId;
    }
    cancelTimeout(timeoutId) {
        for (var i = 0; i < this.timeouts.length; i++) {
            if (timeoutId === this.timeouts[i].timeoutId) {
                this.timeouts.splice(i, 1);
                break;
            }
        }
    }
    flushTimeouts(done) {
        setTimeout(() => {
            this.timeouts.sort(function (a, b) {
                if (a.timeout < b.timeout)
                    return -1;
                if (a.timeout > b.timeout)
                    return 1;
                return 0;
            }).forEach(t => {
                t.callback();
            });
            this.timeouts.length = 0;
            done();
        });
    }
    flushTimeoutsUntil(timeout, done) {
        setTimeout(() => {
            this.timeouts.sort(function (a, b) {
                if (a.timeout < b.timeout)
                    return -1;
                if (a.timeout > b.timeout)
                    return 1;
                return 0;
            });
            const keepers = [];
            this.timeouts.forEach(t => {
                if (t.timeout < timeout) {
                    t.callback();
                }
                else {
                    keepers.push(t);
                }
            });
            this.timeouts = keepers;
            done();
        });
    }
    raf(callback) {
        const rafId = ++this.rafIds;
        this.rafs.push({
            callback: callback,
            rafId: rafId
        });
        return rafId;
    }
    cancelRaf(rafId) {
        for (var i = 0; i < this.rafs.length; i++) {
            if (rafId === this.rafs[i].rafId) {
                this.rafs.splice(i, 1);
                break;
            }
        }
    }
    flushRafs(done) {
        const timestamp = ++this.timeStamps;
        setTimeout(() => {
            this.rafs.forEach(raf => {
                raf.callback(timestamp);
            });
            this.rafs.length = 0;
            done(timestamp);
        });
    }
}
exports.MockPlatform = MockPlatform;
function mockDomController(platform) {
    platform = platform || mockPlatform();
    return new MockDomController(platform);
}
exports.mockDomController = mockDomController;
class MockDomController extends dom_controller_1.DomController {
    constructor(mockedPlatform) {
        super(mockedPlatform);
        this.mockedPlatform = mockedPlatform;
    }
    flush(done) {
        this.mockedPlatform.flushTimeouts(() => {
            this.mockedPlatform.flushRafs((timeStamp) => {
                done(timeStamp);
            });
        });
    }
    flushUntil(timeout, done) {
        this.mockedPlatform.flushTimeoutsUntil(timeout, () => {
            this.mockedPlatform.flushRafs((timeStamp) => {
                done(timeStamp);
            });
        });
    }
}
exports.MockDomController = MockDomController;
function mockApp(config, platform) {
    platform = platform || mockPlatform();
    config = config || mockConfig(null, '/', platform);
    let app = new app_1.App(config, platform);
    mockIonicApp(app, config, platform);
    return app;
}
exports.mockApp = mockApp;
function mockIonicApp(app, config, plt) {
    let appRoot = new app_root_1.IonicApp(null, null, mockElementRef(), mockRenderer(), config, plt, app);
    appRoot._loadingPortal = mockOverlayPortal(app, config, plt);
    appRoot._toastPortal = mockOverlayPortal(app, config, plt);
    appRoot._overlayPortal = mockOverlayPortal(app, config, plt);
    appRoot._modalPortal = mockOverlayPortal(app, config, plt);
    return appRoot;
}
exports.mockIonicApp = mockIonicApp;
exports.mockTrasitionController = function (config) {
    let platform = mockPlatform();
    platform.raf = function (callback) {
        callback();
    };
    let trnsCtrl = new transition_controller_1.TransitionController(platform, config);
    trnsCtrl.get = (trnsId, enteringView, leavingView, opts) => {
        let trns = new page_transition_1.PageTransition(platform, enteringView, leavingView, opts);
        trns.trnsId = trnsId;
        return trns;
    };
    return trnsCtrl;
};
function mockContent() {
    const platform = mockPlatform();
    return new content_1.Content(mockConfig(), platform, mockDomController(platform), mockElementRef(), mockRenderer(), null, null, mockZone(), null, null);
}
exports.mockContent = mockContent;
function mockZone() {
    return new core_1.NgZone({ enableLongStackTrace: false });
}
exports.mockZone = mockZone;
function mockChangeDetectorRef() {
    let cd = {
        reattach: () => { },
        detach: () => { },
        detectChanges: () => { }
    };
    return cd;
}
exports.mockChangeDetectorRef = mockChangeDetectorRef;
function mockGestureController(app) {
    if (!app) {
        app = mockApp();
    }
    return new gesture_controller_1.GestureController(app);
}
exports.mockGestureController = mockGestureController;
class MockElementRef {
    constructor(ele) {
        this.nativeElement = ele;
    }
}
exports.MockElementRef = MockElementRef;
class MockElement {
    constructor() {
        this.children = [];
        this.classList = new ClassList();
        this.attributes = {};
        this.style = {};
        this.nodeName = 'ION-MOCK';
        this.clientWidth = 0;
        this.clientHeight = 0;
        this.clientTop = 0;
        this.clientLeft = 0;
        this.offsetWidth = 0;
        this.offsetHeight = 0;
        this.offsetTop = 0;
        this.offsetLeft = 0;
        this.scrollTop = 0;
        this.scrollHeight = 0;
    }
    get className() {
        return this.classList.classes.join(' ');
    }
    set className(val) {
        this.classList.classes = val.split(' ');
    }
    hasAttribute(name) {
        return !!this.attributes[name];
    }
    getAttribute(name) {
        return this.attributes[name];
    }
    setAttribute(name, val) {
        this.attributes[name] = val;
    }
    addEventListener(_type, _listener, _options) { }
    removeEventListener(_type, _listener, _options) { }
    removeAttribute(name) {
        delete this.attributes[name];
    }
}
exports.MockElement = MockElement;
class ClassList {
    constructor() {
        this.classes = [];
    }
    add(className) {
        if (!this.contains(className)) {
            this.classes.push(className);
        }
    }
    remove(className) {
        const index = this.classes.indexOf(className);
        if (index > -1) {
            this.classes.splice(index, 1);
        }
    }
    toggle(className) {
        if (this.contains(className)) {
            this.remove(className);
        }
        else {
            this.add(className);
        }
    }
    contains(className) {
        return this.classes.indexOf(className) > -1;
    }
}
exports.ClassList = ClassList;
function mockElementRef() {
    return new MockElementRef(new MockElement());
}
exports.mockElementRef = mockElementRef;
function mockElementRefEle(ele) {
    return new MockElementRef(ele);
}
exports.mockElementRefEle = mockElementRefEle;
class MockRenderer {
    setElementAttribute(renderElement, name, val) {
        if (name === null) {
            renderElement.removeAttribute(name);
        }
        else {
            renderElement.setAttribute(name, val);
        }
    }
    setElementClass(renderElement, className, isAdd) {
        if (isAdd) {
            renderElement.classList.add(className);
        }
        else {
            renderElement.classList.remove(className);
        }
    }
    setElementStyle(renderElement, styleName, styleValue) {
        renderElement.style[styleName] = styleValue;
    }
}
exports.MockRenderer = MockRenderer;
function mockRenderer() {
    const renderer = new MockRenderer();
    return renderer;
}
exports.mockRenderer = mockRenderer;
function mockLocation() {
    let location = {
        path: () => { return ''; },
        subscribe: () => { },
        go: () => { },
        back: () => { },
        prepareExternalUrl: () => { }
    };
    return location;
}
exports.mockLocation = mockLocation;
function mockView(component, data) {
    if (!component) {
        component = MockView;
    }
    let view = new view_controller_1.ViewController(component, data);
    view.init(mockComponentRef());
    return view;
}
exports.mockView = mockView;
function mockViews(nav, views) {
    nav._views = views;
    views.forEach(v => {
        v._setNav(nav);
    });
}
exports.mockViews = mockViews;
function mockComponentRef() {
    let componentRef = {
        location: mockElementRef(),
        changeDetectorRef: mockChangeDetectorRef(),
        destroy: () => { }
    };
    return componentRef;
}
exports.mockComponentRef = mockComponentRef;
function mockDeepLinker(linkConfig = null, app) {
    app = app || mockApp(mockConfig(), mockPlatform());
    let serializer = new url_serializer_1.UrlSerializer(app, linkConfig);
    let location = mockLocation();
    return new deep_linker_1.DeepLinker(app || mockApp(), serializer, location, null, null);
}
exports.mockDeepLinker = mockDeepLinker;
function mockNavController() {
    let platform = mockPlatform();
    let config = mockConfig(null, '/', platform);
    let app = mockApp(config, platform);
    let zone = mockZone();
    let dom = mockDomController(platform);
    let elementRef = mockElementRef();
    let renderer = mockRenderer();
    let componentFactoryResolver = null;
    let gestureCtrl = new gesture_controller_1.GestureController(app);
    let linker = mockDeepLinker(null, app);
    let trnsCtrl = exports.mockTrasitionController(config);
    let nav = new nav_controller_base_1.NavControllerBase(null, app, config, platform, elementRef, zone, renderer, componentFactoryResolver, gestureCtrl, trnsCtrl, linker, dom, null);
    nav._viewInit = function (enteringView) {
        enteringView.init(mockComponentRef());
        enteringView._state = nav_util_1.STATE_INITIALIZED;
    };
    nav._orgViewInsert = nav._viewAttachToDOM;
    nav._viewAttachToDOM = function (view, componentRef, _viewport) {
        let mockedViewport = {
            insert: () => { }
        };
        nav._orgViewInsert(view, componentRef, mockedViewport);
    };
    return nav;
}
exports.mockNavController = mockNavController;
function mockOverlayPortal(app, config, plt) {
    let zone = mockZone();
    let dom = mockDomController(plt);
    let elementRef = mockElementRef();
    let renderer = mockRenderer();
    let componentFactoryResolver = null;
    let gestureCtrl = new gesture_controller_1.GestureController(app);
    let serializer = new url_serializer_1.UrlSerializer(app, null);
    let location = mockLocation();
    let deepLinker = new deep_linker_1.DeepLinker(app, serializer, location, null, null);
    return new overlay_portal_1.OverlayPortal(app, config, plt, elementRef, zone, renderer, componentFactoryResolver, gestureCtrl, null, deepLinker, null, dom, null);
}
exports.mockOverlayPortal = mockOverlayPortal;
function mockTab(parentTabs, overrideLoad = true) {
    let platform = mockPlatform();
    let config = mockConfig(null, '/', platform);
    let app = parentTabs._app || mockApp(config, platform);
    let zone = mockZone();
    let dom = mockDomController(platform);
    let elementRef = mockElementRef();
    let renderer = mockRenderer();
    let changeDetectorRef = mockChangeDetectorRef();
    let compiler = null;
    let gestureCtrl = new gesture_controller_1.GestureController(app);
    let linker = mockDeepLinker(null, app);
    let tab = new tab_1.Tab(parentTabs, app, config, platform, elementRef, zone, renderer, compiler, changeDetectorRef, gestureCtrl, null, linker, dom, null);
    if (overrideLoad) {
        tab.load = (_opts, cb) => {
            cb(false, false);
            return Promise.resolve();
        };
    }
    return tab;
}
exports.mockTab = mockTab;
function mockForm() {
    return new form_1.Form();
}
exports.mockForm = mockForm;
function mockIon() {
    const config = mockConfig();
    const elementRef = mockElementRef();
    const renderer = mockRenderer();
    return new ion_1.Ion(config, elementRef, renderer, 'ion');
}
exports.mockIon = mockIon;
function mockItem() {
    const form = mockForm();
    const config = mockConfig();
    const elementRef = mockElementRef();
    const renderer = mockRenderer();
    return new item_1.Item(form, config, elementRef, renderer, null);
}
exports.mockItem = mockItem;
function mockTabs(app) {
    let platform = mockPlatform();
    let config = mockConfig(null, '/', platform);
    app = app || mockApp(config, platform);
    let elementRef = mockElementRef();
    let renderer = mockRenderer();
    let linker = mockDeepLinker();
    return new tabs_1.Tabs(null, null, app, config, elementRef, platform, renderer, linker);
}
exports.mockTabs = mockTabs;
function mockMenu(platform = null) {
    let app = mockApp();
    let gestureCtrl = new gesture_controller_1.GestureController(app);
    let dom = mockDomController();
    let elementRef = mockElementRef();
    let renderer = mockRenderer();
    let plt = platform === null ? mockPlatform() : platform;
    return new menu_1.Menu(null, elementRef, null, plt, renderer, null, gestureCtrl, dom, app);
}
exports.mockMenu = mockMenu;
function mockDeepLinkConfig(links) {
    return {
        links: links || [
            { component: MockView1, name: 'viewone' },
            { component: MockView2, name: 'viewtwo' },
            { component: MockView3, name: 'viewthree' },
            { component: MockView4, name: 'viewfour' },
            { component: MockView5, name: 'viewfive' }
        ]
    };
}
exports.mockDeepLinkConfig = mockDeepLinkConfig;
function mockHaptic() {
    return new haptic_1.Haptic(mockPlatform());
}
exports.mockHaptic = mockHaptic;
class MockView {
}
exports.MockView = MockView;
class MockView1 {
}
exports.MockView1 = MockView1;
class MockView2 {
}
exports.MockView2 = MockView2;
class MockView3 {
}
exports.MockView3 = MockView3;
class MockView4 {
}
exports.MockView4 = MockView4;
class MockView5 {
}
exports.MockView5 = MockView5;
function noop() { return 'noop'; }
exports.noop = noop;
function mockModuleLoader(ngModuleLoader) {
    ngModuleLoader = ngModuleLoader || mockNgModuleLoader();
    return new module_loader_1.ModuleLoader(ngModuleLoader, null);
}
exports.mockModuleLoader = mockModuleLoader;
function mockNgModuleLoader() {
    return new ng_module_loader_1.NgModuleLoader(null);
}
exports.mockNgModuleLoader = mockNgModuleLoader;
function mockOverlay() {
    return {
        present: (_opts) => { return Promise.resolve(); },
        dismiss: (_data, _role, _navOptions) => { return Promise.resolve(); },
        onDidDismiss: (_callback) => { },
        onWillDismiss: (_callback) => { }
    };
}
exports.mockOverlay = mockOverlay;
//# sourceMappingURL=mock-providers.js.map
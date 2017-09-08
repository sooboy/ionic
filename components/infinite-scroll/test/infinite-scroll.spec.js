"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const content_1 = require("../../content/content");
const infinite_scroll_1 = require("../infinite-scroll");
const mock_providers_1 = require("../../../util/mock-providers");
describe('Infinite Scroll', () => {
    describe('_onScroll', () => {
        it('should not set loading state when does not meet threshold', () => {
            setInfiniteScrollHeight(25);
            content.getContentDimensions = function () {
                return mockGetContentDimensions(1000, 350, 500);
            };
            inf.threshold = '100px';
            setInfiniteScrollTop(300);
            var result = inf._onScroll(ev);
            expect(result).toEqual(6);
        });
        it('should set loading state when meets threshold', () => {
            setInfiniteScrollHeight(25);
            content.getContentDimensions = function () {
                return mockGetContentDimensions(1000, 500, 500);
            };
            inf.threshold = '100px';
            setInfiniteScrollTop(300);
            var result = inf._onScroll(ev);
            expect(result).toEqual(5);
        });
        it('should not run if there is not infinite element height', () => {
            setInfiniteScrollTop(0);
            var result = inf._onScroll(ev);
            expect(result).toEqual(3);
        });
        it('should not run again if ran less than 32ms ago', () => {
            ev.timeStamp = Date.now();
            inf._lastCheck = Date.now();
            var result = inf._onScroll(ev);
            expect(result).toEqual(2);
        });
        it('should not run if state is disabled', () => {
            inf.state = 'disabled';
            var result = inf._onScroll(ev);
            expect(result).toEqual(1);
        });
        it('should not run if state is loading', () => {
            inf.state = 'loading';
            var result = inf._onScroll(ev);
            expect(result).toEqual(1);
        });
        it('should not run if not enabled', () => {
            inf.state = 'disabled';
            var result = inf._onScroll(ev);
            expect(result).toEqual(1);
        });
    });
    describe('threshold', () => {
        it('should set by percent', () => {
            inf.threshold = '10%';
            expect(inf._thr).toEqual('10%');
            expect(inf._thrPx).toEqual(0);
            expect(inf._thrPc).toEqual(0.1);
        });
        it('should set by pixels', () => {
            inf.threshold = '10';
            expect(inf._thr).toEqual('10');
            expect(inf._thrPx).toEqual(10);
            expect(inf._thrPc).toEqual(0);
            inf.threshold = '10px';
            expect(inf._thr).toEqual('10px');
            expect(inf._thrPx).toEqual(10);
            expect(inf._thrPc).toEqual(0);
        });
    });
    describe('position', () => {
        it('should default to bottom', () => {
            expect(inf._position).toEqual('bottom');
        });
        it('should set to top', () => {
            inf.position = 'top';
            expect(inf._position).toEqual('top');
        });
        it('should set to bottom', () => {
            inf.position = 'bottom';
            expect(inf._position).toEqual('bottom');
        });
        it('should not set to anything else', () => {
            inf.position = 'derp';
            expect(inf._position).toEqual('bottom');
        });
    });
    let config = mock_providers_1.mockConfig();
    let inf;
    let content;
    let contentElementRef;
    let infiniteElementRef;
    let ev = {};
    let dom;
    beforeEach(() => {
        contentElementRef = mock_providers_1.mockElementRef();
        dom = mock_providers_1.mockDomController();
        content = new content_1.Content(config, mock_providers_1.mockPlatform(), dom, contentElementRef, mock_providers_1.mockRenderer(), null, null, mock_providers_1.mockZone(), null, null);
        let ele = document.createElement('div');
        ele.className = 'scroll-content';
        content._scrollContent = mock_providers_1.mockElementRefEle(ele);
        infiniteElementRef = mock_providers_1.mockElementRef();
        inf = new infinite_scroll_1.InfiniteScroll(content, mock_providers_1.mockZone(), infiniteElementRef, dom);
    });
    function setInfiniteScrollTop(scrollTop) {
        infiniteElementRef.nativeElement.scrollTop = scrollTop;
    }
    function setInfiniteScrollHeight(scrollHeight) {
        infiniteElementRef.nativeElement.scrollHeight = scrollHeight;
    }
    function mockGetContentDimensions(scrollHeight, scrollTop, contentHeight) {
        return {
            scrollHeight: scrollHeight,
            scrollTop: scrollTop,
            contentHeight: contentHeight,
            contentTop: null,
            contentBottom: null,
            contentWidth: null,
            contentLeft: null,
            contentRight: null,
            scrollBottom: null,
            scrollWidth: null,
            scrollLeft: null,
            scrollRight: null
        };
    }
});
//# sourceMappingURL=infinite-scroll.spec.js.map
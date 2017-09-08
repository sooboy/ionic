"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const content_1 = require("../../content/content");
const img_1 = require("../img");
const mock_providers_1 = require("../../../util/mock-providers");
describe('Img', () => {
    describe('reset', () => {
        it('should clear rendering src', () => {
            spyOn(img, '_isLoaded');
            img._renderedSrc = '_renderedSrc.jpg';
            img.reset();
            expect(img._isLoaded).toHaveBeenCalledWith(false);
            expect(img._renderedSrc).toEqual(null);
        });
    });
    describe('src setter', () => {
        it('should set datauri src', () => {
            spyOn(img, 'update');
            img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==';
            expect(img.src).toEqual('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==');
            expect(img.update).toHaveBeenCalled();
        });
        it('should set src', () => {
            spyOn(img, 'update');
            img.src = 'image.jpg';
            expect(img.src).toEqual('image.jpg');
            expect(img.update).toHaveBeenCalled();
        });
    });
    describe('src getter', () => {
        it('should get src if set', () => {
            img._src = 'loaded.jpg';
            expect(img.src).toEqual('loaded.jpg');
        });
    });
    let contentElementRef;
    let img;
    let elementRef;
    let renderer;
    let plt;
    let content;
    let dom;
    beforeEach(() => {
        contentElementRef = mock_providers_1.mockElementRef();
        dom = mock_providers_1.mockDomController();
        content = new content_1.Content(mock_providers_1.mockConfig(), mock_providers_1.mockPlatform(), dom, contentElementRef, mock_providers_1.mockRenderer(), null, null, mock_providers_1.mockZone(), null, null);
        let ele = document.createElement('div');
        ele.className = 'scroll-content';
        content._scrollContent = mock_providers_1.mockElementRefEle(ele);
        elementRef = mock_providers_1.mockElementRef();
        renderer = mock_providers_1.mockRenderer();
        plt = mock_providers_1.mockPlatform();
        dom = mock_providers_1.mockDomController();
        img = new img_1.Img(elementRef, renderer, plt, content, dom);
    });
});
//# sourceMappingURL=img.spec.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mock_providers_1 = require("../../../util/mock-providers");
const core_1 = require("@angular/core");
const modal_controller_1 = require("../modal-controller");
describe('Modal', () => {
    describe('create', () => {
        it('should have the correct properties on modal view controller proxy instance', () => {
            let modalCtrl = new modal_controller_1.ModalController(mock_providers_1.mockApp(), mock_providers_1.mockConfig(), mock_providers_1.mockDeepLinker());
            let modalViewControllerProxy = modalCtrl.create(ComponentToPresent);
            expect(modalViewControllerProxy._component).toEqual(ComponentToPresent);
        });
    });
});
let ComponentToPresent = class ComponentToPresent {
};
ComponentToPresent = __decorate([
    core_1.Component({
        template: `<div class="myComponent"></div>`
    })
], ComponentToPresent);
//# sourceMappingURL=modal.spec.js.map
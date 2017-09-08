"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_providers_1 = require("../../../util/mock-providers");
const toast_controller_1 = require("../toast-controller");
describe('Toast', () => {
    describe('create', () => {
        it('should create toast with close button', () => {
            let toast = toastCtrl.create({
                message: 'Please Wait...',
                showCloseButton: true
            });
            expect(toast.data.position).toEqual('bottom');
            expect(toast.data.message).toEqual('Please Wait...');
            expect(toast.data.showCloseButton).toEqual(true);
        });
        it('should create toast with position top', () => {
            let toast = toastCtrl.create({
                message: 'Please Wait...',
                position: 'top'
            });
            expect(toast.data.position).toEqual('top');
        });
        it('should create toast with position middle', () => {
            let toast = toastCtrl.create({
                message: 'Please Wait...',
                position: 'middle'
            });
            expect(toast.data.position).toEqual('middle');
        });
        it('should create toast with position bottom', () => {
            let toast = toastCtrl.create({
                message: 'Please Wait...',
                position: 'bottom'
            });
            expect(toast.data.position).toEqual('bottom');
        });
        it('should set a duration', () => {
            let toast = toastCtrl.create({
                message: 'Please Wait...',
                duration: 3000
            });
            expect(toast.data.duration).toEqual(3000);
        });
    });
    let toastCtrl;
    beforeEach(() => {
        toastCtrl = new toast_controller_1.ToastController(mock_providers_1.mockApp(), mock_providers_1.mockConfig());
    });
});
//# sourceMappingURL=toast.spec.js.map
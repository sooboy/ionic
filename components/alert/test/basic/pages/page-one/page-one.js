"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const __1 = require("../../../../../..");
let PageOne = class PageOne {
    constructor(alertCtrl, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.testConfirmOpen = false;
        this.testPromptOpen = false;
        this.testConfirmResult = '';
        this.testPromptResult = '';
        this.testRadioOpen = false;
        this.testRadioResult = '';
        this.testCheckboxOpen = false;
        this.testCheckboxResult = '';
    }
    doAlert() {
        this.alertCtrl.create()
            .setTitle('Alert')
            .setSubTitle('Subtitle')
            .setMessage('This is an alert message.')
            .addButton('OK')
            .present();
    }
    doConfirm() {
        let alert = this.alertCtrl.create();
        alert.setTitle('Confirm!');
        alert.setMessage('Message <strong>text</strong>!!!');
        alert.addButton({
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
                console.log('Confirm Cancel');
                this.testConfirmResult = 'Cancel';
                this.testConfirmOpen = false;
            }
        });
        alert.addButton({
            text: 'Okay',
            handler: () => {
                console.log('Confirm Ok');
                this.testConfirmResult = 'Ok';
                this.testConfirmOpen = false;
            }
        });
        alert.present(alert).then(() => {
            this.testConfirmOpen = true;
        });
    }
    doAlertLongMessage() {
        let alert = this.alertCtrl.create({
            title: 'Alert',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit diam lorem, a faucibus turpis sagittis eu. In finibus augue in dui varius convallis. Donec vulputate nibh gravida odio vulputate commodo. Suspendisse imperdiet consequat egestas. Nulla feugiat consequat urna eu tincidunt. Cras nec blandit turpis, eu auctor nunc. Pellentesque finibus, magna eu vestibulum imperdiet, arcu ex lacinia massa, eget volutpat quam leo a orci. Etiam mauris est, elementum at feugiat at, dictum in sapien. Mauris efficitur eros sodales convallis egestas. Phasellus eu faucibus nisl. In eu diam vitae libero egestas lacinia. Integer sed convallis metus, nec commodo felis. Duis libero augue, ornare at tempus non, posuere vel augue. Cras mattis dui at tristique aliquam. Phasellus fermentum nibh ligula, porta hendrerit ligula elementum eu. Suspendisse sollicitudin enim at libero iaculis pulvinar. Donec ac massa id purus laoreet rutrum quis eu urna. Mauris luctus erat vel magna porttitor, vel varius erat rhoncus. Donec eu turpis vestibulum, feugiat urna id, gravida mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lobortis tortor. Nam ultrices volutpat elit, sed pharetra nulla suscipit at. Nunc eu accumsan eros, id auctor libero. Suspendisse potenti. Nam vitae dapibus metus. Maecenas nisi dui, sagittis et condimentum eu, bibendum vel eros. Vivamus malesuada, tortor in accumsan iaculis, urna velit consectetur ante, nec semper sem diam a diam. In et semper ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit, velit vel porttitor euismod, neque risus blandit nulla, non laoreet libero dolor et odio. Nulla enim risus, feugiat eu urna sed, ultrices semper felis. Sed blandit mi diam. Nunc quis mi ligula. Pellentesque a elit eu orci volutpat egestas. Aenean fermentum eleifend quam, ut tincidunt eros tristique et. Nam dapibus tincidunt ligula, id faucibus felis sodales quis. Donec tincidunt lectus ipsum, ac semper tellus cursus ac. Vestibulum nec dui a lectus accumsan vestibulum quis et velit. Aliquam finibus justo et odio euismod, viverra condimentum eros tristique. Sed eget luctus risus. Pellentesque lorem magna, dictum non congue sodales, laoreet eget quam. In sagittis vulputate dolor a ultricies. Donec viverra leo sed ex maximus, in finibus elit gravida. Aliquam posuere vulputate mi. Suspendisse potenti. Nunc consectetur congue arcu, at pharetra dui varius non. Etiam vestibulum congue felis, id ullamcorper neque convallis ultrices. Aenean congue, diam a iaculis mollis, nisl eros maximus arcu, nec hendrerit purus felis porta diam. Nullam vitae ultrices dui, ac dictum sapien. Phasellus eu magna luctus, varius urna id, molestie quam. Nulla in semper tellus. Curabitur lacinia tellus sit amet lacinia dapibus. Sed id condimentum tellus, nec aliquam sapien. Vivamus luctus at ante a tincidunt.',
            buttons: ['Cancel', 'OK']
        });
        alert.present(alert);
    }
    doAlertNoMessage() {
        let alert = this.alertCtrl.create({
            title: 'Alert',
            buttons: ['OK']
        });
        alert.present();
    }
    doMultipleButtons() {
        let alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'Subtitle',
            message: 'This is an alert message.'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Open Modal',
            handler: () => {
                this.modalCtrl.create('modal-page').present();
                // do not close the alert when this button is pressed
                return false;
            }
        });
        alert.addButton('Delete');
        alert.present();
    }
    doPrompt() {
        let alert = this.alertCtrl.create();
        alert.setTitle('Prompt!');
        alert.addInput({
            placeholder: 'Placeholder 1'
        });
        alert.addInput({
            name: 'name2',
            id: 'name2-id',
            value: 'hello',
            placeholder: 'Placeholder 2'
        });
        alert.addInput({
            name: 'name3',
            value: 'http://ionicframework.com',
            type: 'url',
            placeholder: 'Favorite site ever'
        });
        // input date with min & max
        alert.addInput({
            name: 'name4',
            type: 'date',
            min: '2017-03-01',
            max: '2018-01-12'
        });
        // input date without min nor max
        alert.addInput({
            name: 'name5',
            type: 'date'
        });
        alert.addInput({
            name: 'name6',
            type: 'number',
            min: -5,
            max: 10
        });
        alert.addInput({
            name: 'name7',
            type: 'number'
        });
        alert.addButton({
            text: 'Cancel',
            handler: (data) => {
                console.log('500ms delayed prompt close');
                setTimeout(() => {
                    console.log('Prompt close');
                    alert.dismiss(data);
                }, 500);
                // do not close the alert when this button is pressed
                return false;
            }
        });
        alert.addButton({
            text: 'Ok',
            handler: (data) => {
                console.log('Prompt data:', data);
                this.testPromptOpen = false;
                this.testPromptResult = data;
            }
        });
        alert.present().then(() => {
            this.testPromptOpen = true;
        });
        alert.onDidDismiss((data, role) => {
            console.log('onDidDismiss, data:', data, 'role:', role);
        });
    }
    doRadio() {
        let alert = this.alertCtrl.create();
        alert.setTitle('Radio!');
        alert.addInput({
            type: 'radio',
            label: 'Radio 1',
            value: 'value1',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Radio 2',
            value: 'value2'
        });
        alert.addInput({
            type: 'radio',
            label: 'Radio 3',
            value: 'value3'
        });
        alert.addInput({
            type: 'radio',
            label: 'Radio 4',
            value: 'value4'
        });
        alert.addInput({
            type: 'radio',
            label: 'Radio 5',
            value: 'value5'
        });
        alert.addInput({
            type: 'radio',
            label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
            value: 'value6'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: (data) => {
                console.log('Radio data:', data);
                this.testRadioOpen = false;
                this.testRadioResult = data;
            }
        });
        alert.present().then(() => {
            this.testRadioOpen = true;
        });
    }
    doCheckbox() {
        let alert = this.alertCtrl.create();
        alert.setTitle('Checkbox!');
        alert.addInput({
            type: 'checkbox',
            label: 'Checkbox 1',
            value: 'value1',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Checkbox 2',
            value: 'value2'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Checkbox 3',
            value: 'value3'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Checkbox 4',
            value: 'value4'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Checkbox 5',
            value: 'value5'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
            value: 'value6'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: (data) => {
                console.log('Checkbox data:', data);
                this.testCheckboxOpen = false;
                this.testCheckboxResult = data;
            }
        });
        alert.present().then(() => {
            this.testCheckboxOpen = true;
        });
    }
    doFastClose() {
        let alert = this.alertCtrl.create({
            title: 'Alert!',
            buttons: ['OK']
        });
        alert.present();
        setTimeout(() => {
            alert.dismiss();
        }, 120);
    }
    doDisabledBackdropAlert() {
        let alert = this.alertCtrl.create({
            enableBackdropDismiss: false
        });
        alert.setTitle('Disabled Backdrop Click');
        alert.setMessage('Cannot dismiss alert from clickings the backdrop');
        alert.addButton({
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
                console.log('Confirm Cancel');
            }
        });
        alert.present();
    }
    doAlertWithMode(alertMode) {
        let alert = this.alertCtrl.create({
            title: 'Alert!',
            mode: alertMode,
            buttons: ['OK']
        });
        alert.present();
    }
    ionViewDidLeave() {
        console.log('E2EPage, ionViewDidLeave');
    }
    ionViewDidEnter() {
        console.log('E2EPage, ionViewDidEnter');
    }
};
PageOne = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'page-one.html'
    }),
    __metadata("design:paramtypes", [__1.AlertController, __1.ModalController])
], PageOne);
exports.PageOne = PageOne;
//# sourceMappingURL=page-one.js.map
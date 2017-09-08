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
const forms_1 = require("@angular/forms");
const __1 = require("../../../../../..");
let PageOne = class PageOne {
    constructor() {
        this.selectedTime = 60;
        this.fruitsCtrl = new forms_1.FormControl('apple');
        this.fruitsForm = new forms_1.FormGroup({
            'fruitsCtrl': this.fruitsCtrl
        });
        this.friendsCtrl = new forms_1.FormControl({ value: 'enemies', disabled: true });
        this.friendsForm = new forms_1.FormGroup({
            'friendsCtrl': this.friendsCtrl
        });
        this.currenciesControl = new forms_1.FormControl('EUR');
        this.currencyForm = new forms_1.FormGroup({
            'currenciesControl': this.currenciesControl
        });
        this.currencies = ['USD', 'EUR'];
        this.relationship = 'enemies';
        this.items = [
            { description: 'value undefined', value: undefined },
            { description: 'value false string', value: 'false' },
            { description: 'value false boolean', value: false },
            { description: 'value 0', value: 0 },
        ];
    }
    setApple() {
        this.fruitsCtrl.updateValueAndValidity('apple');
    }
    setBanana() {
        this.fruitsCtrl.updateValueAndValidity('banana');
    }
    setCherry() {
        this.fruitsCtrl.updateValueAndValidity('cherry');
    }
    doSubmit(ev) {
        console.log('Submitting form', this.fruitsForm.value);
        ev.preventDefault();
    }
    petChange(radioGroup) {
        console.log('petChange', radioGroup);
    }
    dogSelect(radioButton) {
        console.log('dogSelect', radioButton);
    }
    catSelect(radioButton) {
        console.log('catSelect', radioButton);
    }
    turtleSelect(radioButton) {
        console.log('turtleSelect', radioButton);
    }
};
PageOne = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'page-one.html'
    }),
    __metadata("design:paramtypes", [])
], PageOne);
exports.PageOne = PageOne;
//# sourceMappingURL=page-one.js.map
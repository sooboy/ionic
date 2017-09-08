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
        this.toppings = ['bacon', 'xcheese'];
        this.carFeatures = [];
        this.pets = ['cat', 'dog'];
        this.petOptions = [
            { text: 'Bird', value: 'bird' },
            { text: 'Cat', value: 'cat' },
            { text: 'Dog', value: 'dog' },
            { text: 'Honey Badger', value: 'honeybadger' },
            { text: 'Pig', value: 'pig' },
        ];
        this.status = 'selected';
        this.authForm = new forms_1.FormGroup({
            name: new forms_1.FormControl(''),
            select: new forms_1.FormControl([1, '3'])
        });
    }
    carChange(selectedValues) {
        console.log('carChange', selectedValues);
    }
    onSubmit(data) {
        console.log('onSubmit', data);
    }
    toppingsSelect(selectedValue) {
        console.log('Selected', selectedValue);
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
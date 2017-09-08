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
        this.musicSelectOpts = {
            title: '1994 Music',
            subTitle: 'Select your favorite',
            cssClass: 'music-select'
        };
        this.notificationSelectOpts = {
            title: 'Mute notifications',
            cssClass: 'notification-select'
        };
        this.gaming = '';
        this.os = 'win3.1';
        this.years = [1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999];
        this.music = null;
        this.month = '12';
        this.year = '1994';
        this.notification = 'enable';
        this.status = 'checked';
        this.currencies = [
            {
                symbol: '$',
                code: 'USD',
                name: 'US Dollar'
            },
            {
                symbol: '€',
                code: 'EUR',
                name: 'Euro'
            },
            {
                symbol: '£',
                code: 'FKP',
                name: 'Falkland Islands Pound'
            },
            {
                symbol: '¢',
                code: 'GHS',
                name: 'Ghana Cedi'
            }
        ];
        this.fruitCtrl = new forms_1.FormControl({ value: 'grape', disabled: true });
        this.fruitsForm = new forms_1.FormGroup({
            'fruit': this.fruitCtrl
        });
        this.currency = this.currencies[0];
    }
    gamingCancel() {
        console.log('Gaming Select, Cancel');
    }
    gamingChange(selectedValue) {
        console.log('Gaming Select, Change value:', selectedValue);
    }
    musicSelect(selectedValue) {
        console.log('Music selected', selectedValue);
    }
    notificationSelect(selectedValue) {
        console.log('Notification select', selectedValue);
    }
    statusChange(ev) {
        this.status = ev.value;
    }
    resetGender() {
        this.gender = null;
    }
    selectedText() {
        return this.currency.symbol;
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
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let RootPage = class RootPage {
    constructor() {
        this.monthOnly = '2012-12-15T13:47:20.789';
        this.wwwInvented = '1989';
        this.time = '13:47:00';
        this.netscapeReleased = '1994-12-15T13:47:20.789';
        this.operaReleased = '1995-04-15';
        this.firefoxReleased = '2002-09-23T15:03:46.789';
        this.webkitOpenSourced = '2005-06-17T11:06Z';
        this.chromeReleased = '2008-09-02';
        this.leapYearsSummerMonths = '';
        this.convertedDate = '';
        this.specificDaysMonthsYears = '';
        this.leapYearsArray = [2020, 2016, 2008, 2004, 2000, 1996];
        this.customShortDay = [
            's\u00f8n',
            'man',
            'tir',
            'ons',
            'tor',
            'fre',
            'l\u00f8r'
        ];
    }
    onChange(ev) {
        console.log('Changed', ev);
    }
    onCancel(ev) {
        console.log('Canceled', ev);
    }
    clearLeapYear() {
        this.leapYearsSummerMonths = null;
    }
    convertDate() {
        this.convertedDate = new Date(this.myDate).toISOString();
    }
};
RootPage = __decorate([
    core_1.Component({
        templateUrl: 'root-page.html'
    })
], RootPage);
exports.RootPage = RootPage;
//# sourceMappingURL=root-page.js.map
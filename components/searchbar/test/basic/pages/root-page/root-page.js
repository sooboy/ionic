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
let RootPage = class RootPage {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.defaultSearch = 'test';
        this.customPlaceholder = 2;
        this.defaultCancel = '';
        this.isAutocorrect = 'on';
        this.isAutocomplete = 'on';
        this.isSpellcheck = true;
        this.activeTab = '';
    }
    onClearSearchbar(ev) {
        console.log('ionClear', ev);
    }
    onCancelSearchbar(ev) {
        console.log('ionCancel', ev);
    }
    triggerInput(ev) {
        console.log('ionInput', ev);
    }
    changedInput(ev) {
        console.log('ionChange', ev);
    }
    inputBlurred(ev) {
        console.log('ionBlur', ev);
    }
    inputFocused(ev) {
        console.log('ionFocus', ev);
    }
    ngAfterViewInit() {
        this.customPlaceholder = 33;
        this.defaultCancel = 'after view';
        this.changeDetectorRef.detectChanges();
    }
    changeValue() {
        this.defaultSearch = 'changed';
    }
};
RootPage = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'root-page.html'
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], RootPage);
exports.RootPage = RootPage;
//# sourceMappingURL=root-page.js.map
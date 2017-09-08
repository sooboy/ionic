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
let RootPage = class RootPage {
    constructor() {
        this.dangerColor = 'danger';
        this.appleCtrl = new forms_1.FormControl(true);
        this.bananaCtrl = new forms_1.FormControl(true);
        this.cherryCtrl = new forms_1.FormControl({ value: false, disabled: true });
        this.grapeCtrl = new forms_1.FormControl({ value: true, disabled: true });
        this.fruitsForm = new forms_1.FormGroup({
            'apple': this.appleCtrl,
            'banana': this.bananaCtrl,
            'cherry': this.cherryCtrl,
            'grape': this.grapeCtrl
        });
        this.checked = false;
        this.disabled = false;
        this.grapeChecked = true;
        this.standAloneChecked = true;
    }
    toggleGrapeChecked() {
        this.grapeChecked = !this.grapeChecked;
    }
    toggleGrapeDisabled() {
        this.fruitsForm.get('grape').enabled ? this.fruitsForm.get('grape').disable() : this.fruitsForm.get('grape').enable();
    }
    kiwiChange(checkbox) {
        console.log('kiwiChange', checkbox);
        this.kiwiValue = checkbox.checked;
    }
    strawberryChange(checkbox) {
        console.log('strawberryChange', checkbox);
        this.strawberryValue = checkbox.checked;
    }
    doSubmit(ev) {
        console.log('Submitting form', this.fruitsForm.value);
        this.formResults = JSON.stringify(this.fruitsForm.value);
        ev.preventDefault();
    }
};
RootPage = __decorate([
    core_1.Component({
        templateUrl: 'root-page.html'
    }),
    __metadata("design:paramtypes", [])
], RootPage);
exports.RootPage = RootPage;
//# sourceMappingURL=root-page.js.map
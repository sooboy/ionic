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
let HomePage = class HomePage {
    constructor(fb) {
        this.relationship = 'enemies';
        this.modelStyle = 'B';
        this.appType = 'free';
        this.icons = 'camera';
        this.isDisabledB = true;
        this.isDisabledS = false;
        this.myForm = fb.group({
            mapStyle: ['active', forms_1.Validators.required]
        });
    }
    toggleBDisabled() {
        this.isDisabledB = !this.isDisabledB;
    }
    toggleSDisabled() {
        this.isDisabledS = !this.isDisabledS;
    }
    onSegmentChanged(segmentButton) {
        console.log('Segment changed to', segmentButton.value);
    }
    onSegmentSelected(segmentButton) {
        console.log('Segment selected', segmentButton.value);
    }
    doSubmit(ev) {
        console.log('Submitting form', this.myForm.value);
        ev.preventDefault();
    }
};
HomePage = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'home-page.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], HomePage);
exports.HomePage = HomePage;
//# sourceMappingURL=home-page.js.map
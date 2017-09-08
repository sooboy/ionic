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
const forms_1 = require("@angular/forms");
const core_1 = require("@angular/core");
let RootPage = class RootPage {
    constructor(fb) {
        this.login = {
            email: 'help@ionic.io',
            username: 'admin',
            password: '',
            comments: '',
            inset: ''
        };
        this.submitted = false;
        this.loginForm = fb.group({
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    this.emailValidator
                ])],
            username: [''],
            password: ['', forms_1.Validators.required],
            comments: ['', forms_1.Validators.required],
            inset: ['', forms_1.Validators.required]
        });
    }
    emailValidator(control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (!EMAIL_REGEXP.test(control.value)) {
            return { invalidEmail: true };
        }
    }
    submit(_, value) {
        console.log('Submitted', value);
        this.submitted = true;
    }
};
RootPage = __decorate([
    core_1.Component({
        templateUrl: 'root-page.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], RootPage);
exports.RootPage = RootPage;
//# sourceMappingURL=root-page.js.map
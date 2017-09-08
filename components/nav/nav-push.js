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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const nav_controller_1 = require("../../navigation/nav-controller");
/**
 * @name NavPush
 * @description
 * Directive to declaratively push a new page to the current nav
 * stack.
 *
 * @usage
 * ```html
 * <button ion-button [navPush]="pushPage"></button>
 * ```
 *
 * To specify parameters you can use array syntax or the `navParams`
 * property:
 *
 * ```html
 * <button ion-button [navPush]="pushPage" [navParams]="params">Go</button>
 * ```
 *
 * Where `pushPage` and `params` are specified in your component,
 * and `pushPage` contains a reference to a
 * component you would like to push:
 *
 * ```ts
 * import { LoginPage } from './login';
 *
 * @Component({
 *   template: `<button ion-button [navPush]="pushPage" [navParams]="params">Go</button>`
 * })
 * class MyPage {
 *   pushPage: any;
 *   params: Object;
 *   constructor(){
 *     this.pushPage = LoginPage;
 *     this.params = { id: 42 };
 *   }
 * }
 * ```
 *
 * @demo /docs/demos/src/navigation/
 * @see {@link /docs/components#navigation Navigation Component Docs}
 * @see {@link ../NavPop NavPop API Docs}
 *
 */
let NavPush = class NavPush {
    constructor(_nav) {
        this._nav = _nav;
        if (!_nav) {
            console.error('navPush must be within a NavController');
        }
    }
    /**
     * @hidden
     */
    onClick() {
        if (this._nav && this.navPush) {
            this._nav.push(this.navPush, this.navParams);
            return false;
        }
        return true;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NavPush.prototype, "navPush", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NavPush.prototype, "navParams", void 0);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], NavPush.prototype, "onClick", null);
NavPush = __decorate([
    core_1.Directive({
        selector: '[navPush]'
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [nav_controller_1.NavController])
], NavPush);
exports.NavPush = NavPush;
//# sourceMappingURL=nav-push.js.map
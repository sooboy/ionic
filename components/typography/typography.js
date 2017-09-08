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
const config_1 = require("../../config/config");
const ion_1 = require("../ion");
/**
  * @name Typography
  * @module ionic
  * @description
  *
  * The Typography component is a simple component that can be used to style the text color of any element.
  * The `ion-text` attribute should be added to the element in order to pass a color from the Sass `$colors`
  * map and change the text color of that element.
  *
  * @usage
  *
  * ```html
  * <h1 ion-text color="secondary">H1: The quick brown fox jumps over the lazy dog</h1>
  *
  * <h2 ion-text color="primary">H2: The quick brown fox jumps over the lazy dog</h2>
  *
  * <h3 ion-text color="light">H3: The quick brown fox jumps over the lazy dog</h3>
  *
  * <h4 ion-text color="danger">H4: The quick brown fox jumps over the lazy dog</h4>
  *
  * <h5 ion-text color="dark">H5: The quick brown fox jumps over the lazy dog</h5>
  *
  * <h6 ion-text [color]="dynamicColor">H6: The quick brown fox jumps over the lazy dog</h6>
  *
  * <p>
  *   I saw a werewolf with a Chinese menu in his hand.
  *   Walking through the <sub ion-text color="danger">streets</sub> of Soho in the rain.
  *   He <i ion-text color="primary">was</i> looking for a place called Lee Ho Fook's.
  *   Gonna get a <a ion-text color="secondary">big dish of beef chow mein.</a>
  * </p>
  *
  * <p>
  *   He's the hairy-handed gent who ran amuck in Kent.
  *   Lately he's <sup ion-text color="primary">been</sup> overheard in Mayfair.
  *   Better stay away from him.
  *   He'll rip your lungs out, Jim.
  *   I'd like to meet his tailor.
  * </p>
  * ```
  *
 */
let Typography = class Typography extends ion_1.Ion {
    constructor(config, elementRef, renderer) {
        super(config, elementRef, renderer, 'text');
    }
};
Typography = __decorate([
    core_1.Directive({
        selector: '[ion-text]'
    }),
    __metadata("design:paramtypes", [config_1.Config, core_1.ElementRef, core_1.Renderer])
], Typography);
exports.Typography = Typography;
//# sourceMappingURL=typography.js.map
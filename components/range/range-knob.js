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
const key_1 = require("../../platform/key");
/**
 * @hidden
 */
let RangeKnob = class RangeKnob {
    /**
     * @hidden
     */
    constructor() {
        this.ionIncrease = new core_1.EventEmitter();
        this.ionDecrease = new core_1.EventEmitter();
    }
    set ratio(r) {
        this._x = `${r * 100}%`;
    }
    _keyup(ev) {
        const keyCode = ev.keyCode;
        if (keyCode === key_1.KEY_LEFT || keyCode === key_1.KEY_DOWN) {
            console.debug(`range-knob, decrease, keyCode: ${keyCode}`);
            this.ionDecrease.emit();
            ev.preventDefault();
            ev.stopPropagation();
        }
        else if (keyCode === key_1.KEY_RIGHT || keyCode === key_1.KEY_UP) {
            console.debug(`range-knob, increase, keyCode: ${keyCode}`);
            this.ionIncrease.emit();
            ev.preventDefault();
            ev.stopPropagation();
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], RangeKnob.prototype, "ratio", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RangeKnob.prototype, "pressed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RangeKnob.prototype, "pin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RangeKnob.prototype, "min", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RangeKnob.prototype, "max", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RangeKnob.prototype, "val", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RangeKnob.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RangeKnob.prototype, "labelId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RangeKnob.prototype, "ionIncrease", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RangeKnob.prototype, "ionDecrease", void 0);
__decorate([
    core_1.HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], RangeKnob.prototype, "_keyup", null);
RangeKnob = __decorate([
    core_1.Component({
        selector: '.range-knob-handle',
        template: '<div class="range-pin" *ngIf="pin" role="presentation">{{val}}</div>' +
            '<div class="range-knob" role="presentation"></div>',
        host: {
            '[class.range-knob-pressed]': 'pressed',
            '[class.range-knob-min]': 'val===min||val===undefined',
            '[class.range-knob-max]': 'val===max',
            '[style.left]': '_x',
            '[attr.aria-valuenow]': 'val',
            '[attr.aria-valuemin]': 'min',
            '[attr.aria-valuemax]': 'max',
            '[attr.aria-disabled]': 'disabled',
            '[attr.aria-labelledby]': 'labelId',
            '[tabindex]': 'disabled?-1:0',
            'role': 'slider'
        }
    })
], RangeKnob);
exports.RangeKnob = RangeKnob;
//# sourceMappingURL=range-knob.js.map
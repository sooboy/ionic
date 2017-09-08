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
const util_1 = require("../../util/util");
/**
 * @name SegmentButton
 * @description
 * The child buttons of the `ion-segment` component. Each `ion-segment-button` must have a value.
 *
 * @usage
 *
 * ```html
 * <ion-content>
 *   <!-- Segment buttons with icons -->
 *   <ion-segment [(ngModel)]="icons" color="secondary">
 *     <ion-segment-button value="camera">
 *       <ion-icon name="camera"></ion-icon>
 *     </ion-segment-button>
 *     <ion-segment-button value="bookmark">
 *       <ion-icon name="bookmark"></ion-icon>
 *     </ion-segment-button>
 *   </ion-segment>
 *
 *   <!-- Segment buttons with text -->
 *   <ion-segment [(ngModel)]="relationship" color="primary">
 *     <ion-segment-button value="friends" (ionSelect)="selectedFriends()">
 *       Friends
 *     </ion-segment-button>
 *     <ion-segment-button value="enemies" (ionSelect)="selectedEnemies()">
 *       Enemies
 *     </ion-segment-button>
 *   </ion-segment>
 * </ion-content>
 * ```
 *
 *
 * @demo /docs/demos/src/segment/
 * @see {@link /docs/components#segment Segment Component Docs}
 * @see {@link /docs/api/components/segment/Segment/ Segment API Docs}
 */
let SegmentButton = class SegmentButton {
    constructor() {
        this.isActive = false;
        this._disabled = false;
        /**
         * @output {SegmentButton} Emitted when a segment button has been clicked.
         */
        this.ionSelect = new core_1.EventEmitter();
    }
    /**
     * @input {boolean} If true, the user cannot interact with this element.
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(val) {
        this._disabled = util_1.isTrueProperty(val);
    }
    /**
     * @hidden
     * On click of a SegmentButton
     */
    onClick() {
        console.debug('SegmentButton, select', this.value);
        this.ionSelect.emit(this);
    }
    /**
     * @hidden
     */
    ngOnInit() {
        if (!util_1.isPresent(this.value)) {
            console.warn('<ion-segment-button> requires a "value" attribute');
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SegmentButton.prototype, "value", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SegmentButton.prototype, "ionSelect", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SegmentButton.prototype, "disabled", null);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SegmentButton.prototype, "onClick", null);
SegmentButton = __decorate([
    core_1.Component({
        selector: 'ion-segment-button',
        template: '<ng-content></ng-content>' +
            '<div class="button-effect"></div>',
        host: {
            'tappable': '',
            'class': 'segment-button',
            'role': 'button',
            '[class.segment-button-disabled]': '_disabled',
            '[class.segment-activated]': 'isActive',
            '[attr.aria-pressed]': 'isActive'
        },
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [])
], SegmentButton);
exports.SegmentButton = SegmentButton;
//# sourceMappingURL=segment-button.js.map
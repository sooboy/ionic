"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
/**
  * @name Col
  * @module ionic
  * @description
  *
  * Columns are cellular components of the [grid](../Grid) system and go inside of a [row](../Row).
  * They will expand to fill their row. All content within a grid should go inside of a column.
  *
  * ## Column attributes
  *
  * By default, columns will stretch to fill the entire height of the row.
  * There are several attributes that can be added to a column to customize this behavior.
  *
  * | Property              | Description                                                                                                 |
  * |-----------------------|-------------------------------------------------------------------------------------------------------------|
  * | align-self-start      | Adds `align-self: flex-start`. The column will be vertically aligned at the top.                            |
  * | align-self-center     | Adds `align-self: center`. The column will be vertically aligned in the center.                             |
  * | align-self-end        | Adds `align-self: flex-end`. The column will be vertically aligned at the bottom.                           |
  * | align-self-stretch    | Adds `align-self: stretch`. The column will be stretched to take up the entire height of the row.           |
  * | align-self-baseline   | Adds `align-self: baseline`. The column will be vertically aligned at its baseline.                         |
  *
  *
 */
let Col = class Col {
};
Col = __decorate([
    core_1.Directive({
        selector: 'ion-col, [ion-col]',
        host: {
            'class': 'col'
        }
    })
], Col);
exports.Col = Col;
//# sourceMappingURL=col.js.map
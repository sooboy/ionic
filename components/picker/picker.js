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
const picker_component_1 = require("./picker-component");
const picker_transitions_1 = require("./picker-transitions");
const view_controller_1 = require("../../navigation/view-controller");
/**
 * @hidden
 */
class Picker extends view_controller_1.ViewController {
    constructor(app, opts = {}, config) {
        if (!opts) {
            opts = {};
        }
        opts.columns = opts.columns || [];
        opts.buttons = opts.buttons || [];
        opts.enableBackdropDismiss = util_1.isPresent(opts.enableBackdropDismiss) ? Boolean(opts.enableBackdropDismiss) : true;
        super(picker_component_1.PickerCmp, opts, null);
        this._app = app;
        this.isOverlay = true;
        this.ionChange = new core_1.EventEmitter();
        config.setTransition('picker-slide-in', picker_transitions_1.PickerSlideIn);
        config.setTransition('picker-slide-out', picker_transitions_1.PickerSlideOut);
    }
    /**
    * @hidden
    */
    getTransitionName(direction) {
        let key = (direction === 'back' ? 'pickerLeave' : 'pickerEnter');
        return this._nav && this._nav.config.get(key);
    }
    /**
     * @param {any} button Picker toolbar button
     */
    addButton(button) {
        this.data.buttons.push(button);
    }
    /**
     * @param {PickerColumn} column Picker toolbar button
     */
    addColumn(column) {
        this.data.columns.push(column);
    }
    getColumns() {
        return this.data.columns;
    }
    getColumn(name) {
        return this.getColumns().find(column => column.name === name);
    }
    refresh() {
        util_1.assert(this._cmp, 'componentRef must be valid');
        util_1.assert(this._cmp.instance.refresh, 'instance must implement refresh()');
        this._cmp && this._cmp.instance.refresh && this._cmp.instance.refresh();
    }
    /**
     * @param {string} cssClass CSS class name to add to the picker's outer wrapper.
     */
    setCssClass(cssClass) {
        this.data.cssClass = cssClass;
    }
    /**
     * Present the picker instance.
     *
     * @param {NavOptions} [navOptions={}] Nav options to go with this transition.
     * @returns {Promise} Returns a promise which is resolved when the transition has completed.
     */
    present(navOptions = {}) {
        return this._app.present(this, navOptions);
    }
}
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Picker.prototype, "ionChange", void 0);
exports.Picker = Picker;
//# sourceMappingURL=picker.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ActivatorBase {
}
exports.ActivatorBase = ActivatorBase;
function isActivatedDisabled(ev, activatableEle) {
    if (!activatableEle || !activatableEle.parentNode) {
        return true;
    }
    if (!ev) {
        return false;
    }
    if (ev.defaultPrevented) {
        return true;
    }
    let targetEle = ev.target;
    for (let i = 0; i < 4; i++) {
        if (!targetEle) {
            break;
        }
        if (targetEle.hasAttribute('disable-activated')) {
            return true;
        }
        targetEle = targetEle.parentElement;
    }
    return false;
}
exports.isActivatedDisabled = isActivatedDisabled;
//# sourceMappingURL=activator-base.js.map
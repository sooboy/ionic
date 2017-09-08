import { Injectable } from '@angular/core';

import { assert, runInDev } from '../util/util';
import { Activator } from './activator';
import { ActivatorBase } from './activator-base';
import { App } from '../components/app/app';
import { Config } from '../config/config';
import { DomController } from '../platform/dom-controller';
import { GestureController } from '../gestures/gesture-controller';
import { Platform } from '../platform/platform';
import { hasPointerMoved, pointerCoord } from '../util/dom';
import { POINTER_EVENT_TYPE_TOUCH, PointerEvents } from '../gestures/pointer-events';
import { RippleActivator } from './ripple';
import { UIEventManager } from '../gestures/ui-event-manager';

/**
 * @hidden
 */
@Injectable()
export class TapClick {

  private disableClick: number = 0;
  private usePolyfill: boolean;
  private activator: ActivatorBase;
  private startCoord: any;
  private events: UIEventManager;
  private pointerEvents: PointerEvents;
  private lastTouchEnd: number;
  private dispatchClick: boolean;

  constructor(
    config: Config,
    private plt: Platform,
    dom: DomController,
    private app: App,
    private gestureCtrl: GestureController
  ) {
    this.events = new UIEventManager(plt);

    let activator = config.get('activator');
    if (activator === 'ripple') {
      this.activator = new RippleActivator(app, config, dom);

    } else if (activator === 'highlight') {
      this.activator = new Activator(app, config, dom);
    }

    this.usePolyfill = config.getBoolean('tapPolyfill');
    (void 0) /* console.debug */;

    const doc = plt.doc();

    this.events.listen(doc, 'click', this.click.bind(this), { passive: false, capture: true });
    this.pointerEvents = this.events.pointerEvents({
      element: <any>doc,
      pointerDown: this.pointerStart.bind(this),
      pointerMove: this.pointerMove.bind(this),
      pointerUp: this.pointerEnd.bind(this),
      passive: true
    });
    this.pointerEvents.mouseWait = DISABLE_NATIVE_CLICK_AMOUNT;
  }

  pointerStart(ev: any): boolean {
    if (this.startCoord) {
      return false;
    }
    if (!this.app.isEnabled()) {
      return false;
    }

    this.lastTouchEnd = 0;
    this.dispatchClick = true;

    if (this.plt.doc() === ev.target) {
      this.startCoord = pointerCoord(ev);
      return true;
    }

    let activatableEle = getActivatableTarget(ev.target);
    if (!activatableEle) {
      this.startCoord = null;
      return false;
    }

    this.startCoord = pointerCoord(ev);
    this.activator && this.activator.downAction(ev, activatableEle, this.startCoord);
    return true;
  }

  pointerMove(ev: UIEvent) {
    if (this.startCoord && this.shouldCancelEvent(ev)) {
      this.pointerCancel(ev);
    }
  }

  pointerEnd(ev: any, pointerEventType: number) {
    if (!this.dispatchClick) return;

    (void 0) /* runInDev */;

    if (!this.startCoord) {
      return;
    }
    if (this.activator && ev.target !== this.plt.doc()) {
      let activatableEle = getActivatableTarget(ev.target);
      if (activatableEle) {
        this.activator.upAction(ev, activatableEle, this.startCoord);
      }
    }
    if (this.usePolyfill && pointerEventType === POINTER_EVENT_TYPE_TOUCH && this.app.isEnabled()) {
      this.handleTapPolyfill(ev);
    }
    this.startCoord = null;
  }

  pointerCancel(ev: UIEvent) {
    (void 0) /* console.debug */;

    this.startCoord = null;
    this.dispatchClick = false;
    this.activator && this.activator.clearState(false);
    this.pointerEvents.stop();
  }

  shouldCancelEvent(ev: UIEvent): boolean {
    return (
      this.app.isScrolling() ||
      this.gestureCtrl.isCaptured() ||
      hasPointerMoved(POINTER_TOLERANCE, this.startCoord, pointerCoord(ev))
    );
  }

  click(ev: any) {
    if (this.shouldCancelClick(ev)) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }

    if (this.activator && this.plt.doc() !== ev.target) {
      // cool, a click is gonna happen, let's tell the activator
      // so the element can get the given "active" style
      const activatableEle = getActivatableTarget(ev.target);
      if (activatableEle) {
        this.activator.clickAction(ev, activatableEle, this.startCoord);
      }
    }

    (void 0) /* runInDev */;
  }

  private shouldCancelClick(ev: any): boolean {
    if (this.usePolyfill) {
      if (!ev.isIonicTap && this.isDisabledNativeClick()) {
        (void 0) /* console.debug */;
        return true;
      }
    } else if (!this.dispatchClick) {
      (void 0) /* console.debug */;
      return true;
    }
    if (!this.app.isEnabled()) {
      (void 0) /* console.debug */;
      return true;
    }
    if (this.gestureCtrl.isCaptured()) {
      (void 0) /* console.debug */;
      return true;
    }
    return false;
  }

  private profileClickDelay(ev: any) {
    if (this.lastTouchEnd) {
      let diff = Date.now() - this.lastTouchEnd;
      if (diff < 100) {
        (void 0) /* console.debug */;
      } else {
        console.warn(`SLOW click dispatched. Delay(ms):`, diff, ev);
      }
      this.lastTouchEnd = null;
    } else {
      (void 0) /* console.debug */;
    }
  }

  handleTapPolyfill(ev: any) {
    (void 0) /* assert */;
    // only dispatch mouse click events from a touchend event
    // when tapPolyfill config is true, and the startCoordand endCoord
    // are not too far off from each other
    let endCoord = pointerCoord(ev);

    if (hasPointerMoved(POINTER_TOLERANCE, this.startCoord, endCoord)) {
      (void 0) /* console.debug */;
      return;
    }
    // prevent native mouse click events for XX amount of time
    this.disableClick = Date.now() + DISABLE_NATIVE_CLICK_AMOUNT;

    if (this.app.isScrolling()) {
      // do not fire off a click event while the app was scrolling
      (void 0) /* console.debug */;

    } else {
      // dispatch a mouse click event
      (void 0) /* console.debug */;

      let clickEvent: any = this.plt.doc().createEvent('MouseEvents');
      clickEvent.initMouseEvent('click', true, true, this.plt.win(), 1, 0, 0, endCoord.x, endCoord.y, false, false, false, false, 0, null);
      clickEvent.isIonicTap = true;
      ev.target.dispatchEvent(clickEvent);
    }
  }

  isDisabledNativeClick() {
    return this.disableClick > Date.now();
  }

}


function getActivatableTarget(ele: HTMLElement): any {
  let targetEle = ele;
  for (let x = 0; x < 10; x++) {
    if (!targetEle) break;
    if (isActivatable(targetEle)) {
      return targetEle;
    }
    targetEle = targetEle.parentElement;
  }
  return null;
}

/**
 * @hidden
 */
export function isActivatable(ele: HTMLElement) {
  if (ACTIVATABLE_ELEMENTS.indexOf(ele.tagName) > -1) {
    return true;
  }

  for (let i = 0, l = ACTIVATABLE_ATTRIBUTES.length; i < l; i++) {
    if (ele.hasAttribute && ele.hasAttribute(ACTIVATABLE_ATTRIBUTES[i])) {
      return true;
    }
  }
  return false;
}

const ACTIVATABLE_ELEMENTS = ['A', 'BUTTON'];
const ACTIVATABLE_ATTRIBUTES = ['tappable', 'ion-button'];
const POINTER_TOLERANCE = 100;
const DISABLE_NATIVE_CLICK_AMOUNT = 2500;


/**
 * @hidden
 */
export function setupTapClick(config: Config, plt: Platform, dom: DomController, app: App, gestureCtrl: GestureController) {
  return function() {
    return new TapClick(config, plt, dom, app, gestureCtrl);
  };
}

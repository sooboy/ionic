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
const platform_browser_1 = require("@angular/platform-browser");
const __1 = require("../../../..");
const platform_browser_2 = require("@angular/platform-browser");
let LOG = '';
let SIMPLE_LOG = '';
function log(page, message, color) {
    console.log(`${page}: ${message}`);
    SIMPLE_LOG += `${page}:${message}`;
    SIMPLE_LOG += '\n';
    LOG += `${page}:<span style="background:${color};">${message}</span>`;
    LOG += '\n';
}
const TEMPLATE = `
  <ion-header>
    <ion-navbar>
      <ion-title>{{_name}}</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content text-center>
    <p>This is the {{_name}}</p>
    <div f></div>
    <div f></div>
  </ion-content>
  `;
const baseCounter = {};
class Base {
    constructor(_name) {
        this._name = _name;
        if (baseCounter[_name] === undefined) {
            baseCounter[_name] = 0;
        }
        this._name = `${this._name}-${baseCounter[_name]}`;
        baseCounter[_name]++;
    }
    ionViewWillLoad() {
        log(this._name, 'willLoad', 'green');
    }
    ionViewDidLoad() {
        log(this._name, 'didLoad', 'green');
    }
    ionViewWillEnter() {
        log(this._name, 'willEnter', 'greenyellow');
    }
    ionViewDidEnter() {
        log(this._name, 'didEnter', 'cyan');
    }
    ionViewWillLeave() {
        log(this._name, 'willLeave', 'greenyellow');
    }
    ionViewDidLeave() {
        log(this._name, 'didLeave', 'cyan');
    }
    ionViewWillUnload() {
        log(this._name, 'willUnload', 'lightgray');
    }
    ionViewCanLeave() {
        log(this._name, 'canLeave', 'deeppink');
        return true;
    }
    ionViewCanEnter() {
        log(this._name, 'canEnter', '#ff78c1');
        return true;
    }
}
exports.Base = Base;
let Page1 = class Page1 extends Base {
    constructor() {
        super('Page1');
    }
};
Page1 = __decorate([
    core_1.Component({
        template: TEMPLATE
    }),
    __metadata("design:paramtypes", [])
], Page1);
exports.Page1 = Page1;
let Page2 = class Page2 extends Base {
    constructor(nav) {
        super('Page2');
        this.nav = nav;
        this.counter = 4;
    }
    ionViewWillEnter() {
        super.ionViewWillEnter();
        if (this.counter > 0) {
            this.nav.push(Page3, { animated: (this.counter !== 2) });
        }
        else if (this.counter === 0) {
            this.nav.push(Page4, { animate: false });
        }
        else {
            throw new Error('should not be here!');
        }
        this.counter--;
    }
};
Page2 = __decorate([
    core_1.Component({
        template: TEMPLATE
    }),
    __metadata("design:paramtypes", [__1.NavController])
], Page2);
exports.Page2 = Page2;
let Page3 = class Page3 extends Base {
    constructor(nav, params) {
        super('Page3');
        this.nav = nav;
        this.animated = params.get('animated');
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.nav.pop({ animate: this.animated });
    }
};
Page3 = __decorate([
    core_1.Component({
        template: TEMPLATE
    }),
    __metadata("design:paramtypes", [__1.NavController, __1.NavParams])
], Page3);
exports.Page3 = Page3;
let Page4 = class Page4 extends Base {
    constructor(nav) {
        super('Page4');
        this.nav = nav;
    }
    doSomethingSync() {
        // this is a long running synchronous task
        // (imagine that a huge data must be transformed here recuresively or something similar)
        console.log('START DOING SOMETHING');
        console.time('DO SOMETHING EXPENSIVE SYNCHRONOUSLY');
        let e = 0;
        for (let i = 0; i < 8000000; i++) {
            e += Math.sqrt(i) / Math.log(i) / Math.cos(i);
        }
        console.timeEnd('DO SOMETHING EXPENSIVE SYNCHRONOUSLY');
        return e;
    }
    ngOnInit() {
        this.doSomethingSync();
        // once it has finished trigger another asynchronously
        setTimeout(() => {
            this.doSomethingSync();
            setTimeout(() => {
                this.nav.push(Page5).then((hasCompleted) => {
                    if (!hasCompleted) {
                        this.nav.push(Page6, { continue: false });
                        setTimeout(() => this.nav.push(Page6, { continue: true }), 510);
                    }
                });
            }, 2000);
        }, 0);
    }
};
Page4 = __decorate([
    core_1.Component({
        template: TEMPLATE
    }),
    __metadata("design:paramtypes", [__1.NavController])
], Page4);
exports.Page4 = Page4;
let Page5 = class Page5 extends Base {
    constructor() {
        super('Page5');
    }
    ionViewCanEnter() {
        super.ionViewCanEnter();
        return new Promise((resolve) => {
            setTimeout(() => resolve(false), 8000);
        });
    }
};
Page5 = __decorate([
    core_1.Component({
        template: TEMPLATE
    }),
    __metadata("design:paramtypes", [])
], Page5);
exports.Page5 = Page5;
let Page6 = class Page6 extends Base {
    constructor(nav, params) {
        super('Page6');
        this.nav = nav;
        this.continue = false;
        this.counter = 3;
        this.counterLeave = 3;
        this.continue = params.get('continue');
        console.log(this.continue);
    }
    ionViewCanLeave() {
        super.ionViewCanLeave();
        if (this.continue === true) {
            this.counter--;
            if (this.counter > 0) {
                return false;
            }
            else if (this.counter === 0) {
                return true;
            }
            else {
                throw new Error('invalid');
            }
        }
        return true;
    }
    ionViewDidEnter() {
        if (this.continue === true) {
            setTimeout(() => this.pop(), 2000 + 3000);
        }
    }
    ionViewWillLeave() {
        super.ionViewWillLeave();
        this.pushPage7();
    }
    ionViewWillUnload() {
        super.ionViewWillUnload();
        this.pushPage7();
    }
    pop() {
        this.nav.pop().then((hasCompleted) => {
            if (hasCompleted) {
                this.pushPage7();
            }
            else {
                this.pop();
            }
        });
    }
    pushPage7() {
        if (this.continue) {
            this.counterLeave--;
            if (this.counterLeave === 0) {
                this.nav.push(Page7);
            }
            else if (this.counterLeave < 0) {
                throw new Error('invalid');
            }
        }
    }
};
Page6 = __decorate([
    core_1.Component({
        template: TEMPLATE
    }),
    __metadata("design:paramtypes", [__1.NavController, __1.NavParams])
], Page6);
exports.Page6 = Page6;
let Page7 = class Page7 extends Base {
    constructor(nav) {
        super('Page7');
        this.nav = nav;
    }
    ionViewCanEnter() {
        super.ionViewCanEnter();
        this.nav.setRoot(Page8);
        this.nav.setRoot(Page8, { animate: false });
        this.nav.setRoot(Page8).then(() => {
            this.nav.setRoot(Results);
        });
        this.nav.push(Page8);
        this.nav.push(Page8);
        this.nav.pop();
        this.nav.push(Page8);
        setTimeout(() => {
            this.nav.pop({ animate: false });
        }, Math.random() * 100);
        setTimeout(() => {
            this.nav.pop();
        }, Math.random() * 100);
        return true;
    }
};
Page7 = __decorate([
    core_1.Component({
        template: TEMPLATE
    }),
    __metadata("design:paramtypes", [__1.NavController])
], Page7);
exports.Page7 = Page7;
let Page8 = class Page8 extends Base {
    constructor() {
        super('Page8');
    }
};
Page8 = __decorate([
    core_1.Component({
        template: TEMPLATE
    }),
    __metadata("design:paramtypes", [])
], Page8);
exports.Page8 = Page8;
let Results = class Results {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ionViewDidEnter() {
        setTimeout(() => {
            if (SIMPLE_LOG !== EXPECTED) {
                throw 'LOG DOES NOT MATCH';
            }
            this.result = this.sanitizer.bypassSecurityTrustHtml(LOG);
        }, 100);
    }
};
Results = __decorate([
    core_1.Component({
        template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Results</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content padding>
    <pre style="font-size: 0.72em; column-count: 3;" [innerHTML]="result"></pre>
  </ion-content>
`
    }),
    __metadata("design:paramtypes", [platform_browser_2.DomSanitizer])
], Results);
exports.Results = Results;
let AppComponent = class AppComponent {
    constructor() {
        this.root = Page1;
        setTimeout(() => this.root = Page2, 100);
    }
};
AppComponent = __decorate([
    core_1.Component({
        template: `<ion-nav [root]="root"></ion-nav>`
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            AppComponent,
            Page1,
            Page2,
            Page3,
            Page4,
            Page5,
            Page6,
            Page7,
            Page8,
            Results
        ],
        imports: [
            platform_browser_1.BrowserModule,
            __1.IonicModule.forRoot(AppComponent)
        ],
        bootstrap: [__1.IonicApp],
        entryComponents: [
            AppComponent,
            Page1,
            Page2,
            Page3,
            Page4,
            Page5,
            Page6,
            Page7,
            Page8,
            Results
        ]
    })
], AppModule);
exports.AppModule = AppModule;
const EXPECTED = `Page1-0:canEnter
Page1-0:willLoad
Page1-0:didLoad
Page1-0:willEnter
Page1-0:didEnter
Page1-0:canLeave
Page2-0:canEnter
Page2-0:willLoad
Page2-0:didLoad
Page1-0:willLeave
Page2-0:willEnter
Page2-0:didEnter
Page1-0:didLeave
Page1-0:willUnload
Page2-0:canLeave
Page3-0:canEnter
Page3-0:willLoad
Page3-0:didLoad
Page2-0:willLeave
Page3-0:willEnter
Page3-0:didEnter
Page2-0:didLeave
Page3-0:canLeave
Page2-0:canEnter
Page3-0:willLeave
Page2-0:willEnter
Page2-0:didEnter
Page3-0:didLeave
Page3-0:willUnload
Page2-0:canLeave
Page3-1:canEnter
Page3-1:willLoad
Page3-1:didLoad
Page2-0:willLeave
Page3-1:willEnter
Page3-1:didEnter
Page2-0:didLeave
Page3-1:canLeave
Page2-0:canEnter
Page3-1:willLeave
Page2-0:willEnter
Page2-0:didEnter
Page3-1:didLeave
Page3-1:willUnload
Page2-0:canLeave
Page3-2:canEnter
Page3-2:willLoad
Page3-2:didLoad
Page2-0:willLeave
Page3-2:willEnter
Page3-2:didEnter
Page2-0:didLeave
Page3-2:canLeave
Page2-0:canEnter
Page3-2:willLeave
Page2-0:willEnter
Page2-0:didEnter
Page3-2:didLeave
Page3-2:willUnload
Page2-0:canLeave
Page3-3:canEnter
Page3-3:willLoad
Page3-3:didLoad
Page2-0:willLeave
Page3-3:willEnter
Page3-3:didEnter
Page2-0:didLeave
Page3-3:canLeave
Page2-0:canEnter
Page3-3:willLeave
Page2-0:willEnter
Page2-0:didEnter
Page3-3:didLeave
Page3-3:willUnload
Page2-0:canLeave
Page4-0:canEnter
Page4-0:willLoad
Page4-0:didLoad
Page2-0:willLeave
Page4-0:willEnter
Page4-0:didEnter
Page2-0:didLeave
Page4-0:canLeave
Page5-0:canEnter
Page4-0:canLeave
Page6-0:canEnter
Page6-0:willLoad
Page6-0:didLoad
Page4-0:willLeave
Page6-0:willEnter
Page4-0:didLeave
Page6-0:canLeave
Page6-1:canEnter
Page6-1:willLoad
Page6-1:didLoad
Page6-0:willLeave
Page6-1:willEnter
Page6-0:didLeave
Page6-1:canLeave
Page6-0:canEnter
Page6-1:canLeave
Page6-0:canEnter
Page6-1:canLeave
Page6-0:canEnter
Page6-1:willLeave
Page6-0:willEnter
Page6-1:didLeave
Page6-1:willUnload
Page6-0:canLeave
Page7-0:canEnter
Page7-0:willLoad
Page7-0:didLoad
Page6-0:willLeave
Page7-0:willEnter
Page7-0:didEnter
Page6-0:didLeave
Page7-0:canLeave
Page8-0:canEnter
Page2-0:willLeave
Page2-0:didLeave
Page2-0:willUnload
Page4-0:willLeave
Page4-0:didLeave
Page4-0:willUnload
Page6-0:willLeave
Page6-0:didLeave
Page6-0:willUnload
Page8-0:willLoad
Page8-0:didLoad
Page7-0:willLeave
Page8-0:willEnter
Page8-0:didEnter
Page7-0:didLeave
Page7-0:willUnload
Page8-0:canLeave
Page8-1:canEnter
Page8-1:willLoad
Page8-1:didLoad
Page8-0:willLeave
Page8-1:willEnter
Page8-1:didEnter
Page8-0:didLeave
Page8-0:willUnload
Page8-1:canLeave
Page8-2:canEnter
Page8-2:willLoad
Page8-2:didLoad
Page8-1:willLeave
Page8-2:willEnter
Page8-2:didEnter
Page8-1:didLeave
Page8-1:willUnload
Page8-2:canLeave
Page8-3:canEnter
Page8-3:willLoad
Page8-3:didLoad
Page8-2:willLeave
Page8-3:willEnter
Page8-3:didEnter
Page8-2:didLeave
Page8-3:canLeave
Page8-4:canEnter
Page8-4:willLoad
Page8-4:didLoad
Page8-3:willLeave
Page8-4:willEnter
Page8-4:didEnter
Page8-3:didLeave
Page8-4:canLeave
Page8-3:canEnter
Page8-4:willLeave
Page8-3:willEnter
Page8-3:didEnter
Page8-4:didLeave
Page8-4:willUnload
Page8-3:canLeave
Page8-5:canEnter
Page8-5:willLoad
Page8-5:didLoad
Page8-3:willLeave
Page8-5:willEnter
Page8-5:didEnter
Page8-3:didLeave
Page8-5:canLeave
Page8-3:canEnter
Page8-5:willLeave
Page8-3:willEnter
Page8-3:didEnter
Page8-5:didLeave
Page8-5:willUnload
Page8-3:canLeave
Page8-2:canEnter
Page8-3:willLeave
Page8-2:willEnter
Page8-2:didEnter
Page8-3:didLeave
Page8-3:willUnload
Page8-2:canLeave
Page8-2:willLeave
Page8-2:didLeave
Page8-2:willUnload
`;
//# sourceMappingURL=app.module.js.map
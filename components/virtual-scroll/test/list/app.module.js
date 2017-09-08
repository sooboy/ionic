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
let E2EPage = class E2EPage {
    constructor() {
        this.items = [];
        this.imgDomain = 'http://localhost:8900';
        this.responseDelay = 1500;
        this.itemCount = 1000;
        this.showGifs = false;
        // take a look at the gulp task: test.imageserver
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.imgDomain}/reset`, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                this.fillList();
            }
        };
        xhr.send();
    }
    fillList() {
        this.items.length = 0;
        let gifIndex = Math.ceil(Math.random() * gifs.length) - 1;
        for (let i = 0; i < this.itemCount; i++) {
            this.items.push({
                id: i,
                url: `${this.imgDomain}/?d=${this.responseDelay}&id=${i}`,
                gif: gifs[gifIndex]
            });
            gifIndex++;
            if (gifIndex >= gifs.length) {
                gifIndex = 0;
            }
        }
    }
    emptyList() {
        this.items.length = 0;
    }
    toggleGifs() {
        this.showGifs = !this.showGifs;
    }
    reload() {
        window.location.reload(true);
    }
};
E2EPage = __decorate([
    core_1.Component({
        templateUrl: 'main.html'
    }),
    __metadata("design:paramtypes", [])
], E2EPage);
exports.E2EPage = E2EPage;
const gifs = [
    'https://media.giphy.com/media/cFdHXXm5GhJsc/giphy.gif',
    'https://media.giphy.com/media/5JjLO6t0lNvLq/giphy.gif',
    'https://media.giphy.com/media/ZmdIZ8K4fKEEM/giphy.gif',
    'https://media.giphy.com/media/lKXEBR8m1jWso/giphy.gif',
    'https://media.giphy.com/media/PjplWH49v1FS0/giphy.gif',
    'https://media.giphy.com/media/SyVyFtBTTVb5m/giphy.gif',
    'https://media.giphy.com/media/LWqQ5glpSMjny/giphy.gif',
    'https://media.giphy.com/media/l396Dat26yQOdfWgw/giphy.gif',
    'https://media.giphy.com/media/zetsDd1oSNd96/giphy.gif',
    'https://media.giphy.com/media/F6PFPjc3K0CPe/giphy.gif',
    'https://media.giphy.com/media/L0GJP0ZxdnVbW/giphy.gif',
    'https://media.giphy.com/media/26ufbLWPFHkhwXcpW/giphy.gif',
    'https://media.giphy.com/media/r3jTnU6iEwpbO/giphy.gif',
    'https://media.giphy.com/media/6Xbr4pVmJW4wM/giphy.gif',
    'https://media.giphy.com/media/FPmzkXGFVhp2U/giphy.gif',
    'https://media.giphy.com/media/p3yU7Rno2PvvW/giphy.gif',
    'https://media.giphy.com/media/vbBmb51klyyB2/giphy.gif',
    'https://media.giphy.com/media/ZAfpXz6fGrlYY/giphy.gif',
    'https://media.giphy.com/media/3oGRFvVyUdGBZeQiAw/giphy.gif',
    'https://media.giphy.com/media/NJbeypFZCHj2g/giphy.gif',
    'https://media.giphy.com/media/WpNO2ZXjhJ85y/giphy.gif',
    'https://media.giphy.com/media/xaw15bdmMEkgg/giphy.gif',
    'https://media.giphy.com/media/tLwQSHQo6hjTa/giphy.gif',
    'https://media.giphy.com/media/3dcoLqDDjd9pC/giphy.gif',
    'https://media.giphy.com/media/QFfs8ubyDkluo/giphy.gif',
    'https://media.giphy.com/media/10hYVVSPrSpZS0/giphy.gif',
    'https://media.giphy.com/media/EYJz9cfMa7WAU/giphy.gif',
    'https://media.giphy.com/media/Q21vzIHyTtmaQ/giphy.gif',
    'https://media.giphy.com/media/pzmUOeqhzJTck/giphy.gif',
    'https://media.giphy.com/media/G6kt1Gb4Luxy0/giphy.gif',
    'https://media.giphy.com/media/13wjHxAz6B6E9i/giphy.gif',
    'https://media.giphy.com/media/ANbbM3IzH9Tna/giphy.gif',
    'https://media.giphy.com/media/EQ5I7NF4BDYA/giphy.gif',
    'https://media.giphy.com/media/L7gHewOS8GOWY/giphy.gif',
    'https://media.giphy.com/media/nO16UrmQh7khW/giphy.gif',
    'https://media.giphy.com/media/eGuk6gQM3Q29W/giphy.gif',
    'https://media.giphy.com/media/8dpPMMlxmDEJO/giphy.gif',
    'https://media.giphy.com/media/5ox090BjCB8ME/giphy.gif',
    'https://media.giphy.com/media/Hzm8c1eMSq3CM/giphy.gif',
    'https://media.giphy.com/media/2APlzZshLu3LO/giphy.gif',
    'https://media.giphy.com/media/dgygjvNe7jckw/giphy.gif',
    'https://media.giphy.com/media/5g0mypSSPupO0/giphy.gif',
    'https://media.giphy.com/media/10JmxORlA6dEFW/giphy.gif',
];
let AppComponent = class AppComponent {
    constructor() {
        this.root = E2EPage;
    }
};
AppComponent = __decorate([
    core_1.Component({
        template: '<ion-nav [root]="root"></ion-nav>'
    })
], AppComponent);
exports.AppComponent = AppComponent;
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            AppComponent,
            E2EPage
        ],
        imports: [
            platform_browser_1.BrowserModule,
            __1.IonicModule.forRoot(AppComponent)
        ],
        bootstrap: [__1.IonicApp],
        entryComponents: [
            AppComponent,
            E2EPage
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
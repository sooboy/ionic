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
const http_1 = require("@angular/http");
const __1 = require("../../../..");
let E2EPage = class E2EPage {
    constructor(http) {
        this.http = http;
        this.images = [];
    }
    ngAfterViewInit() {
        let tags = 'madison wisconsin';
        let FLICKR_API_KEY = '504fd7414f6275eb5b657ddbfba80a2c';
        let baseUrl = 'https://api.flickr.com/services/rest';
        this.http.get(baseUrl + '?method=flickr.groups.pools.getPhotos&group_id=1463451@N25&safe_search=1&api_key='
            + FLICKR_API_KEY + '&nojsoncallback=1&format=json&tags=' + tags)
            .subscribe(data => {
            this.images = data.json().photos.photo.slice(0, 20);
            setTimeout(() => {
                this.slider.update();
            });
        }, (err) => {
            console.info('Unable to load images');
            console.error(err);
        });
    }
    getImageUrl(item) {
        return `http://farm${item.farm}.static.flickr.com/${item.server}/${item.id}_${item.secret}_z.jpg`;
    }
};
__decorate([
    core_1.ViewChild(__1.Slides),
    __metadata("design:type", __1.Slides)
], E2EPage.prototype, "slider", void 0);
E2EPage = __decorate([
    core_1.Component({
        templateUrl: 'main.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], E2EPage);
exports.E2EPage = E2EPage;
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
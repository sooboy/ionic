"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_utils_1 = require("./platform-utils");
exports.PLATFORM_CONFIGS = {
    /**
     * core
     */
    'core': {
        settings: {
            mode: 'md',
            keyboardHeight: 290
        }
    },
    /**
     * mobile
     */
    'mobile': {},
    /**
     * phablet
     */
    'phablet': {
        isMatch(plt) {
            let smallest = Math.min(plt.width(), plt.height());
            let largest = Math.max(plt.width(), plt.height());
            return (smallest > 390 && smallest < 520) &&
                (largest > 620 && largest < 800);
        }
    },
    /**
     * tablet
     */
    'tablet': {
        isMatch(plt) {
            let smallest = Math.min(plt.width(), plt.height());
            let largest = Math.max(plt.width(), plt.height());
            return (smallest > 460 && smallest < 820) &&
                (largest > 780 && largest < 1400);
        }
    },
    /**
     * android
     */
    'android': {
        superset: 'mobile',
        subsets: [
            'phablet',
            'tablet'
        ],
        settings: {
            activator: function (plt) {
                // md mode defaults to use ripple activator
                // however, under-powered devices shouldn't use ripple
                // if this a linux device, and is using Android Chrome v36 (Android 5.0)
                // or above then use ripple, otherwise do not use a ripple effect
                if (plt.testNavigatorPlatform('linux')) {
                    let chromeVersion = plt.matchUserAgentVersion(/Chrome\/(\d+).(\d+)?/);
                    if (chromeVersion) {
                        // linux android device using modern android chrome browser gets ripple
                        if (parseInt(chromeVersion.major, 10) < 36 || plt.version().major < 5) {
                            return 'none';
                        }
                        else {
                            return 'ripple';
                        }
                    }
                    // linux android device not using chrome browser checks just android's version
                    if (plt.version().major < 5) {
                        return 'none';
                    }
                }
                // fallback to always use ripple
                return 'ripple';
            },
            autoFocusAssist: 'immediate',
            inputCloning: true,
            scrollAssist: true,
            hoverCSS: false,
            keyboardHeight: 300,
            mode: 'md',
        },
        isMatch(plt) {
            return plt.isPlatformMatch('android', ['android', 'silk'], ['windows phone']);
        },
        versionParser(plt) {
            return plt.matchUserAgentVersion(/Android (\d+).(\d+)?/);
        }
    },
    /**
     * ios
     */
    'ios': {
        superset: 'mobile',
        subsets: [
            'ipad',
            'iphone'
        ],
        settings: {
            autoFocusAssist: 'delay',
            hideCaretOnScroll: true,
            hoverCSS: false,
            inputBlurring: platform_utils_1.isIos,
            inputCloning: platform_utils_1.isIos,
            keyboardHeight: 300,
            mode: 'ios',
            scrollAssist: platform_utils_1.isIos,
            statusbarPadding: platform_utils_1.isCordova,
            swipeBackEnabled: platform_utils_1.isIos,
            tapPolyfill: platform_utils_1.isIosUIWebView,
            virtualScrollEventAssist: platform_utils_1.isIosUIWebView,
            disableScrollAssist: platform_utils_1.isIos,
            keyboardResizes: keyboardResizes,
            resizeAssist: keyboardResizes,
        },
        isMatch(plt) {
            return plt.isPlatformMatch('ios', ['iphone', 'ipad', 'ipod'], ['windows phone']);
        },
        versionParser(plt) {
            return plt.matchUserAgentVersion(/OS (\d+)_(\d+)?/);
        }
    },
    /**
     * ipad
     */
    'ipad': {
        superset: 'tablet',
        settings: {
            keyboardHeight: 500,
        },
        isMatch(plt) {
            return plt.isPlatformMatch('ipad');
        }
    },
    /**
     * iphone
     */
    'iphone': {
        subsets: [
            'phablet'
        ],
        isMatch(plt) {
            return plt.isPlatformMatch('iphone');
        }
    },
    /**
     * Windows
     */
    'windows': {
        superset: 'mobile',
        subsets: [
            'phablet',
            'tablet'
        ],
        settings: {
            mode: 'wp',
            autoFocusAssist: 'immediate',
            hoverCSS: false
        },
        isMatch(plt) {
            return plt.isPlatformMatch('windows', ['windows phone']);
        },
        versionParser(plt) {
            return plt.matchUserAgentVersion(/Windows Phone (\d+).(\d+)?/);
        }
    },
    /**
     * cordova
     */
    'cordova': {
        isEngine: true,
        initialize: function (plt) {
            // prepare a custom "ready" for cordova "deviceready"
            plt.prepareReady = function () {
                // 1) ionic bootstrapped
                plt.windowLoad(function (win, doc) {
                    // 2) window onload triggered or completed
                    doc.addEventListener('deviceready', function () {
                        // 3) cordova deviceready event triggered
                        // add cordova listeners to emit platform events
                        doc.addEventListener('backbutton', function (ev) {
                            plt.zone.run(() => {
                                plt.backButton.emit(ev);
                            });
                        });
                        doc.addEventListener('pause', function (ev) {
                            plt.zone.run(() => {
                                plt.pause.emit(ev);
                            });
                        });
                        doc.addEventListener('resume', function (ev) {
                            plt.zone.run(() => {
                                plt.resume.emit(ev);
                            });
                        });
                        // cordova has its own exitApp method
                        plt.exitApp = function () {
                            win['navigator']['app'].exitApp();
                        };
                        // cordova has fully loaded and we've added listeners
                        plt.triggerReady('cordova');
                    });
                });
            };
        },
        isMatch(plt) {
            return platform_utils_1.isCordova(plt);
        }
    },
    /**
     * electron
     */
    'electron': {
        superset: 'core',
        initialize: function (plt) {
            plt.prepareReady = function () {
                // 1) ionic bootstrapped
                plt.windowLoad(function () {
                    plt.triggerReady('electron');
                });
            };
        },
        isMatch(plt) {
            return platform_utils_1.isElectron(plt);
        }
    }
};
function keyboardResizes(plt) {
    const win = plt.win();
    if (win.Ionic && win.Ionic.keyboardResizes === true) {
        return true;
    }
    return false;
}
exports.PlatformConfigToken = new core_1.OpaqueToken('PLTCONFIG');
function providePlatformConfigs() {
    return exports.PLATFORM_CONFIGS;
}
exports.providePlatformConfigs = providePlatformConfigs;
//# sourceMappingURL=platform-registry.js.map
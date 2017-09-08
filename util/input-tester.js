"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const util_1 = require("./util");
const lorem_ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus nisl lobortis interdum condimentum. Cras volutpat, massa quis vehicula eleifend, turpis mauris sodales erat, ut varius ligula ipsum et turpis. Aliquam erat volutpat. Maecenas sodales pellentesque auctor. Suspendisse faucibus a erat sit amet pretium. Vestibulum nec tempus tellus. Mauris fringilla faucibus dui sed vestibulum. Curabitur porttitor consectetur nisl. Nulla porta, neque sed congue tempus, erat nunc rutrum diam, eu elementum sapien leo quis eros. Donec non convallis felis. Nam eu pharetra sapien.';
exports.TEXT_CORPUS = [
    ['hola', 'hola'],
    ['', ''],
    ['   ', '   '],
    ['adiós', 'adiós'],
    ['hola y adiós', 'hola y adiós'],
    [lorem_ipsum, lorem_ipsum]
];
exports.NUMBER_CORPUS = [
    [-1, -1],
    [0, 0],
    [-123456789, -123456789],
    [1.1234, 1.1234],
    [123456789, 123456789],
    ['1.1234', 1.1234],
    ['123456789', 123456789],
    ['-123456789', -123456789]
];
exports.BOOLEAN_CORPUS = [
    [true, true],
    [false, false],
    ['', true],
    ['false', false],
    ['true', true],
];
exports.ANY_CORPUS = [
    [true, true],
    [false, false],
    [0, 0],
    ['', ''],
    [' ', ' '],
    ['hola', 'hola']
];
function commonInputTest(input, config) {
    // TODO test form register/deregister
    // TODO test item classes
    // TODO test disable
    const zone = new core_1.NgZone(true);
    zone.run(() => {
        if (config.testItem === true && !input._item) {
            util_1.assert(false, 'input is invalid');
        }
        if (config.testForm === true && !input._form) {
            util_1.assert(false, 'form is invalid');
        }
        // Run tests before initialization
        testInput(input, config, false);
        input.ngAfterContentInit();
        input.ngAfterViewInit && input.ngAfterViewInit();
        // Run tests after initialization
        testInput(input, config, true);
        // Run tests without item
        if (config.testItem === true && !input._item) {
            input._item = undefined;
            testInput(input, config, true);
        }
        // Run tests without item
        if (config.testForm === true && !input._form) {
            input._form = undefined;
            testInput(input, config, true);
        }
        testInput(input, config, true);
        input.ngOnDestroy();
        util_1.assert(!input._init, 'input was not destroyed correctly');
    });
}
exports.commonInputTest = commonInputTest;
function testInput(input, config, isInit) {
    testState(input, config, isInit);
    testWriteValue(input, config, isInit);
    testNgModelChange(input, config, isInit);
}
function testState(input, config, isInit) {
    assertEqual(input._init, isInit, 'input must be init');
    assertEqual(input._isFocus, false, 'should not be focus');
    assertEqual(input.isFocus(), false, 'should not be focus');
    assertEqual(input.value, config.defaultValue, 'default value is wrong');
    if (isInit) {
        let blurCount = 0;
        let focusCount = 0;
        const subBlur = input.ionBlur.subscribe((ev) => {
            assertEqual(ev, input, 'ionBlur argument is wrong');
            blurCount++;
            if (config.onFocusChange && config.onFocusChange(false) !== true) {
                util_1.assert(false, 'onFocusChange test failed');
            }
        });
        const subFocus = input.ionFocus.subscribe((ev) => {
            assertEqual(ev, input, 'ionFocus argument is wrong');
            focusCount++;
            if (config.onFocusChange && config.onFocusChange(true) !== true) {
                util_1.assert(false, 'onFocusChange test failed');
            }
        });
        input._fireFocus();
        assertEqual(input._isFocus, true, 'should be focus');
        assertEqual(input.isFocus(), true, 'should be focus');
        input._fireFocus();
        input._fireBlur();
        assertEqual(input._isFocus, false, 'should be not focus');
        assertEqual(input.isFocus(), false, 'should be not focus');
        input._fireBlur(); // it should not crash
        assertEqual(focusCount, 1, 'ionFocus was not called correctly');
        assertEqual(blurCount, 1, 'ionBlur was not called correctly');
        subBlur.unsubscribe();
        subFocus.unsubscribe();
    }
}
function testWriteValue(input, config, isInit) {
    let test;
    let i;
    let ionChangeCalled = 0;
    let OnChangeCalled = 0;
    let OnTouchedCalled = 0;
    let ngModelValue;
    // Test ionChange
    let sub = input.ionChange.subscribe((ev) => {
        assertEqual(ionChangeCalled, 0, 'ionChange: internal error');
        assertEqual(ev, input, 'ionChange: ev is not the input');
        assertEqual(ev.value, test[1], 'ionChange: value does not match');
        assertEqual(ngModelValue, test[1], 'ionChange: ngmodel was not updated');
        ionChangeCalled++;
    });
    // Test registerOnChange
    input.registerOnChange((ev) => {
        assertEqual(OnChangeCalled, 0, 'registerOnChange: internal error');
        assertEqual(input.value, ev, 'registerOnChange: ev output does not match');
        assertEqual(input.value, test[1], 'registerOnChange: value does not match');
        ngModelValue = ev;
        OnChangeCalled++;
    });
    // Test registerOnChange
    input.registerOnTouched(() => {
        assertEqual(OnTouchedCalled, 0, 'registerOnTouched: internal error');
        OnTouchedCalled++;
    });
    // Run corpus
    for (i = 0; i < config.corpus.length; i++) {
        test = config.corpus[i];
        input.value = test[0];
        assertEqual(input.value, test[1], 'loop: input/output does not match');
        if (isInit) {
            assertEqual(ionChangeCalled, 1, 'loop: ionChange error');
            if (config.onValueChange && config.onValueChange(test[1]) !== true) {
                util_1.assert(false, 'onValueChange() test failed');
            }
        }
        else {
            assertEqual(ionChangeCalled, 0, 'loop: ionChange error');
        }
        assertEqual(OnChangeCalled, 1, 'loop: OnChangeCalled was not called');
        assertEqual(OnTouchedCalled, 1, 'loop: OnTouchedCalled was not called');
        OnTouchedCalled = OnChangeCalled = ionChangeCalled = 0;
        // Set same value (it should not redispatch)
        input.value = test[0];
        assertEqual(ionChangeCalled, 0, 'loop: ionChange should not be called');
        assertEqual(OnChangeCalled, 0, 'loop: OnChangeCalled should not be called');
        // TODO OnTouchedCalled?
        OnTouchedCalled = OnChangeCalled = ionChangeCalled = 0;
    }
    // Test undefined
    input.value = undefined;
    assertEqual(input.value, test[1], 'undefined should not change the value');
    assertEqual(ionChangeCalled, 0, 'undefined: ionChange should not be called');
    assertEqual(OnChangeCalled, 0, 'undefined: OnChangeCalled should not be called');
    assertEqual(OnTouchedCalled, 0, 'undefined: OnTouchedCalled should not be called');
    // Test null (reset)
    test = [null, config.defaultValue];
    input.value = null;
    assertEqual(input.value, config.defaultValue, 'null: wrong default value');
    assertEqual(OnChangeCalled, 1, 'null: OnChangeCalled was not called');
    assertEqual(OnTouchedCalled, 1, 'null: OnTouchedCalled was not called');
    input.registerOnChange(null);
    input.registerOnTouched(null);
    sub.unsubscribe();
}
function testNgModelChange(input, config, isInit) {
    let test;
    let i;
    let ionChangeCalled = 0;
    let OnChangeCalled = 0;
    let OnTouchedCalled = 0;
    // Test ionChange
    let sub = input.ionChange.subscribe((ev) => {
        assertEqual(ionChangeCalled, 0, 'internal error');
        assertEqual(ev, input, 'ev output does not match');
        assertEqual(test[1], ev.value, 'value does not match');
        ionChangeCalled++;
    });
    // Test registerOnChange
    input.registerOnChange(() => {
        OnChangeCalled++;
    });
    // Test registerOnChange
    input.registerOnTouched(() => {
        OnTouchedCalled++;
    });
    // Run corpus
    for (i = 0; i < config.corpus.length; i++) {
        test = config.corpus[i];
        input.writeValue(test[0]);
        assertEqual(input.value, test[1], 'input/output does not match');
        if (isInit) {
            assertEqual(ionChangeCalled, 1, 'ionChange error');
            if (config.onValueChange && config.onValueChange(test[1]) !== true) {
                util_1.assert(false, 'onValueChange() test failed');
            }
        }
        else {
            assertEqual(ionChangeCalled, 0, 'ionChange error');
        }
        assertEqual(OnChangeCalled, 0, 'OnChangeCalled should not be called');
        assertEqual(OnTouchedCalled, 0, 'OnTouchedCalled should not be called');
        OnTouchedCalled = OnChangeCalled = ionChangeCalled = 0;
        // Set same value (it should not redispatch)
        input.writeValue(test[0]);
        input.value = test[0];
        assertEqual(ionChangeCalled, 0, 'ionChange should not be called');
        assertEqual(OnChangeCalled, 0, 'OnChangeCalled should not be called');
        // TODO OnTouchedCalled?
        OnTouchedCalled = OnChangeCalled = ionChangeCalled = 0;
    }
    input.registerOnChange(null);
    input.registerOnTouched(null);
    sub.unsubscribe();
    input.value = config.defaultValue;
}
function assertEqual(a, b, message) {
    if (!equal(a, b)) {
        util_1.assert(false, a + ' != ' + b + ' ' + message);
    }
}
function equal(a, b) {
    if (a === b) {
        return true;
    }
    // return false;
    return JSON.stringify(a) === JSON.stringify(b);
}
//# sourceMappingURL=input-tester.js.map
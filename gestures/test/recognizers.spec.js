"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recognizers_1 = require("../recognizers");
const simulator_1 = require("../simulator");
describe('recognizers', () => {
    it('should not fire if it did not start', () => {
        let p = new recognizers_1.PanRecognizer('x', 2, 2);
        expect(p.pan()).toEqual(0);
        simulator_1.Simulate.from(0, 0).to(99, 0).run((coord) => {
            expect(p.detect(coord)).toEqual(false);
        });
    });
    it('should reset', () => {
        let p = new recognizers_1.PanRecognizer('x', 2, 2);
        p.start({ x: 0, y: 0 });
        expect(p.pan()).toEqual(0);
        simulator_1.Simulate.from(0, 0).to(10, 0).run((coord) => {
            p.detect(coord);
        });
        expect(p.pan()).toEqual(1);
        p.start({ x: 0, y: 0 });
        expect(p.pan()).toEqual(0);
        simulator_1.Simulate.from(0, 0).to(-10, 0).run((coord) => {
            p.detect(coord);
        });
        expect(p.pan()).toEqual(-1);
    });
    it('should fire with large threshold', () => {
        let detected = false;
        let p = new recognizers_1.PanRecognizer('x', 100, 40);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).to(99, 0)
            .run((coord) => expect(p.detect(coord)).toEqual(false))
            .delta(2, 0)
            .run((coord) => {
            if (p.detect(coord)) {
                // it should detect a horizontal pan
                expect(p.pan()).toEqual(1);
                detected = true;
            }
        })
            .delta(20, 0)
            .to(0, 0)
            .to(102, 0)
            .run((coord) => expect(p.detect(coord)).toEqual(false));
        expect(detected).toEqual(true);
    });
    it('should detect swipe left', () => {
        let p = new recognizers_1.PanRecognizer('x', 20, 20);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(19, 21).delta(-30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(1);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(-19, 21).delta(-30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(1);
    });
    it('should detect swipe right', () => {
        let p = new recognizers_1.PanRecognizer('x', 20, 20);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(180 - 19, 21).delta(30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(-1);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(180 + 19, 21).delta(30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(-1);
    });
    it('should NOT detect swipe left', () => {
        let p = new recognizers_1.PanRecognizer('x', 20, 20);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(21, 21).delta(-30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(0);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(-21, 21).delta(-30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(0);
    });
    it('should NOT detect swipe right', () => {
        let p = new recognizers_1.PanRecognizer('x', 20, 20);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(180 - 21, 21).delta(30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(0);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(180 + 21, 21).delta(30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(0);
    });
    it('should detect swipe top', () => {
        let p = new recognizers_1.PanRecognizer('y', 20, 20);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(90 - 19, 21).delta(-30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(1);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(90 + 19, 21).delta(-30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(1);
    });
    it('should detect swipe bottom', () => {
        let p = new recognizers_1.PanRecognizer('y', 20, 20);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(-90 + 19, 21).delta(30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(-1);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(-90 - 19, 21).delta(30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(-1);
    });
    it('should NOT detect swipe top', () => {
        let p = new recognizers_1.PanRecognizer('y', 20, 20);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(90 - 21, 21).delta(-30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(0);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(90 + 21, 21).delta(-30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(0);
    });
    it('should NOT detect swipe bottom', () => {
        let p = new recognizers_1.PanRecognizer('y', 20, 20);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(-90 + 21, 21).delta(30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(0);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(-90 - 21, 21).delta(30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(0);
    });
    it('should NOT confuse between pan Y and X', () => {
        let p = new recognizers_1.PanRecognizer('x', 20, 20);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).deltaPolar(90, 21).delta(30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(0);
    });
    it('should NOT confuse between pan X and Y', () => {
        let p = new recognizers_1.PanRecognizer('y', 20, 20);
        p.start({ x: 0, y: 0 });
        simulator_1.Simulate
            .from(0, 0).delta(30, 0)
            .run((coord) => p.detect(coord));
        expect(p.pan()).toEqual(0);
    });
});
//# sourceMappingURL=recognizers.spec.js.map
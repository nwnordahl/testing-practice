import { calculator } from "./calculator.js";

test("1 + 1 equal 2", () => {
  expect(calculator.add(1, 1)).toEqual(2);
});

test("1 - 1 equal 0", () => {
  expect(calculator.subtract(1, 1)).toEqual(0);
});

test("1 / 2 equal 0.5", () => {
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});

test("12 * 12 equal 144", () => {
  expect(calculator.multiply(12, 12)).toEqual(144);
});

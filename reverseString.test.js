import reverseString from "./reverseString.js";

test("reverseString('abba') to equal 'abba'", () => {
  expect(reverseString("abba")).toBe("abba");
});

test("reverseString('JavaScript') to equal 'tpircSavaJ'", () => {
  expect(reverseString("JavaScript")).toBe("tpircSavaJ");
});

test("reverseString('This is a sentence.') to equal '.ecnetnes a si sihT'", () => {
  expect(reverseString("This is a sentence.")).toBe(".ecnetnes a si sihT");
});

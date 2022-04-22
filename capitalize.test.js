import capitalize from "./capitalize.js";

test("capitalize('word') to equal 'Word'", () => {
  expect(capitalize("word")).toBe("Word");
});

test("capitalize('this is a sentence.') to equal 'This is a sentence.'", () => {
  expect(capitalize("this is a sentence.")).toBe("This is a sentence.");
});

test("capitalize('word') to equal 'Word'", () => {
  expect(capitalize("12345")).toBe("12345");
});

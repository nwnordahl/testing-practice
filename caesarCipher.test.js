import caesarCipher from "./caesarCipher.js";

test("caesarCipher('z', 1) to be 'a'", () => {
  expect(caesarCipher("z", 1)).toBe("a");
});

test("caesarCipher('this is a sentence', 5) to be 'ymnx nx f xjsyjshj'", () => {
  expect(caesarCipher("this is a sentence", 5)).toBe("ymnx nx f xjsyjshj");
});

test("caesarCipher('this is a sentence.', 5) to be 'ymnx nx f xjsyjshj.'", () => {
  expect(caesarCipher("this is a sentence.", 5)).toBe("ymnx nx f xjsyjshj.");
});

test("caesarCipher('This is a sentence.', 5) to be 'Ymnx nx f xjsyjshj.'", () => {
  expect(caesarCipher("This is a sentence.", 5)).toBe("Ymnx nx f xjsyjshj.");
});

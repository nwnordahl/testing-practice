import analyzeArray from "./analyzeArray.js";

const array = [8, 3, 1, 4, 2, 6];

test("analyzeArray(array) to equal { average: 4, min: 1, max: 8, length: 6 }", () => {
  expect(analyzeArray(array)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

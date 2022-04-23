export default function analyzeArray(array) {
  return {
    average: array.reduce((prev, curr) => prev + curr, 0) / array.length,
    min: array.sort((a, b) => a - b)[0],
    max: array.sort((a, b) => b - a)[0],
    length: array.length,
  };
}

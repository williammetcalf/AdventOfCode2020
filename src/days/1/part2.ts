import { makeProblem } from "../../lib";
import { data } from "./data";

export const d1p2 = makeProblem(1, 2, () => {
  const desiredSum = 2020;
  const foundNumbers = findNumbersForSum(data, desiredSum);

  if (!foundNumbers) {
    throw new Error(":(");
  }

  return foundNumbers[0] * foundNumbers[1] * foundNumbers[2];
});

function findNumbersForSum(numbers: number[], sum: number) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        if (numbers[i] + numbers[j] + numbers[k] === sum) {
          return [numbers[i], numbers[j], numbers[k]];
        }
      }
    }
  }
  return null;
}

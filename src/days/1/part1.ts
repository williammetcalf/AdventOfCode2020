import { makeProblem } from "../../lib";
import { data } from "./data";

export const d1p1 = makeProblem(1, 1, () => {
  const desiredSum = 2020;
  const foundNumbers = findNumbersForSum(data, desiredSum);

  if (!foundNumbers) {
    throw new Error(":(");
  }

  return foundNumbers[0] * foundNumbers[1];
});

function findNumbersForSum(numbers: number[], sum: number) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === sum) {
        return [numbers[i], numbers[j]];
      }
    }
  }
  return null;
}

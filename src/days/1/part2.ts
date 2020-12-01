import { makeProblem } from "../../lib";
import { data } from "./data";
import { findNumbersForDesiredSum } from "./find-numbers-for-desired-sum";

export const d1p2 = makeProblem(1, 2, () => {
  const desiredSum = 2020;
  const foundNumbers = findNumbersForDesiredSum(data, desiredSum, 3);

  return foundNumbers[0] * foundNumbers[1] * foundNumbers[2];
});

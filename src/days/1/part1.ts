import { makeProblem } from "../../lib";
import { data } from "./data";
import { findNumbersForDesiredSum } from "./find-numbers-for-desired-sum";

export const d1p1 = makeProblem(1, 1, () => {
  const desiredSum = 2020;
  const foundNumbers = findNumbersForDesiredSum(data, desiredSum, 2);

  return foundNumbers[0] * foundNumbers[1];
});

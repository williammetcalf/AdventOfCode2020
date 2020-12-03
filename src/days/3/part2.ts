import { makeProblem } from "../../lib";
import { countTreesOnSlope } from "./count-trees-on-slope";
import { loadMap } from "./load-map";

export const d3p2 = makeProblem(3, 2, () => {
  const map = loadMap();

  const s1 = countTreesOnSlope(map, 1, 1);
  const s2 = countTreesOnSlope(map, 3, 1);
  const s3 = countTreesOnSlope(map, 5, 1);
  const s4 = countTreesOnSlope(map, 7, 1);
  const s5 = countTreesOnSlope(map, 1, 2);

  return s1 * s2 * s3 * s4 * s5;
});

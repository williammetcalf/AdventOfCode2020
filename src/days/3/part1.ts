import { makeProblem } from "../../lib";
import { countTreesOnSlope } from "./count-trees-on-slope";
import { loadMap } from "./load-map";

export const d3p1 = makeProblem(3, 1, () => {
  const map = loadMap();

  return countTreesOnSlope(map, 3, 1);
});

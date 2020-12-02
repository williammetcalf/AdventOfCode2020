import { makeProblem } from "../../lib";
import { passwords } from "./load-passwords";
import { Password } from "./Password";

export const d2p1 = makeProblem(2, 1, () => {
  const validCount = passwords
    .map((password) => Password.validateP1(password))
    .filter((valid) => valid).length;

  return validCount;
});

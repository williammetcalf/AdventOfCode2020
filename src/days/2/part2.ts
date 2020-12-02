import { makeProblem } from "../../lib";
import { passwords } from "./load-passwords";
import { Password } from "./Password";

export const d2p2 = makeProblem(2, 2, () => {
  const validCount = passwords
    .map((password) => Password.validateP2(password))
    .filter((valid) => valid).length;

  return validCount;
});

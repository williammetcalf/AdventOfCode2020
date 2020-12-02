import { readFileSync } from "fs";
import { join } from "path";

import { Password } from "./Password";

const file = join(__dirname, "data");
export const passwords = readFileSync(file)
  .toString()
  .split("\n")
  .map((line) => new Password(line));

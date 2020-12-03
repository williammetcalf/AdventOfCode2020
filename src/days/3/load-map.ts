import { readFileSync } from "fs";
import { join } from "path";

export const loadMap = () => {
  const file = join(__dirname, "data");
  return readFileSync(file)
    .toString()
    .split("\n")
    .map((line) =>
      line
        .split("")
        .filter((char) => char === "#" || char === ".")
        .map((char) => char === "#")
    );
};

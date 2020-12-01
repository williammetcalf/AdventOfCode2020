import { printProblem } from "./print-problem";

export function makeProblem(day: number, part: number, fn: () => any) {
  return () => {
    const start = new Date().getTime();
    printProblem(day, part);
    const answer = fn();
    const end = new Date().getTime();

    console.log("Answer: ", answer);
    console.log(`Solved in ${((end - start) / 1000).toFixed(3)} seconds`);
  };
}

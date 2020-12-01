import { printProblem } from "./print-problem";

export function makeProblem(day: number, part: number, fn: () => any) {
  return () => {
    const start = new Date().getTime();
    printProblem(day, part);
    try {
      const answer = fn();
      const end = new Date().getTime();
      console.log("Answer: ", answer);
      console.log(`Solved in ${((end - start) / 1000).toFixed(3)} seconds`);
    } catch (e) {
      console.log("Error!", e.message || e);
      const end = new Date().getTime();
      console.log(`Failed in ${((end - start) / 1000).toFixed(3)} seconds`);
    }
  };
}

export function findNumbersForDesiredSum(
  numbers: number[],
  desiredSum: number,
  numberCount = 2
) {
  const indicies = new Array(numberCount).fill(0);
  indicies.forEach((_, idx) => (indicies[idx] = idx));

  while (true) {
    const sum = indicies.reduce((sum, idx) => sum + numbers[idx], 0);
    if (sum === desiredSum) {
      return indicies.map((idx) => numbers[idx]);
    }

    for (let i = numberCount - 1; i >= 0; i--) {
      indicies[i]++;
      if (indicies[i] >= numbers.length) {
        if (i === 0) {
          throw new Error(
            `Couldn't find ${numberCount} numbers that sum to ${desiredSum}`
          );
        }
        indicies[i] = indicies[i - 1] + 1;
      } else {
        break;
      }
    }
  }
}

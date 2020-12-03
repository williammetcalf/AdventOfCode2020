export const countTreesOnSlope = (map: boolean[][], dx: number, dy: number) => {
  let x = 0;
  let y = 0;
  let trees = 0;

  while (y < map.length - 1) {
    x = (x + dx) % map[y].length;
    y += dy;

    if (map[y][x]) trees++;
  }

  return trees;
};

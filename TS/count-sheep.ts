export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  let result = 0;
  arrayOfSheep.map((el) => {
    if (el === true) {
      result += 1;
    }
  });
  return result;
}

// First solution 
export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  let result = 0;
  arrayOfSheep.forEach((el) => {
    if (el === true) {
      result += 1;
    }
  });
  return result;
}

// Better solution
export function countSheeps2(arrayOfSheep: (boolean | undefined | null)[]) {
  // your code here
  return arrayOfSheep.reduce((acc, el) => {
    return el ? acc + 1 : acc;
  }, 0);
}

function gimme(triplet) {
  let middleEl = 0;
  const res = triplet.sort((a, b) => {
    return a - b;
  });
  return res;
}

// [1,2,3] = 2
// [4,2,3] = 3  3,2,4

console.log(gimme([3, 2, 1])); // 1,2,3

const arr = [9, 8, 7, 6, 4, 3, 1];

console.log(arr.sort((a, b) => a - b));



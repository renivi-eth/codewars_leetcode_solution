function minMax(arr) {
  if (arr.length === 1) {
    return [arr[0], arr[0]];
  }
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([2]));

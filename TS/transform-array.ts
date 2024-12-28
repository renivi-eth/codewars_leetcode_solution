function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  let result: number[] = [];

  for(let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i);
  }

  return result;
}

console.log(map([1,2,3], function plusI(n, i) { return n + i; }))


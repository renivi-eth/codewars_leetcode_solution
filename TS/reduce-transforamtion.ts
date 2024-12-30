type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  // Начальное значение аккумулятора
  let accum = init;

  if (nums.length === 0) {
    return init;
  }

  for (let i = 0; i < nums.length; i++) {
    accum = fn(accum, nums[i]);
  }

  return accum;
}

// function sum(accum, curr) { return accum + curr; }

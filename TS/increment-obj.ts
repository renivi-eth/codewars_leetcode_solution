type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

/**
 * Не забывать, работать с текущим состоянием результирующей переменной, а не начальным  значением init внутри первоначальной функции
 */
function createCounter(init: number): Counter {
  let res: number = init;
  return {
    increment: () => {
      res = res + 1;
      return res;
    },
    decrement: () => {
      res = res - 1;
      return res;
    },
    reset: () => {
      res = init;
      return res;
    },
  };
}

console.log(`increment - ${createCounter(5).increment()}`);
console.log(`decrement - ${createCounter(5).decrement()}`);
console.log(`reset - ${createCounter(5).reset()}`);

function clos() {
  const a = 'This is a clousure';

  return function logText() {
    console.log(a);
  };
}

type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x: number): number {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}

const res = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);

console.log(res(5)); // 5 * 2 = 10, 10 * 10 = 100, 100 + 1 = 101

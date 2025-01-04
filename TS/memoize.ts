type FnMemo = (...params: number[]) => number;

function memoize(fn: FnMemo): FnMemo {
  const cache = {};

  return function (...args) {
    const key = args.join(',');
    // @ts-ignore
    const val = cache[key];
    // @ts-ignore
    console.log(key);
    if (val) return val;

    const res = fn(...args);
    // @ts-ignore
    cache[key] = res;
    // @ts-ignore
    console.log(cache[key]);
    console.log(cache);
    return res;
  };
}

const sumTwoNumber = (a: any, b: any) => {
  return a + b;
};

const memoizeSum = memoize(sumTwoNumber);

console.log(memoizeSum(2, 2));

function memoizeMap(fn: FnMemo): FnMemo {
  const mapMemo = new Map();

  return function (...args) {
    let key = JSON.stringify(args);

    if (mapMemo.has(key)) {
      return mapMemo.get(key);
    } else {
      const result = fn(...args);
      mapMemo.set(key, result);

      return result;
    }
  };
}

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: Function): OnceFn {
  return function (...args) {
    if (fn) {
      const result = fn(...args);
      fn = null;
      return result;
    } else {
      return undefined;
    }
  };
}

const sumFunc = (a: number, b: number, c: number): number => a + b + c;
const onceFn = once(sumFunc);

console.log(onceFn(1, 2, 3)); // 6

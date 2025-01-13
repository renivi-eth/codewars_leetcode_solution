type JSONValue2 = null | boolean | number | string | JSONValue2[] | { [key: string]: JSONValue2 };
type Fn2 = (...args: JSONValue2[]) => void

function cancellable(fn: Fn2, args: JSONValue2[], t: number): Function {
    const timer = setTimeout(() => {
        fn(...args)
    }, t);

    return function cancelFn() {
        clearTimeout(timer);
    }
};

const cancel = cancellable(console.log, ['Hello, World!'], 1000);

console.log(cancel); 
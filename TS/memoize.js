function memoize(fn) {
    var cache = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = args.join(',');
        // @ts-ignore
        var val = cache[key];
        // @ts-ignore
        console.log(key);
        if (val)
            return val;
        var res = fn.apply(void 0, args);
        // @ts-ignore
        cache[key] = res;
        // @ts-ignore
        console.log(cache[key]);
        console.log(cache);
        return res;
    };
}
var sumTwoNumber = function (a, b) {
    return a + b;
};
var memoizeSum = memoize(sumTwoNumber);
console.log(memoizeSum(2, 2));

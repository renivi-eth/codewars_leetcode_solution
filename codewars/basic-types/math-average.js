var Calculator = {
  average: function (...args) {
    if (args.length === 0) {
      return 0;
    }
    let sum = args.reduce((acc, el) => {
      return (acc += el);
    }, 0);

    return sum / args.length;
  },
};

const res = Calculator.average(1, 2, 3, 4, 5);
console.log(res); // 3
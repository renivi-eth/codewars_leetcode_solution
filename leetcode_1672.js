var maximumWealth = function (accounts) {
  let res = accounts.map((el) => {
    return el.reduce((acc, el) => {
      return (acc += el);
    }, 0);
  });
  return Math.max(...res);
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 2],
  ])
);

"use strict";

const sum = function (arr) {
  arr.sort((a, b) => a - b);
  const res = arr[0] + arr[1];
  return res;
};

console.log(sum([5, 4, 3, 2, 1]));

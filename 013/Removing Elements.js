"use strict";

function removeEveryOther(arr) {
  let newArr = [];
  arr.forEach((el, i) => {
    if (i % 2 === 0) {
      newArr.push(el);
    }
  });
  return newArr;
}
console.log(removeEveryOther([1, 2, 3, 4, 5]));

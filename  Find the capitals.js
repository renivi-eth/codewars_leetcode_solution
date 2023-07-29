/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
*/

var capitals = function (word) {
  // Для долбаебов
  const res = [];
  const upper = word.toUpperCase().split("");
  const arr = word.split("");

  for (let i = 0; i < upper.length; i++) {
    const el = upper[i];

    for (let j = 0; j < arr.length; j++) {
      const el2 = arr[j];

      if (el2 === el && !res.includes(j)) {
        res.push(j);
      }
    }
  }
  return res.sort();
};

console.log(capitals("EfweFasesadfSAsd"));

function forSmart(word) {
  const res = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i]) {
      res.push(i);
    }
  }
  return res;
}

console.log(forSmart("sadasdSADsd"));

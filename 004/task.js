// Глупо:
var capitals = function (word) {
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

console.log(capitals("LOL"));

// Умнее:
function forSmart(word) {
  const res = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i]) {
      res.push(i);
    }
  }
  return res;
}

console.log(forSmart("Lord Of The Rings"));

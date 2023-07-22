// write the function isAnagram
var isAnagram = function (test, original) {
  const testArr = test.toLowerCase().split("").sort().join("");
  const origArr = original.toLowerCase().split("").sort().join("");
  const res = testArr === origArr ? true : false;

  return res;
};

console.log(isAnagram("Buckethead", "DeathCubeK"));

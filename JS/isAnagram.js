// write the function isAnagram
var isAnagram = function (test, original) {
  const testArr = test.toLowerCase().split("").sort().join("");
  const origArr = original.toLowerCase().split("").sort().join("");
  return (res = testArr === origArr ? true : false);
};

console.log(isAnagram("Buckethead", "DeathCubeK"));

// Решение

/* 
Функция принимает два аргумента - слово1, слово2, задача сравнить два слово, явлюяется ли первое слово аннаграмой второго слова. 

*/

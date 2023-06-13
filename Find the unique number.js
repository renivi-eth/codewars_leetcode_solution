/*
Есть массив с некоторыми числами. Все числа равны, кроме одного. Попробуйте найти!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
Гарантируется, что массив содержит не менее 3 чисел.
Тесты содержат очень большие массивы, так что подумайте о производительности.
*/

//  Find the unique number

// create func
function findUniq(arr) {
  // подсчет кол-во каждого эл в массиве
  let counts = {};

  for (let element of arr) {
    counts[element] = (counts[element] || 0) + 1;
  }

  for (let element of arr) {
    if (counts[element] === 1) {
      return element;
    }
  }

  return null;
}

// console.log(findUniq([3, 3, 4, 3, 3]));

function replice(arr) {
  let count = {};

  for (let el of arr) {
    count[el] = (count[el] || 0) + 1;
  }
  return count;
}

console.log(replice([1, 2, 3, 3, 2]));

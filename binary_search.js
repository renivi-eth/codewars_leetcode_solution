// Theory in Notion
// Linear Search
// O(n)
const newArr = [2, 4, 6, 8, 10, 12];
function linearSearch(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (number === array[i]) {
      return `i = ${i} number = ${array[i]}`;
    }
  }
  return false;
}
console.log(linearSearch(newArr, 2));

// Алгоритм бинарного поиска

/* 
Бинарный поиск (двоичный поиск, метод половинного деления, дихотомия) - алгоритм, для сортированного массива, 
который каждую итерацию при поиске элемента делит массив пополам и исключаем половину осташихся чисел, которые не попадают под заданный критерий
*/

const arr = []; // создаем пустой массив;

function addEl() {
  for (let i = 1; i <= 100; i++) {
    // через цикл наполнили массив данными
    arr.push(i);
  }
}
addEl();
console.log(arr);

// Алгоритм бинарного поиска
function binarySearch(array, el) {
  let low = 0; // начальная длинна массива
  let high = array.length - 1; // максимальная длинна массива
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === el) {
      return mid;
    } else if (arr[mid] < el) {
      low = mid + 1; // сдвигаем диапазон поиска ВПРАВО
    } else {
      high = mid - 1; // сдвигаем диапазаон поиска ВЛЕВО
    }
  }
  return `Ты долбаеб? Такого: ${el} нет в массиве`; // если в цикле не находим, выходим и возвращаем -1
}

console.log(binarySearch(arr, 1133));

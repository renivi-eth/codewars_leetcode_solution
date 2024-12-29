type Fn = (n: number, i: number) => any;

/**
 * Функцию можно переписать через reduce() - https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript
 */
function filter(arr: number[], fn: Fn): number[] {
  // Создание пустого массива для хранения отфильтрованных значений
  const filtredArr = [];

  // Цикл, который проходит по всем элементам массива
  for (let i = 0; i < arr.length; i++) {
    // Передаем в функцию каждый элемент массива и его индекс
    if (fn(arr[i], i)) {
      // Внутри блока if происходит вызов функции, которая возвращает true или false
      // Например function more3(1) { return 1 > 3; } - false
      filtredArr.push(arr[i]);
    }
  }

  return filtredArr;
}

console.log(
  filter([1, 2, 3, 4], function more3(n) {
    return n > 3;
  }),
);

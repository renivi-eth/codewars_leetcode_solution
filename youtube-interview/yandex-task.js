/*
Данн массив интервалов, где intervals[i] = [start,end], объедините все пересекающиеся интервалы
и верните массив непересекающихся интервалов

Вход: [[2,6], [1,3], [8,10], [15,18]]
Выход: [[1,6], [8,10], [15,18]]

https://www.youtube.com/watch?v=nT_03SnK_qo
 */

/*
Решение:

 */

function mergeIntervals(arr) {
  const sortArr = arr.slice().sort((a, b) => {
    return a[0] - b[0];
  });

  return sortArr;
}

console.log(
  mergeIntervals([
    [2, 6],
    [1, 3],
    [8, 10],
    [15, 18],
  ]),
);

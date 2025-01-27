/*
https://www.youtube.com/watch?v=nT_03SnK_qo

Дан массив интервалов, где intervals[i] = [start,end], объедините все пересекающиеся интервалы
и верните массив непересекающихся интервалов.

Вход: [[2,6], [1,3], [8,10], [15,18]]
Выход: [[1,6], [8,10], [15,18]]
 */
function mergeIntervals(arr) {
  const sortArr = arr.slice().sort((a, b) => {
    return a[0] - b[0];
  });

  // [1,3]
  const mergeIntervals = [sortArr[0]];

  for (let i = 1; i < sortArr.length; i++) {
    // Берем последний интервал
    const currentInterval = mergeIntervals[mergeIntervals.length - 1];

    // Берем текущий по циклу интервал
    const nextInterval = sortArr[i];

    // Сравниваем последний интервал текущего интервала и первый интервал следующего интервала
    if (currentInterval[1] >= nextInterval[0]) {
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
    } else {
      mergeIntervals.push(nextInterval);
    }
  }

  return mergeIntervals;
}

console.log(
  mergeIntervals([
    [2, 6],
    [1, 3],
    [8, 10],
    [15, 18],
  ]),
);

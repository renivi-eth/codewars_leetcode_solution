/*
Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals

Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
*/

/*
sumIntervals( [
   [1, 4],
   [7, 10],
   [3, 5]
] ) => 7 ([1,5], [7,10]) => 4 + 3 = 7 
*/

/*
1. Отсортировать массив по возрастанию 
2. Проверить пересечения и соединить их, массив у нас отсортирован, поэтому мы смотрим второй элемент и сравниваем его с первым элементов следующего интервала, если он равен или больше, значит он пересекается, мы оставляем первый элемент массива и добавляем второй элемент второго массива 
*/

function sumIntervals(intervals) {
  const sortIntervals = intervals.slice().sort((a,b) => {
    return a[0] - b[0]
  })


  const mergedIntervals = [sortIntervals[0]]

  for(let i = 1; i < sortIntervals.length; i++) {
    // Последний интервал в mergedIntervals
    const currentInterval = mergedIntervals[mergedIntervals.length - 1];

    // Берем второй элемент из отсортированного массива 
    const nextInterval = sortIntervals[i]

    if(currentInterval[1] >= nextInterval[0]){
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1])
    } else {
      mergedIntervals.push(nextInterval)
    }
  }

  return mergedIntervals.reduce((acc, [a, b]) => {
    acc += b - a
    return acc
  }, 0)

}

console.log(sumIntervals([[1, 4],
   [7, 10],
   [3, 5]]));


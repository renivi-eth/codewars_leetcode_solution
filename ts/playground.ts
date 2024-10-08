// Напишите небольшую функцию, которая возвращает значения массива, которые не являются нечетными.
// Все значения в массиве будут целыми числами. Верните правильные значения в том порядке, в котором они указаны.

import { off } from 'process'

export function noOdds(values: number[]): number[] {
    const newArr: number[] = [];

  values.forEach((el) => {
    if (el % 2 === 0) { // Проверяем, четное ли число
      newArr.push(el);
    }
  });

  return newArr
}

console.log(noOdds([0,1,2,3]))


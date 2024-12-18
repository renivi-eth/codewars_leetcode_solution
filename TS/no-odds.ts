// Напишите небольшую функцию, которая возвращает значения массива, которые не являются нечетными.
// Все значения в массиве будут целыми числами. Верните правильные значения в том порядке, в котором они указаны.

export function noOdds(values: number[]): number[] {
 return values.filter((num)=> num !== num % 2)
}

// [1,2,3,4,5] => [1,3,5]

console.log(noOdds([1,2,3,4,5]))

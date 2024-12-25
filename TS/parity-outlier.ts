export function findOutlier(integers: number[]): number {
  const evenNumber: number[] = [];
  const oddNumber: number[] = [];

  integers.forEach((number) => {
    if (number % 2 == 0) {
      evenNumber.push(number);
    } else {
      oddNumber.push(number);
    }
  });

  let result = 0;

  if (evenNumber.length > oddNumber.length) {
    result += oddNumber[0];
  } else {
    result += evenNumber[0];
  }

  return result;
}

console.log(findOutlier([2, 4, 6, 8, 10, 12, 14, 19]));

function findOutlierReduce(integers: number[]): number {
  const initAcc: { evenNumber: number[]; oddNumber: number[] } = { evenNumber: [], oddNumber: [] };
  const { evenNumber, oddNumber } = integers.reduce<{ evenNumber: number[]; oddNumber: number[] }>((acc, number) => {
    if (number % 2 == 0) {
      acc.evenNumber.push(number);
    } else {
      acc.oddNumber.push(number);
    }

    return acc;
  }, initAcc);

  if (evenNumber.length > oddNumber.length) {
    return oddNumber[0];
  }

  return evenNumber[0];
}

console.log(findOutlierReduce([2, 4, 6, 8, 10, 12, 14, 19]));

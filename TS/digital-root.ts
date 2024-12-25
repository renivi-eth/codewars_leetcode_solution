export const digitalRoot = (n: number): number => {
  if (n <= 10) {
    return n;
  }

  const sum = String(n)
    .split('')
    .reduce((acc, number) => {
      acc += +number;

      return acc;
    }, 0);

  return digitalRoot(sum);
};

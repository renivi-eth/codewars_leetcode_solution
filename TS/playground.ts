export const nbYear = (p0: number, percent: number, aug: number, p: number): number => {
  if (p0 >= p) {
    return 0; // Базовый случай: если население достигло цели, возвращаем 0 лет
  }

  const updatedPopulation = Math.floor(p0 + p0 * (percent / 100) + aug);
  return Math.floor(1 + nbYear(updatedPopulation, percent, aug, p));
};

console.log(nbYear(1000, 2, 50, 1200)); // 3 

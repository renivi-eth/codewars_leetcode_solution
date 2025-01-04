type FnType = (a: number, b: number) => number;

function sum(a: number, b: number): number {
  return a + b;
}

function minus(a: number, b: number): number {
  return a - b;
}

// High order function
function calculate(a: number, b: number, fn: FnType): number {
  return fn(a, b);
}

console.log(calculate(2, 2, sum));
console.log(calculate(10, 2, minus));

// Return function
function numberPow(pow: number) {
  return function (number: number) {
    return number ** pow;
  };
}

// Стрелочные функции
const powerArrow = (pow: number) => (num: number) => num ** pow;

const powOfTwo = numberPow(2);
console.log(`Первый вызов функции при указании степени - ${powOfTwo}`);

const powNumber = powOfTwo(5); // 25
console.log(`Вызов второй функции после замыкания - ${powNumber}`);

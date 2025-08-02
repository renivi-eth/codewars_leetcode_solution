// @ts-ignore

/*
    Нужно типизировать интерфейс Calculator, так, чтобы вызовы `calculator` были
    с ошибками компиляции или без них в зависимости от переданных параметров.
    Типы SumAction, LengthAction, ZeroAction также можно менять.
*/

type SumAction = (a: number, b: number) => number;
type LengthAction = (a: string) => string;
type ZeroAction = (...params: any) => any;
type LogAction = (...params: any) => (...params: any) => any;

interface Calculator {
  (command: 'sum'): SumAction;
  (command: 'length'): LengthAction;
  (command: string): ZeroAction;
  (command: string): LogAction;
}

/* Этот код трогать не нужно */
const calculator: Calculator = (command: string): any => {
  switch (command) {
    case 'sum':
      return (a: any, b: any) => a + b;
    case 'length':
      return (a: any) => a.length;
    case 'zero':
      return (a: any) => (typeof a === 'string' ? a.length !== 0 : a !== 0);
    case 'log':
      return (b: any) => (a: any) => Math.log(a) / Math.log(b);
  }
};
/* --- */

/* Без ошибок */
calculator('sum')(10, 15);
calculator('length')('qweqweq');
calculator('zero')(10);
calculator('zero')('qweqwe');
const ln = calculator('log')(Math.E);
ln(15);
calculator('log')(2)(256);
/* Без ошибок */

/*
    Комментариями @ts-expect-error помечены строчки, в которых должны быть ошибки в финальном решении.
    Если в этих строчках ошибок не будет, компилятор TS выдаст ошибку компиляции, подробнее можно прочитать здесь:
    https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments
*/

/* С ошибками */

calculator('lalaka')('malaka');

calculator('sum')(true);
calculator('sum')(10);
calculator('sum')('1');

calculator('length')(10);
calculator('length')(true);
calculator('length')('a', 'b');

calculator('zero')(10, 10);
calculator('zero')(10, '10');
calculator('zero')('10', 10);
calculator('zero')(true);
calculator('zero')({});
calculator('zero')([]);

calculator('log')('e');
calculator('log')('10');
calculator('log')(true);
calculator('log')(10)('100');
calculator('log')(10)(true);
calculator('log')(2, 1024);
/* --- */

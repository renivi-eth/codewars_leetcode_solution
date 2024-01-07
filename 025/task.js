// Способ через Функции-конструкторы технически являются обычными функциями. Но есть два соглашения:
// Имя функции-конструктора должно начинаться с большой буквы.
// Функция-конструктор должна выполняться только с помощью оператора "new".

let Ball = function (ballType = "regular") {
  this.ballType = ballType;
};

const a = new Ball();
const b = new Ball("footbal");

console.log(a.ballType, b.ballType);

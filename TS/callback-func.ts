/**
Допустим, нам надо получить данные по пользвателю с сервера
*/
type FnTypeCallback = (data: {}) => void;

function getUserData(callback: FnTypeCallback) {
  setTimeout(() => {
    const userData = { id: 1, age: 24, name: 'Alex' };
    callback(userData);
  }, 1000);
}

function run() {
  return getUserData((userData) => {
    console.log(userData);
  });
}

console.log(run());

/**
1. Мы создаем функцию getUserData, которая запрашивает данные с сервера (допустим, это будет через таймер),
2. Функция принимает аругмент в виде коллбека (мы пока не знаем что там будет по факту)
3. В таймере мы создаем объект с данными ровно через одну секунду
4. Затем вызывем переданный аргументов callback с данными
5. Вызывается функцию run() в которой вызывается функция getUserData которая уже в аргументе callback несет в себе данные
6. Поскольку это функция мы уже далее все логгируем
*/

/**
Допустим, нам надо получить данные по пользвателю с сервера
*/

function getUserData(callback) {
  setTimeout(() => {
    const userData = { id: 1, age: 24, name: 'Alex' };
    callback(userData);
  }, 1000);
  return;
}

function run() {
  return getUserData((userData) => {
    console.log(userData);
  });
}

console.log(run());

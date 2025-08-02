// На вход приходит массив вида:
/*
const data = [
    {name: 'width', value: 10 },
    {name: 'height', value: 20 },
    ...
];
*/

// Необходимо получить объект вида
/*
{
  width: 10,
  height: 20,
  ...  
};
*/
const data = [
  { name: 'width', value: 10 },
  { name: 'height', value: 20 },
];

const result = data.reduce((acc, element) => {
  acc[element.name] = element.value;

  return acc;
}, {});

console.log(result);

// Необходимо реализовать функцию-компаратор версий продукта, возвращающую строку вида "{ver1}{<,=,>}{ver2}"

versionCmp('1.0', '2.0'); // 1.0<2.0

versionCmp('1.0', '1.0.0'); // 1.0=1.0.0
versionCmp('1.0.1', '1.0'); // 1.0.1>1.0

versionCmp('1.2.3.4.5', '1.3.4.6.8'); // 1.2.3.4.5<1.3.4.6.8
versionCmp('666.509.2', '666.509.3'); // 666.509.2<666.509.3
versionCmp('666.509.2', '666.509.2.5.8'); // 666.509.2<666.509.2.5.8

// сравнить первой и второе и вернуть
// убрать все нули
//
function versionCmp(v1, v2) {}

function sumNumbers(num1, num2) {
  return num1 + num2;
}

console.log(sumNumbers(1, 20));

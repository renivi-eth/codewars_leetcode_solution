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

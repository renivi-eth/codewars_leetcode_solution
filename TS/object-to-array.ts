// На вход приходит массив вида:
const array = [
  { name: 'width', value: 10 },
  { name: 'height', value: 20 },
];

// Необходимо получить объект вида
// {
//   width: 10,
//   height: 20,
// }

const result = array.reduce<Record<string, number>>((acc, item) => {
  acc[item.name] = item.value;

  return acc;
}, {});

// const obj: Record<string, any> = {}

// const key = 'with'
// const value = 10;

// obj['with'] = 'bar'
// obj[key] = 'bar'

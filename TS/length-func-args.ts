type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
  const result = [];

  for (let arg of args) {
    result.push(arg);
  }

  return result.length;
}

console.log(argumentsLength(1, 2, 3)); // 3

// В функцию передается массив, через rest оператор, он типизирован как JSONValue[], ...args - соберет все в массив, он итерируемый
function argLength(...arg: JSONValue[]): number {
  console.log(arg); // [2, 2, 2, 5]
  return arg.length;
}

console.log(argLength(2, 2, 2, 5)); // 4

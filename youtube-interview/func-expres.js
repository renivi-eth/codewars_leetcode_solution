const funcExpression = function () {
  return "It's Function Expression";
};

console.log(funcExpression);
console.log(funcExpression());

console.log(`
${funcExpression()} - вызов;

${funcExpression} - тело функции
`);

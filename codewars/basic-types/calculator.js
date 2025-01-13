var calculate = function calculate(a, o, b) {
 var result = 0;

 if (o === '/' && b === 0) {
    return null;
 }
 else if (o === '+') {
  result = a + b 
 } else if (o === '-') {
  result = a - b
 } else if (o === '*') {
  result = a * b
 } else if (o === '/') {
  result = a / b
 } else {
  return null
 }
 return result; 
}

console.log(calculate(4, '/', 0)) // 13
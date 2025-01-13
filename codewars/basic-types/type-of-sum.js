// Return the type of the sum of the two arguments
function typeOfSum(a, b) {
  const sum = a + b;

  return typeof(sum)
}

console.log(typeOfSum(45, 45)) // 'number'
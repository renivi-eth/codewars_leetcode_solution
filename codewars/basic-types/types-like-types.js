function typeValidation(variable, type) {
  const typev = typeof(variable)
  
  return typev === type ? true : false
}

console.log(typeValidation(45, 'number')) // true
console.log(typeValidation('45', 'string')) // true
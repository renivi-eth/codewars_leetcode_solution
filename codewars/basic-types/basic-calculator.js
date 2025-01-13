var Calculator = {
  add: (a,b) => {
    return a + b
  },
  subtract: (a,b) => {
    return a - b
  },
  multiply: (a,b) => {
    return a * b
  },
  divide: (a,b) => {
    if(b === 0){
      return false
    } else {
      return a / b
    }
  }
};

console.log(Calculator.add(1,2)) // 3
console.log(Calculator.subtract(1,2)) // -1
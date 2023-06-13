function strCount(str, letter) {
  str.split("");
  let count = 0;
  for (let el of str) {
    if (letter === el) {
      count++;
    }
  }
  return count;
}

console.log(strCount("Hello", "m"));

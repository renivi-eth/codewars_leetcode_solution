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

// Решение
/* 
Фнукция принимает на вход строку и букву, разделяю строку в массив по элементам, делаем счетчик куда будем складывать попадания, проходимся циклом и если элемент равен букве увеличиваем счетчик на один; 
*/

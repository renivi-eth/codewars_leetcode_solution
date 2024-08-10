function queueTime(customers, n) {
  if (n === 1) {
    return customers.reduce((acc, el) => {
      return (acc = acc + el);
    }, 0);
  } else {
    // мы создали массив с кол-вом касс, и заполнили их нулями в качестве значений;
    const countCassa = Array(n).fill(0);
    // проходимся циклом по массиву,
    for (let el of customers) {
      const nextTill = countCassa.indexOf(Math.min(...countCassa));

      countCassa[nextTill] += el;
    }
    const totalTime = Math.max(...countCassa);

    return totalTime;
  }
}

// Массив ко-во посе-лей с их временем
// n - кассы

console.log(queueTime([1, 2, 3, 4, 5], 2));

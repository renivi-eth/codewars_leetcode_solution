"use strict";

const req = new XMLHttpRequest();

req.open("GET", "https://dummyjson.com/products/");
req.send();

let allSum = 0;

req.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  console.log(data);

  let allSum = data.products.reduce((acc, el) => {
    return (acc += el.price);
  }, 0);
  let averagePrice = allSum / data.products.length;
  console.log(`Средняя цена товаров: $${averagePrice}`);
});

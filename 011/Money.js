/*
У мистера Скруджа есть сумма денег «P», которую он хочет инвестировать. Прежде чем он это сделает, он хочет знать, сколько лет «Y» эта сумма «P» должна храниться в банке, чтобы она составила желаемую сумму денег «D».

Сумма хранится в течение Y лет в банке, где проценты I выплачиваются ежегодно. После уплаты налогов «Т» за год новая сумма реинвестируется.

Примечание к налогам: налогом облагается не инвестированная основная сумма, а только начисленные проценты за год.
*/

/* 
Let P be the Principal = 1000.00  // изначальная сумма 
Let I be the Interest Rate = 0.05 // проценты ежегодные (1 год)  
Let T be the Tax Rate = 0.18      // налоги, реинвестируется, только на начисленный проценты
Let D be the Desired Sum = 1100.00 // желаемая сумма 
After 1st Year --> 
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
*/

/*
principal - инзачальная
interest - проценты
tax - налоги, только на проценты 
desired - желаемая сумма 

*/

function calculateYears(principal, interest, tax, desired) {
  // your code
  if (principal >= desired) {
    return 0;
  } else {
    const yearInterest = principal * interest;
    const yearTax = yearInterest * tax;
    const newPrincipal = principal + yearInterest - yearTax;

    const years = calculateYears(newPrincipal, interest, tax, desired);
    return 1 + years;
  }
}

console.log(calculateYears(1000, 0.02, 0.01, 1222));

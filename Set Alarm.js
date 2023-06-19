/*
Напишите функцию с именем setAlarm/ set_alarm/ set-alarm/ setalarm(в зависимости от языка), которая получает два параметра. Первый параметр employedистинен, когда вы работаете, а второй параметр vacationистинен, когда вы в отпуске.
Функция должна возвращать true, если вы работаете, а не в отпуске (поскольку это обстоятельства, при которых вам нужно установить будильник). В противном случае он должен возвращать false. Примеры:
*/

function setAlarm(employed, vacation) {
  let result = employed === true && vacation === false ? true : false;
  return result;
}

console.log(setAlarm(false, false));

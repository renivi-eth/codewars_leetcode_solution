/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers. 
*/

function smallEnough(a, limit) {
  const maxValueFromArray = Math.max(...a);
  if (maxValueFromArray > limit) {
    return false;
  } else {
    return true;
  }
}

console.log(smallEnough([122, 222, 223, 224, 245], 230));

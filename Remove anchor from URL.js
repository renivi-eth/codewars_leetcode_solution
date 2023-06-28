/* 
Complete the function/method so that it returns the url with anything after the anchor (#) removed.
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url) {
  const urlArr = url.split("");
  let index = -1; // Initializing the index variable with -1;
  for (let i = 0; i < urlArr.length; i++) {
    if (urlArr[i] === "#") {
      index = i; // Assigning the index to the variable
      break; // Exiting the loop since we found the element
    }
  }
  const inc = urlArr.includes("#");
  if (inc === true) {
    return urlArr.slice(0, index).join("");
  } else {
    return urlArr.join("");
  }
}

console.log(removeUrlAnchor("www.codewars.com#about")); // www.codewars.com

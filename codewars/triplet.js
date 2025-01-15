function gimme (triplet) {
// Arr 
const arr = triplet

// Sort Arr 
 const sortArr = triplet.slice().sort(function (a, b) {
  return a - b;
 })

 for(let i = 0; i < arr.length; i++){
  if(arr[i] === sortArr[1]){
    return i
  }
 }
}

console.log(gimme([2,3,1])) 

// gime([2, 3, 1]) => 0 / 2 between 3 and 1 index = 0
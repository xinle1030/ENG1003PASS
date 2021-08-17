// The findIndex() method returns the index of the first array element that passes a test (provided by a function).
// If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)
// Otherwise it returns -1

const ages = [3, 10, 19, 20];

let index = ages.findIndex(checkAge)   // Returns 3

function checkAge(age) {
  console.log(age);
  return age > 18;
}
console.log()

console.log("Target index : " + index)
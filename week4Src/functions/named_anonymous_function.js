//function declaration
function capitalize1(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
//function expression / anonymous function
var capitalize2 = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize1("hello"))
console.log(capitalize2("hello"))
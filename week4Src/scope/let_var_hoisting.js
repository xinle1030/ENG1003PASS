let x = 0;
let y = 0;

callMeOften1();

console.log();

callMeOften2();

/**
 * Hoisting
 */
//  While variables declared with var keyword are hoisted (initialized with undefined before the code is run) 
//  which means they are accessible in their enclosing scope even before they are declared:
function callMeOften1() {
  console.log("callMeoften2: x = " + x);
  var x = 100;
  x = x + 100;
  console.log("callMeoften2: x = " + x);
}

// let variables are not initialized until their definition is evaluated. 
// Accessing them before the initialization results in a ReferenceError. 
function callMeOften2() {
    console.log("callMeoften2: x = " + x);
    // let x = 100;
    x = x + 100;
    console.log("callMeoften2: x = " + x);
  }
/**
 * var is function scoped, function(){}
 * let is block scoped, {}
*/

/**
 * EXAMPLE 1
 */
function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar); // Foo Bar

  {
    var moo = "Mooo"; // moo has a function scope, meaning it can be accessed within run()
    let baz = "Bazz"; // baz has a block scope, meaning it can be accessed within its enclosing {}
    console.log(moo, baz); // Mooo Bazz
  }

  console.log(moo); // Mooo
  // console.log(baz); // ReferenceError
}

  run();
// var will let you re-declare the same variable in the same scope while let raises a SyntaxError.

var foo = "foo1";
var foo = "foo2"; // No problem, 'foo1' is replaced with 'foo2'.

console.log(foo)

// let bar = "bar1"; 
// let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared


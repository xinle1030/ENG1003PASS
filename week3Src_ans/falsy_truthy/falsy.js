// A falsy value is something which evaluates to FALSE, for instance when checking a variable. 
// There are only six falsy values in JavaScript: 
/*
- undefined
- null
- NaN
- 0
- "" 
- empty string 
- false
*/

// undefined
if (undefined){
    console.log("undefined is truthy");
}
else{
    console.log("undefined is falsy");
}

// null
if (null){
    console.log("null is truthy");
}
else{
    console.log("null is falsy");
}

// NaN
if (NaN){
    console.log("NaN is truthy");
}
else{
    console.log("NaN is falsy");
}

// 0
if (0){
    console.log("0 is truthy");
}
else{
    console.log("0 is falsy");
}

// ""
if (""){
    console.log("empty string is truthy");
}
else{
    console.log("empty string is falsy");
}
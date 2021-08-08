// a truthy value is a value that is considered true when encountered in a Boolean context

let numberThatIsNonZero1 = -1;  // <-- truthy

let numberThatIsNonZero2 = 1;   // <-- truthy

let emptyArray = [];            // <-- truthy, we'll explore more about this next

let emptyObject = {};           // <-- truthy

// numberThatIsNonZero1, < 0
if (numberThatIsNonZero1){
    console.log("numberThatIsNonZero1 is truthy");
}
else{
    console.log("numberThatIsNonZero1 is falsy");
}

// numberThatIsNonZero2, > 0
if (numberThatIsNonZero2){
    console.log("numberThatIsNonZero2 is truthy");
}
else{
    console.log("numberThatIsNonZero2 is falsy");
}

// emptyArray
if (emptyArray){
    console.log("emptyArray is truthy");
}
else{
    console.log("emptyArray is falsy");
}

// emptyObject
if (emptyObject){
    console.log("emptyObject is truthy");
}
else{
    console.log("emptyObject is falsy");
}
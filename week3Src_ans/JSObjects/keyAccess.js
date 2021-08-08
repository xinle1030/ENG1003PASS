myObj = {
    name: "John",
    class: "class-A",
    123: "digit",
    first_name: "Paul",
    "nick-name": "Johnny",
    "friends[]": ["friend1", "friend2"],
    "age+": 32,
    $savings: "MYR3000",
};

/*
    []notation allows key to be assigned to a variable
*/
for (let key in myObj){
    console.log(key + ": " + myObj[key]);
    // console.log(myObj.key);
}

console.log();

/*
    Limitations of .notation
*/
console.log(myObj.name);
console.log(myObj.class);
// console.log(myObj.123);          // .notation does not allow number
console.log(myObj.first_name);
// console.log(myObj.nick-name);    // .notation does not some special characters
// console.log(myObj."nick-name");
// console.log(myObj.friends[]);    // .notation does not some special characters
// console.log(myObj."friends[]");
// console.log(myObj.age+);    // .notation does not some special characters
// console.log(myObj."age+");
console.log(myObj.$savings);        // .notation allows $sign 

console.log();

/*
    Limitations of .notation
*/
console.log(myObj["name"]);
console.log(myObj["class"]);
console.log(myObj["123"]); 
console.log(myObj["nick-name"]);
console.log(myObj["friends[]"]);
console.log(myObj["age+"]);
console.log(myObj["$savings"]);
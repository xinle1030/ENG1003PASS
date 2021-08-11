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
// console.log(myObj.age+);         // .notation does not some special characters
// console.log(myObj."age+");
console.log(myObj.$savings);        // .notation allows $sign 

console.log();

let my_var = "name";
let var2 = "class";

console.log(myObj[my_var]);
console.log(myObj[var2]);
// console.log(myObj["123"]); 
// console.log(myObj["nick-name"]);
// console.log(myObj["age+"]);
// console.log(myObj["$savings"]);

let my_arr = myObj["friends[]"];
console.log(my_arr[0]);
// my_arr[1];

// console.log(myObj["friends[]"][0]);
// console.log(myObj["friends[]"][1]);
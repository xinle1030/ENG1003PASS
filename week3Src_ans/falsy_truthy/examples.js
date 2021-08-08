let myObj = {
    key1: "value1",
    key2: "value2"
}

let key3 = "smt";

if (myObj[key3]){
    console.log("myObj has key3");
}
else{
    console.log(myObj[key3]);
    console.log("myObj does not have key3");
}
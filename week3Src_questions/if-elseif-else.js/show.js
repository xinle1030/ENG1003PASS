let mood = true;

if (mood){
    console.log("okay");
}

if (!mood){
    console.log("not okay");
}

console.log();

let today = "";
if (mood == true){
    today = "holiday"
}
else{
    today = "working day";
}

// ternary operator
today = mood ? "holiday" : "working day";
console.log(today);
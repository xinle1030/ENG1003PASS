secret_num = 43;

/*
    Simple program to guess correct number between 1 - 100
        - prompt for a value continuously until getting a correct input
*/

let flag = true;
let start = 0;
let end = 100;
let message = "";
let input_value;

while (flag){
    console.log(start, end);
    message = `Guess a number between ${start} - ${end}`;
    input_value = Number(prompt(message));
    if (input_value == secret_num){
        flag = false;
    }
    else if (input_value > secret_num){
        end = input_value - 1;
        console.log("more than");
    }
    else if (input_value < secret_num){
        start = input_value + 1;
        console.log("less than");
    }
}

document.write("Congratz!!! You got my secret code!");

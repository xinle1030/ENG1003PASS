/**
 * Find the character(s) most often used in a string
 */

/**
 * output = ['p']
 */
//  let str = "apple"; 

 /**
  * output = ['r', 'e', 't']
  */
//  let str = "prettier"; 
 
 /**
  * output = ['b', 'e', 'h', 'a', 'v', 'i', 'o', 'u', 'r']
  */
  let str = "behaviour";

let countObj = {};

for (let i in str){
    let char = str[i];
    countObj[char] = ++countObj[char] || 1;

    // countObj[char] = countObj[char]++ || 1;

    // if (countObj[char]){
    //     countObj[char]++;
    // }
    // else{
    //     countObj[char] = 1;
    // }
}

let maxCount = 0;
let maxChar = [];

for (let key in countObj){
    if (countObj[key] > maxCount){
        maxCount = countObj[key];
        maxChar = [];
        maxChar.push(key);
    }
    else if (countObj[key] == maxCount){
        maxChar.push(key);
    }
}

console.log(countObj);
console.log(maxChar);
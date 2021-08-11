/**
 * Find the character(s) most often used in a string 
 */

/**
 * output = ['p']
 */
// let str = "apple"; 

/**
 * output = ['r', 'e', 't']
 */
// let str = "prettier";  

/**
 * output = ['b', 'e', 'h', 'a', 'v', 'i', 'o', 'u', 'r']
 */
//  let str = "behaviour";

// - go thru every Character
// - char: frequency
// - find char with most the most amount of frequency

// prettier

// p : 1
// r : 1

// my_obj = {
//     p: 1,
//     r: 2,
//     ...
// }

function findMostChar(string){
    my_obj = {};
    for (let index in string){
        let key = string[index];
        // falsy 
        if (my_obj[key]){
            my_obj[key]++;
        }
        else{
            my_obj[key] = 1;
        }

    }
    let maxCount = 0;
    let maxChar = [];

    for (let key in my_obj){
        let char = key;
        let freq = my_obj[char];
        if (freq > maxCount){
            maxCount = freq;
            maxChar = []
            maxChar.push(char);
        }
        else if (freq == maxCount){
            maxChar.push(char);
        }
    }
    return maxChar;
}

console.log(findMostChar("hello"));
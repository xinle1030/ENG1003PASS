/**
 * Check if two strings are anagram
 */

/**
 * output = true
 */
// let str1 = "listen";
// let str2 = "silent";

/**
 * output = true
 */
// let str1 = "THE EYES";
// let str2 = "THEY SEEgfdsa";

/**
 * output = false
 */
//  let str1 = "mist";
//  let str2 = "must";

/**
 * split()
 */
function anagram1(str1, str2){
    if (str1.length != str2.length){
        return false;
    }

    let arr1 = str1.split("")
    let arr2 = str2.split("")

    for (let index in arr1){
        let elem = arr1[index];
        if (!(arr2.includes(elem))){
            return false;
        }
    }
    return true;
}

function anagram2(str1, str2){
    if (str1.length != str2.length){
        return false;
    }

    let arr1 = str1.split("").sort()
    let arr2 = str2.split("").sort()

    return arr1 == arr2;
}

console.log(anagram2("must", "mist"))
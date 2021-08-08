/**
 * Check if two strings are anagram
 */

/**
 * output = true
 */
 let str1 = "listen";
 let str2 = "silent";
 
 /**
  * output = true
  */
 // let str1 = "THE EYES";
 // let str2 = "THEY SEE";
 
 /**
  * output = false
  */
 //  let str1 = "mist";
 //  let str2 = "must";
 
 /**
  * Use .sort()
  */
 // if(str1.length !== str2.length) {
 //     console.log(false);
 // }
 // else{
 //     // If an empty string ("") is used as the separator, the string is split between each character.
 //     let sort1 = str1.split('').sort(); 
 //     let sort2 = str2.split('').sort();
 //     console.log(sort1.join('') === sort2.join(''));
 // }
 
 /**
  * Use .split()
  */
 // if(str1.length !== str2.length) {
 //     console.log(false);
 // }
 // else{
 //     let arr1 = str1.split('');
 //     let arr2 = str2.split('');
 //     let flag = true;
 //     for (let i in arr1){
 //         if (!arr2.includes(arr1[i])){
 //             flag = false;
 //             break;
 //         }
 //     }
 //     console.log(flag);
 // }
 
 /**
  * Use obj
  */
 //  if(str1.length !== str2.length) {
 //     console.log(false);
 // }
 // else{
 //     countObj1 = {};
 //     countObj2 = {};
 //     for (let i = 0; i < str1.length; i++){
 //         countObj1[str1[i]] = ++countObj1[str1[i]] || 1;
 //         countObj2[str2[i]] = ++countObj2[str2[i]] || 1;
 //     }
 
 //     // to retrieve the keys from objects using Object.keys()
 //     let keys1 = Object.keys(countObj1);
 //     let keys2 = Object.keys(countObj2);
 
 //     let flag = true;
 
 //     if (keys1.length != keys2.length){
 //         flag = false;
 //     }
 //     else{
 //         for (let keyIndex in keys1){
 //             let key = keys1[keyIndex];
 //             if (countObj2[key]){
 //                 if (countObj2[key] != countObj1[key]){
 //                     flag = false;
 //                     break;
 //                 }
 //             }
 //             else{
 //                 flag = false;
 //             }
 //         }
 //     }
 //     console.log(flag);
 // }
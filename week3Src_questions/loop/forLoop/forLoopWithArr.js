array = [1, 10, 2, 5, 1, 10, 6, 2, 7, 10];

// for in loop
// index - 0 - 9
// for (let index in array){
//     console.log(index, array[index]);
// }

// console.log();

// // for loop

// for (let i = 0; i < array.length; i+=10){
//     console.log(i, array[i]);
// }

// console.log();

// forEach - can only be used on an array

array.forEach((element) => {
    console.log(element)
});

// console.log();

array.forEach(function(element, index){
    console.log(index, element)
});

// console.log();

array.forEach((element, index) => {
    console.log(index, element)
});

// // Modify current array using forEach
// console.log("\nModify current array using forEach");

// array.forEach((element, index, currentArr) => {
//     currentArr[index] = element * 10;
// });

// console.log(array);

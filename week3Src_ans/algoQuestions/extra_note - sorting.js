let numbers = [600, 62, 6, 1, 16, 25];
let result = numbers.sort();
console.log(result);

// Output: [ 1, 16, 25, 6, 600, 62 ]
// this is because sort() method actually converts the elements into strings, then comparing into sequences of UTF-16 code unit values, instead of actually arramging the number in ascending order
// So it wil first compare the first digit
// if first digit same, then it compares second digit


// So we should use anonymous function for sorting 
// The following code sort the array in ascending order
let numbers2 = [600, 62, 6, 1, 16, 25];
let result2 = numbers2.sort(
    function (a,b)
    {
        return a-b;
    }
);
console.log(result2);


// The following code sort the array in descending order
let numbers3 = [600, 62, 6, 1, 16, 25];
let result3 = numbers3.sort(
    function (a,b)
    {
        return b-a;
    }
);
console.log(result3);

// The anonymous function can be converted into another named function which is compare in this case
let numbers4 = [600, 62, 6, 1, 16, 25];
let result4 = numbers4.sort(compare);
console.log(result4);

function compare(a,b)
{
    return a-b;
}










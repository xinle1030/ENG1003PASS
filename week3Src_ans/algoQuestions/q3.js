/**
 * Reverse an integer mathematically without converting integer to string
 * HINT: use % operator
 */

/**
 * output = 678
 */
//  let number = 876;

/**
 * output = 101001
 */
//  let number = 100101;

/*
Pseudo-code

Input:  number
(1) Initialize revNumber = 0
(2) Loop while number > 0
     (a) mod number by 10 to get the remainder
     (b) Multiply revNumber by 10 and add remainder of number  
               revNumber = revNumber*10 + remainder;
     (b) Divide num by 10 (floor division)
(3) Return revNumber
*/

function reverseNumber(number) {
    let revNumber = 0;
    while (number > 0) {
        let remainder = number % 10;
        revNumber = (revNumber * 10) + (remainder);
        number = Math.floor(number / 10);
       }
       return revNumber;
}

console.log(reverseNumber(678));
console.log(reverseNumber(101001));
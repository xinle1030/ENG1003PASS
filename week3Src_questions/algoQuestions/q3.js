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

123

function reverse(num){

    let ret_number = 0;
    while (num > 0){
        let remainder = num % 10;                         
        ret_number = (ret_number * 10 ) + remainder;     
        num = Math.floor(num / 10);                         
    }
    console.log(ret_number)
}

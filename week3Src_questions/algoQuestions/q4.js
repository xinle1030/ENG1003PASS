/**
 * Write a program to check if the given input is prime number or not
 */

function isPrime(num){
    if (num == 1){
        return false;
    }
    else if (num == 2){
        return true;
    }
    else{
        for (let i = 2; i < num - 1; i++){
            if (num % i == 0){
                return false;
            }
        }
        return true
    }
}

console.log(isPrime(12))
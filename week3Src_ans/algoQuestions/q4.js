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
        sqrt_result = Math.sqrt(num);
        for(var i = 2; i <= sqrt_result; i++){
            if(num % i === 0){
                return false;
        }
    }
    return true;
}
}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(4))
console.log(isPrime(997))
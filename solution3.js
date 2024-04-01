//Creation of a function that identifies prime numbers;
function primeNumbers(num){
    if(num < 2)//checks if a number is less than 2
    return '${num} is not a prime number'//if a number is less than 2 output is that it is not a prime number
for( let i = 2; i < num; i++) {//if number is divisible by 2 there is no remainder
    if (num % i === 0) {
        return '${num}is not a prime number'//since the number is divisible by 2 it is not a prime number
    }

}
// If number is not divisible by any number from 2 to  - 1, it is  a prime number
return '${num} is a prime number'
}
console.log(primeNumbers(2))//expected output 'is a prime number'

//creation of a function that selects prime numbers from an array of numbers
function fibonacci (number) {
       //initialize the array with its first 2 elements
       let lessThanZeroMessage = "OOPS"
       if (number < 0) {
         return lessThanZeroMessage;
       }
 
       //convert strings like "1" to number.
       number = +number;
 
       let fibonacciArray = [0, 1];
 
       for (let i = 2; i <= number; i++) {
           //next number = previous number + number before previous
           fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1]; 
       } 
   
       return fibonacciArray[number];
}

console.log(fibonacci(4));

let string = "1";

string = +string;



// let punctuations = /[\s.",?!]/g;

// let number = string.replace(punctuations, '');

// console.log(number);

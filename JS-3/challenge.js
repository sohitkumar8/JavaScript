console.log("Coding Challenge");

// Write a function which takes principal rate of interest and time as input and return the simple interest


// function principalInterest (p, r, t) {
//     principalInterest = (p * r * t) / 100;
//     return principalInterest;
// }
// console.log(principalInterest(10000, 7, 2));


// 2. Write a function which takes a list of numbers as inputs and returns it's sum

//PS: User Spread operator to take input (...)

// function sum (...numbers){
//     let total = 0;
//     for(let i = 0; i < numbers.length; i++){
//         // total = total + numbers
//         total += numbers[i];
//     }
//     return total
        
// }
// console.log(sum(12 , 6, 9 , 37, 6, 3));


//   challenge 3: Write a function which takes a number and prints the table

// function printTable(num){
//     for(let i = 1; i <= 10; i++){
//         console.log(`${num} * ${i} = ${num * i}`);
        
//     }
// }
// printTable(19)



// Challenge 4: Write a function which takes a array of number, calculates the average of number and returns it.

// function average(numbers){
//     let sum = 0 ;
//     for(let i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//     }
//     return sum / numbers.length;
// }
// console.log(average([5, 3, 7, 15]));



// Challenge 5: Write a function which finds a number in an array of numbers.
// Return true if the number is in the array otherwise return false.

// function findNumInArray(num, numbers){
//     for(let i = 0; i <numbers.length; i++){
//         if (num === numbers[i]){
//             return true;
//         }
//         return false;
//     }

// }
// console.log(findNumInArray(5, [0, 7, 4, 9, 2]));



//  Challenge 6: Write a function which takes an array of number and returns all positive number in an array. 

// function getPositiveNumbers(numbers){
//     let positiveNumbers = [];
//     for(let i = 0; i < numbers.length; i++){
//         if (numbers[i] > 0){
//             positiveNumbers.push(numbers[i]);
//         }
//     }
//     return positiveNumbers;
// }
// console.log(getPositiveNumbers([5, 3, -8, 9, -2, 0, 4]));


// Challenge 7: Write a function which takes an array of number and returns the largest number.

// function findLargestNumber(numbers){
//    let largestNumber = numbers[0];
//    for(let i = 0; i < numbers.length; i++){
//     if(largestNumber < numbers[i]){
//         largestNumber = numbers[i]
//     }
//    }
//    return largestNumber;
// }
// console.log(findLargestNumber([5, 78, 1, 102, 25]));


//  Challenge 8: Fizzbuzz
//  Write a function which takes a number and prints FizzBuzz if the number is divisible by both 3 and 5.
//  If the number is divisible by 3 only then prints Fizz and if the number is divisible by 5 only then prints Buzz
//  If the number is not divisible by any of them then print the number

// function fizzBuzz(num){
//     if(num % 3 === 0 && num % 5 === 0){
//         console.log('FizzBuzz');
//     }
//     else if(num % 3 === 0){
//         console.log('Fizz');
//     }
//     else if(num % 5 === 0){
//         console.log('Buzz');
//     }
//     else{
//         console.log(num);
//     }
// }
// fizzBuzz(15);


//  Challenge 9: Write a function which take an array as argument and returns the reversed array 
// eg: input: [1,2,3,4,5]
// output: [5,4,3,2,1]

// function reversedAnArray(array){
//     let reversedArray = [];
//     for(let i = array.length -1; i >= 0; i--){
//         reversedArray.push(array[i])
//     }
//     return reversedArray;
// }
// console.log(reversedAnArray([1,2,3,4,5]));



//  Challenge 10: Write a function which takes 2 array as input and returns the mergedArray of the 2 array.

function mergeArray(firstArray, secondArray){
    let mergeArray = [];
    for (element of firstArray){
        mergeArray.push(element)
    }
    for(element of secondArray){
        mergeArray.push(element)
    }
    return mergeArray;
}
let firstArray =[1,2,3];
let secondArray =[4,5,6]
console.log(mergeArray(firstArray, secondArray) );

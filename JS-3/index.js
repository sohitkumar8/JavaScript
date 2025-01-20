
// console.log("Hello World");

// let lastName = 'Babbar';

// let firstName = new String('Love');

// let message = 'This is my first Message';

// let words = message.split(' ');

// console.log(words);


//  Functions : A group/block of code that performs a particular task.

// function printDetails(){
//     console.log('First namse: Sohit');
//     console.log('Last namse: Kumar');
//     console.log('Age : 19');
//     console.log('Instagram ID: samratsohit');
    
// }
// printDetails();

// let fruits = ['Apple', 'Banana', 'Mango', 'Watermelon']

// let codeingLanguage = ['Javascript', 'Pyhton', 'C++']

// function printElement (myArray){
//     for(i of myArray){
//         console.log(i);
        
//     }
// }
// printElement(fruits);
// printElement(codeingLanguage);


//  Return Type Function 

// function sum (num1, num2){
//     const sum = num1 + num2;
//     // console.log(sum);
    
//     return sum;
// }

// const mySum = sum(15, 12);
// console.log(mySum);

// const mySum2 = mySum - 10;
// console.log(mySum2);




//     Arrow Function

const sum = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
let mySum = sum (5, 3);
console.log(mySum);

const sayHello = (name) => {
    console.log('Hello', name);
    
};
sayHello('Sohit');

//One line code
const sum1 = (num1, num2) => num1 + num2;
let mySum1 = sum1(4, 4);
console.log(mySum1);

const sayHi = (name) => console.log('Hi', name);
sayHi('Sahil')

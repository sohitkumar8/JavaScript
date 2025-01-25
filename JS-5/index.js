// console.log('Hello World');


// //      *Function declaration*
// function run(){
//     console.log('running');
// }

// //  function call or invoke
// run();


// //Named function assignment
// let stand = function walk(){
//     console.log('walking');
// }

// //Anonymous function assingment
// let stand2 = function(){
//     console.log('walking');
// }

// stand();

// let jump = stand;
// jump();

// stand2();


// let x = 1;
// x = 's';
// console.log(x);


// function sum(a, b){
//     return a+b;
// }
// console.log(sum(2, 3));

// function sum(a, b){
//     let total = 0;
//     for(let value of arguments){
//         total += value;
//     }
//     return total;
// }
// console.log(sum(1,2,3,4,5,6));


// //   *Rest operator*
// function sum(num, value,...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6)


//    *Default parameter*
function interest(principal, rate = 3.5, years = 5){
    return principal * rate / 100 * years;
}
// console.log(interest(10000, 4, 5));


//    *Getters and Setters*

//getter -> access properties
//setter -> change or mutate properties

// let person = {
//     fName: 'Sohit',
//     lName: 'Kumar',
//     get fullName() {
//         return `${person.fName} ${person.lName}`
//     },
//     set fullName(value) {
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     } 
// };

// console.log(person.fullName);
// person.fullName = 'Sahil Kumar';

// console.log(person.fullName);

 

//           *Reducing an array*
let arr =[1,2,3,4];

// let total = 0
// for(let value of arr){
//     total += value;
// }
// console.log(total);

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log('Printing total sum:', totalSum);

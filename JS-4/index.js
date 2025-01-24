// console.log('Hii gyus, welcome to JS-4');

// let lastName = 'Kumar';
// let firstName = new String('Sohit');

// let message = 'This is \nmy first \nmessage';

// // let word = message.split(' ');

// console.log(message);

//      *Date and Time:*
// let date = new Date();
// let date2 = new Date('july 5 2004 06:05');
// let date3 = new Date(2002, 6, 8, 6);
// // date2.setFullYear(2005);
// date3.setMinutes(10);

// console.log(date3);
// console.log(date2);


//     *Adding new Elements*
// let number = [1, 4, 5, 7];
// // number.push(9);             //end --> push
// // number.unshift(8);          //beginning --> unshift
// // number.splice(3, 0, 6)      //middle --> splice

// console.log(number);

//    *Finding Elements (Primitives)*
// console.log(number.indexOf(9));

// // we want to check if a number exist in an array
// if (number.indexOf(2) != -1 );{
//     console.log('present');
// }

// console.log(number.includes(5));

// console.log(number.indexOf(4, 2));

// let courses = [
//     {no:1, name: 'Love'},
//     {no:2, name: 'Rahul'}
// ]
// console.log(courses);


// // let course = courses.find(function(course){
// //     return course.name === 'Love';
// // })
// let course = courses.find(courses => courses.name === 'Love')

// console.log(course);


//    *Removing Elements*
// let num = [1,2,3,4,5,6,7,8];
// num.pop();              //end -->pop()
// num.shift();            //beginning --> shift()
// num.splice(2, 1)        //middle --> splice(2, 1)

// console.log(num);


//    *Emptying an Array*
// let numbers = [1,2,3,4,5,6,7];
// let numbers2 = numbers;

// // numbers = [];
// // numbers.length = 0;
// numbers.splice(0, numbers.length)

// console.log(numbers);
// console.log(numbers2);


//         Combining & Slicing Arrays:
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);

// let marks = [10,20,30,40,50,60,70,80];
// let slice = marks.slice(3,6);
// console.log(slice);


//         *Spread Operator:*
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first, ...second];
// console.log(combined);


//         *Iterating an Array:*
// let arr = [10,20,30,40,50,60,70];

// // for (let number of arr){
// //     console.log(number);
// // }

// // arr.forEach(function(number){
// //     console.log(number);
// // })
// arr.forEach(number => console.log(number));


//         *Joining Arrays:*
// let numbers = [1,2,3,4,5,6,7,8];
// const joined = numbers.join(',');

// console.log(joined);

// let message = 'This is my first message';
// let word = message.split(' ');
// console.log(word);

// let joined = word.join('_');
// console.log(joined);


//         *Sorting Arrays:*
// let numbers = [40,30,10,50,20];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);


//      *Filtering Arrays:*
// let numbers = [1,3,-2,-5];
// // let filtered = numbers.filter(function(value){
// //     return value >= 0;
// // })
// let filtered = numbers.filter(value => value >= 0);
// console.log(filtered);



//      *Mapping Arrays:*
// let numbers =[,7,8,9,10];
// console.log(numbers);

// let items = numbers.map(value => 'Student' + value);
// console.log(items);


//     *Mapping with Objects:*
let numbers = [1,2,-6,-9];
let filtered = numbers.filter(value => value >= 0);

let items = filtered.map(function(num) {
    return{value:num};
});
console.log(items);

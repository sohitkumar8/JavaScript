console.log('Lets start');

//object create
// let rectangle = {
//     length: 1,
//     breadth:2,

//     draw: function(){
//         console.log('drawing rectangle');
        
//     }
// };



//factory function
// function createRectangle(len, bre){
//     return rectangle = {
//         length: len,
//         breadth: bre,
    
//         draw: function(){
//             console.log('drawing rectangle');
            
//         }
//     };
// }

// let rectangleObj1 = createRectangle(5, 4);

//Camelcase -> numberOfStudents
//Constructor function -> Pascal Notaton -> first letter of every word is Capital -> NumberOfStudents
//constructor function -> prop/method -> intialise/Define
// function Rectangle(len, bre){
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function(){
//         console.log('drawing');
//     }
// }

//object creation using constructor function
// let rectangleObject = new Rectangle(4, 6);

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let rectangle = {
//     length: 2,
//     breadth: 4
// };

//for-in loop
// for(let key in rectangle){
//     //key are reflected through key variable
//     //value are reflected through rectangle[key]
//     console.log(key, rectangle[key]);
    
// }

//for-of loop
// for(let key of Object.entries(rectangle)){
//     console.log(key);
    
// }

// if('color' in rectangle){
//     console.log('Present');
// }
// else{
//     console.log('Absent');
    
// }

//object - colone #1
// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };

// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

//object - cloning #2
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = { value: 25};

// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;

// console.log(dest);

//object - cloning #3
let src = {
    a: 10,
    b: 20,
    c: 30
};

let dest = {...src};

console.log(dest);

src.a++;

console.log(dest);


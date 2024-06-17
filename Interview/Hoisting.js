// Hoisting

// Hoisting is JavaScript's default behavior of moving declarations to the top.

// Declarations can be both variable and function


console.log(a);
var a = 5;

// hoisting not worked with let and const

// console.log(x);
// let x = 20;

// function hoisting

// add();

// function add(){
//     console.log("Learning hoisting");
// }

// var add = function(){
//     console.log("Learning hoisting");
// }


// arrow function
add();

const add = () => {
    console.log('Hello');
}
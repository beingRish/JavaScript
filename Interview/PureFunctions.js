// Pure Functions should have these all are the characteristics:-

    // 1. Predictable
    // 2. Readable
    // 3. Reusable
    // 4. Testable

// Pure Functions can not be depend on external function.

let message = "Good Morning";

const greeting = (name) => {
    message = "Hello";
    return `${message} ${name}`
}

console.log(greeting('Rishabh'));

message = "Good Evening";
console.log(greeting('Rishabh'));



// Example 2

// let x = 10;
// function impure(y){
//     return x*y;
// }

// console.log(impure(20));

function pure(x, y){
    return x*y;
}

console.log(pure(10, 20));
console.log(pure(10, 20));
console.log(pure(10, 20));
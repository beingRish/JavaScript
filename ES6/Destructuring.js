// Destructuring in ES6

// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.



const user = {
    firstName : 'Rishabh',
    lastName : 'Singh',
    address: {
        city: 'Delhi',
        country: 'India'
    },
}


// const name = user.firstName;
// const address = user.address.city;

// destructuring syntax :-> const { identifier } = expression

const {
    firstName, 
    lastName, 
    age=10, 
    address: {city}
} = user;

console.log(`${firstName} ${lastName}'s age is ${age} and city is ${city}`);

// another way with REST (...) Operator
// const { firstName, ...userInfo} = user;
// console.log('userInfo', userInfo);
// console.log('firstName', firstName);

const scores = [10, 20, 99, 334];

console.log(scores[0]); // 10

const [a, , c, ...other] = scores;
console.log(a);         // 10
// console.log(b);         
console.log(c);         // 99
console.log(other);         // [334]
// Regular Expression is an object in JavaScript.

// Regular expressions are patterns used to match character combinations in strings.

// The pattern is used for searching and replacing characters in strings.


console.log('<====================> Exercise 1 <====================>');

const text = 'Hello world from Rishabh';

const regex1 = new RegExp('Hello');
const regex2 = new RegExp('hello');
const regex3 = /world/;
const regex4 = /World/;

console.log(regex1.test(text)); // true
console.log(regex2.test(text)); // false -> case sensitive
console.log(regex3.test(text)); // true
console.log(regex4.test(text)); // flase -> case sensitive
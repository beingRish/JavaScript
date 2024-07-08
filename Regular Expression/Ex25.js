// Matching Email Address Validation using Regular Expression Pattern

console.log('<====================> Exercise 25 <====================>');

const text1 = 'something@gmail.com'

const regex1 = /^[^\s@]+@[^\s@.]+\.[^\s@]+$/g;

console.log(text1.match(regex1));
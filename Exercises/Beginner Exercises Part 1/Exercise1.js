
// Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two nmbers is 100

console.log('<====================> Exercise 1 <====================>');
const isEqualTo100 = (a, b) =>  a === 100 || b === 100 || a+b === 100

console.log(isEqualTo100(7, 90));
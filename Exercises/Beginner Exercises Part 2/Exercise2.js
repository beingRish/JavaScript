// Write a JavaScript program to extract the first half of a string of even length.

console.log('<====================> Exercise 2 <====================>');

const inputString = "My Name Is Rishabh"

const firstHalf = str => str.slice(0, str.length / 2);

console.log(firstHalf(inputString));
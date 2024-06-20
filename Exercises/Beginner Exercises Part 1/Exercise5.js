// Write a JavaScript Program to Create a new string adding "New!" in front of a given string.
// If the given string begins with "New!" already then return the original string.

console.log('<====================> Exercise 5 <====================>');

const str = "String";

const addNew = str => str.indexOf('New!') === 0 ? str : `New! ${str}`;

console.log(addNew(str));
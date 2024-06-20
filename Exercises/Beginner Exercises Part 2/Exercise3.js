// Write a JavaScript program to concatenate two strings except their first character.

console.log('<====================> Exercise 3 <====================>');

const concatenatedString = (str1, str2) => `${str1.slice(1)}${str2.slice(1)}`;

console.log(concatenatedString('Rishabh', 'Singh'));
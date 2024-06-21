// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

console.log('<====================> Exercise 2 <====================>');

let count = 0;

const countVowels = (str, char) => str.split('').filter(s => char.indexOf(s) > -1).length

console.log(countVowels('Rishabh', ['a', 'e', 'i', 'o', 'u']));
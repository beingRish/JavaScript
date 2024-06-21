// Write a JavaScript function to extract unique characters from a string.

console.log('<====================> Exercise 4 <====================>');

const uniqueCharacters = str => [... new Set(str)];

console.log(uniqueCharacters('abjkiabljk'));
// Write a JavaScript Program to replace every character in a given string wit the character following it in the alphabet.
console.log('<====================> Exercise 3 <====================>');

// inputString = "abcd"
// outputString = "bcde"

const inputString = "abcd";

const moveCharsForworward = str =>
    str
    .split('')
    .map(char =>  String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

console.log(moveCharsForworward(inputString));
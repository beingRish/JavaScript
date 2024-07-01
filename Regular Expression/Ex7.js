console.log('<====================> Exercise 6 <====================>');

// Specify a range of characters using - meta character in Regular Expression

const text = 'There have been 4 - 5 times i have tried, but I will try it again.'

const regex1 = /[1-5]/g;
const regex2 = /[1\-5]/g;
const regex3 = /[1-5A-Z]/g;
const regex4 = /[A-Z][a-z]/g;
const regex5 = /[-,.]/g;

console.log(text.match(regex1));    // ['4', '5']
console.log(text.match(regex2));    // ['-', '5']
console.log(text.match(regex3));    // ['T', '4', '5', 'I']
console.log(text.match(regex4));    // ['Th']
console.log(text.match(regex5));    // ['-', ',', '.']

const text2 = 'How do we capture the numbers 13 - 20'
const regex6 = /[10-20]/g;
const regex7 = /[0-9][0-9]/g;

console.log(text2.match(regex6));   // ['1', '2', '0']
console.log(text2.match(regex7));   // ['13', '20']


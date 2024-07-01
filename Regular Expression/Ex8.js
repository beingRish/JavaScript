console.log('<====================> Exercise 8 <====================>');

// Excluding Set of Characters in Character Set using Caret Symbol(^)

const text1 = '0xF89F';
const text2 = '0xG89F';

const regex1 = /0x[0-9A-F][0-9A-F]/g;
const regex2 = /0x[^0-9A-F][0-9A-F]/g;  // here ^ means excluding

console.log(text1.match(regex1));    // ['0xF8']
console.log(text1.match(regex2));    // null
console.log(text2.match(regex2));   // ['0xG8']

const text3 = 'abcdefghijklmno';
const regex3 = /[^a-z]/g;
console.log(text3.match(regex3));   // null

const text4 = 'abcdefghijklmno^';
const regex4 = /[^a-z]/g;
console.log(text4.match(regex4));   // ['^']

const text5 = 'abcdefghijklmno^';
const regex5 = /[a-z^]/g;
console.log(text5.match(regex5));   // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', '^']
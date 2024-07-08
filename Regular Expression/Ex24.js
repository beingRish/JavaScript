console.log('<====================> Exercise 24 <====================>');

// Find Special Characters using Unicode representation in RegEx Pattern.

const text1 = 'Smith Andrea';
const text2 = '©cosmithandrea';

const regex1 = /[\u0061-\u0070]/g;
const regex2 = /\u00A9/g;

console.log(text1.match(regex1));
console.log(text2.match(regex2));
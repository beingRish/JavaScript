console.log('<====================> Exercise 10 <====================>');

// Handling Repetition of characters in the pattern using +,*,? Meta character

const text1 = `SHe sells seashells on a seashore. s The shells she sells are seashells, I',m sure.`;

const regex1 = /[A-Z]/g;
const regex2 = /[A-Z]+/g;
const regex3 = /[A-Z]?/g;
const regex4 = /[A-Z]*/g;
const regex5 = /s[a-z]+/g;
const regex6 = /s[a-z]?/g;
const regex7 = /s[a-z]*/g;

console.log(text1.match(regex1));   // ['S', 'H', 'T', 'I']
console.log(text1.match(regex2));   // ['SH', 'T', 'I']
console.log(text1.match(regex3));   // Infinite
console.log(text1.match(regex4));   // Infinite
console.log(text1.match(regex5));   // ['sells', 'seashells', 'seashore', 'shells', 'she', 'sells', 'seashells', 'sure']
console.log(text1.match(regex6));   // ['se', 's', 'se', 'sh', 's', 'se', 'sh', 'sh', 's', 'sh', 'se', 's', 'se', 'sh', 's', 'su']
console.log(text1.match(regex7));   // ['sells', 'seashells', 'seashore', 's', 'shells', 'she', 'sells', 'seashells', 'sure']





const text2 = `Steve Norman Jeff amanda Sherry`;

const regex8 = /[A-Z][a-z]/g;
const regex9 = /[A-Z][a-z]+/g;

console.log(text2.match(regex8));   // ['St', 'No', 'Je', 'Sh']
console.log(text2.match(regex9));   // ['Steve', 'Norman', 'Jeff', 'Sherry']





const text3 =  `He picked apples from the apple tree`;

const regex10 = /apples/g;
const regex11 = /apples?/g;

console.log(text3.match(regex10));  // ['apples']
console.log(text3.match(regex11));  // ['apples', 'apple'] 
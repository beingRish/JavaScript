console.log('<====================> Exercise 9 <====================>');

// Shorthand representation of character sets & also negating Character sets in Regular Expression.

const text1 =  `A String that contains numbers (12345)
A second line _ (12345)    3 tabs`;

const regex1 = /\d/g;    // /[0-9]/g
const regex2 = /\w/g;   // /[a-zA-Z0-9_]/g
const regex3 = /\s/g;   // /[\t\r\n]/g

const regex4 = /\D/g;   // /[^0-9]/g
const regex5 = /\W/g;   // /[^a-zA-Z0-9_]/g
const regex6 = /\S/g;   // /[^\t\r\n]/g

console.log('0 to 9 ---> ', text1.match(regex1));
console.log('All the Alphabet & 0 to 9 ---> ', text1.match(regex2));
console.log('Tab, New Line & Carriage Return ---> ', text1.match(regex3));

console.log('Except 0 to 9 ---> ', text1.match(regex4));
console.log('Except All the Alphabet & 0 to 9 ---> ', text1.match(regex5));
console.log('Except Tab, New Line & Carriage Return ---> ', text1.match(regex6));
console.log('<====================> Exercise 16 <====================>');

// Grouping RegEx pattern using parenthesis

const text1 = `a5b3c5b5d4 a5c3cde5d4 a5b3cda5c4`
const text2 = `monday tuesday friday`

const regex1 = /([a-d][0-9]){5}/g
const regex2 = /\b(mon|tues|fri)day\b/g

console.log(text1.match(regex1));   // ['a5b3c5b5d4']
console.log(text2.match(regex2));   // ['monday', 'tuesday', 'friday']

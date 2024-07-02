console.log('<====================> Exercise 13 <====================>');

// Anchored expression to match the pattern at starting and ending of string

const text1 =  `The first letter always first should be at the first`
const text2 = `first`

const regex1 = /^first/g;
const regex2 = /first$/g;
const regex3 = /^first$/g;


console.log(regex1.test(text1));    // false because first is not at the start
console.log(regex2.test(text1));    // true because first is at the end
console.log(regex3.test(text2));    // true because first is at the start and end also.




// Anchored Expressions in the multiline string

const text3 = `letter or word should be first
The letter match with first.
The word with another`

const regex4 = /^The/g;
const regex5 = /^The/gm;
const regex6 = /\.$/g;
const regex7 = /\.$/gm;

console.log(regex4.test(text3));    // false because The is searched in the first line only
console.log(regex5.test(text3));    // true because The is searched in the multiline
console.log(regex6.test(text3));    // false because . is searched in the lastline
console.log(regex7.test(text3));    // true because . is searched in the multiline
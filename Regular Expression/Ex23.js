console.log('<====================> Exercise 23 <====================>');

// Positive Lookbehind

const text1 = '$199 199'

const regex1 = /(?<=\$)\d/g;

console.log(text1.match(regex1));


// Negative Lookbehind

const text2 = '$199 199'

const regex2 = /(?<!\$)\d/g;

console.log(text2.match(regex2));
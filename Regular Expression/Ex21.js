console.log('<====================> Exercise 21 <====================>');

// Using Lookahead Groups in the RegEx Pattern

const text = `google.com facebook.com`;

const regex1 = /\w+(\.com)/g;
const regex2 = /\w+(?=\.com)/g;

console.log(text.match(regex1));    // ['google.com', 'facebook.com']
console.log(text.match(regex2));    // ['google', 'facebook']




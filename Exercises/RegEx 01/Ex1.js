const ex1 = 'The quick brown fox jumped over the lazy dog';
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Concat customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';

console.log('<====================> Exercise 1 <====================>');

// Using a regex pattern, get the 3 letter words in the ex1 string.

console.log(ex1.match(/(^|\s)[a-zA-Z]{3}($|\s)/g));
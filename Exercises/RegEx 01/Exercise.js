console.log('<====================> Exercise 1 <====================>');

// Using a regex pattern, get the 3 letter words in the ex1 string.

const ex1 = 'The quick brown fox jumped over the lazy dog';

console.log(ex1.match(/(^|\s)[a-zA-Z]{3}($|\s)/g));







console.log('<====================> Exercise 2 <====================>');

// Using a regex pattern, remove all of the numbers from the ex2 string.

const ex2 = 'A1B2C3D4E5F6G7H8I9J10';

console.log(ex2.replace(/[0-9]/g, ''));







console.log('<====================> Exercise 3 <====================>');

// Using a regex pattern, find the monetary value contained withing the ex3 string.

const ex3 = 'The salad costs $9.99';

console.log(ex3.match(/\$\d{1,3}.\d\d/)[0]);







console.log('<====================> Exercise 4 <====================>');

// Using a regex pattern, find the telephone number contained within the ex4 string.

const ex4 = 'Concat customer support on 0800 300 500';

console.log(ex4.match(/\d{4}\s\d{3}\s\d{3}/g));







console.log('<====================> Exercise 5 <====================>');

// Using a regex pattern, find the email address contained within the ex5 string.

const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';

console.log(ex5.match(/\S+@\S+\.\S+/g)[0]);
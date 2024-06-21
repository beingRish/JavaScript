// Write a JavaScript function that returns a passed string with letters in alphabetical order.

// Example string: 'webmaster'
// Expected Output: 'abeemrstw'

console.log('<====================> Exercise 1 <====================>');

const desiredString = str => str.split('').sort().join('');

console.log(desiredString('webmaster'));
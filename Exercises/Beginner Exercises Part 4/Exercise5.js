// Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

console.log('<====================> Exercise 5 <====================>');

const isTrue = arr => arr.every(value => value > 3);

console.log(isTrue([21, 22, 23, 4, 5]));
console.log(isTrue([1, 2, 3, 4, 5]));
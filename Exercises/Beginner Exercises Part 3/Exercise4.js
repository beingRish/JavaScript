// Write a JavaScript program to get the largest even number from an array of integers.

console.log('<====================> Exercise 4 <====================>');

const largestEven = (arr) => 
    Math.max(...arr.filter(num => num % 2 === 0));

console.log(largestEven([3, 5, 4, 1, 2, 6, 2]));
console.log(largestEven([3, 5, 4, 1, 21, 66, 22]));
// Given two values, write a JavaScript program to find out which one is nearest to 100

console.log('<====================> Exercise 4 <====================>');

const findNearestTo100 = (value1, value2) => (100 - value1) < (100 - value2) ? value1 : value2;

console.log(findNearestTo100(35, 67));
console.log(findNearestTo100(89, 67));
console.log(findNearestTo100(50, 50));
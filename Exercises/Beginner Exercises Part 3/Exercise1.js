// Write a JavaScript program to find the number of even digits in an array of integers. 

console.log('<====================> Exercise 1 <====================>');

const arrayOfNumbers = [35, 32, 46, 64, 24, 14, 47, 34, 13];

const countEvenNumbers = arr => arr.filter(num => num % 2 === 0).length

console.log(countEvenNumbers(arrayOfNumbers));
// Write a JavaScript program to check whether a given array of integers is sorted in ascending order.

console.log('<====================> Exercise 3 <====================>');

const arrayOfIntegers = [34, 56, 65, 78, 89, 90, 122];

const isAscending = arr => arr.every((value, index) => index === 0 || value >= arr[index-1])

console.log(isAscending(arrayOfIntegers));
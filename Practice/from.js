// from() method creates a new shallow copied array from an array like or iterable object.

// convert a string of numbers to an array of numbers.

const str = '1234567';

// [1, 2, 3, 4, 5, 6, 7]

const res = Array.from(str, x => Number(x));

console.log(res);

// remove all the duplicate element of the array

const numbers = [1, 2, 3, 3, 2, 1, 4, 4, 3, 2, 1, 5];

const result = Array.from(new Set(numbers));

console.log(result);
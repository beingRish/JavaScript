// flat() method creates a new array with all the sub arrays elements concatenated into it.

const arr = [1, [2, [3, [4, [5]]]]];

// [1, 2, 3, 4];

const result1 = arr.flat(); // [1, 2, [3, [4, [5]]]]
const result2 = arr.flat(3); // [1, 2, 3, 4, [5]]
const result3 = arr.flat(Infinity); // [1, 2, 3, 4, 5]

console.log(result1);
console.log(result2);
console.log(result3);
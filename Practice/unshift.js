// unshift() method adds one or more elements at the begining of the array and returns the new  length of the array;
const numbers = [1, 2, 3, 4, 5];

const total = numbers.unshift(0, 4, 6,7);

console.log(numbers);   // [0, 4, 6, 7, 1, 2, 3, 4, 5]
console.log(total);     // 9
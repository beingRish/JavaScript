// splice() method 

// The splice() method changes an array by removing or replacing existing elements from it.


let numbers = [1, 2, 3, 4, 5];

const deleted = numbers.splice(2, 3, 6, 7);

console.log(numbers); //[1, 2, 6, 7]
console.log(deleted);  //[3, 4, 5]
// The findIndex() method is very similar to the find method but the only difference is that the findIndex() method will find the element and it will return its index rather than finding the element and returning it as the find method does.


const numbers = [1, 2, 3, 4, 5];

const result = numbers.findIndex(value => value===3);

console.log(result);


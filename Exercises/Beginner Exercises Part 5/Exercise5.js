// Write a JavaScript function to find the first not repeated character

// Example string: 'abacddbec'

// Expected Output: 'e'

console.log('<====================> Exercise 5 <====================>');

const unrepeatedChars = str => str.split('').filter((item, index, arr) => arr.filter(arrItem => arrItem === item).length === 1);

console.log(unrepeatedChars('abacddbec'));
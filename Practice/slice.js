// slice() method

// The slice() method returns a shallow copy of a portion of an array

// It won't modify the original array on which is called upon.
// you can provide begining index and end index

const numbers = [1, 2, 3, 4, 5];

const numbers2 = numbers.slice(1, 4);

console.log(numbers) 
console.log(numbers2) //[2, 3, 4]

const numbers3 = numbers.slice(-3);
console.log(numbers3)  // [3, 4, 5]

const participants = ['Rishabh', 'Ritik', 'Bobby', 'Shashank', 'Suryanshu']
const winners = participants.slice(0,3);
console.log(winners); //['Rishabh', 'Ritik', 'Bobby', 'Shashank']
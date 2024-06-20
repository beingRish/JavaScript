// Write a JavaScript program to find the number of even values up to a given number.

console.log('<====================> Exercise 2 <====================>');

const countEvenNumbers2 = arr => arr.filter(num => num % 2 === 0).length;

const createArrayOfNumbers = num => {
    const returnArray = [];
    for(let i = 1; i <= num; i += 1){
        returnArray.push(i);
    }
    return returnArray;
}

console.log(countEvenNumbers2(createArrayOfNumbers(6)));
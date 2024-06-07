// REST Parameter

// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

function sum(...values){
    let sum = 0;
    values.map(value => sum+=value);
    console.log('Sum', sum);
}

sum(2, 3);
sum(10, 4, 6);
sum(10, 4, 6, 9, 10, 30);

// Difference Between REST Parameter and SPREAD Operator (...)

// Syntax is same for both
// REST Parameter will be able to get list of arguments into an array.
// SPREAD Operator help us to unpack elements of array in single individual array.



// Before ES6 we use 'arguments' property

function addition(){
    console.log(arguments);
}

addition(2, 3);


// Major Difference between arugments property and REST parameter :-

// The REST parameter is completely an array, so you can perform all the methods like map, filter, forEach.
// The 'arguments' object is not an array, it is array like syntax


function multiply(...values){
    let m = 1;
    values.map(value => m*=value);
    console.log('Product', m);
}

function divide(...values){
    let d = 1;
    values.map(value => {
        d = value/d
    });
    console.log('Divide', d);
}

function calculate(type, ...values){
    type(...values);
}

calculate(sum, 10, 20, 30);
calculate(multiply, 5, 4, 7);
calculate(divide, 5, 45);
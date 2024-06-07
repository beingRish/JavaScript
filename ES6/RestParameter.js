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
// SPREAD Operator help us to 
console.log('<====================> Exercise 29 <====================>');

// Validating the Data Format using RegEx.

const date = '08/07/2024';
const regex = /^(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/(([0-9]{2})?[0-9]{2})$/;

console.log(date.match(regex));
// Write a JavaScript program to replace the first digit in a string (should contains at least digit) with $ character.

console.log('<====================> Exercise 5 <====================>');

const replaceFirstDigitWith$ = str => str.replace(/[0-9]/, '$');

console.log(replaceFirstDigitWith$('ris3ha4bh'));
console.log(replaceFirstDigitWith$('12Rishabh'));
console.log(replaceFirstDigitWith$('risha567bh'));
console.log(replaceFirstDigitWith$('rishabh11'));
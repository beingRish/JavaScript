// Write a JavaScript Program to get the extension of a filename.
console.log('<====================> Exercise 2 <====================>'); 

const fileName = "Exercise2.config.js";

const getExtension = str => str.slice(str.lastIndexOf('.'));

console.log(`Extension of '${fileName}' is '${getExtension(fileName)}'`);
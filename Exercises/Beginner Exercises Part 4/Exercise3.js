// Write a JavaScript program to convert a comma-seperated values (CSV) string to a 2D array. A new line indicates a new row in the array.

// Example : 

// abc, def, ghi
// jkl, mno, pqr
// stu, vwx, yza

console.log('<====================> Exercise 3 <====================>');

const str = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;

const parseCSV = csvString => csvString.split('\n').map(row => row.split(','));

console.log(parseCSV(str));
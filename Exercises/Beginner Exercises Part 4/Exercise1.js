// Given a year, report if it is a leap year.

console.log('<====================> Exercise 1 <====================>');

const isLeapYear = year => year % 400 === 0 || year % 4 === 0

console.log(isLeapYear('2000'));
console.log(isLeapYear('2008'));
console.log(isLeapYear('2002'));

console.log('<====================> Exercise 17 <====================>');

// Using Grouping of the patterns in JavaScript exec method

const text1 = `2022-2/3`

const regex = /^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/g;

console.log(regex.exec(text1));    
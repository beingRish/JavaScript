console.log('<====================> Exercise 18 <====================>');

// Captured and Non Captured Groups in RegEx

const text = `2022-02-03`

const regex = /^(?:\d{4})([-/.])(\d{1,2})\1(\d{1,2})$/g;

console.log(regex.exec(text));    
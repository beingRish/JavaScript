console.log('<====================> Exercise 3 <====================>');


const str = 'Hello world. This is RISHABH';

const regex1 = /s/g;
const regex2 = /s/gi;

console.log(str.match(regex1));     // ['s', 's']
console.log(str.match(regex2));     // ['s', 's', 'S']
console.log(regex1.exec(str));
console.log(regex1.exec(str));
console.log(regex1.exec(str));
console.log(regex2.exec(str));
console.log(regex2.exec(str));
console.log(regex2.exec(str));
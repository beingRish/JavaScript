console.log('<====================> Exercise 5 <====================>');

const text = `hot hit h    t h
t`

const regex1 = /h.t/g;

console.log(text.match(regex1));    // ['hot', 'hit'], not matching the tab and new line


const regex2 = /h\tt/g;
const regex3 = /h\nt/g;
const regex4 = /h\r\nt/g;

console.log(text.match(regex2));    // null
console.log(text.match(regex3));    // ['h\nt']
console.log(text.match(regex4));    // null
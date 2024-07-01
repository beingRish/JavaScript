console.log('<====================> Exercise 5 <====================>');

const text = `h t h    t h
t`

const regex1 = /h.t/g

console.log(text.match(regex1));    // ['h t'], not matching the tab and new line


const regex2 = /h\tt/g

console.log(text.match(regex2));
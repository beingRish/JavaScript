console.log('<====================> Exercise 11 <====================>');

const text1 = `<p>This is the first paragraph</p><p>This is the second paragraph</p>
<p>This is the first paragraph</p><p>This is the first paragraph</p>
`
// Here is the way to convert greedy nature to lazy nature

const regex1 = /<p>.*?<\/p>/g;

console.log(text1.match(regex1));





const text2 = `32-6678-, 45-668778-, 65-4546-`

const regex2 = /\d{2}-\d{4,6}?/g;
const regex3 = /\d{2}-\d{4,6}?-/g;

console.log(text2.match(regex2));   // ['32-6678', '45-6687', '65-4546']
console.log(text2.match(regex3));   // ['32-6678-', '45-668778-', '65-4546-']
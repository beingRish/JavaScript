console.log('<====================> Exercise 11 <====================>');

const text1 = `<p>This is the first paragraph</p><p>This is the second paragraph</p>
<p>This is the first paragraph</p><p>This is the first paragraph</p>
`

// Here is the way to convert greedy nature to lazy nature

const regex1 = /<p>.*?<\/p>/g;

console.log(text1.match(regex1));
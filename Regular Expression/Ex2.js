
console.log('<====================> Exercise 2 <====================>');

const text = 'Hi I am student'

regex = /am/;
regex2 = /\s/;  // \s -> space

console.log(regex.test(text));  // true
console.log(regex.exec(text));

// String Methods

console.log(text.match(regex));

console.log(text.search(regex));    // 5

console.log(text.replace(regex, 'was'));    // Hi I was student

console.log(text.split(regex2)); // ['Hi', 'I', 'am', 'student']


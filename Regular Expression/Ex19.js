console.log('<====================> Exercise 19 <====================>');

// Group Back References in the RegEx Pattern

const text = `<strong>This is a strong tag</strong><i>ds hd sdjh s</i>`;

const regex = /<(\w+>)[\w\s]+<.\1/g;

console.log(text.match(regex));     ['<strong>', '<i>']
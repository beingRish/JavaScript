console.log('<====================> Exercise 20 <====================>');

// Naming the captured groups and use the name in the RegEx Pattern

const text = `<strong>This is the strong text</strong><li>dsdsdds</li>`

const regex = /<(?<tag>\w+>).+?<.\k<tag>/g

console.log(text.match(regex));     // ['<strong>This is the strong text</strong>', '<li>dsdsdds</li>']
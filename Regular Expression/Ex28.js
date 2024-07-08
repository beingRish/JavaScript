console.log('<====================> Exercise 28 <====================>');

// Replace method with Regular Expression in different ways.

let html = '<b>This is a bold</b>';

console.log(html.replace(/b>/g, 'strong>'));

let names = ['Gates, Bill', "Pichai, Sundar", "Nadella, Satya"];

// Bill Gates
// Sundar pichai

let newNames = names.map(name => {
    return name.replace(/(\w+), (\w+)/, '$2 $1')
})

console.log(newNames);
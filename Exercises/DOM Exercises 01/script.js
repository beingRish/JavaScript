console.log('<====================> Exercise 1 <====================>');

// Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)

const paragraph = document.querySelector('p');

paragraph.innerHTML = paragraph.innerText
    .split(' ')
    .map(word => word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word)
    .join(' ');







console.log('<====================> Exercise 2 <====================>');

// Add a link back to the source of the text after the paragraph tag. (https://forcemipsus.com/)

const link = document.createElement('a');
link.href = 'https://forcemipsus.com/';
link.innerText = 'Text generated using DOM Manipulation';
document.body.appendChild(link);







console.log('<====================> Exercise 3 <====================>');

// Split each new sentence on to a separate line in the paragraph text.
// A sentence can be assumed to be a string of text terminated with a period (.)

paragraph.innerHTML = paragraph.innerHTML
    .split('.')
    .join('. </p><p>' + '</p>') ;







console.log('<====================> Exercise 4 <====================>');

// Count the number of words in the paragraph tag and display the count before the paragraph element.
// You can assume that all words are separated by one singular whitespace.

const wordCount = paragraph.innerText.split(' ').length
const wordCountElement = document.createElement('div');
wordCountElement.innerText = `${wordCount} words`;
document.body.insertBefore(wordCountElement, paragraph)

console.log(wordCount);







console.log('<====================> Exercise 5 <====================>');

// Replace all questions marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (🤨)


paragraph.innerHTML = paragraph.innerHTML
    .split('')
    .map(char => {
        return (char === '?' ? char = '🤔' : char) && (char === '!' ? char = '🤨' : char)
    })
    .join('');
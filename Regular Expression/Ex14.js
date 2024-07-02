console.log('<====================> Exercise 14 <====================>');

// Matching Word and Non word Boundary using \B and \b Anchor Meta character

const text1 = `Inplant this idea; plan to plant multiple trees on this planet`;

// If I want that no count if right side of plan have word character like [A-Za-z0-9].
const regex1 = /plan\b/g;
console.log(text1.match(regex1));   // ['plan']


// If I want that no count if left side of plan have word character like [A-Za-z0-9].
const regex2 = /\bplan/g;
console.log(text1.match(regex2));   // ['plan', 'plan', 'plan']

// If I want that no count if left and right side of plan have word character like [A-Za-z0-9].
const regex3 = /\bplan\b/g;
console.log(text1.match(regex3));   // ['plan']



// If I want that count if right side of plan have word character like [A-Za-z0-9].
const regex4 = /plan\B/g;
console.log(text1.match(regex4));   // ['plan', 'plan', 'plan']

// If I want that count if left side of plan have word character like [A-Za-z0-9].
const regex5 = /\Bplan/g;
console.log(text1.match(regex5));   // ['plan']

// If I want that count if left side of plan have word character like [A-Za-z0-9].
const regex6 = /\Bplan\B/g;
console.log(text1.match(regex6));   // ['plan']
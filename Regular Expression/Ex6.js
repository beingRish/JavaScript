console.log('<====================> Exercise 6 <====================>');

// Matching the Group of characters in the text using [] with character Sets

const text = 'Make the outline grly for the square gray and fill it with circle grey.';

const regex1 = /gr[ae]y/g;
console.log(text.match(regex1));     ['gray', 'grey']

const regex2 = /[abcd]/g;
console.log(text.match(regex2));

const regex3 = /[abcd][ i]/g;
console.log(text.match(regex3));    // ['d', 'ci']

const regex4 = /[rn][abcd][ i]/g;
console.log(text.match(regex4));    // ['nd ']

const regex5 = /[ey][.]/g;
console.log(text.match(regex5));    // ['y.']


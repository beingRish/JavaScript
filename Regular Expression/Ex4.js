console.log('<====================> Exercise 4 <====================>');

const text1 = "What is that? and h    t why it is hot. h.t h t"

const regex1 = /h.t/g;

console.log(text1.match(regex1));    // ['hat', 'hat', 'hot', 'h.t', 'h t']

// Esaping Meta Characters using the forward slash(\)

const text2 = 'This could be the final word.';

const regex2 = /d\./g;

console.log(text2.match(regex2));   // ['d.']
console.log('<====================> Exercise 4 <====================>');

const text = "What is that? and h    t why it is hot. h.t h t"

const regex1 = /h.t/g

console.log(text.match(regex1));    // ['hat', 'hat', 'hot', 'h.t', 'h t']
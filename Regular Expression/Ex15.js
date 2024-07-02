console.log('<====================> Exercise 15 <====================>');

// Specifying options in RegEx patterns using pipe(|) Meta Character

const text1 = `monday tuesday wednesday thursday friday saturday sunday dsdgsday samsday`

// const regex1 = /\b[m,t,w,f,s][a-z]{2,5}day\b/g;     //  wrong approach

const regex1 = /\bmonday|tuesday|wednesday|thursday|friday|saturday|sunday\b/g

console.log(text1.match(regex1));
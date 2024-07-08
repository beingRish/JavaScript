console.log('<====================> Exercise 22 <====================>');

// Positive Lookahead(?=) & Negative Lookahead(?!)

// Finding Password Strength of text using the positive lookahead groups using RegEx

// Password
// minimum 8 characters
// A-Z
// a-z 
// 0-9

const text1 = 'asdAsd4dajj'
const regex1 = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g;
console.log(text1.match(regex1));


// Negative Lookahead

// Finding Password Strength of text using the negative lookahead groups using RegEx

// Password
// minimum 8 characters
// A-Z
// a-z 
// 0-9 (I don't want 0 - 9 then I have to apply negatie lookahead)

const text2 = 'asAjkdkf';
const regex2 = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?!.*[0-9]).*$/g;
console.log(text2.match(regex2));
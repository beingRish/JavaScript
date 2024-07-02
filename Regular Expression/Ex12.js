console.log('<====================> Exercise 12 <====================>');

// Specifying Characters Repetition amount minimum and maximum in the pattern

const text1 =  `My telephone number is as follows 801-555-6789`

const regex1 = /\w{3,5}/g;
const regex2 = /\w{3}/g;
const regex3 = /\w{3,}/g;

console.log(text1.match(regex1));       // ['telep', 'hone', 'numbe', 'follo', '801', '555', '6789']
console.log(text1.match(regex2));       // ['tel', 'eph', 'one', 'num', 'ber', 'fol', 'low', '801', '555', '678']
console.log(text1.match(regex3));       // ['telephone', 'number', 'follows', '801', '555', '6789']




const text2 =  `#ff0000 #C0C0C0 these are hex numbers`
const regex4 = /[0-9A-F]{6}/ig;
console.log(text2.match(regex4));   // ['ff0000', 'C0C0C0']



// if I want to check social security number
const text3 = `529-66-6789`
const regex5 = /\d{3}-\d{2}-\d{4}/g;
console.log(text3.match(regex5));       // ['529-66-6789']

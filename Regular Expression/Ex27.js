console.log('<====================> Exercise 27 <====================>');

// Testing Password Strength using Regular Expression and use it different ways.

const password = 'N2edd/>9dsd'
const theLength = /.{8,32}/g;
const specialCase = /[^A-Za-z0-9]/;
const lowerCase = /[a-z]/;
const upperCase = /[A-Z]/;
const numberCase = /[0-9]/;

if(
    theLength.test(password) && 
    specialCase.test(password) && 
    lowerCase.test(password) && 
    upperCase.test(password) &&
    numberCase.test(password) 
) {
    console.log('Matched');
}
else{
    console.log('Not Matched');
}
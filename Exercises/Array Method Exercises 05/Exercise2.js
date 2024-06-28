// Check whether the tags for the first account includes the "consectetur" tag 

console.log('<====================> Exercise 2 <====================>');

const checkTags = accounts => accounts[0].tags.flat().includes('consectetur')

console.log(checkTags(accounts));
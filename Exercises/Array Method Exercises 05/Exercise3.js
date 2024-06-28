// Get a list of all the tags for all the accounts and join them together as a string separated by commas.

console.log('<====================> Exercise 3 <====================>');

const joinTogether = accounts => accounts.map(account => account.tags.join(', '))

console.log(joinTogether(accounts));
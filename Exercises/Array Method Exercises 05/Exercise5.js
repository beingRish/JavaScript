// Get a list of all the friends for all users who are younger than 30 AND have a balance more than $1500

console.log('<====================> Exercise 5 <====================>');

const getFriendsList = accounts => accounts.filter(({balance, age}) => age <= 30 && parseInt(balance.replace(/\D/g, '')) > 1500).map(({friends}) => friends).flat()

console.log(getFriendsList(accounts));
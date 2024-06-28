// Get a list of all the friends for all the user's accounts as an array (don't worry about duplicates)
  

console.log('<====================> Exercise 4 <====================>');

const getFriends = accounts => accounts.map(account => {
    const friendList = account.friends.filter(friend => friend.name)

    return friendList
})

console.log(getFriends(accounts));
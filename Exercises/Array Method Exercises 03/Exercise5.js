
console.log('<====================> Exercise 5 <====================>');

// Get a list of the users who haven't commented.

const notCommented = users => users.filter(user => !comments.find(comment => comment.userId === user.id))

console.log(notCommented(users));
console.log('<====================> Exercise 2 <====================>');

// Which user commented 'OK great thanks' ?

const findComment = users => users.find(user => user.id === comments.find(comment => comment.text === 'Ok great thanks').userId)

console.log(findComment(users));
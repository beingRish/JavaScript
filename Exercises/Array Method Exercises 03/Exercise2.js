
console.log('<====================> Exercise 2 <====================>');

// Who wrote the first comment (assuming the first comment is in position 0 of the comments array)

const getFirstComment = users => users.find(user => user.id === comments[0].userId)

console.log(getFirstComment(users));
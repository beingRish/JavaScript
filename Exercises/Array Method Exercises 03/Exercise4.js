
console.log('<====================> Exercise 4 <====================>');

// Add the user's first and last name to each comment in the comments array.


const addNameToComments = comments => comments.map(comment => {
    const {firstName, lastName} =users.find(user => user.id === comment.userId);
    return {...comment, firstName, lastName}
})

console.log(addNameToComments(comments));
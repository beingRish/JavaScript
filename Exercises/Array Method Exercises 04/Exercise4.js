console.log('<====================> Exercise 4 <====================>');

// Find the user object that has the 'soundcloud' email address

const findEmail = users => users.find(({email}) => email.includes('soundcloud'))

console.log(findEmail(users));
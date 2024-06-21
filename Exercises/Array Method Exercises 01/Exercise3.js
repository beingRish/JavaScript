console.log('<====================> Exercise 3 <====================>');

// Get a list of the people's full name (firstName and lastName).

// const getFullName = people => people.map(person => `${person.firstName} ${person.lastName}`)

const getFullName = people => people.map(({firstName, lastName}) => `${firstName} ${lastName}`)

// const getFullName = people => people.map(person => ({...person, fullName: `${person.firstName} ${person.lastName}`}) )

console.log(getFullName(people));

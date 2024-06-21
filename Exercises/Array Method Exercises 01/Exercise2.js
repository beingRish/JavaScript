console.log('<====================> Exercise 2 <====================>');

// Who are the people that are currently older than 40?

const olderThan40 = people => people.filter(person => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 40)
console.log(olderThan40(people));
console.log('<====================> Exercise 4 <====================>');

// Get a list of people in the array ordered from youngest to oldest.

const orderedFromYoungestToOldest = people => people.sort((person1, person2) => new Date(person1.DOB).getFullYear() - new Date(person2.DOB).getFullYear())

console.log(orderedFromYoungestToOldest(people));


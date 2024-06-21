console.log('<====================> Exercise 5 <====================>');

// How many people are there in each department?

const countPeople = people => people.reduce((accumulator, person) => ({...accumulator, [person.department]: accumulator[person.department] + 1 || 1}), {});

console.log(countPeople(people));
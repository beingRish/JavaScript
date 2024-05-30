// indexOf() method and lastIndexOf()

// indexOf() method returns the first index at which a given element can be found inside array
// lastIndexOf() method returns the last index at which a given element can be found inside array


const names = ['Florin', 'Ivan', 'Liam'];

const idx = names.indexOf('Ivan')
console.log(idx);
names[idx] = 'Jay';
console.log(names);


const persons = ['Rishabh', 'Ritik', 'Rishabh', 'Bobby', 'Shashank', 'Bobby', 'Prince']
const lastIndex = persons.lastIndexOf('Bobby')
console.log(lastIndex);
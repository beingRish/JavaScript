// find() method will search inside of the array and it will return the first element for which the callback function returns a true T value.

const names = ['Florin', 'Ivan', 'Liam'];

const result = names.find(name=> name === 'Ivan')

console.log(result);

// we have an array of persons and we want to find one person from that array and then we want to return some extra information about that person.

const persons = [
    {
        name: 'Florin',
        age: 25
    },
    {
        name: 'Ivan',
        age: 20
    },
    {
        name: 'Liam',
        age: 18
    }
]

const findPersonAge = persons.find(person=> person.name === 'Ivan').age

console.log(findPersonAge);
// some() method executes a given function on the elements of the array and returns true if the callback function returns a true T value for at least one element inside of the array

const numbers = [1, 2, 3, 4, 5];

const res = numbers.some(item => {
    return item>4;
})

console.log(res);


// we have an array of objects of people and we want to check if at least one person from this array is an adult

const persons = [
    {
        name: 'Florin',
        age: 17
    },
    {
        name: 'Ivan',
        age: 15
    },
    {
        name: 'Liam',
        age: 19
    },
    {
        surname: 'Jai',
        age: 13
    }
];

let isAdult = persons.some(person=>person.age>=18)

console.log(isAdult);
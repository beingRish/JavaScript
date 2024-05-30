// every() method

// every() method executes a given function on every items of an array and returns true only if the callback function returns a truthy value for all the items inside the array, if a falsy value is found it returns false immediately.

// check if all elements of an array consist only positive number of not
const numbers = [1, 2, -3, 4, 5];

const res = numbers.every((item) => {
    return item>0;
})
console.log(res)


// test if all of the objects inside the persons array have the name property

const persons = [
    {
        name: 'Florin'
    },
    {
        name: 'Ivan'
    },
    {
        name: 'Liam'
    },
    {
        surname: 'Jai'
    }
];

const result = persons.every(person => {
    return person.name !== undefined;
});
console.log(result);


// Check if Elements of an array is array or not

const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const r = arrays.every(arr => Array.isArray(arr));

console.log(r);
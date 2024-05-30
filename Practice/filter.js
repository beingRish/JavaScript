// filter() method

// the filter() method creates a new array by removing all the elements for which the callback function returns the false value.

const numbers = [1, 2, 3, 4, 5, 6];

// filter the even numbers from the array.

const even = numbers.filter(item => {
    return item%2 === 0
});
console.log('Array with Even Numbers Element--->', even);


// Filter the person whose age is equal or above 18;
const people = [
    {
        name: 'Rishabh',
        age: 26
    },
    {
        name: 'Ritik',
        age: 18
    },
    {
        name: 'Booby',
        age: 15
    }
];

const adults = people.filter(person => person.age >= 18);
console.log("Adults====>", adults);

// Filter the duplicates Numbers from the array

const numbersWithDuplicates = [1, 2, 3, 2, 1, 4, 5, 4, 3, 2, 5, 6, 3, 5];

const nums = numbersWithDuplicates.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
})
console.log("Array without duplicates numbers---->", nums)
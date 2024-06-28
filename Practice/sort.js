// sort() method

// The sort() method sorts the elements of an array by manipulating the array.
// the default sort order is ascending. 

// Sorting the String of Arrays
const names = ['Florin', 'Liam', 'Jai', 'Ivan']
names.sort();
console.log(names); // ['Florin', 'Ivan', 'Jai', 'Liam']


// Sorting the Number of Arrays
const numbers = [75, 23, 65, 32, 76, 87, 23, 105];

numbers.sort(compareFunction);
console.log(numbers);       // [23, 23, 32, 65, 75, 76, 87, 105]

function compareFunction(a, b){
    // 1. <0..a
    // 2. 0...nothing will be changed
    // 3. >0...b comes first
    return a-b;
}


// Sorting dependent on the price.

const products = [
    {
        name: 'laptop',
        price: 1000,
    },
    {
        name: 'desktop',
        price: 1500
    },
    {
        name: 'phone',
        price: 500
    }
]

// products.sort((a,b) => {
//     return a.price - b.price;
// });

products.sort((a, b) => {
    return a.name.localeCompare(b.name)
})

console.log(products);
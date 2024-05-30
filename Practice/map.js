// map() method

// The map() method executes a given function on every element from an array and returns a new array

const num = [1,2,3,4,5];


// multiply all the elements by 2
const numberDouble = num.map(value => {
    return value*2;
});
console.log("Old Array---->", num);
console.log("New Array---->", numberDouble);



// multiply all the elements by their index
const multiplyByIndex = num.map((value, index) => {
    return value*index;
});
console.log("Array which all the elements Multiplied by their index", multiplyByIndex);


// Get Total Products Value
const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5
    },
    {
        name: 'desktop',
        price: 1500,
        count: 2
    },
    {
        name: 'phone',
        price: 500,
        count: 10
    }
]

const totalProductsValue = products.map(item=>({
    name: item.name,
    totalValue: item.price * item.count
}));
console.log('Total Products Value---->', totalProductsValue);

console.clear();

// convert an array of string numbers to an array of numbers
const arrayOfStrings = ['1', '2', '3', '4', '5'];

const arrayOfNumbers = arrayOfStrings.map(Number);
console.log("Array of Numbers----->", arrayOfNumbers);
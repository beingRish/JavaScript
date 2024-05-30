// reduce() method

// The reduce() method executes a callback function on every elements of an array and it will return one single output value

const numbers = [13, 42, 73, 74, 50];

// Add all the elements

const total = numbers.reduce(sum, 0);

function sum(accumulator, value){
    return accumulator + value;
}
console.log("Total => ", total);


// Get the maximum number from the array

const max = numbers.reduce((accumulator, value)=>{
    if(accumulator>value){
        return accumulator
    }else{
        return value
    }
})
console.log("Maximum Number = ", max)

// Get Total store Value
const store = [
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

const totalValueStore = store.reduce(
    (acc, item)=> acc + (item.price * item.count), 0
);
console.log("Total Value--->", totalValueStore)
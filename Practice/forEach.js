// forEach() method

// the forEach() method executes a given function on every elements for an array.

const numbers = [1,2,3,4,5]
let sum = 0;

numbers.forEach((item)=>{
    console.log("Items = ", item);
    sum += item;
});
console.log("Sum of the elements = ", sum);


const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];
let count = {};

letters.forEach(item => {
    console.log("Letters = ", item);
    if(count[item]){
        count[item]++;
    }else{
        count[item] = 1;
    }
});
console.log("Count of Letters ---> ", count);


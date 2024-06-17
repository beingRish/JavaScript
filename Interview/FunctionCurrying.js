// Function Currying

// When your function takes single argument at a time, then that is a function currying.


// function sum(x, y){
//     return x+y
// }

// sum(10, 20);


console.log('=================Function Currying=============');
// Currying Function
function sum(x){
    return function sum(y){
        return function sum(z){
            return x+y+z;
        }
    }
}

// or

// const sum = x => y => z => x+y+z;

console.log(sum(11)(22)(33));   // 66



console.log('=================Partial Functions=============');
// Partial Functions
function multiply(a){
    return (b, c) => {
        return a*b*c;
    }
}

console.log(multiply(2)(3, 6)); // 36



console.log('=========== Currying Function with Objects=========');
// Currying Function with Objects
let users = {
    firstName: 'Rishabh',
    lastName: 'Singh',
    city: 'Delhi'
}

console.log('===========Without Currying=========');
// without curring
function getUserDetail(data, key){
    return data[key];
}
console.log('getUserDetail: lastName --->', getUserDetail(users, 'lastName'))
console.log('getUserDetail: firstName --->', getUserDetail(users, 'firstName'))
console.log('getUserDetail: city --->', getUserDetail(users, 'city'))


console.log('===========With Currying=========');
// with currying
function getUserDetails(data){
    return key => data[key]
}
const userDetails = getUserDetails(users);

console.log('userDetails: firstName --->',('firstName'));
console.log('userDetails: lastName --->',('lastName'));




console.log('=========== Currying Function with DOM Manupulation=========');

const updateNode = id => content => document.querySelector(`#${id}`).textContent = content;

const updateHeader = updateNode("header");
updateHeader("Hello Rishabh");
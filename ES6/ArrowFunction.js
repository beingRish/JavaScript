// Arrow Function or Fat Arrow Function

// An arrow function expression is a compact alternative to a traditional function expression

// Arrow Function can't be used in all situations.

// ES5

function add(x, y){
    return x+y;
}
// console.log(add(2, 3));

// Arrow function
const Sum = (x, y) => x+y;
// console.log(Sum(10, 3));

// if we want to return object
const getUser = () => ({name: 'Rishabh', city: 'Noida'})
// console.log(getUser());




// this
function addToCart(){
    this.productName = 'Laptop';

    this.getProduct = function (){
        console.log(this);
        setTimeout(() => {
            console.log(this);
            console.log(this.productName);
        }, 1000);
    }
}
let obj = new addToCart();
// obj.getProduct();


// arguments property in ES5
function abc(){
    console.log(arguments);
}
abc(10, 20);
abc(3, 4, 6, 7);

// arguments property Does not work with ES6 

const names = ["Sam", "Daniel", "Peter"];

const result = names.map( name => name.toUpperCase());
console.log(result);

// Arrow function will not work with method of object.

const User = {
    name : 'Rishabh',
    getUser : () => {
        console.log(this);
        return `Usernme is ${this.name}`
    }
}
console.log(User.getUser());
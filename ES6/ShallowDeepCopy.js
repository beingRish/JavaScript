// Deep Copy VS Shallow Copy

// Deep Copy means After Coping the Objects, The Original Value of Objects should not be Changed.

console.log('..............Copy Object with the help of assignment(=) Operator..............');

let originalValue = {
    name: 'John',
    age: 20
}

let copiedValue = originalValue;

// If you you assignment operator (=) to copy the objects then it will do the shallow copy.
copiedValue.name = 'Peter';

console.log('originalValue====>', originalValue);   // {age: 20, name: "Peter"}
console.log('copiedValue====>', copiedValue);   // {age: 20, name: "Peter"}

console.log('..............Copy Object with the help of JSON.stringify()..............');

// JSON.stringify() is also used to copy objects.

let originalObject = {
    name: 'John',
    age: 20,
    getName: function(){
        return this.name;
    }
}

let copiedObject = JSON.parse(JSON.stringify(originalObject));

// JSON.stringify() not able to copy the function inside the object

copiedObject.name = 'Peter';

console.log('originalObject====>', originalObject); // {age: 20, getName: f(), name: John}
console.log('copiedObject====>', copiedObject);     // {age: 20, name: Peter}


// before ES6 we also use the assign() method to copy the objects. but it doesn't give you a complete Deep Copy, It provide a partial Deep Copy in JavaScript.

// Object.assign won't work effectively when you have a nested data structure.


console.log('..............Copy Object with the help of Object.assign()..............');

let originalObject2 = {
    name: 'Shylok',
    age: 30,
    getName: function(){
        return this.name;
    },
    addresss: {
        city: 'Delhi',
        country: 'India',
    }
}

let copiedObject2 = Object.assign(
    {}, originalObject2
);

copiedObject2.name = 'Cashino';
copiedObject2.addresss.city = 'Pune';

console.log('originalObject2===>', originalObject2);    // {addresss: {city: 'Pune', country: 'India'}, age: 30, getName: ƒ (), name: "Shylok"}

console.log('copiedObject2===>', copiedObject2);    // {addresss: {city: 'Pune', country: 'India'}, age: 30, getName: ƒ (), name: "Cashino"}

// Copy Object with the help of SPREAD(...) Operator
console.log('..............Copy Object with the help of SPREAD(...) Operator..............');


let originalObject3 = {
    name: 'Danial',
    age: 30,
    getName: function(){
        return this.name;
    },
    addresss: {
        city: 'Newyork',
        country: 'US',
    }
}

let copiedObject3 = {...originalObject3};

// copiedObject3.name = 'Bob';
// copiedObject3.addresss.city = 'Francisco';


copiedObject3 = {
    ...copiedObject3,
    name: 'Bob',
    addresss: {
        ...copiedObject3.addresss,
        city: 'Francisco'
    }
}

console.log('originalObject3===>', originalObject3);    // {name: 'Danial', age: 30, addresss: {city: "Francisco", country: "US"}, getName: ƒ}

console.log('copiedObject3===>', copiedObject3);    // {name: 'Bob', age: 30, addresss: {city: "Francisco", country: "US"}, getName: ƒ}
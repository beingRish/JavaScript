// Deep Copy VS Shallow Copy

// Deep Copy means After Coping the Objects, The Original Value of Objects should not be Changed.

let originalValue = {
    name: 'John',
    age: 20
}

let copiedValue = originalValue;

console.log('originalValue====>', originalValue);
console.log('copiedValue====>', copiedValue);

// If you you assignment operator (=) to copy the objects then it will do the shallow copy.
copiedValue.name = 'Peter';

console.log('originalValue====>', originalValue);
console.log('copiedValue====>', copiedValue);

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

console.log('originalObject====>', originalObject);
console.log('copiedObject====>', copiedObject);


// before ES6 we also use the assign() method to copy the objects.

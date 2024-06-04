// Mutable and Immutable

// If the value can change, the object is called mutable, 
//while if the value cannot change, the object is called immutable.

// All primitive types are Immutable like string, numbers, boolean, symbol, null, undefined

// Reference types are Array and objects, that are Mutable.

// Immutable Example
let x = 20;
let y = x;

y = y+1;
console.log(x); // 20
console.log(y); // 21

// Mutable Example
let a = ['value1', 'value2'];

// let b = a;     
// b.pop();
// console.log(a);     // ['value1']
// console.log(b);     // ['value1'] 
  
//Instead of giving the value directly, you can use concate() method or spread operator (...) to make array immutable 
// let b = a.concat();
let b = [...a];           // it will give new location to your 'b' variable
b.pop();
console.log(a);        // ['value1', 'value2']
console.log(b);        // ['value1'] 


let c = {
    name : 'John',
    city : 'Delhi'
}

// let d = c;
// d.age = 20;
// console.log(c);     //  {name: 'John', city: 'Delhi', age: 20}
// console.log(d);     //  {name: 'John', city: 'Delhi', age: 20}


// Instead of giving the value directly, you can use assign() method and spread operator {...} to make array immutable 
// let d = Object.assign({}, c)
let d = {...c};
d.age = 20;

console.log(c);     // {name: 'John', city: 'Delhi'}
console.log(d);     // {name: 'John', city: 'Delhi', age: 20}


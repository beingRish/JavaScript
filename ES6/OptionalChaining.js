// Optional Chaining

// The Optional Chaning ?. is a safe way to access nested object properties, even if an intermediate properties, even if an intermediate property doesn't exist.

// The Optionnal Chaining ?. stops the evaluation if thee value before ?. is undefined or null and returns undefined.



const user = {
    name: 'Rishabh',
    // address: {
    //     city: 'Patna'
    // }
}

console.log(user.address);          // undefined
console.log(user.address?.city);    // undefined
console.log(user.getName?.());      // undefined
console.log(user.email?.[key]);     // undefined
// Write a JavaScript program to compare two objects to determine if the first one contains the same properties as the second one (which may also have additional properties).

console.log('<====================> Exercise 2 <====================>');

const firstObj = {name : 'Rishabh', age: 25, work: 'Software Developer'}

const secondObj = {name : 'Ritik', age : 24, work: 'Student'}

const thirdObj = {name : 'Shashank', age : 26, isChubby: true}

const isSameProperties = (obj1, obj2) => Object.keys(obj1).every(key => obj2[key]);

console.log(isSameProperties(firstObj, secondObj));
console.log(isSameProperties(firstObj, thirdObj));
console.log(isSameProperties(secondObj, thirdObj));
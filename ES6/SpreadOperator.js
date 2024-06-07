// Spread Operator (...)

// Spread Operator is introduced in ES6 and its syntax is quiet simple, 3 dots followed by Iterable/Array

// Spread Operator can be used in Array, Objects and Functions.

const users = ['user1', 'user2'];
console.log(...users);


// Spread operator with Arrays

console.log('-----------------spread with Array-----------------');
const team1 = ['user1', 'user2'];
const team2 = ['user3'];

// for 2 array you can use concat() method to concat the arrays
const newTeam = team1.concat(team2);
console.log(newTeam);               // ['user1', 'user2', 'user3']


// for more than 2 array you can use spread operator (...) to concat the arrays
const myTeam = [...team1, ...team2];
console.log(myTeam);                // ['user1', 'user2', 'user3']


// Where concat() is good and where spread (...) operator is good
const newTeamMember = "newTeamMember";
console.log(team1.concat(newTeamMember));   //['user1', 'user2', 'newTeamMember'] ---> here good to use concat() method
console.log([...team1, ...newTeamMember]);  // ['user1', 'user2', 'n', 'e', 'w', 'T', 'e', 'a', 'm', 'M', 'e', 'm', 'b', 'e', 'r'] ---> bad to use spread(...) operator




// Copying Array 
console.log('.....Copying Array.....');
const productList1 = ['phone1', 'adapter'];
const newProduct = [...productList1];

console.log('productList1--->', productList1);      // ['phone1', 'adapter']
console.log('newProduct--->', newProduct);          // ['phone1', 'adapter']

// adding new product in the newProdct Array
newProduct.push('Camera');

console.log('productList1--->', productList1);      // ['phone1', 'adapter']
console.log('newProduct--->', newProduct);          // ['phone1', 'adapter', 'Camera']



// Spread operator with Objects

console.log('-----------------spread with Objects-----------------');

const emp = {
    name: 'John',
    job: 'developer'
};

console.log('.....Object.....');
console.log('Object====>', emp);

// If you want to create a new object from another object.

console.log('.....without spread operator.....');
const clonedEmployee1 = emp;
clonedEmployee1.name = 'Rishabh';

console.log('emp====>', emp);                           // {name: 'John', job: 'developer'}
console.log('clonedEmployee1====>', clonedEmployee1);     // {name: 'Rishabh', job: 'developer'}



console.log('.....with spread operator.....');
const clonedEmployee2 = {...emp};
clonedEmployee2.name = 'Ritik';

console.log('emp====>', emp);                           // {name: 'John', job: 'developer'}
console.log('clonedEmployee2====>', clonedEmployee2);     // {name: 'Rishabh', job: 'developer'}


// If you want to merge multiple objects and create a new object, there you can also use merge operator.

console.log('.....Merge two objects in a new object with spread operator.....');
const student = {
    name: 'Arnav',
    class: '3rd'
}
console.log('student====>', student);

const personalDetails = {
    age: 10,
}
console.log('personalDetails====>', personalDetails);

const studentDetails = {...student, ...personalDetails}
console.log('Merged Object : studentDetails===>', studentDetails);




// Spread operator in function calls

console.log('-----------------spread with function calls-----------------');

console.log(Math.min(10, 5, 30, 3, 90));    // 3

const scoreList = [100, 40, 200, 89];

console.log(Math.min(scoreList));           // NaN
console.log(Math.min(...scoreList));           // 40
console.log(Math.max(...scoreList));           // 200

// Before ES6
console.log(Math.min.apply(null, scoreList));   // 40


// Immutablility with spread operator

console.log('-----------------Immutablility with spread operator-----------------');

// console.log('.......When todos is mutable......');
// const todos = [
//     {task: 'reading', completed: true},
//     {task: 'painting', completed: false}
// ]

// console.log('todo====>', todos);

// function addToDo(newToDO){
//     todos.push(newToDO);
// }

// const newList = addToDo(
//     {task: 'recording', completed: false},
// )
// console.log('todo after addming new task====>', todos);


console.log('.......todos should be imutable......');

const todos = [
    {task: 'reading', completed: true},
    {task: 'painting', completed: false}
]

function addToDo(newToDO){
    return [
        ...todos, 
        {...newToDO}
    ];
}

const newList = addToDo(
    {task: 'recording', completed: false},
)

console.log('todo====>', todos);
console.log('newList', newList);
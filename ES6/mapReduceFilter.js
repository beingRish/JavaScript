                        //  map

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// It does not change the Original Array.

console.log('========== map method =========');

const users = ['sam', 'peter', 'daniel'];

const modifiedUsers = users.map(e => e.toUpperCase());

console.log('users====>', users);
console.log('modifiedUsers =====>', modifiedUsers);


// map with the Array of object
const users2 = [
    {id: 101, name: 'Rishabh'},
    {id: 102, name: 'Ritik'},
    {id: 103, name: 'Vishwjeet'},
    {id: 104, name: 'Shashank'},
]
console.log('users2====>', users2)

const users_list = users2.map(user => user.name);
console.log('users_list====>', users_list)

// forEach instead of map

const result = [];
users2.forEach(user => {
    result.push(user.name);
})
console.log('result====>', result)


                        // filter

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// It does not change the Original Array.

console.log('========== filter method =========');

const employees = [
    {id: 101, name: 'Rishabh', profile: 'Senior Developer'},
    {id: 102, name: 'Ritik', profile: 'Junior Developer'},
    {id: 103, name: 'Vishwjeet', profile: 'Senior Developer'},
    {id: 104, name: 'Suryanshu', profile: 'Junior Developer'},
    {id: 105, name: 'Shashank', profile: 'Senior Developer'},
]

const experiencedEmployee = employees.filter(employee => employee.profile === 'Senior Developer')
console.log('experiencedEmployee====>', experiencedEmployee);



                        // reduce

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// It does not change the Original Array.

console.log('========== reduce method =========');

const score = [100, 200, 40, 10]

// without reduce

function calculate(score) {
    let sum = 0;

    for(let i = 0; i< score.length; i++){
        sum = sum + score[i];
    }

    return sum;
}

console.log(calculate(score));

// with reduce mthod

let totalScore = score.reduce((acc, value) => acc + value, 0)

console.log('Reduce Method : totalScore====>', totalScore)


// ================== Combine all the three Methods ==============

console.log('========== Combine all the three Methods =========');

const employees2 = [
    {id: 101, name: 'Rishabh', profile: 'Senior Developer', rating1: 5, rating2: 10},
    {id: 102, name: 'Ritik', profile: 'Junior Developer', rating1: 5, rating2: 10},
    {id: 103, name: 'Vishwjeet', profile: 'Senior Developer', rating1: 5, rating2: 10},
    {id: 104, name: 'Suryanshu', profile: 'Junior Developer', rating1: 5, rating2: 10},
    {id: 105, name: 'Shashank', profile: 'Senior Developer', rating1: 5, rating2: 10},
]

// calculate the total rating of Each Serior Developer

const seniorDevelopersTotalRatingScore = employees2.filter(emp => emp.profile === 'Senior Developer').map(emp => emp.rating1 + emp.rating2).reduce((acc, score) => acc + score, 0)


console.log('seniorDevelopersTotalRatingScore====>', seniorDevelopersTotalRatingScore);
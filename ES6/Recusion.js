// Recursion

// Recursion is a process of calling itself.

// A function that calls itself is called a recursive function.

// function test(){
//     test();
// }

// test();

// Every Recursive Function must have One exit condition is also known as Base Case

// The base case is what stops the recursion from continuing on forever

// It act like a terminating condition

function countDown(n){
    for(var i=n; i>0; i--){
        console.log(i);
    }
}

// countDown(3)

// recursion

function recursiveCountDown(n){
    if(n === 0)
        return ;

    console.log(n);
    recursiveCountDown(n-1)
}

recursiveCountDown(3);

// Another Example :- Calculate Addition till the n

function calculateTotal(n){
    let total = 0;
    for(let i=0; i<=n; i++){
        total += i;
    }
    return total
}
console.log(calculateTotal(3));


// Recursive
function calculateTotalRecursion(n, total=0){
    // base case
    if(n === 0)
        return total;
        return calculateTotalRecursion(n-1, total+=n);

}

console.log(calculateTotalRecursion(3));



console.log('========================Example===================');

const teamStructure = {
    name: 'Kunal',
    teams: [
        {
            name: 'Harish',
            teams: [
                {
                    name: 'Alisha',
                    teams: [
                        {
                            name: 'Yash',
                            teams: []
                        }
                    ],
                }
            ],
        },
        {
            name: 'Anurag',
            teams: [],
        }
    ]
}

function getTeamDetail(t){

    // base case
    // console.log('Team....', t);
    if(t.teams.length === 0)
        return;

    t.teams.forEach(team => {
        console.log(team.name);
        getTeamDetail(team);
    });
}

getTeamDetail(teamStructure);